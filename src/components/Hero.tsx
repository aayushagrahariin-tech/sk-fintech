import { MessageCircle, ArrowRight, Shield, Zap, Clock, Cpu, Wifi, Terminal } from 'lucide-react';

const stats = [
  { icon: Clock, value: '< 2 min', label: 'Avg. response time' },
  { icon: Shield, value: '100%', label: 'Secure & encrypted' },
  { icon: Zap, value: '24/7', label: 'Always available' },
];

function NetworkGraphic() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-electric-500/10 blur-[80px] animate-pulse-glow" />

      {/* Rotating rings */}
      <div className="absolute inset-8 rounded-full border border-electric-500/20 animate-spin-slow">
        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rounded-full bg-electric-500 shadow-lg shadow-electric-500/50" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1 rounded-full bg-electric-300" />
      </div>
      <div className="absolute inset-20 rounded-full border border-electric-500/15 animate-spin-reverse">
        <div className="absolute top-1/2 right-0 h-1.5 w-1.5 -translate-y-1/2 translate-x-1 rounded-full bg-electric-400" />
        <div className="absolute top-1/4 left-0 h-1 w-1 -translate-x-1 rounded-full bg-electric-300" />
      </div>

      {/* Central hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl glass border-electric-500/30 shadow-2xl shadow-electric-500/20">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric-500/15 to-transparent" />
          <Cpu className="h-12 w-12 text-electric-400 relative" strokeWidth={1.5} />
          {/* Orbiting icons */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 flex h-9 w-9 items-center justify-center rounded-lg glass border-white/10">
              <Wifi className="h-4 w-4 text-electric-300" />
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 flex h-9 w-9 items-center justify-center rounded-lg glass border-white/10">
              <Terminal className="h-4 w-4 text-electric-300" />
            </div>
          </div>
        </div>
      </div>

      {/* SVG connections */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#008DDA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#008DDA" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="200" y1="200" x2="60" y2="80" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        <line x1="200" y1="200" x2="340" y2="80" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        <line x1="200" y1="200" x2="80" y2="320" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        <line x1="200" y1="200" x2="320" y2="320" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        <circle cx="60" cy="80" r="4" fill="#3aa9e8" className="animate-shimmer" />
        <circle cx="340" cy="80" r="3" fill="#5dc1f0" className="animate-shimmer" />
        <circle cx="80" cy="320" r="3" fill="#3aa9e8" className="animate-shimmer" />
        <circle cx="320" cy="320" r="4" fill="#5dc1f0" className="animate-shimmer" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute left-1/4 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-electric-500/15 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-electric-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs font-medium text-electric-300 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Experts online right now — avg. wait under 2 minutes
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem] animate-fade-in-up">
              Technical Issues?
              <br />
              <span className="gradient-text text-glow">We Solve Them</span>
              <br />
              <span className="gradient-text text-glow">Instantly.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0 animate-fade-in-up animate-delay-200" style={{ opacity: 0 }}>
              From website crashes to software glitches, SK Fintech provides
              on-demand technical solutions. If you are facing any problem,
              contact us right now.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up animate-delay-300" style={{ opacity: 0 }}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-electric-500 to-electric-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-electric-500/30 transition-all hover:shadow-electric-500/50 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <MessageCircle className="h-5 w-5 relative" />
                <span className="relative">Chat with a Tech Expert</span>
                <ArrowRight className="h-4 w-4 relative transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-gray-300 transition-all hover:border-electric-500/40 hover:text-white hover:bg-white/5"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start animate-fade-in-up animate-delay-500" style={{ opacity: 0 }}>
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl glass border-white/10">
                    <s.icon className="h-4 w-4 text-electric-400" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animate-delay-300" style={{ opacity: 0 }}>
            <NetworkGraphic />

            {/* Floating cards */}
            <div className="absolute -bottom-2 -left-2 sm:left-0 rounded-2xl glass-strong p-4 shadow-2xl shadow-black/30 animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/15 border border-green-500/30">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Connection secured</div>
                  <div className="text-xs text-gray-500">End-to-end encrypted</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 sm:right-0 rounded-2xl glass-strong p-4 shadow-2xl shadow-black/30 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/15 border border-electric-500/30">
                  <Zap className="h-5 w-5 text-electric-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Issue resolved</div>
                  <div className="text-xs text-gray-500">In 4 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
