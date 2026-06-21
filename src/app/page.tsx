import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Max Pressure Equipment | Custom Pressure Washing Equipment',
  description:
    'Custom trailer builds, surface cleaners, spray guns, and equipment consulting for pressure washing contractors. Built by pros, for pros.',
  openGraph: {
    title: 'Max Pressure Equipment | Custom Pressure Washing Equipment',
    description:
      'Custom trailer builds, surface cleaners, spray guns, and equipment consulting for pressure washing contractors.',
    url: 'https://maxpressureequipment.com',
  },
}

const features = [
  {
    title: 'Custom Trailer Builds',
    description:
      'Fully outfitted single and dual gun trailer packages built to your spec — from starter setups to premium commercial rigs.',
    href: '/trailer-builds',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        />
      </svg>
    ),
  },
  {
    title: 'Surface Cleaners',
    description:
      'Flat surface cleaners from 16" to 24" — built for driveways, parking lots, and commercial flatwork at commercial-grade psi.',
    href: '/surface-cleaners',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h2m18 0h2M4.22 19.78l.707-.707M18.364 5.636l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    ),
  },
  {
    title: 'Spray Guns & Accessories',
    description:
      'Pro-grade trigger guns, wands, foam cannons, and downstream injector kits rated for commercial pressure washer output.',
    href: '/spray-guns',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Equipment Consulting',
    description:
      'Not sure what you need? We help contractors build smart — matching equipment to services, volume, and budget.',
    href: '/contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
]

const whyPoints = [
  {
    title: 'Built by Contractors',
    description:
      'We run a pressure washing business. We spec equipment based on what actually holds up under daily commercial use.',
  },
  {
    title: 'No Consumer-Grade Junk',
    description:
      'Every product we carry is rated for commercial output. If it won\'t survive a full season of heavy use, we don\'t sell it.',
  },
  {
    title: 'Custom Builds Available',
    description:
      'Need something specific? We build trailer packages to your exact spec — machine size, gun count, hose length, and more.',
  },
  {
    title: 'Fast Response',
    description:
      'We\'re not a big box store. Send us a message and hear back from a real person who knows pressure washing.',
  },
]

const featuredBuilds = [
  {
    name: 'Starter Contractor Trailer',
    spec: '4 GPM / 4,000 PSI',
    description: 'Single gun setup perfect for residential jobs. Everything you need to start booking work.',
    price: 'From $3,500',
  },
  {
    name: 'Dual Gun Commercial Rig',
    spec: '5.5 GPM / 3,500 PSI',
    description: 'Run two guns simultaneously. Built for contractors doing multiple jobs per day.',
    price: 'From $5,800',
  },
  {
    name: 'Premium 8 GPM Build',
    spec: '8 GPM / 3,500 PSI',
    description: 'High-volume machine for heavy commercial work, fleet washing, or multi-crew operations.',
    price: 'From $8,500',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-slate-950 min-h-[85vh] flex items-center"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">
                Built for Pressure Washing Professionals
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Equipment That Keeps Up{' '}
              <span className="text-blue-400">With Your Business</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Custom trailer builds, surface cleaners, spray guns, and equipment consulting —
              built for contractors who won't settle for consumer-grade gear.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Request a Build Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/trailer-builds"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                View Trailer Builds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Build</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From complete trailer rigs to individual accessories — we supply pressure washing
              contractors with the tools that actually hold up on the job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <Link
                key={feature.href + feature.title}
                href={feature.href}
                className="group bg-slate-800 hover:bg-slate-750 border border-slate-700/50 hover:border-blue-500/40 rounded-xl p-6 transition-all"
              >
                <div className="w-11 h-11 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Max Pressure */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
                Why Max Pressure Equipment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Built by Contractors,
                <br />
                For Contractors
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Max Pressure Equipment is backed by Max Pressure Exterior Cleaning — we run a real
                pressure washing business. We know what breaks, what holds up, and what setups
                actually make you money. That's the difference.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Contact Max
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-slate-800 border border-slate-700/50 rounded-xl p-5"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{point.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trailer Builds */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
                Trailer Builds
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Popular Build Packages
              </h2>
            </div>
            <Link
              href="/trailer-builds"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors shrink-0"
            >
              View all builds
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBuilds.map((build) => (
              <div
                key={build.name}
                className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden"
              >
                <div
                  className="h-40 bg-slate-700 flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)',
                  }}
                >
                  <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-blue-600/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-400 text-xs font-medium mb-3">
                    {build.spec}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{build.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{build.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{build.price}</span>
                    <Link
                      href="/contact"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Setup?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll help you put together the right package for your
            business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Request a Build Quote
            </Link>
            <Link
              href="/trailer-builds"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              View Trailer Builds
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
