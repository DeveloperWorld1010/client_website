import { ui } from '@/lib/ui';

export default function PageHero({ path, eyebrow, title, children }) {
  return (
    <section className={ui.pageHero}>
      <div className={ui.container}>
        <div className={ui.breadcrumb}>{path}</div>
        <div className={ui.eyebrow}>{eyebrow}</div>
        <h1 className={ui.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
}
