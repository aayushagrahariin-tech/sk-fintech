import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'E-commerce Store Owner',
    avatar: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    quote:
      'My website went down during a flash sale and SK Fintech had it back online in under ten minutes. Absolutely lifesaving.',
  },
  {
    name: 'James Okoro',
    role: 'Small Business Owner',
    avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    quote:
      'They set up our entire office network and cloud backup system remotely. Professional, fast, and the communication was excellent.',
  },
  {
    name: 'Emily Chen',
    role: 'Freelance Designer',
    avatar: 'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    quote:
      'My laptop was running terribly slow and I was losing clients. SK Fintech optimized everything and now it flies. Worth every penny.',
  },
  {
    name: 'David Thompson',
    role: 'Startup Founder',
    avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    quote:
      'Had a critical deployment bug at 2 AM. Their expert was online instantly and helped me ship by morning. Unbelievable service.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    avatar: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    quote:
      'Removed malware that three other services could not even detect. SK Fintech knows what they are doing. Highly recommend.',
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="mx-3 w-[350px] flex-shrink-0 rounded-2xl glass p-7 transition-all duration-300 hover:border-electric-500/30 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <Quote className="h-8 w-8 text-electric-500/30" />
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-electric-500 text-electric-500" />
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-300">
        "{t.quote}"
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
        <div className="relative">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-11 w-11 rounded-full object-cover border-2 border-electric-500/30"
            loading="lazy"
          />
          <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-navy-900" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-gray-500">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-electric-500/8 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-400">
            Trusted by Many
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-base text-gray-400 sm:text-lg leading-relaxed">
            Real reviews from real people who got their tech problems solved —
            fast.
          </p>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-navy-900 via-navy-900/80 to-transparent" />

        <div className="flex w-max animate-marquee">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      <div className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto mt-12 flex max-w-7xl items-center justify-center gap-8 px-6`}>
        {[
          { value: '12,000+', label: 'Issues resolved' },
          { value: '4.9/5', label: 'Average rating' },
          { value: '98%', label: 'Would recommend' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-extrabold gradient-text sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
