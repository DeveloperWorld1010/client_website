import Link from 'next/link';

export default function NotFound() {
  return <section className="page-hero"><div className="container"><div className="eyebrow">404</div><h1 className="title">This page took a wrong route.</h1><p className="lead">The page you requested does not exist or has moved.</p><div style={{marginTop:24}}><Link className="btn btn-primary" href="/">Back to home →</Link></div></div></section>;
}
