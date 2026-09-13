import { Layers3, Target, MessagesSquare } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const FEATURES = [
  {
    icon: Layers3,
    title: 'Complete A–Z Management',
    description:
      'From account preparation and storefront setup to daily optimization, we manage the operational work so you can focus on your product.',
  },
  {
    icon: Target,
    title: 'Strategy Built Around Your Brand',
    description:
      'Recommendations are shaped by your products, target market and available budget, not a one-size-fits-all template.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    description:
      'Clear updates, practical reporting and direct support throughout the project, so you always know where things stand.',
  },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="bg-midnight py-20 sm:py-28">
      <div className="container-xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <div ref={ref} className="reveal">
          <span className="text-sm font-medium text-teal">About TRENVO</span>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Your Growth Partner for Modern Social Commerce
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            TikTok Shop rewards brands that can move quickly across content, product and
            advertising at the same time. TRENVO exists to make that possible for
            entrepreneurs and growing brands who don't have an in-house team to cover every
            part of that operation. We work alongside you from the first strategy
            conversation through the day-to-day running of the store, adjusting the plan as
            your products, audience and results evolve.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-1">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card flex gap-4 rounded-2xl p-5 transition-colors hover:border-teal/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber/10">
                  <Icon className="h-5 w-5 text-amber" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-soft">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-card overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Small business team collaborating around a table with a laptop and product samples"
              className="h-[26rem] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
