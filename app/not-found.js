import Link from 'next/link';
import { button, ui } from '@/lib/ui';

export default function NotFound() {
  return (
    <section className={ui.pageHero}>
      <div className={ui.container}>
        <div className={ui.eyebrow}>404</div>
        <h1 className={ui.title}>This page took a wrong route.</h1>
        <p className={`${ui.lead} mx-auto`}>The page you requested does not exist or has moved.</p>
        <div className="mt-6"><Link className={button.primary} href="/">Back to home →</Link></div>
      </div>
    </section>
  );
}
