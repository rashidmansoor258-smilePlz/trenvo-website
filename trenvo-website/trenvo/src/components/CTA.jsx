import { MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-midnight py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:44px_44px] opacity-40"
        aria-hidden="true"
      />
      <div className="container-xl relative">
        <div className="glass-card rounded-3xl px-6 py-14 text-center shadow-card sm:px-14">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Ready to Build Your TikTok Shop?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
            Tell us about your products, goals and current challenges. We'll help you
            understand the most practical next step.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal to-amber px-7 py-3.5 font-semibold text-midnight shadow-glow transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Book Your Free Consultation
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-soft transition-colors hover:border-teal/50 hover:text-teal sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href={siteConfig.gmailComposeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-soft transition-colors hover:border-teal/50 hover:text-teal sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Email via Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
