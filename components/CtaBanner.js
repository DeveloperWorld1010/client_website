import Link from 'next/link';
import { button, ui } from '@/lib/ui';

export default function CtaBanner({ eyebrow, title, text, href = '/contact', label = 'Start a conversation →' }) {
  return (
    <div className={`${ui.cta} reveal`}>
      <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative z-10">
        <div className={ui.eyebrow}>{eyebrow}</div>
        <h2 className={ui.titleSm}>{title}</h2>
        <p className={ui.lead}>{text}</p>
        <div className="mt-[22px]">
          <Link className={button.primary} href={href}>{label}</Link>
        </div>
      </div>
    </div>
  );
}
