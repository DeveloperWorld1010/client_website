'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { button } from '@/lib/ui';

const initial = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: 'Not sure yet',
  message: '',
  website: '',
};

const fieldClass = 'w-full rounded-[14px] border border-line bg-ink-850 px-[14px] py-[13px] text-white outline-none transition placeholder:text-[#597086] focus:border-brand/45 focus:ring-4 focus:ring-brand/[.07]';
const labelClass = 'text-sm font-bold text-[#dbe7f2]';
const services = [
  'Choose a service',
  'Laravel development',
  'Bug fix / maintenance',
  'REST API',
  'Filament / SaaS',
  'Payment / integration',
  'Deployment / server issue',
  'Agency overflow support',
  'Other',
];
const budgets = ['Not sure yet', 'Under ₹5,000', '₹5,000 – ₹15,000', '₹15,000 – ₹50,000', '₹50,000+', 'Monthly support'];

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState({ status: 'idle', message: '' });

  const update = (event) => setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (state.status === 'sending') return;

    if (!form.service) {
      setState({ status: 'error', message: 'Please choose a service.' });
      return;
    }

    setState({ status: 'sending', message: '' });

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      window.clearTimeout(timeout);

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'Could not send your enquiry.');

      setForm(initial);
      setState({ status: 'success', message: data.message || 'Thanks — your project enquiry has been sent successfully.' });
    } catch (error) {
      const message = error?.name === 'AbortError'
        ? 'The request took too long. Please check your connection and try again.'
        : error?.message || 'Something went wrong. Please try again.';
      setState({ status: 'error', message });
    }
  }

  return (
    <form onSubmit={submit} noValidate={false}>
      <div className="pointer-events-none absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label>Website <input name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" /></label>
      </div>

      <div className="grid grid-cols-2 gap-3.5 max-[650px]:grid-cols-1">
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="name">Your name</label>
          <input className={fieldClass} id="name" name="name" value={form.name} onChange={update} maxLength={80} required placeholder="Name" autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="email">Email</label>
          <input className={fieldClass} id="email" name="email" value={form.email} onChange={update} type="email" maxLength={120} required placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="company">Company / project</label>
          <input className={fieldClass} id="company" name="company" value={form.company} onChange={update} maxLength={120} placeholder="Optional" autoComplete="organization" />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="service">What do you need?</label>
          <SelectField
            id="service"
            name="service"
            value={form.service}
            placeholder="Choose a service"
            options={services}
            onChange={(value) => setForm((previous) => ({ ...previous, service: value }))}
          />
        </div>
        <div className="col-span-2 grid gap-2 max-[650px]:col-span-1">
          <label className={labelClass} htmlFor="budget">Approximate budget</label>
          <SelectField
            id="budget"
            name="budget"
            value={form.budget}
            options={budgets}
            onChange={(value) => setForm((previous) => ({ ...previous, budget: value }))}
          />
        </div>
        <div className="col-span-2 grid gap-2 max-[650px]:col-span-1">
          <label className={labelClass} htmlFor="message">Project details</label>
          <textarea className={`${fieldClass} min-h-[145px] resize-y`} id="message" name="message" value={form.message} onChange={update} maxLength={4000} minLength={10} required placeholder="What is broken, what do you want built, or what does your current system need?" />
        </div>
        <div className="col-span-2 grid gap-2 max-[650px]:col-span-1">
          <button className={`${button.primary} w-full sm:w-max`} type="submit" disabled={state.status === 'sending'}>
            {state.status === 'sending' ? 'Sending…' : 'Send project enquiry →'}
          </button>
          <div className="text-xs leading-6 text-muted">Your enquiry is submitted securely to a Next.js server route and delivered to the configured contact email.</div>
          {state.message && (
            <div
              className={`mt-1 rounded-xl border px-3.5 py-3 text-sm ${state.status === 'success' ? 'border-success/20 bg-success/[.08] text-[#caffdf]' : 'border-danger/20 bg-danger/[.08] text-[#ffd1d9]'}`}
              role="status"
              aria-live="polite"
            >
              {state.message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

function SelectField({ id, name, value, placeholder, options, onChange }) {
  const [open, setOpen] = useState(false);
  const listboxId = useId();
  const rootRef = useRef(null);
  const selectedLabel = value || placeholder || options[0];

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const choose = (option) => {
    onChange(option === placeholder ? '' : option);
    setOpen(false);
  };

  return (
    <div className="relative" ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        className={`${fieldClass} flex items-center justify-between gap-3 text-left ${value ? '' : 'text-[#7389a0]'}`}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="min-w-0 truncate">{selectedLabel}</span>
        <span className={`shrink-0 text-lg leading-none text-[#dbe7f2] transition ${open ? 'rotate-180' : ''}`} aria-hidden="true">⌄</span>
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-40 max-h-[240px] overflow-y-auto rounded-[14px] border border-brand/20 bg-[#091726] p-1.5 shadow-[0_18px_44px_rgba(0,0,0,.34)]"
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
        >
          {options.map((option) => {
            const optionValue = option === placeholder ? '' : option;
            const active = optionValue === value;

            return (
              <button
                className={`block w-full rounded-[10px] px-3 py-2.5 text-left text-sm transition hover:bg-brand/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25 ${active ? 'bg-brand/15 text-white' : 'text-[#dbe7f2]'}`}
                key={option}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => choose(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
