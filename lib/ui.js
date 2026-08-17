export const ui = {
  container: 'mx-auto w-[min(1180px,calc(100%_-_36px))] max-[650px]:w-[min(1180px,calc(100%_-_24px))]',
  section: 'relative py-[92px] max-[650px]:py-[66px]',
  sectionSm: 'relative py-14 max-[650px]:py-12',
  pageHero: 'px-0 pb-11 pt-[76px] text-center max-[650px]:pt-14',
  breadcrumb: 'mb-3.5 text-[.88rem] text-[#91a6bb]',
  eyebrow: 'text-[.78rem] font-extrabold uppercase tracking-[.13em] text-brand',
  title: 'my-[14px] text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1.02] tracking-[-.045em]',
  titleSm: 'my-[10px_14px] text-[clamp(1.55rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-.035em]',
  lead: 'max-w-[760px] text-[clamp(1rem,1.6vw,1.18rem)] leading-[1.75] text-muted',
  gradientText: 'bg-gradient-to-r from-white via-brand to-[#b6aeff] bg-clip-text text-transparent',
  card: 'rounded-[22px] border border-line bg-white/[.028] p-6 shadow-[0_16px_45px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white/[.04]',
  panel: 'rounded-3xl border border-line bg-white/[.026] p-7',
  buttonBase: 'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[14px] border px-[18px] font-extrabold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/15 disabled:pointer-events-none disabled:opacity-60',
  buttonPrimary: 'border-transparent bg-gradient-to-br from-brand via-[#6ed0ff] to-[#9a8fff] text-ink-950 shadow-[0_14px_34px_rgba(83,227,255,.2)] hover:shadow-[0_18px_42px_rgba(83,227,255,.25)]',
  buttonGhost: 'border-line bg-white/[.035] text-white hover:border-brand/25 hover:bg-white/[.055]',
  tag: 'inline-flex rounded-full border border-white/[.08] bg-white/[.035] px-[10px] py-[6px] text-[.75rem] font-bold text-[#9fb2c5]',
  cta: 'relative overflow-hidden rounded-[28px] border border-brand/20 bg-[linear-gradient(135deg,rgba(83,227,255,.08),rgba(138,125,255,.09)_55%,rgba(255,255,255,.025))] p-9 shadow-soft max-[650px]:p-6',
};

export const button = {
  primary: `${ui.buttonBase} ${ui.buttonPrimary}`,
  ghost: `${ui.buttonBase} ${ui.buttonGhost}`,
  primarySm: `${ui.buttonBase} ${ui.buttonPrimary} min-h-10 rounded-xl px-3.5 text-sm`,
  ghostSm: `${ui.buttonBase} ${ui.buttonGhost} min-h-10 rounded-xl px-3.5 text-sm`,
};
