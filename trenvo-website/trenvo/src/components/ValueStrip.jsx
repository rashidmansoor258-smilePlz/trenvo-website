import { Layers, LineChart, Globe2, ClipboardCheck } from 'lucide-react';

const VALUES = [
  {
    icon: Layers,
    title: 'End-to-End Management',
    description: 'From first setup through daily operations, one team handles the full lifecycle of your store.',
  },
  {
    icon: LineChart,
    title: 'Data-Led Growth Strategy',
    description: 'Decisions are guided by store performance data, not guesswork or generic playbooks.',
  },
  {
    icon: Globe2,
    title: 'International Client Support',
    description: 'We work with entrepreneurs and brands across multiple regions and time zones.',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear Performance Reporting',
    description: 'Regular, straightforward updates on what has been done and what comes next.',
  },
];

const PLATFORMS = [
  'TikTok Shop',
  'Shopify',
  'Amazon',
  'Walmart',
  'Meta Ads',
  'TikTok for Business',
];

export default function ValueStrip() {
  return (
    <section className="border-y border-white/5 bg-deepblue/40 py-16 sm:py-20">
      <div className="container-xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex rounded-xl bg-teal/10 p-2.5">
                <Icon className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-soft">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/5 pt-10">
          <p className="text-center text-sm font-medium text-muted/70">
            Where TRENVO builds and manages stores
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {PLATFORMS.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-muted transition-colors hover:text-soft"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
