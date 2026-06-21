import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spray Guns & Accessories',
  description:
    'Professional spray guns and accessories rated for commercial pressure washer output. Trusted by contractors.',
  openGraph: {
    title: 'Spray Guns & Accessories | Max Pressure Equipment',
    description:
      'Pro-grade spray guns and accessories for pressure washing contractors.',
    url: 'https://maxpressureequipment.com/spray-guns',
  },
}

const products = [
  {
    name: 'MP-1305 Regular Spray Gun',
    tag: 'Standard',
    price: '$45',
    description:
      'Entry-level commercial spray gun for daily use. Reliable construction rated for standard contractor output — a solid workhorse for house washing and concrete cleaning.',
    specs: ['Standard pressure rating', 'Ergonomic grip', 'Quick-connect compatible', 'Lightweight design'],
    image: '/media/spray-guns/BLUESHORTWAND(MP1305).png',
  },
  {
    name: 'MP-2405SP Fully Assembled Gun',
    tag: 'Kit',
    price: '$160',
    description:
      'Complete dual-tip gun assembly ready to run out of the box. Includes two tip configurations for switching between high-pressure and downstream chemical application.',
    specs: ['Dual tip included', 'Fully assembled', 'Ready to use', 'Commercial rated'],
    image: '/media/spray-guns/SHORTWANDWITHDUALTIP(MP2405SP).png',
  },
  {
    name: 'MP-2405 Soft Wash Gun',
    tag: 'Soft Wash',
    price: '$130',
    description:
      'Purpose-built for soft wash applications. Optimized for low-pressure chemical delivery on house washes, roof cleaning, and delicate surfaces where high PSI would cause damage.',
    specs: ['Low-pressure delivery', 'Chemical-compatible seals', 'Soft wash optimized', 'Brass fittings'],
    image: '/media/spray-guns/BLUESOFTWASHGUN(MP2405).png',
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
              Pro-Grade Spray Guns
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              From basic daily drivers to full soft wash kits — every gun we carry is something
              we&apos;d put in our own rig.
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
            Need help picking the right setup?
          </h2>
          <p className="text-blue-100 mb-7 max-w-md mx-auto">
            Tell us your machine specs and what jobs you&apos;re running — we&apos;ll help you pick
            the right guns and accessories.
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
