import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const FAQS = [
  {
    q: 'Do I need previous TikTok Shop experience?',
    a: 'No. Many clients start with no prior experience on the platform. We guide you through setup, listing structure and store operations, explaining decisions along the way rather than assuming prior knowledge.',
  },
  {
    q: 'Which countries and markets do you support?',
    a: 'We work with entrepreneurs and brands across a range of TikTok Shop-eligible markets. Availability and requirements vary by region, so we confirm your specific market during the initial consultation.',
  },
  {
    q: 'How much starting capital may be required?',
    a: 'This depends on your chosen model, product category and advertising plans. Private label and wholesale paths carry different cost profiles, which we outline clearly before you commit to either direction.',
  },
  {
    q: 'Will I retain ownership of my store and accounts?',
    a: 'Yes. Your TikTok Shop, associated accounts and brand remain yours. TRENVO operates as a service provider supporting your store, not as an owner of your business assets.',
  },
  {
    q: 'What information is needed to begin?',
    a: 'We typically start with details about your product or product ideas, target market, available budget, and current store status (if you already have one). The consultation form below covers the essentials.',
  },
  {
    q: 'How will performance and progress be reported?',
    a: 'You receive regular, practical updates covering what has been done, current store and campaign performance, and the next planned actions, communicated in plain terms rather than jargon.',
  },
  {
    q: 'Can TRENVO help an existing TikTok Shop?',
    a: 'Yes. We support both new launches and existing stores that need improved listings, better-organized operations, creator outreach or more structured advertising management.',
  },
  {
    q: 'Does TRENVO guarantee sales or income?',
    a: 'No. Results vary by product, market conditions, budget, execution and other factors outside our control. TRENVO does not guarantee any specific revenue, profit or sales outcome, and any provider who promises guaranteed results on TikTok Shop should be treated with caution.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useReveal();

  return (
    <section id="faq" className="bg-midnight py-20 sm:py-28">
      <div className="container-xl grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div ref={ref} className="reveal">
          <span className="text-sm font-medium text-teal">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Common Questions
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            If your question isn't covered here, it's a good starting point for your free
            consultation.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-soft">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-teal transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
