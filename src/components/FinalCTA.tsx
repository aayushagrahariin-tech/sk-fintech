import { MessageCircle, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} relative overflow-hidden rounded-[2rem] glass-strong px-8 py-16 text-center md:px-16 md:py-24`}
        >
          {/* Animated background orbs */}
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-electric-500/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-electric-600/10 blur-[80px]" />
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />

          {/* Rotating decorative ring */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-500/10 animate-spin-slow" />
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-500/8 animate-spin-reverse" />

          <div className="relative">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 border border-electric-500/30 shadow-lg shadow-electric-500/20">
              <AlertCircle className="h-8 w-8 text-electric-400" strokeWidth={2} />
              <div className="absolute -inset-2 rounded-2xl border border-electric-500/20 animate-pulse-glow" />
            </div>

            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Don't Let Tech Stoppages Cost You Money.
              <br />
              <span className="gradient-text text-glow">Get Fixed Now.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base text-gray-400 sm:text-lg leading-relaxed">
              Every minute your systems are down, you are losing revenue and
              trust. Connect with a tech expert right now and get back to
              business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/+918005006256"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-electric-500 to-electric-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-electric-500/30 transition-all hover:shadow-electric-500/50 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <MessageCircle className="h-5 w-5 relative" />
                <span className="relative">Chat on WhatsApp</span>
                <ArrowRight className="h-4 w-4 relative transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+918005006256"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:border-electric-500/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5 text-electric-400" />
                Call Now
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2.5 text-sm text-gray-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Experts are online and ready to help right now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
