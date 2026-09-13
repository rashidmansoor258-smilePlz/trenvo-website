import { Check } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const SOLUTIONS = [
  {
    id: 'private-label',
    title: 'Private Label Launch',
    description:
      'Build a brand of your own. We support product positioning, listing development, creator content and advertising built around a store that belongs to you for the long term.',
    tags: [
      'Your Own Brand',
      'Better Brand Control',
      'Long-Term Business Asset',
      'Customized Growth Plan',
    ],
    image:
      'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80',
    alt: 'Product packaging and branding materials laid out on a table',
  },
  {
    id: 'wholesale',
    title: 'Wholesale',
    description:
      'Move faster with products that already have market demand. We manage sourcing from established suppliers, listing upkeep, inventory coordination and day-to-day store operations.',
    tags: [
      'Recognized Products',
      'Existing Market Demand',
      'Operational Support',
      'Scalable Store Management',
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Warehouse shelving stocked with packaged inventory',
  },
];

export default function Solutions() {
  const ref = useReveal();
  return (
    <section id="solutions" className="bg-midnight py-20 sm:py-28">
      <div className="container-xl">
        <div ref={ref} className="reveal max-w-2xl">
          <span className="text-sm font-medium text-teal">Solutions</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Choose the Right Path for Your Business
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <div
              key={s.id}
              className="glass-card flex flex-col overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={s.image}
                alt={s.alt}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-bold text-soft">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{s.description}</p>

                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {s.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-2 text-sm text-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-soft transition-colors hover:border-teal/50 hover:text-teal"
                >
                  Discuss This Model
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
