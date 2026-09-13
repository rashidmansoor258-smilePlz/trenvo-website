import { ShieldCheck, Compass, Headset, TrendingUp, BarChart3, Package } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-midnight pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-amber/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-xl relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            Full-Service TikTok Shop Growth Agency
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-soft sm:text-5xl lg:text-6xl">
            Launch, Manage and{' '}
            <span className="text-gradient">Scale Your TikTok Shop</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            TRENVO helps entrepreneurs and growing brands build profitable TikTok Shop
            operations through store setup, product sourcing, optimized listings, creator
            partnerships, advertising and ongoing management.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal to-amber px-7 py-3.5 text-center font-semibold text-midnight shadow-glow transition-transform hover:scale-[1.03]"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-soft transition-colors hover:border-teal/50 hover:text-teal"
            >
              Explore Our Services
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-teal" />
              No-pressure consultation
            </li>
            <li className="flex items-center gap-2">
              <Compass className="h-4 w-4 shrink-0 text-teal" />
              Clear growth roadmap
            </li>
            <li className="flex items-center gap-2">
              <Headset className="h-4 w-4 shrink-0 text-teal" />
              Direct expert support
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="glass-card rounded-3xl p-3 shadow-card sm:p-4">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80"
              alt="E-commerce operations team reviewing store performance on laptops"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
              loading="eager"
            />
          </div>

          {/* floating dashboard chip */}
          <div className="glass-card absolute -left-4 -top-6 hidden w-52 rounded-2xl p-4 shadow-card sm:block sm:-left-8">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <TrendingUp className="h-4 w-4 text-teal" />
              Store Momentum
            </div>
            <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
              {[40, 62, 50, 78, 68, 92].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t-sm bg-gradient-to-t from-teal/40 to-teal"
                  style={{ height: `${h * 0.5}px` }}
                />
              ))}
            </div>
          </div>

          <div className="glass-card absolute -bottom-6 -right-4 hidden w-56 rounded-2xl p-4 shadow-card sm:block sm:-right-8">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Package className="h-4 w-4 text-amber" />
              Listings Optimized
            </div>
            <div className="mt-2 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-amber" />
              <span className="font-display text-lg font-semibold text-soft">
                Actively tracked
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
