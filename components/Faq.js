'use client';

import { useState } from 'react';

export default function Faq({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="mx-auto grid max-w-[900px] gap-3">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div className="reveal overflow-hidden rounded-[17px] border border-line bg-white/[.022]" key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-5 bg-transparent px-5 py-[18px] text-left font-extrabold text-white transition hover:bg-white/[.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand/10"
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? null : index)}
            >
              <span>{item.q}</span>
              <span className={`text-xl text-brand transition-transform duration-300 ${active ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-[19px] leading-[1.65] text-muted">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
