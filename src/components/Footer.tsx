import { Headset, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950 py-16">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 border border-electric-500/30">
                <Headset className="h-5 w-5 text-electric-500" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">
                SK <span className="gradient-text">Fintech</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              On-demand technical support and solutions for individuals and
              businesses. Instant, reliable, and secure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#services" className="transition-colors hover:text-electric-400">Services</a>
              <a href="#how-it-works" className="transition-colors hover:text-electric-400">How It Works</a>
              <a href="#testimonials" className="transition-colors hover:text-electric-400">Testimonials</a>
              <a href="#contact" className="transition-colors hover:text-electric-400">Get Help</a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get in Touch</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="tel:+918005006256" className="flex items-center gap-3 transition-colors hover:text-electric-400">
                <Phone className="h-4 w-4 text-electric-500" /> +91 8005006256
              </a>
              <a href="mailto:help@skfintech.com" className="flex items-center gap-3 transition-colors hover:text-electric-400">
                <Mail className="h-4 w-4 text-electric-500" /> help@skfintech.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-electric-500" /> Available worldwide — remote support
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-gray-600 md:flex-row">
          <p>&copy; {new Date().getFullYear()} SK Fintech. All rights reserved.</p>
          <p>Built for instant technical solutions.</p>
        </div>
      </div>
    </footer>
  );
}
