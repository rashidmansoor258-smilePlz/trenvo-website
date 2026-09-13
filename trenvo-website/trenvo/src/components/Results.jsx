import { LayoutGrid, Settings2, Lightbulb, MessageCircle } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { SHOW_TESTIMONIALS, testimonials } from '../data/config';

const OUTCOMES = [
  {
    icon: LayoutGrid,
    title: 'Stronger Product Presentation',
    description: 'Listings built to communicate value clearly and reduce buyer hesitation.',
  },
  {
    icon: Settings2,
    title: 'More Organized Store Operations',
    description: 'Order flow, inventory and listing upkeep managed with a consistent process.',
  },
  {
    icon: Lightbulb,
    title: 'Better-Informed Growth Decisions',
    description: 'Choices grounded in store and campaign data rather than assumptions.',
  },
  {
    icon: MessageCircle,
    title: 'Consistent Communication and Reporting',
    description: 'Regular updates that explain what changed and why it was done.',
  },
];

export default function Results() {
  const ref = useReveal();
  return (
    <section id="results" className="bg-deepblue/30 py-20 sm:py-28">
      <div className="container-xl">
        <div ref={ref} className="reveal max-w-2xl">
          <span className="text-sm font-medium text-teal">Results</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Built Around Measurable Progress
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            We report on real, verifiable client outcomes as engagements are completed. Until
            then, here is what every engagement is built to deliver.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glass-card rounded-2xl p-6">
              <div className="inline-flex rounded-xl bg-amber/10 p-2.5">
                <Icon className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-soft">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>

        {SHOW_TESTIMONIALS && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="glass-card rounded-2xl p-6">
                {/* PLACEHOLDER: replace with a genuine, permissioned testimonial */}
                <p className="text-sm leading-relaxed text-muted">"{t.quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-soft">
                  {t.name}
                  <span className="block text-xs font-normal text-muted">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
