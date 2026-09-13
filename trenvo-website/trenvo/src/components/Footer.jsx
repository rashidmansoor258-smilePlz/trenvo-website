import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';

const SERVICES = [
  'TikTok Shop Setup & Configuration',
  'Product Research, Sourcing & Listings',
  'Content Strategy & Creator Outreach',
  'TikTok Ads & Campaign Management',
  'Order Operations & Fulfilment Support',
  'Analytics, Reporting & Store Optimization',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-midnight pt-16">
      <div className="container-xl grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-flex items-center gap-1 font-display text-xl font-bold text-soft">
            TREN
            <span className="relative inline-block">
              V
              <ArrowUpRight
                className="absolute -right-1 -top-2 h-3 w-3 text-teal"
                strokeWidth={3}
              />
            </span>
            O
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            TRENVO is a social-commerce growth agency helping entrepreneurs and brands
            launch, manage and improve TikTok Shop operations through practical strategy,
            content, advertising and operational support.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-soft">Navigate</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            {['Home', 'About', 'Services', 'Solutions', 'Process', 'Results', 'FAQ', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors hover:text-teal"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-soft">Services</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#services" className="transition-colors hover:text-teal">
                  {s}
                </a>
              </li>
            ))}
            <li>
              <a href="#solutions" className="transition-colors hover:text-teal">
                Private Label Launch
              </a>
            </li>
            <li>
              <a href="#solutions" className="transition-colors hover:text-teal">
                Wholesale
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-soft">Get in touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-teal"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 transition-colors hover:text-teal"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-teal/50 hover:text-teal"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-xl flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-muted sm:flex-row">
        <p>© {year} TRENVO. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/privacy-policy" className="transition-colors hover:text-teal">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="transition-colors hover:text-teal">
            Terms of Service
          </Link>
          <Link to="/earnings-disclaimer" className="transition-colors hover:text-teal">
            Earnings Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
