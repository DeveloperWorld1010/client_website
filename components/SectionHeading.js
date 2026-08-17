import { ui } from '@/lib/ui';

export default function SectionHeading({ eyebrow, title, children, centered = false, small = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && <div className={`${ui.eyebrow} reveal`}>{eyebrow}</div>}
      <h2 className={`${small ? ui.titleSm : ui.title} reveal ${centered ? 'mx-auto' : ''}`}>{title}</h2>
      {children && <div className={`${centered ? 'mx-auto' : ''} reveal`}>{children}</div>}
    </div>
  );
}
