import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spray Guns & Accessories',
  description:
    'Professional trigger guns, wands, foam cannons, and downstream injector kits rated for commercial pressure washer output. Trusted by contractors.',
  openGraph: {
    title: 'Spray Guns & Accessories | Max Pressure Equipment',
    description:
      'Pro-grade spray guns, wands, foam cannons, and accessories for pressure washing contractors.',
    url: 'https://maxpressureequipment.com/spray-guns',
  },
}

const products = [
  {
    name: 'Pro Trigger Spray Gun',
    tag: 'Best Seller',
    price: '$85',
    psi: 'Up to 5,000 PSI',
    description:
      'Commercial-grade trigger gun with stainless steel components. Comfortable grip, rated for full commercial output. The go-to daily driver for field contractors.',
    specs: ['5,000 PSI rated', 'Stainless steel components', 'Ergonomic grip', '1/4" M22 inlet'],
  },
  {
    name: 'Safety Lock Trigger Gun',
    tag: 'Safety Lock',
    price: '$95',
    psi: 'Up to 5,000 PSI',
    description:
      'Same performance as the Pro Gun with the addition of a trigger safety lock. Keeps the gun secure during transport or when handing off between operators.',
    specs: ['Integrated safety lock', '5,000 PSI rated', 'Dual-o-ring seal', 'Quick-connect compatible'],
  },
  {
    name: 'Ball Valve Wand Kit',
    tag: 'Kit',
    price: '$145',
    psi: 'Up to 5,000 PSI',
    description:
      'Complete wand kit with ball valve shutoff, extension wand, and a full set of color-coded nozzle tips. Everything to get started or replace a worn setup.',
    specs: ['Ball valve shutoff', '36" extension wand', '5-tip nozzle set', 'Stainless fittings'],
  },
  {
    name: 'Foam Cannon Package',
    tag: 'Foam Kit',
    price: '$175',
    psi: 'Up to 4,000 PSI',
    description:
      'Professional foam cannon bundle with pro trigger gun. Pre-diluted chemical application for house washes, vehicle detailing, and soft washing prep work.',
    specs: ['1-liter foam bottle', 'Adjustable foam thickness', 'Pro trigger gun included', '1/4" quick-connect'],
  },
  {
    name: 'Downstream Injector Kit',
    tag: 'Chemical',
    price: '$65',
    psi: '3,500 PSI Max',
    description:
      'Low-pressure downstream chemical injection for house wash and soft wash applications. Kit includes injector, hose barb, and filter screen.',
    specs: ['1.8mm orifice', 'Brass construction', 'Filter screen included', 'Quick-connect fittings'],
  },
  {
    name: 'High-Reach Telescoping Wand',
    tag: 'Extension',
    price: '$220',
    psi: 'Up to 3,500 PSI',
    description:
      'Extend your reach up to 24 feet for second-story work without a ladder. Aluminum construction, lightweight, and rated for commercial use.',
    specs: ['Extends to 24 feet', 'Lightweight aluminum', 'Dual lock sections', '1/4" male quick-connect'],
  },
]

export default function SprayGunsPage() {
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
              Spray Guns & Accessories
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Pro-Grade Guns and Accessories
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Rated for commercial PSI. Built to handle daily use on the job. Every trigger gun,
              wand, and accessory we carry is something we'd put in our own rig.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {product.tag}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full font-mono">
                      {product.psi}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2">{product.name}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{product.description}</p>
                  <div className="mb-5 flex-1">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-2">
                      Specs
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
            Need help picking the right setup?
          </h2>
          <p className="text-blue-100 mb-7 max-w-md mx-auto">
            Tell us your machine specs and what jobs you're running — we'll help you pick the right
            guns and accessories.
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
