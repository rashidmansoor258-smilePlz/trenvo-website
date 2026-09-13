import useReveal from '../hooks/useReveal';

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Business Assessment',
    description:
      'Understand the product, audience, available resources and goals before recommending a direction.',
  },
  {
    number: '02',
    title: 'Store & Product Foundation',
    description:
      'Prepare the storefront, essential settings, branding and listings needed for a proper launch.',
  },
  {
    number: '03',
    title: 'Content & Creator Activation',
    description:
      'Develop content angles and begin suitable creator or affiliate outreach for the product.',
  },
  {
    number: '04',
    title: 'Campaign Launch & Optimization',
    description:
      'Launch approved campaigns and improve them using performance data as it comes in.',
  },
  {
    number: '05',
    title: 'Ongoing Management & Scale',
    description:
      'Monitor the store, update listings, review campaigns and identify new growth opportunities.',
  },
];

export default function Process() {
  const ref = useReveal();
  return (
    <section id="process" className="bg-midnight py-20 sm:py-28">
      <div className="container-xl">
        <div ref={ref} className="reveal max-w-2xl">
          <span className="text-sm font-medium text-teal">Process</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            From First Conversation to Ongoing Growth
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Each engagement follows the same sequence, adjusted to your product and timeline.
            Results depend on many factors, and no step guarantees a specific outcome.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-4">
          {STEPS.map((step, i) => (
            <li key={step.number} className="relative flex flex-col">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <span className="font-display text-3xl font-bold text-teal/60">
                  {step.number}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-teal/40 to-transparent lg:mt-4 lg:block lg:w-full"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-soft">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
