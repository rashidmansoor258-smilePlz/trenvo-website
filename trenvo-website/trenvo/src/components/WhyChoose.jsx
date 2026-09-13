import { Check, Activity } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { verifiedStats } from '../data/config';

const POINTS = [
  'Dedicated Strategy and Operations Support',
  'Clear, Actionable Performance Updates',
  'Product and Competitor Research',
  'Compliance-Conscious Store Management',
  'Creator and Affiliate Outreach',
  'No Conflicts with Client-Owned Brands',
];

// Dashboard mockup values below are illustrative interface content, not
// performance claims. Once verifiedStats in src/data/config.js is populated,
// wire real figures in here instead of the placeholder bars.
const MOCK_BARS = [55, 70, 48, 82, 64, 90, 76];

export default function WhyChoose() {
  const ref = useReveal();
  const hasStats = Object.keys(verifiedStats).length > 0;

  return (
    <section className="bg-deepblue/30 py-20 sm:py-28">
      <div className="container-xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <div ref={ref} className="reveal">
          <span className="text-sm font-medium text-teal">Why TRENVO</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            A Practical Advantage for Your TikTok Shop
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15">
                  <Check className="h-3.5 w-3.5 text-teal" />
                </span>
                <span className="text-sm leading-relaxed text-muted">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-3xl p-6 shadow-card sm:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-teal" />
              <span className="font-display text-sm font-semibold text-soft">
                Store Performance Overview
              </span>
            </div>
            <span className="rounded-full bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
              Live view
            </span>
          </div>

          <div className="mt-6 flex items-end justify-between gap-2 border-b border-white/10 pb-4">
            {MOCK_BARS.map((h, i) => (
              <div
                key={i}
                className="w-full rounded-t-md bg-gradient-to-t from-teal/30 to-amber/60"
                style={{ height: `${h}px` }}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {hasStats ? (
              Object.values(verifiedStats).map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 p-4">
                  <div className="font-display text-2xl font-bold text-soft">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))
            ) : (
              <>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="font-display text-2xl font-bold text-soft">Weekly</div>
                  <div className="mt-1 text-xs text-muted">Reporting cadence</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="font-display text-2xl font-bold text-soft">Ongoing</div>
                  <div className="mt-1 text-xs text-muted">Listing optimization</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
