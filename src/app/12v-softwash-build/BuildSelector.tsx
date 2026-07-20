'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  badgeToneClass,
  buildOptions,
  buildTotal,
  products,
  retailerConfig,
  type BuildProduct,
} from './build-data'

type BuildId = 'budget' | 'premium'

export default function BuildSelector() {
  const [active, setActive] = useState<BuildId>('budget')

  // The hero and bottom-CTA buttons link to #budget-build / #my-build anchors
  // just above this component — switch tabs to match wherever the visitor lands.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash
      if (hash === '#budget-build') setActive('budget')
      else if (hash === '#my-build') setActive('premium')
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const option = buildOptions.find((entry) => entry.id === active) ?? buildOptions[0]
  const total = buildTotal(option)

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="grid grid-cols-2 border-b border-slate-700/50">
        {buildOptions.map((entry) => {
          const isActive = entry.id === active
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => setActive(entry.id)}
              aria-pressed={isActive}
              className={`px-3 sm:px-6 py-4 text-left transition-colors ${
                isActive
                  ? 'bg-slate-800 border-b-2 border-cyan-400'
                  : 'bg-slate-900/60 border-b-2 border-transparent hover:bg-slate-800/70'
              }`}
            >
              <span
                className={`block text-[10px] font-semibold uppercase tracking-wider mb-1 ${
                  isActive ? 'text-cyan-400' : 'text-slate-500'
                }`}
              >
                {entry.eyebrow}
              </span>
              <span
                className={`block text-sm sm:text-base font-bold leading-tight ${
                  isActive ? 'text-white' : 'text-slate-400'
                }`}
              >
                {entry.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active build */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            {option.description}
          </p>
          <span className="flex-shrink-0 self-start text-green-300 text-sm font-mono bg-slate-900/70 border border-green-700/40 rounded-lg px-3 py-1.5 whitespace-nowrap">
            Total ≈ ${total.toLocaleString()}+
          </span>
        </div>

        <ul className="divide-y divide-slate-700/40 border border-slate-700/40 rounded-xl overflow-hidden bg-slate-900/40">
          {option.partIds.map((id) => {
            const product: BuildProduct = products[id]
            const retailer = retailerConfig[product.retailer]
            return (
              <li key={id} className="flex items-center gap-3 px-3 sm:px-4 py-3">
                <div className="relative flex-shrink-0 w-12 h-12 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs sm:text-sm font-semibold leading-snug">
                    {product.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                    <span className="text-[11px] font-mono text-green-400">
                      {product.approxPrice}
                    </span>
                    {product.badges?.map((badge) => (
                      <span
                        key={badge.label}
                        className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${badgeToneClass[badge.tone]}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  rel={retailer.rel}
                  className="flex-shrink-0 inline-flex items-center justify-center bg-slate-700 hover:bg-blue-600 text-white text-[11px] font-semibold px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  {retailer.cta}
                </a>
              </li>
            )
          })}
        </ul>

        <p className="text-slate-500 text-xs leading-relaxed mt-4">
          Total is calculated from the approximate component prices listed on this page. It does
          not include tax, shipping, mounting hardware, extra wiring, thread sealant, or
          chemical. Prices change — click through each item to confirm current pricing.
        </p>
      </div>
    </div>
  )
}
