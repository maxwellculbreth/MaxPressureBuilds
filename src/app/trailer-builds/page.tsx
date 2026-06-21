import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trailer Builds',
  description:
    'Custom pressure washer trailer packages built for professional contractors. Three packages starting at $6,000 — Starter, Entry Level Commercial, and the Max Mayhem Premium build.',
  openGraph: {
    title: 'Trailer Builds | Max Pressure Equipment',
    description:
      'Custom trailer builds for pressure washing contractors — Starter at $6K, Commercial at $8.5K, and Premium Max Mayhem at $14K.',
    url: 'https://maxpressureequipment.com/trailer-builds',
  },
}

type Build = {
  name: string
  subtitle?: string
  tag: string
  tagColor: string
  price: string
  spec: string
  bufferOptions?: string[]
  description: string
  includes: string[]
  note?: string
  featured?: boolean
  image?: string
}

const stainColors = [
  { name: 'Regular / Normal', hex: '#94A3B8' },
  { name: 'Blue', hex: '#1D4ED8' },
  { name: 'Black', hex: '#0F172A' },
  { name: 'Red', hex: '#DC2626' },
]

const builds: Build[] = [
  {
    name: 'MaxLaunch Build',
    subtitle: 'Starter Contractor Trailer Package',
    tag: 'Contractor Starter',
    tagColor: 'bg-slate-600',
    price: 'Starting at $6,000',
    spec: '4 GPM / 4,000 PSI',
    description:
      'The right package for contractors just getting into professional pressure washing. Built with commercial-grade components from day one — no consumer junk. Everything is mounted, plumbed, and ready to load up and book jobs.',
    includes: [
      '4 GPM / 4,000 PSI pressure washer machine',
      'Two Coxreels for high-pressure hose',
      'Garden hose reel',
      '35-gallon chemical tank',
      '18" surface cleaner',
      'Short wand with DS Twist',
      'Downstream injector',
    ],
  },
  {
    name: 'MaxFlow Commercial Build',
    subtitle: 'Entry Level Commercial Trailer Package',
    tag: 'Commercial',
    tagColor: 'bg-blue-600',
    price: 'Starting at $8,500',
    spec: '4.4 GPM / 3,600 PSI (Gear-Driven)',
    bufferOptions: ['65 gallon', '125 gallon'],
    image: '/media/trailer-builds/MAXFLOW%20COMMERICAL%20BUILD.png',
    description:
      'Includes everything from the MaxLaunch package, plus a gear-driven machine upgrade, more intricate welding, an improved layout, and buffer tank support for contractors who want serious water supply and a more polished commercial rig.',
    includes: [
      'Everything in the Starter Contractor Build',
      'Gear-driven 4.4 GPM / 3,600 PSI machine',
      'More intricate welding and upgraded layout',
      'Plumbed to 65-gallon or 125-gallon buffer tank',
      'Two Coxreels for high-pressure hose',
      'Garden hose reel',
      '35-gallon chemical tank',
      '18" surface cleaner',
      'Short wand with DS Twist',
      'Downstream injector',
    ],
  },
  {
    name: 'MaxMayhem Build',
    subtitle: 'Premium Trailer Package',
    tag: 'Premium',
    tagColor: 'bg-blue-700',
    price: 'Starting at $14,000',
    spec: '9.2 GPM / 3,600 PSI',
    bufferOptions: ['225 gallon', '325 gallon'],
    description:
      'Built for serious contractors who want a high-flow commercial setup with soft wash capability and maximum water supply. The Max Mayhem is a full production rig — high GPM, large tanks, a 12V soft wash system, and custom welding throughout.',
    includes: [
      '6.4 × 14 tandem trailer build',
      '9.2 GPM / 3,600 PSI pressure washer rig',
      '225-gallon or 325-gallon buffer tank',
      '65-gallon chemical tank',
      '7-gallon soap tank',
      'Aluminum fuel cell',
      '12V soft wash system — 7 GPM',
      'Welding for all hose reels and engine skids',
    ],
    note: 'Final pricing on the Max Mayhem Build varies based on buffer tank size, layout, number of reels, custom welding requests, and any add-ons. All builds are fully custom quoted — the starting price reflects a standard configuration.',
    featured: true,
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Trailer Builds
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Custom Pressure Washer Trailer Packages
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Three build packages — from a contractor starter at $6,000 to the full Max Mayhem
            premium rig at $14,000. Everything is mounted, plumbed, and built to work. All builds
            are custom quoted based on your options.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Request a Trailer Build Quote
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Talk With Max
            </Link>
          </div>
        </div>
      </section>

      {/* Builds */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {builds.map((build) => (
            <div
              key={build.name}
              className={`bg-slate-800 rounded-2xl overflow-hidden border ${
                build.featured ? 'border-blue-500/40' : 'border-slate-700/50'
              }`}
            >
              {/* Card Header */}
              <div className="p-6 md:p-8 border-b border-slate-700/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                  <div className="flex-1">
                    <span
                      className={`inline-block ${build.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}
                    >
                      {build.tag}
                    </span>
                    <h2 className="text-white font-black text-2xl md:text-3xl leading-tight mb-1">
                      {build.name}
                    </h2>
                    {build.subtitle && (
                      <p className="text-blue-400 text-sm font-medium mb-3">{build.subtitle}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-block bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full font-mono">
                        {build.spec}
                      </span>
                      {build.bufferOptions?.map((opt) => (
                        <span
                          key={opt}
                          className="inline-block bg-slate-700/60 text-slate-400 text-xs px-3 py-1 rounded-full"
                        >
                          Buffer: {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Starting at</p>
                    <p className="text-white font-black text-3xl md:text-4xl leading-none mb-4">
                      {build.price.replace('Starting at ', '')}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Start My Build
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Description + Includes */}
                <div>
                  <p className="text-slate-300 leading-relaxed mb-6">{build.description}</p>
                  <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-2">
                    {build.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Colors + Note + CTA */}
                <div>
                  {build.image && (
                    <div className="relative h-48 bg-white rounded-xl overflow-hidden mb-6">
                      <Image
                        src={build.image}
                        alt={`${build.name} trailer`}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  )}
                  <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-3">
                    Trailer Wood Stain / Seal Color Options
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {stainColors.map((color) => (
                      <div
                        key={color.name}
                        className="flex items-center gap-2.5 bg-slate-700/40 border border-slate-700/50 rounded-lg px-3 py-2.5"
                      >
                        <div
                          className="w-4 h-4 rounded-full shrink-0 border border-white/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-slate-300 text-sm">{color.name}</span>
                      </div>
                    ))}
                  </div>

                  {build.note && (
                    <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-blue-200 text-sm leading-relaxed">{build.note}</p>
                      </div>
                    </div>
                  )}

                  <p className="text-slate-500 text-xs leading-relaxed">
                    Color is selected at time of build. Specify your preference when submitting your
                    quote request.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Start Your Build?
          </h2>
          <p className="text-blue-100 mb-7 max-w-lg mx-auto">
            Fill out the quote form, pick your package, tank size, and stain color — and we'll get
            back to you with a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Request a Trailer Build Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Talk With Max
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
