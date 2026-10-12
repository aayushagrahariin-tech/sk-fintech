import { useEffect, useState } from 'react';
import { Headset, Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 border border-electric-500/30 transition-all group-hover:scale-110 group-hover:border-electric-500/50 group-hover:shadow-lg group-hover:shadow-electric-500/20">
            <Headset className="h-5 w-5 text-electric-500" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-xl bg-electric-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SK <span className="gradient-text">Fintech</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-all hover:bg-electric-500/10 hover:text-electric-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric-500/30 transition-all hover:shadow-electric-500/50 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <MessageCircle className="h-4 w-4 relative" />
            <span className="relative">Get Instant Help</span>
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden mx-6 mt-3 rounded-2xl glass-strong p-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-electric-500/10 hover:text-electric-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-electric-500/25"
            >
              Get Instant Help
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
