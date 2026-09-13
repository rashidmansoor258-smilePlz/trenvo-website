import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Process', id: 'process' },
  { label: 'Results', id: 'results' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

function Logo() {
  return (
    <span className="inline-flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-soft">
      TREN
      <span className="relative inline-block">
        V
        <ArrowUpRight
          className="absolute -right-1 -top-2 h-3.5 w-3.5 text-teal"
          strokeWidth={3}
          aria-hidden="true"
        />
      </span>
      O
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return undefined;
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const goToSection = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (!isHome) {
      navigate('/');
      // wait for home to mount, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-midnight/90 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container-xl flex h-18 items-center justify-between py-3">
        <Link to="/" className="shrink-0" aria-label="TRENVO home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={goToSection(link.id)}
              aria-current={isHome && activeId === link.id ? 'page' : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isHome && activeId === link.id
                  ? 'text-teal'
                  : 'text-muted hover:text-soft'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={goToSection('contact')}
            className="rounded-full bg-teal-amber bg-gradient-to-r from-teal to-amber px-5 py-2.5 text-sm font-semibold text-midnight shadow-glow transition-transform hover:scale-[1.03]"
          >
            Book a Free Call
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-soft lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="container-xl flex flex-col gap-1 border-t border-white/10 bg-midnight/95 pb-6 pt-3"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={goToSection(link.id)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-muted hover:bg-white/5 hover:text-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={goToSection('contact')}
            className="mt-2 rounded-full bg-gradient-to-r from-teal to-amber px-5 py-3 text-center text-sm font-semibold text-midnight"
          >
            Book a Free Call
          </a>
        </nav>
      </div>
    </header>
  );
}
