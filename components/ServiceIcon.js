const paths = {
  laravel: <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  support: <><path d="M9 9h6v6H9zM12 5V3m0 18v-2M5 12H3m18 0h-2M6.5 6.5 5 5m14 14-1.5-1.5M17.5 6.5 19 5M5 19l1.5-1.5M7 9a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></>,
  api: <path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  saas: <path d="m12 3 9 5-9 5-9-5 9-5Zm9 10-9 5-9-5m18 5-9 5-9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  integrations: <><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M3 10h18M7 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  deployment: <><rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8"/><rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 7h.01M8 17h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></>,
};

export default function ServiceIcon({ type }) {
  return <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[type]}</svg></div>;
}
