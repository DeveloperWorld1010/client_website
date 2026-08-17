import { NextResponse } from 'next/server';

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
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

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'CodeBheem-Website/2.0',
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        html,
        text,
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error('Resend network error:', error);
    return json('Email service is temporarily unavailable. Please try again.', 502);
  }

  if (!resendResponse.ok) {
    const providerError = await resendResponse.text().catch(() => '');
    console.error('Resend rejected contact email:', resendResponse.status, providerError);
    return json('Could not send your enquiry right now. Please try again.', 502);
  }

  return NextResponse.json({ ok: true, message: 'Enquiry sent.' });
}
