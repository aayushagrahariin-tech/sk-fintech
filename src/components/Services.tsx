import { Globe, Building2, Laptop, ArrowUpRight, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Website & Web App Troubleshooting',
    description:
      'Crashes, hosting issues, broken deployments, and stubborn bugs — we diagnose and fix your web presence fast so you never lose traffic or customers.',
    points: ['Crash recovery', 'Hosting & DNS fixes', 'Bug diagnosis & patching'],
    accent: 'from-electric-500/20 to-electric-500/0',
  },
  {
    icon: Building2,
    title: 'Business IT & Network Setup',
    description:
      'Security hardening, cloud infrastructure, software deployment, and automated backups. We keep your business systems running without interruption.',
    points: ['Network security', 'Cloud & software setup', 'Automated backups'],
    accent: 'from-electric-400/20 to-electric-400/0',
  },
  {
    icon: Laptop,
    title: 'Everyday Tech Support',
    description:
      'Malware removal, operating system optimization, slow device tune-ups, and general troubleshooting. Your personal technology, working like new again.',
    points: ['Malware removal', 'OS optimization', 'Performance tune-ups'],
    accent: 'from-electric-300/20 to-electric-300/0',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-electric-500/8 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-400">
            What We Fix
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Core Services
          </h2>
          <p className="mt-5 text-base text-gray-400 sm:text-lg leading-relaxed">
            Whatever the technical problem, we have the expertise to solve it —
            for individuals and businesses alike.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative card-shine rounded-2xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:border-electric-500/30`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-electric-500/5 blur-2xl transition-all duration-500 group-hover:bg-electric-500/15" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/15 to-electric-500/5 border border-electric-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-electric-500/40 group-hover:shadow-lg group-hover:shadow-electric-500/20">
                  <service.icon className="h-7 w-7 text-electric-400" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-electric-500/15 border border-electric-500/20">
                        <Check className="h-3 w-3 text-electric-400" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300"
                >
                  Get help now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
