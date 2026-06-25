import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pressure Washers | Max Pressure Equipment',
  description:
    'Commercial-grade pressure washers built for contractors. Gear-driven machines rated for daily use — starting with a Predator 420cc running a 5 GPM Canpump.',
  openGraph: {
    title: 'Pressure Washers | Max Pressure Equipment',
    description:
      'Gear-driven commercial pressure washers for pressure washing contractors.',
    url: 'https://maxpressureequipment.com/pressure-washers',
  },
}

const products = [
  {
    name: 'Predator 420cc / 5 GPM Canpump',
    tag: 'Commercial',
    price: '$1,000',
    description:
      'A gear-driven commercial machine built to run hard every day. The Predator 420cc engine paired with a Canpump 5 GPM unit delivers consistent 3,600 PSI output — no belt slipping, no consumer-grade compromises.',
    specs: [
      'Predator 420cc engine',
      'Gear-driven 5 GPM Canpump',
      '3,600 PSI output',
      'Built for daily commercial use',
    ],
    image: '/media/pressure-washers/5GPM3600PSI.png',
  },
]

export default function PressureWashersPage() {
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
              Pressure Washers
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Commercial Machines That Run All Day
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Gear-driven units built for real contractor output. No belt drives, no
              consumer-grade junk — just machines that hold up under daily commercial use.
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="relative h-56 bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {product.tag}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
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
            Need a machine spec&apos;d for your trailer build?
          </h2>
          <p className="text-blue-100 mb-7 max-w-md mx-auto">
            We can pair any of these machines with a full trailer package — reach out and
            we&apos;ll build the right setup for your business.
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
