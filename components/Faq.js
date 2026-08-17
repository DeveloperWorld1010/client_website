'use client';

import { useState } from 'react';

export default function Faq({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq">
      {items.map((item, index) => (
        <div className={`faq-item reveal${open === index ? ' open' : ''}`} key={item.q}>
          <button className="faq-q" type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
            <span>{item.q}</span><span>+</span>
          </button>
          <div className="faq-a"><div>{item.a}</div></div>
        </div>
      ))}
    </div>
  );
}
