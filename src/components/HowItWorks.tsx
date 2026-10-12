import { MessageSquare, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Report Your Problem',
    description:
      'Tell us what is going wrong via our live chat. Describe the issue in your own words — no technical jargon required.',
  },
  {
    icon: Monitor,
    step: '02',
    title: 'Connect Instantly',
    description:
      'Get matched with a remote technical expert in under two minutes. Share your screen securely and let us take a look.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Watch It Get Fixed',
    description:
      'Sit back and watch your problem disappear in real time. Every session is encrypted, logged, and fully transparent.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-400">
            Simple Process
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-5 text-base text-gray-400 sm:text-lg leading-relaxed">
            Three steps between you and a solved problem. No appointments, no
            waiting rooms, no hassle.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Animated connecting line */}
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-[2px] bg-gradient-to-r from-electric-500/10 via-electric-500/40 to-electric-500/10 md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-500/60 to-transparent animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative flex flex-col items-center text-center`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl glass border-electric-500/30 shadow-xl shadow-electric-500/10 transition-all duration-500 group-hover:scale-110 group-hover:border-electric-500/60 group-hover:shadow-electric-500/30">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-500/10 to-transparent transition-opacity group-hover:opacity-100" />
                <step.icon className="h-8 w-8 text-electric-400 relative" strokeWidth={2} />
                <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-electric-600 text-xs font-bold text-white shadow-lg shadow-electric-500/40">
                  {step.step}
                </span>
                <div className="absolute -inset-1 rounded-2xl border border-electric-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <ArrowRight className="absolute top-8 -right-4 hidden h-5 w-5 text-electric-500/30 md:block" />
              )}
            </div>
          ))}
        </div>

        <div className={`reveal ${isVisible ? 'is-visible' : ''} mt-14 text-center`} style={{ transitionDelay: '500ms' }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-electric-500/25 transition-all hover:shadow-electric-500/45 hover:-translate-y-0.5"
          >
            Start now — it takes 30 seconds
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
