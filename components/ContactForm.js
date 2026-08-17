'use client';

import { useState } from 'react';

const initial = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: 'Not sure yet',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState({ status: 'idle', message: '' });

  const update = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (state.status === 'sending') return;
    setState({ status: 'sending', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'Could not send your enquiry.');

      setForm(initial);
      setState({ status: 'success', message: 'Thanks — your project enquiry has been sent successfully.' });
    } catch (error) {
      setState({ status: 'error', message: error.message || 'Something went wrong. Please try again.' });
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="hp" aria-hidden="true">
        <label>Website <input name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" /></label>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={update} maxLength={80} required placeholder="Name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={form.email} onChange={update} type="email" maxLength={120} required placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="company">Company / project</label>
          <input id="company" name="company" value={form.company} onChange={update} maxLength={120} placeholder="Optional" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" value={form.service} onChange={update} required>
            <option value="">Choose a service</option>
            <option>Laravel development</option>
            <option>Bug fix / maintenance</option>
            <option>REST API</option>
            <option>Filament / SaaS</option>
            <option>Payment / integration</option>
            <option>Deployment / server issue</option>
            <option>Agency overflow support</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="budget">Approximate budget</label>
          <select id="budget" name="budget" value={form.budget} onChange={update}>
            <option>Not sure yet</option>
            <option>Under ₹5,000</option>
            <option>₹5,000 – ₹15,000</option>
            <option>₹15,000 – ₹50,000</option>
            <option>₹50,000+</option>
            <option>Monthly support</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Project details</label>
          <textarea id="message" name="message" value={form.message} onChange={update} maxLength={4000} required placeholder="What is broken, what do you want built, or what does your current system need?" />
        </div>
        <div className="field full">
          <button className="btn btn-primary" type="submit" disabled={state.status === 'sending'}>
            {state.status === 'sending' ? 'Sending…' : 'Send project enquiry →'}
          </button>
          <div className="form-note">Your enquiry is submitted securely to a Next.js server route and delivered to the configured contact email.</div>
          {state.message && (
            <div className={`form-status show ${state.status === 'success' ? 'success' : 'error'}`} role="status" aria-live="polite">
              {state.message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
