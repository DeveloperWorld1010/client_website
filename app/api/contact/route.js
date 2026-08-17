import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 6;
const MAX_BODY_BYTES = 20_000;

function clean(value, max) {
  return String(value ?? '').trim().slice(0, max);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 120;
}

function smtpConfig() {
  const host = clean(process.env.SMTP_HOST, 120);
  const user = clean(process.env.SMTP_USER, 200);
  const pass = clean(process.env.SMTP_PASS, 200);
  const port = Number(process.env.SMTP_PORT || 465);

  if (!host || !user || !pass) return null;

  return {
    host,
    port,
    secure: String(process.env.SMTP_SECURE ?? 'true') !== 'false',
    auth: { user, pass },
  };
}

function rateLimited(ip) {
  const now = Date.now();
  const current = attempts.get(ip);

  if (!current || now - current.startedAt > WINDOW_MS) {
    attempts.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  current.count += 1;
  attempts.set(ip, current);
  return current.count > MAX_ATTEMPTS;
}

function json(message, status) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) return json('Unsupported request format.', 415);

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) return json('Request is too large.', 413);

  const ip = (request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown')
    .split(',')[0]
    .trim();
  if (rateLimited(ip)) return json('Too many attempts. Please wait a few minutes and try again.', 429);

  let raw;
  try {
    raw = await request.json();
  } catch {
    return json('Invalid request.', 400);
  }

  if (clean(raw.website, 200)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(raw.name, 80),
    email: clean(raw.email, 120).toLowerCase(),
    company: clean(raw.company, 120),
    service: clean(raw.service, 100),
    budget: clean(raw.budget, 80),
    message: clean(raw.message, 4000),
  };

  if (!data.name || !validEmail(data.email) || !data.service || data.message.length < 10) {
    return json('Please complete your name, valid email, service and project details.', 422);
  }

  const to = process.env.CONTACT_TO_EMAIL;

  if (!to) {
    console.error('Contact form environment variables are missing.');
    return json('Contact form is not configured yet. Please try again later.', 503);
  }

  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]));
  const subject = `CodeBheem enquiry: ${data.service} — ${data.name}`.slice(0, 180);
  const text = [
    'New CodeBheem project enquiry',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company / project: ${data.company || 'Not provided'}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget || 'Not provided'}`,
    '',
    'Project details:',
    data.message,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#172033">
      <h2 style="margin-bottom:8px">New CodeBheem project enquiry</h2>
      <p style="color:#667085;margin-top:0">Submitted from the CodeBheem website.</p>
      <table style="width:100%;border-collapse:collapse;margin:24px 0">
        <tr><td style="padding:9px;border-bottom:1px solid #e8ecf2"><strong>Name</strong></td><td style="padding:9px;border-bottom:1px solid #e8ecf2">${safe.name}</td></tr>
        <tr><td style="padding:9px;border-bottom:1px solid #e8ecf2"><strong>Email</strong></td><td style="padding:9px;border-bottom:1px solid #e8ecf2">${safe.email}</td></tr>
        <tr><td style="padding:9px;border-bottom:1px solid #e8ecf2"><strong>Company / project</strong></td><td style="padding:9px;border-bottom:1px solid #e8ecf2">${safe.company || 'Not provided'}</td></tr>
        <tr><td style="padding:9px;border-bottom:1px solid #e8ecf2"><strong>Service</strong></td><td style="padding:9px;border-bottom:1px solid #e8ecf2">${safe.service}</td></tr>
        <tr><td style="padding:9px;border-bottom:1px solid #e8ecf2"><strong>Budget</strong></td><td style="padding:9px;border-bottom:1px solid #e8ecf2">${safe.budget || 'Not provided'}</td></tr>
      </table>
      <h3>Project details</h3>
      <div style="white-space:pre-wrap;background:#f7f9fc;border:1px solid #e8ecf2;border-radius:12px;padding:16px">${safe.message}</div>
      <p style="margin-top:24px;color:#667085;font-size:13px">Reply directly to this email to respond to ${safe.name}.</p>
    </div>`;

  const smtp = smtpConfig();
  if (!smtp) {
    console.error('Contact form SMTP environment variables are missing.');
    return json('Contact form is not configured yet. Please try again later.', 503);
  }

  try {
    const transporter = nodemailer.createTransport(smtp);
    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || `CodeBheem <${smtp.auth.user}>`,
      to,
      envelope: {
        from: smtp.auth.user,
        to,
      },
      replyTo: data.email,
      subject,
      html,
      text,
    });

    console.info('SMTP email accepted:', JSON.stringify({
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    }));

    return NextResponse.json({ ok: true, message: 'Enquiry sent.' });
  } catch (error) {
    console.error('SMTP email error:', error);
    return json('Email service is temporarily unavailable. Please try again.', 502);
  }
}
