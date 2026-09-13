import {
  Store,
  Search,
  Megaphone,
  Rocket,
  PackageCheck,
  BarChart2,
  ArrowRight,
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const SERVICES = [
  {
    icon: Store,
    title: 'TikTok Shop Setup & Configuration',
    description:
      'Account preparation, storefront configuration and the technical foundation your shop needs to go live correctly.',
  },
  {
    icon: Search,
    title: 'Product Research, Sourcing & Listings',
    description:
      'Identify viable products, evaluate suppliers, and build listings that are clear, complete and built to convert.',
  },
  {
    icon: Megaphone,
    title: 'Content Strategy & Creator Outreach',
    description:
      'Develop content angles suited to your product and connect with creators and affiliates who fit your brand.',
  },
  {
    icon: Rocket,
    title: 'TikTok Ads & Campaign Management',
    description:
      'Plan, launch and refine advertising campaigns using performance data rather than one-off guesses.',
  },
  {
    icon: PackageCheck,
    title: 'Order Operations & Fulfilment Support',
    description:
      'Keep orders, inventory and fulfilment coordinated so customer experience stays consistent as you grow.',
  },
  {
    icon: BarChart2,
    title: 'Analytics, Reporting & Store Optimization',
    description:
      'Ongoing monitoring of store and campaign performance, with practical adjustments based on what the data shows.',
  },
];

export default function Services() {
  const headerRef = useReveal();
  return (
    <section id="services" className="bg-deepblue/30 py-20 sm:py-28">
      <div className="container-xl">
        <div ref={headerRef} className="reveal max-w-2xl">
          <span className="text-sm font-medium text-teal">Services</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Everything Your TikTok Shop Needs
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Six connected service areas cover the full path from setup to daily operations —
            engage one, or bring TRENVO on for the complete build.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-glow"
            >
              <div className="inline-flex w-fit rounded-xl bg-gradient-to-br from-teal/20 to-amber/10 p-3">
                <Icon className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-soft">{title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{description}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber transition-colors group-hover:text-teal"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
