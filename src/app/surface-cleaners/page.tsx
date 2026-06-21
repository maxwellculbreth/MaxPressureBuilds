import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Surface Cleaners',
  description:
    'Professional flat surface cleaners from 16" to 24" for driveways, parking lots, decks, and commercial flatwork. Rated for commercial pressure washer output.',
  openGraph: {
    title: 'Surface Cleaners | Max Pressure Equipment',
    description:
      'Professional flat surface cleaners for driveways, parking lots, and commercial flatwork.',
    url: 'https://maxpressureequipment.com/surface-cleaners',
  },
}

const products = [
  {
    name: '16" Flat Surface Cleaner',
    tag: 'Residential',
    price: '$185',
    psi: 'Up to 4,000 PSI',
    gpm: '2–4 GPM',
    description:
      'Compact and maneuverable. Ideal for residential driveways, walkways, and patios. Dual rotating nozzles for streak-free coverage.',
    specs: ['Dual rotating nozzles', 'Stainless spray bar', 'Universal quick-connect', '1/4" inlet'],
  },
  {
    name: '20" HD Surface Cleaner',
    tag: 'Most Popular',
    price: '$245',
    psi: 'Up to 4,000 PSI',
    gpm: '2–5 GPM',
    description:
      'The go-to cleaner for residential and light commercial work. Wider coverage means faster jobs and more money per hour.',
    specs: ['Dual rotating nozzles', 'Ball bearing swivel', 'Ergonomic handle', '1/4" & 3/8" fittings'],
  },
  {
    name: '24" Commercial Cleaner',
    tag: 'Commercial',
    price: '$380',
    psi: 'Up to 4,000 PSI',
    gpm: '3–8 GPM',
    description:
      'Built for parking lots, warehouse floors, and large-scale commercial flatwork. Maximum coverage with commercial-grade durability.',
    specs: ['Triple rotating nozzles', 'Heavy-duty housing', 'Ball bearing assembly', '3/8" M22 inlet'],
  },
  {
    name: 'Whisper Wash Classic 19"',
    tag: 'Premium Quiet',
    price: '$320',
    psi: 'Up to 4,000 PSI',
    gpm: '2–6 GPM',
    description:
      'Industry-favorite for low-vibration, quiet operation. Sealed bearing system and dual nozzle design. Built to last.',
    specs: ['Ultra-low noise', 'Sealed bearing system', 'Dual vacuum ports', 'Integrated skirt'],
  },
  {
    name: 'Gutter & Curb Attachment',
    tag: 'Specialty',
    price: '$135',
    psi: 'Up to 3,500 PSI',
    gpm: '2–4 GPM',
    description:
      'Clean curbs, gutters, and channels without bending over. Angled head design gets into tight spaces.',
    specs: ['Angled spray head', 'Extension wand', '200° rotating nozzle', 'Quick-connect inlet'],
  },
  {
    name: 'Deck & Fence Surface Wand',
    tag: 'Wood-Safe',
    price: '$165',
    psi: 'Up to 3,000 PSI',
    gpm: '2–4 GPM',
    description:
      'Wide-fan wand attachment for cleaning wood decks, fences, and siding without streaks or damage.',
    specs: ['40" wide fan pattern', 'Adjustable pressure', 'Wood-safe nozzle tips', 'Extension compatible'],
  },
]

export default function SurfaceCleanersPage() {
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
              Surface Cleaners
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Surface Cleaners Built for Production Work
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Clean more surface in less time. Our surface cleaners range from 16" residential
              units to 24" commercial-grade cleaners built for full days of hard use.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
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
                    <circle cx="12" cy="12" r="9" strokeWidth={1} />
                    <circle cx="12" cy="12" r="4" strokeWidth={1} />
                    <line x1="12" y1="3" x2="12" y2="7" strokeWidth={1} />
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={1} />
                    <line x1="3" y1="12" x2="7" y2="12" strokeWidth={1} />
                    <line x1="17" y1="12" x2="21" y2="12" strokeWidth={1} />
                  </svg>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {product.tag}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-2 mb-3">
                    <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full font-mono">
                      {product.psi}
                    </span>
                    <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full font-mono">
                      {product.gpm}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2">{product.name}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{product.description}</p>
                  <div className="mb-5 flex-1">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-2">
                      Features
                    </p>
                    <ul className="space-y-1.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-slate-300">
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
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <span className="text-white font-bold text-xl">{product.price}</span>
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Not sure which cleaner is right for you?
          </h2>
          <p className="text-blue-100 mb-7 max-w-md mx-auto">
            Tell us your machine's GPM and the type of work you do — we'll point you to the right
            tool.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-lg transition-colors text-sm"
          >
            Contact Max
          </Link>
        </div>
      </section>
    </>
  )
}
