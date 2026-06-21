import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trailer Builds',
  description:
    'Custom pressure washer trailer packages built for contractors. Single gun, dual gun, hot water, and high-volume rigs. Request a custom build quote.',
  openGraph: {
    title: 'Trailer Builds | Max Pressure Equipment',
    description:
      'Custom pressure washer trailer packages from starter setups to premium commercial rigs.',
    url: 'https://maxpressureequipment.com/trailer-builds',
  },
}

const builds = [
  {
    name: 'Starter Contractor Trailer',
    spec: '4 GPM / 4,000 PSI',
    tag: 'Best for Residential',
    price: 'From $3,500',
    description:
      'Everything you need to start booking jobs. Single gun package built on a 5x8 trailer with tank, hose reel, and machine mounted and ready to go.',
    includes: ['4gpm / 4000psi gas machine', '50-gallon water tank', '200ft hose reel', 'Pro trigger gun & tips', '5x8 single axle trailer'],
  },
  {
    name: 'Dual Gun Commercial Trailer',
    spec: '5.5 GPM / 3,500 PSI',
    tag: 'Most Popular',
    price: 'From $5,800',
    description:
      'Run two operators simultaneously. Built for companies scaling up or handling large commercial properties. Efficient, powerful, and field-proven.',
    includes: ['5.5gpm / 3500psi gas machine', '100-gallon water tank', 'Dual 200ft hose reels', '2x Pro trigger guns & tips', '7x14 tandem axle trailer'],
  },
  {
    name: 'Hot Water Trailer Package',
    spec: '4 GPM / 3,000 PSI / Heated',
    tag: 'For Heavy Cleaning',
    price: 'From $7,200',
    description:
      'Add hot water capability for grease, oil, gum, and heavy commercial cleaning. Diesel-fired burner with 4gpm commercial machine.',
    includes: ['4gpm cold/hot machine', 'Diesel-fired burner', '75-gallon water tank', '200ft hose reel', 'Enclosed 7x14 trailer'],
  },
  {
    name: '8 GPM Fleet Package',
    spec: '8 GPM / 3,500 PSI',
    tag: 'High Volume',
    price: 'From $8,500',
    description:
      'High-volume output for fleet washing, large-scale commercial work, or multi-crew operations. Serious GPM for serious work.',
    includes: ['8gpm / 3500psi Honda GX engine', '200-gallon water tank', 'Heavy-duty hose reel', 'Pro gun & downstream injector', '7x16 tandem axle trailer'],
  },
  {
    name: 'Premium Dual Machine Build',
    spec: '2x 5.5 GPM / 3,500 PSI',
    tag: 'Premium',
    price: 'From $12,000',
    description:
      'Two machines. Maximum output. Built for large crews and commercial contractors who need redundancy and volume. Fully enclosed option available.',
    includes: ['2x 5.5gpm machines', '200-gallon tank', '4x hose reels', 'Custom skid mount', 'Enclosed 8.5x20 trailer'],
  },
  {
    name: 'Custom Build — Your Spec',
    spec: 'Your Choice',
    tag: 'Fully Custom',
    price: 'By Quote',
    description:
      "Don't see what you need? We build to spec. Tell us your machine, trailer size, hose configuration, tank size, and any extras and we'll put together a custom package.",
    includes: ['Machine of your choice', 'Trailer size of your choice', 'Any tank configuration', 'Custom plumbing & reels', 'Full build consultation'],
  },
]

export default function TrailerBuildsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-slate-950 py-20 md:py-28"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Trailer Builds
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Custom Pressure Washer Trailer Packages
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We build complete, job-ready trailer setups — from starter single-gun packages to
              premium dual-machine commercial rigs. Everything is mounted, plumbed, and ready to
              work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Request a Build Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Builds Grid */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <div
                key={build.name}
                className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col"
              >
                <div
                  className="h-36 bg-slate-700 flex items-center justify-center relative"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)',
                  }}
                >
                  <svg
                    className="w-14 h-14 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8"
                    />
                  </svg>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {build.tag}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full font-mono">
                      {build.spec}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2">{build.name}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{build.description}</p>
                  <div className="mb-5 flex-1">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-2">
                      Includes
                    </p>
                    <ul className="space-y-1.5">
                      {build.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                          <svg
                            className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <span className="text-white font-bold text-lg">{build.price}</span>
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Don't see what you need?
          </h2>
          <p className="text-slate-400 mb-7 max-w-lg mx-auto">
            We build custom setups to your exact spec. Tell us your machine, trailer size, and
            configuration requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
          >
            Request a Custom Build
          </Link>
        </div>
      </section>
    </>
  )
}
