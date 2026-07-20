import type { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BuildSelector from './BuildSelector'
import {
  badgeToneClass,
  buildOptions,
  buildTotal,
  products,
  retailerConfig,
  type BuildProduct,
} from './build-data'

export const metadata: Metadata = {
  title: { absolute: 'DIY 12V Soft Wash System Build | 5–7 GPM Parts List' },
  description:
    'A complete DIY 12V soft wash system build with Vevor 5 GPM and Remco 7 GPM options, including the tank, battery wiring, hose reel, Suttner gun, J-Rod, plumbing, bulkheads, fittings, and quick-connects.',
  alternates: {
    canonical: '/12v-softwash-build',
  },
  openGraph: {
    title: 'DIY 12V Soft Wash System Build | 5–7 GPM Parts List',
    description:
      'A complete DIY 12V soft wash system build with Vevor 5 GPM and Remco 7 GPM options, including the tank, battery wiring, hose reel, Suttner gun, J-Rod, plumbing, bulkheads, fittings, and quick-connects.',
    url: 'https://maxpressureequipment.com/12v-softwash-build',
    images: [
      {
        url: '/media/12V-Softwash-Build/REMCO7GPM.png',
        width: 1060,
        height: 1053,
        alt: 'Remco 7 GPM 12V diaphragm pump — the heart of the DIY soft wash system build',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIY 12V Soft Wash System Build | 5–7 GPM Parts List',
    description:
      'A complete DIY 12V soft wash system build with Vevor 5 GPM and Remco 7 GPM options, including the tank, battery wiring, hose reel, Suttner gun, J-Rod, plumbing, bulkheads, fittings, and quick-connects.',
  },
}

// ─── Page data ───────────────────────────────────────────────────────────────

const budgetOption = buildOptions.find((entry) => entry.id === 'budget')!
const premiumOption = buildOptions.find((entry) => entry.id === 'premium')!
const budgetTotal = buildTotal(budgetOption)
const premiumTotal = buildTotal(premiumOption)

interface AssemblyStep {
  name: string
  text: string
}

const assemblySteps: AssemblyStep[] = [
  {
    name: 'Plan the layout',
    text: 'Decide where the tank, battery, pump, and reel will be mounted before you drill or plumb anything.',
  },
  {
    name: 'Secure the tank and battery box',
    text: 'Strap and mount the tank and battery box first. Plumbing a tank that can still shift is asking for cracked fittings.',
  },
  {
    name: 'Verify the bulkhead hole diameter',
    text: 'Check the bulkhead manufacturer’s specified cutout — the nominal 3/4-inch plumbing size is not the hole size you drill.',
  },
  {
    name: 'Drill and deburr the tank opening',
    text: 'Start with a pilot hole, cut the opening with the correct hole saw, and deburr the edge carefully so the gasket seats clean.',
  },
  {
    name: 'Install the bulkhead',
    text: 'Install the bulkhead with the gasket in the correct position, and snug it down without overtightening and deforming the gasket.',
  },
  {
    name: 'Install the suction barb and braided hose',
    text: 'Thread the 90-degree barb into the bulkhead and clamp the 3/4-inch braided suction hose onto it.',
  },
  {
    name: 'Connect the suction hose to the pump inlet',
    text: 'Run the suction hose to the pump inlet adapter and clamp it. Keep the run short and unrestricted.',
  },
  {
    name: 'Install the pump outlet adapter and quick-connect',
    text: 'Install the correctly sized outlet adapter and the stainless quick-connect on the pump’s discharge side.',
  },
  {
    name: 'Prepare the discharge side',
    text: 'Get the soft wash hose, reel, gun, reducers, and J-Rod assembled and ready to connect.',
  },
  {
    name: 'Mount the switch to the battery box',
    text: 'Bolt the master switch through the battery box, and add grommets or strain relief anywhere wiring passes through.',
  },
  {
    name: 'Wire the battery, fuse, switch, and pump',
    text: 'With the battery disconnected, wire battery positive through the inline fuse to the switch, then to the pump positive. Run pump negative to the negative battery terminal. Crimp and heat-shrink every ring terminal.',
  },
  {
    name: 'Verify polarity and fitting tightness',
    text: 'Double-check positive and negative before power-up, and confirm every clamp and fitting is snug.',
  },
  {
    name: 'Test with clean water',
    text: 'Fill the tank with clean water and run the full system — never test a new build with chemical first.',
  },
  {
    name: 'Inspect everything under load',
    text: 'While it runs, check every fitting, clamp, and electrical connection for leaks, weeping, or heat.',
  },
  {
    name: 'Flush after chemical use',
    text: 'Once the system goes into service, flush the entire system with fresh water after every chemical use.',
  },
]

const orderChecklist = [
  'Confirm the pump inlet and outlet thread sizes.',
  'Confirm male versus female NPT threading on every connection.',
  'Confirm the Suttner gun’s inlet and outlet sizes.',
  'Match the J-Rod to the pump’s actual flow.',
  'Verify the bulkhead cutout diameter from the manufacturer.',
  'Confirm the switch’s continuous DC amp rating against the pump’s draw.',
  'Use the fuse size the pump manufacturer recommends.',
  'Account for total wire length when selecting wire gauge.',
  'Use chemical-compatible hose, sealant, clamps, and fittings.',
  'Verify the tank is vented and properly secured.',
  'Confirm the reel is storage-only unless its swivel is chemical rated.',
]

const maintenanceItems = [
  'Flush the pump, hose, gun, and nozzles with fresh water after sodium hypochlorite use.',
  'Do not leave bleach sitting inside the pump between jobs.',
  'Inspect clamps and suction hose regularly for air leaks — a small suction leak kills flow.',
  'Keep battery terminals clean, covered, and protected.',
  'Charge the battery appropriately instead of running it dead over and over.',
  'Inspect fuse holders, switches, and wiring for corrosion or heat damage.',
  'Rinse stainless fittings after use even though they resist corrosion better than brass.',
  'Replace damaged hose immediately — don’t tape it and hope.',
  'Store the J-Rod and gun where the fittings can’t collect dirt.',
]

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Build a DIY 12V Soft Wash System',
  description:
    'How I assembled a battery-powered 5–7 GPM soft wash system from a chemical tank, 12V diaphragm pump, bulkhead and suction plumbing, fused and switched battery wiring, soft wash hose, and a flow-matched J-Rod.',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: String(budgetTotal),
  },
  supply: [
    '12V diaphragm pump (5 or 7 GPM)',
    'Chemical tank (30–50 gallon)',
    '3/4-inch bulkhead and barb fittings',
    '3/4-inch braided suction hose with clamps',
    '12V marine battery, battery box, inline fuse, and master switch',
    '1/2-inch soft wash hose',
    'Soft wash gun and flow-matched J-Rod',
  ].map((name) => ({ '@type': 'HowToSupply', name })),
  step: assemblySteps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
}

// ─── Small icon helpers ──────────────────────────────────────────────────────

function ArrowRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function ArrowDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-3.5 h-3.5 opacity-70' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function CheckIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function DropletIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c3 4.5 6 7.6 6 10.5a6 6 0 11-12 0C6 10.6 9 7.5 12 3z" />
    </svg>
  )
}

function BoltIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function SprayIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9h7l3-2v10l-3-2H3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l3.5-2M16 12h4.5M16 16l3.5 2" />
    </svg>
  )
}

function HoseIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a8 8 0 100 16 5 5 0 100-10 2.5 2.5 0 100 5h9" />
    </svg>
  )
}

function NozzleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12h-8M13 12L6.5 7M13 12H4m9 0l-6.5 5" />
    </svg>
  )
}

function BatteryIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="9" width="18" height="10" rx="1.5" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 9V6m9 3V6" />
    </svg>
  )
}

function PowerIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v8m5.7-4.7a8 8 0 11-11.4 0" />
    </svg>
  )
}

function RingTerminalIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5V21" />
    </svg>
  )
}

function CubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m8-14l-8 4m0 10V11m0 10l-8-4V7m8 4L4 7" />
    </svg>
  )
}

function GaugeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l3.5-3.5" />
    </svg>
  )
}

function WarningIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeader({
  num,
  title,
  description,
}: {
  num: number
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <span className="flex-shrink-0 w-11 h-11 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-base font-bold rounded-xl flex items-center justify-center">
        {num}
      </span>
      <div className="min-w-0">
        <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
        {description && (
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-2 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: BuildProduct }) {
  const retailer = retailerConfig[product.retailer]
  return (
    <div className="group bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col hover:border-blue-500/40 transition-colors">
      <div className="relative bg-white border-b border-slate-200/60 aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
        />
        {product.badges && (
          <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
            {product.badges.map((badge) => (
              <span
                key={badge.label}
                className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${badgeToneClass[badge.tone]}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs text-green-400 bg-slate-900/60 border border-green-700/30 rounded px-2 py-0.5 font-mono">
            {product.approxPrice}
          </span>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${retailer.chipClass}`}>
            {retailer.chip}
          </span>
        </div>
        <h3 className="text-white font-semibold text-sm leading-snug mb-2">{product.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-3">{product.description}</p>
        {product.bullets && (
          <ul className="space-y-1.5 mb-3">
            {product.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-2">
          <a
            href={product.url}
            target="_blank"
            rel={retailer.rel}
            className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs"
          >
            {retailer.cta}
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

type FlowTone = 'cyan' | 'blue' | 'red' | 'slate'

const flowToneClass: Record<FlowTone, { pill: string; arrow: string }> = {
  cyan: { pill: 'border-cyan-400/50 text-cyan-200', arrow: 'text-cyan-400' },
  blue: { pill: 'border-blue-500/60 text-blue-200', arrow: 'text-blue-400' },
  red: { pill: 'border-red-500/60 text-red-300', arrow: 'text-red-400' },
  slate: { pill: 'border-slate-500/60 text-slate-300', arrow: 'text-slate-400' },
}

function FlowRow({ steps, tone }: { steps: string[]; tone: FlowTone }) {
  const toneClass = flowToneClass[tone]
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <Fragment key={step}>
          {index > 0 && <ArrowRightIcon className={`w-4 h-4 flex-shrink-0 ${toneClass.arrow}`} />}
          <span className={`bg-slate-900/80 border rounded-lg px-3 py-2 text-xs font-semibold ${toneClass.pill}`}>
            {step}
          </span>
        </Fragment>
      ))}
    </div>
  )
}

function FlowColumn({ steps, tone }: { steps: string[]; tone: FlowTone }) {
  const toneClass = flowToneClass[tone]
  return (
    <div className="flex flex-col items-stretch gap-1.5">
      {steps.map((step, index) => (
        <Fragment key={step}>
          {index > 0 && (
            <ArrowDownIcon className={`w-4 h-4 self-center flex-shrink-0 ${toneClass.arrow}`} />
          )}
          <span
            className={`bg-slate-900/80 border rounded-lg px-3 py-2 text-xs font-semibold text-center ${toneClass.pill}`}
          >
            {step}
          </span>
        </Fragment>
      ))}
    </div>
  )
}

function WarningBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-4 sm:px-6 sm:py-5">
      <div className="flex gap-3">
        <WarningIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="text-amber-200 text-sm leading-relaxed">
          {title && <span className="font-semibold text-amber-300">{title} </span>}
          {children}
        </div>
      </div>
    </div>
  )
}

function HeroFlowNode({
  icon,
  label,
  detail,
  boxClass,
}: {
  icon: React.ReactNode
  label: string
  detail: string
  boxClass: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${boxClass}`}
      >
        {icon}
      </span>
      <div>
        <p className="text-white text-sm font-semibold leading-tight">{label}</p>
        <p className="text-slate-500 text-xs leading-tight mt-0.5">{detail}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SoftWashBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* Minimal landing page header */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/media/logo/TRANSPARENTLOGO.png"
              alt="Max Pressure Equipment"
              width={36}
              height={36}
              className="object-contain"
            />
            <div>
              <div className="text-white font-bold text-xs leading-tight tracking-wide uppercase">
                Max Pressure Equipment
              </div>
              <div className="text-blue-400 text-xs leading-tight">
                DIY 12V Soft Wash System Build
              </div>
            </div>
          </div>
          <a
            href="https://www.tiktok.com/@maxpressurellc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-xs font-medium transition-colors"
          >
            @maxpressurellc
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative bg-slate-950"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">
                  Complete DIY Parts List
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                The <span className="text-cyan-400">5–7 GPM</span> 12V Soft Wash System
                I&apos;d Build Again
              </h1>
              <p className="text-base text-slate-300 leading-relaxed mb-4 max-w-2xl">
                This is the complete parts list and written build guide for the 12V soft wash
                system shown in my video. I&apos;ve included the exact style of pump, tank,
                hose, battery setup, fittings, quick-connects, gun, and J-Rod needed to put one
                together.
              </p>
              <div className="inline-flex items-start gap-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl px-4 py-3 mb-7 max-w-2xl">
                <SprayIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-cyan-200 text-sm leading-relaxed">
                  Watching my build video? Use this page as the complete shopping list and
                  connection guide.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#budget-build"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Build the Budget 5 GPM Setup
                  <ArrowRightIcon />
                </a>
                <a
                  href="#my-build"
                  className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  See My 7 GPM Setup
                </a>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl px-4 py-3">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1">
                    Budget build
                  </p>
                  <p className="text-green-400 text-sm font-mono font-semibold">
                    ≈${budgetTotal.toLocaleString()}+
                  </p>
                </div>
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl px-4 py-3">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1">
                    My 7 GPM build
                  </p>
                  <p className="text-green-400 text-sm font-mono font-semibold">
                    ≈${premiumTotal.toLocaleString()}+
                  </p>
                </div>
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl px-4 py-3">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1">
                    Flow options
                  </p>
                  <p className="text-cyan-300 text-sm font-semibold">5 or 7 GPM</p>
                </div>
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl px-4 py-3">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1">
                    Build difficulty
                  </p>
                  <p className="text-white text-sm font-semibold">Intermediate</p>
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mt-3">
                Totals are calculated from the part prices listed below. Tax, shipping, mounting
                hardware, extra wiring, sealant, and chemical are not included.
              </p>
            </div>

            <div className="max-w-sm mx-auto md:mx-0 w-full">
              <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6">
                <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-4">
                  The System at a Glance
                </p>
                <div className="flex flex-col">
                  <HeroFlowNode
                    icon={<DropletIcon className="w-5 h-5" />}
                    label="Chemical tank"
                    detail="30, 35, or 50 gallon"
                    boxClass="bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                  />
                  <div className="flex py-1 pl-3" aria-hidden="true">
                    <ArrowDownIcon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <HeroFlowNode
                    icon={<BoltIcon className="w-5 h-5" />}
                    label="12V pump"
                    detail="5 GPM VEVOR or 7 GPM Remco"
                    boxClass="bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                  />
                  <div className="flex py-1 pl-3" aria-hidden="true">
                    <ArrowDownIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <HeroFlowNode
                    icon={<HoseIcon className="w-5 h-5" />}
                    label="1/2″ soft wash hose"
                    detail="50 or 100 ft Flexzilla"
                    boxClass="bg-blue-500/10 border-blue-500/40 text-blue-300"
                  />
                  <div className="flex py-1 pl-3" aria-hidden="true">
                    <ArrowDownIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <HeroFlowNode
                    icon={<SprayIcon className="w-5 h-5" />}
                    label="Suttner ST-515 gun"
                    detail="With stainless quick-connects"
                    boxClass="bg-blue-500/10 border-blue-500/40 text-blue-300"
                  />
                  <div className="flex py-1 pl-3" aria-hidden="true">
                    <ArrowDownIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <HeroFlowNode
                    icon={<NozzleIcon className="w-5 h-5" />}
                    label="Flow-matched J-Rod"
                    detail="Soap and rinse nozzles"
                    boxClass="bg-blue-500/10 border-blue-500/40 text-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <div className="bg-slate-900 border-b border-slate-800/60 px-4 py-4">
        <p className="text-slate-500 text-xs leading-relaxed max-w-3xl mx-auto text-center">
          Some links on this page are Amazon affiliate links. I may earn a commission at no
          additional cost to you. I only include equipment I use, have tested, or would seriously
          consider for this build.
        </p>
      </div>

      {/* Build option selector */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div id="budget-build" className="scroll-mt-20" aria-hidden="true" />
          <div id="my-build" className="scroll-mt-20" aria-hidden="true" />
          <div className="max-w-3xl mb-8">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Pick Your Build
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Two Ways to Build It
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Same layout, same plumbing, same wiring — the difference is the pump, tank size,
              hose length, and J-Rod. Switch between the two builds to see the full parts list
              and estimated total for each. Every section below breaks these parts down in
              detail.
            </p>
          </div>
          <BuildSelector />
        </div>
      </section>

      {/* Section 1 — Choose Your Pump */}
      <section id="pumps" className="bg-slate-950 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={1}
            title="Choose Your Pump"
            description="The pump is the heart of the system and the first real decision. Both of these are 12V demand pumps — they run off the battery and build pressure when you pull the trigger."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProductCard product={products.vevorPump} />
            <ProductCard product={products.remcoPump} />
          </div>
        </div>
      </section>

      {/* Section 2 — Pick a Chemical Tank */}
      <section id="tanks" className="bg-slate-900 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={2}
            title="Pick a Chemical Tank"
            description="Thirty gallons is cheaper and easier to fit. Thirty-five is the middle ground I'd point most people to. Fifty means fewer refills but a lot more weight."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ProductCard product={products.tank30} />
            <ProductCard product={products.tank35} />
            <ProductCard product={products.tank50} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <DropletIcon className="w-4 h-4 text-cyan-400" />
                <p className="text-white text-sm font-semibold">Weight adds up fast</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                A gallon of liquid weighs roughly 8.3 pounds — a full 50 gallon tank is over 400
                pounds before you add the rest of the build. Think about where that weight sits
                on your trailer, check your trailer&apos;s capacity, and strap the tank down
                properly so it cannot shift.
              </p>
            </div>
            <WarningBox title="Venting matters.">
              A chemical tank needs appropriate venting. Never operate a sealed tank without a
              vent — the pump pulling suction on a sealed tank can collapse it, and chemical
              off-gassing needs somewhere to go.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* Section 3 — Tank Bulkhead and Suction Plumbing */}
      <section id="plumbing" className="bg-slate-950 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={3}
            title="Tank Bulkhead &amp; Suction Plumbing"
            description="This is how chemical gets out of the tank and into the pump. It's the part of the build people overthink — it's four cheap parts and one hole in the tank."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ProductCard product={products.bulkheads} />
            <ProductCard product={products.holeSaw} />
            <ProductCard product={products.suctionHose} />
            <ProductCard product={products.banjo90} />
            <ProductCard product={products.inletAdapter} />
          </div>

          <div className="mb-8">
            <WarningBox title="A 3/4-inch bulkhead does not use a 3/4-inch hole.">
              The 3/4 inch is the nominal plumbing size, not the tank cutout. Before drilling:
              check the bulkhead manufacturer&apos;s specified cutout, measure the body of the
              bulkhead you actually received, test the hole saw on scrap material if you can,
              start with a pilot hole, deburr the tank edge carefully, and don&apos;t overtighten
              the bulkhead and deform the gasket.
            </WarningBox>
          </div>

          {/* Suction path diagram */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <DropletIcon className="w-4 h-4 text-cyan-400" />
              <h3 className="text-white text-base font-bold">The Suction Path</h3>
            </div>
            <FlowRow
              tone="cyan"
              steps={[
                'Chemical tank',
                '3/4″ bulkhead',
                '3/4″ barb',
                '3/4″ braided hose',
                'Pump inlet barb',
                'Pump',
              ]}
            />
            <p className="text-slate-400 text-xs leading-relaxed mt-4">
              The suction side is intentionally oversized. Running 3/4-inch plumbing all the way
              to the pump inlet reduces restriction feeding the pump — a starved suction side is
              the fastest way to make a good pump perform badly. Keep this path short, sealed,
              and unrestricted, and let the pump do the work.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7">
            <h3 className="text-white text-base font-bold mb-4">Suction-Side Rules I Follow</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
              {[
                'Keep the suction run as short and unrestricted as practical.',
                'Avoid unnecessary reducers before the pump.',
                'Use chemical-compatible fittings — this line lives in SH mix.',
                'Verify the exact pump port size before ordering fittings.',
                'Use thread sealant or PTFE products rated for the chemical being used.',
                'Hose clamps should be snug, not cutting or crushing the hose.',
                'A drop tube inside the tank works when the bulkhead arrangement requires it.',
                'Verify your exact tank, bulkhead, and pump threading before buying anything.',
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 — Battery, Box, Fuse, Switch, and Wiring */}
      <section id="electrical" className="bg-slate-900 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={4}
            title="Battery, Box, Fuse, Switch &amp; Wiring"
            description="The electrical side is simple: battery, fuse, switch, pump. Doing it cleanly — crimped terminals, a real fuse, a mounted switch — is what separates a system that lasts from one that dies mid-job."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ProductCard product={products.battery} />
            <ProductCard product={products.batteryBoxPlastic} />
            <ProductCard product={products.batteryBoxSteel} />
            <ProductCard product={products.ringTerminals} />
            <ProductCard product={products.switch} />
            <ProductCard product={products.fuseHolder} />
          </div>

          {/* Wiring diagram */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BoltIcon className="w-4 h-4 text-red-400" />
              <h3 className="text-white text-base font-bold">The Wiring Path</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Positive side
                </p>
                <FlowRow
                  tone="red"
                  steps={['Battery positive (+)', 'Inline fuse', 'Master on/off switch', 'Pump positive (+)']}
                />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Negative side
                </p>
                <FlowRow tone="slate" steps={['Battery negative (−)', 'Pump negative (−)']} />
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mt-5">
              The pump has a positive and a negative wire. The negative wire runs directly back
              to the battery&apos;s negative terminal. On the positive side, I run the wire
              through an inline fuse first, then through the master on/off switch mounted to the
              battery box, and finally to the pump&apos;s positive wire. That lets me shut the
              entire system off from the battery box instead of disconnecting the battery every
              time.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mt-3">
              I demonstrate this wiring in the full build video, while the diagram above shows
              the exact order of the components.
            </p>
          </div>

          {/* What each electrical part does */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7 mb-8">
            <h3 className="text-white text-base font-bold mb-5">What Each Electrical Part Does</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: <BatteryIcon className="w-5 h-5" />,
                  name: 'Marine battery',
                  role: 'Supplies the 12V power for the entire system.',
                },
                {
                  icon: <BoltIcon className="w-5 h-5" />,
                  name: 'Inline fuse',
                  role: 'Protects the wiring and pump circuit if something shorts.',
                },
                {
                  icon: <PowerIcon className="w-5 h-5" />,
                  name: 'Master switch',
                  role: 'Lets you shut the whole system off right at the battery box.',
                },
                {
                  icon: <RingTerminalIcon className="w-5 h-5" />,
                  name: 'Heat-shrink terminals',
                  role: 'Create cleaner, more corrosion-resistant connections.',
                },
                {
                  icon: <CubeIcon className="w-5 h-5" />,
                  name: 'Battery box',
                  role: 'Protects and secures the battery on the trailer.',
                },
                {
                  icon: <GaugeIcon className="w-5 h-5" />,
                  name: 'Pump pressure switch',
                  role: 'Built into the demand pump — automatically stops it when you release the gun.',
                },
              ].map((part) => (
                <div
                  key={part.name}
                  className="flex items-start gap-3 bg-slate-900/50 border border-slate-700/40 rounded-xl px-4 py-3.5"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 flex items-center justify-center">
                    {part.icon}
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{part.name}</p>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1">{part.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wiring walkthrough */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7 mb-8">
            <h3 className="text-white text-base font-bold mb-4">How I&apos;d Wire It, Step by Step</h3>
            <ol className="space-y-2.5">
              {[
                'Disconnect the battery before starting.',
                'Identify the pump’s positive and negative wires.',
                'Connect the pump’s negative wire to the battery’s negative terminal using a properly crimped and heat-shrunk ring terminal.',
                'Install the inline fuse holder on the positive side as close to the battery as reasonably practical.',
                'Connect the battery side of the fuse holder to the positive battery terminal.',
                'Connect the other side of the fuse holder to one terminal of the master switch.',
                'Run a second positive wire from the other switch terminal to the pump’s positive wire.',
                'Use properly sized heat-shrink butt connectors or ring terminals at every connection.',
                'Secure the wires so they can’t rub against sharp metal, contact moving parts, sit in standing water, or be exposed to chemical leaks.',
                'Use grommets or strain relief wherever wiring passes through the battery box.',
                'Confirm positive and negative polarity before reconnecting the battery.',
                'Test the system using clean water before adding sodium hypochlorite.',
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <WarningBox title="Electrical honesty check.">
            Use the fuse amperage your pump manufacturer recommends — I&apos;m not going to
            invent a number for you. Verify the switch&apos;s continuous 12V DC amp rating
            before running the pump&apos;s full current through it; if it isn&apos;t rated for
            it, use a properly rated relay or contactor. Don&apos;t undersize the wire — final
            wire gauge depends on the pump&apos;s current draw and your total wire length, and
            the 10-gauge kit here is what this example build used, not a universal answer. Cover
            the battery terminals, secure the battery, and keep bleach, water, and electrical
            connections separated. This is an educational overview, not a substitute for a
            qualified marine or automotive electrician.
          </WarningBox>
        </div>
      </section>

      {/* Section 5 — Hose and Storage Reel */}
      <section id="hose-reel" className="bg-slate-950 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={5}
            title="Hose &amp; Storage Reel"
            description="Half-inch hose is the standard for a 12V soft wash setup. Pick the length that matches how far you park from the houses you wash."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <ProductCard product={products.hose50} />
            <ProductCard product={products.hose100} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ProductCard product={products.reel} />
            <ProductCard product={products.reelAdapter34F12M} />
            <ProductCard product={products.reelAdapter12F12F} />
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                To be clear about how I use the reel: it&apos;s{' '}
                <span className="text-white font-semibold">storage, not plumbing</span>. I use
                the two adapters above so the hose connects neatly to the reel and stays wound
                and organized between jobs — I&apos;m not claiming chemical flows through the
                reel&apos;s swivel, and you shouldn&apos;t assume it can unless your exact model
                is confirmed to have a chemical-rated live swivel.
              </p>
            </div>
            <WarningBox>
              Thread direction and gender vary between reels and hose ends. Compare the actual
              reel port and hose fitting in your hand before ordering these adapters. Do not
              force NPT fittings together.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* Section 6 — Pump Outlet Quick-Connect */}
      <section id="outlet-qc" className="bg-slate-900 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={6}
            title="Pump Outlet Quick-Connect"
            description="A small upgrade that makes the whole system nicer to live with. One click and the hose is off the pump."
          />
          {/* Discharge path diagram */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <SprayIcon className="w-4 h-4 text-blue-400" />
              <h3 className="text-white text-base font-bold">The Discharge Path</h3>
            </div>
            <FlowRow
              tone="blue"
              steps={[
                'Pump outlet',
                'Correctly sized threaded adapter',
                'Stainless quick-connect',
                '1/2″ Flexzilla hose',
                'Suttner ST-515',
                'Stainless quick-connect',
                'Flow-matched J-Rod',
              ]}
            />
            <p className="text-slate-400 text-xs leading-relaxed mt-4">
              This is where the system transitions from the oversized 3/4-inch suction plumbing
              down to the 1/2-inch discharge hose. I demonstrate this connection in the full
              build video, while the diagram above shows the exact order of the components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-6">
              <h3 className="text-white text-base font-bold mb-3">Why I Added the Quick-Connect</h3>
              <ul className="space-y-1.5">
                {[
                  'Faster setup and breakdown on every job.',
                  'Easier hose removal without wrenches.',
                  'Easier pump storage or replacement.',
                  'Cleaner trailer organization — the hose, pump, gun, and J-Rod all separate for storage.',
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-6">
              <h3 className="text-white text-base font-bold mb-3">Verify Before You Order</h3>
              <ul className="space-y-1.5">
                {[
                  'Your pump outlet thread size.',
                  'Male versus female thread.',
                  'Hose fitting size.',
                  'Quick-connect plug versus socket orientation.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <WarningIcon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <WarningBox>
            Stainless resists corrosion better than brass, but it still needs a fresh-water
            rinse after sodium hypochlorite exposure. Don&apos;t skip it because the fitting is
            &ldquo;stainless.&rdquo;
          </WarningBox>
        </div>
      </section>

      {/* Section 7 — Suttner Gun, Quick-Connects, and J-Rod */}
      <section id="gun-jrod" className="bg-slate-950 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={7}
            title="Suttner Gun, Quick-Connects &amp; J-Rod"
            description="The business end of the system. Quick-connects on the gun mean I can pull the J-Rod off in seconds, swap nozzle assemblies, and break the whole thing down without unscrewing fittings all day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-6">
              <h3 className="text-white text-base font-bold mb-3">What the Quick-Connects Get Me</h3>
              <ul className="space-y-1.5">
                {[
                  'Remove the J-Rod quickly between houses.',
                  'Change nozzle assemblies without tools.',
                  'Store the gun more easily.',
                  'Disconnect the hose without unscrewing fittings repeatedly.',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="text-slate-400 text-xs leading-relaxed mt-4">
                I show the assembled gun setup in the full build video — the Gun &amp; Nozzle
                diagram further down this page shows the exact connection order.
              </p>
            </div>
            <WarningBox>
              Confirm the inlet and outlet threads on your exact Suttner gun before ordering.
              Suttner models, hose ends, and quick-connect kits may use different thread sizes
              or genders. I believe the fittings below correspond to my setup, but I&apos;m not
              going to guarantee compatibility with yours sight unseen.
            </WarningBox>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard product={products.gun} />
            <ProductCard product={products.jrod56} />
            <ProductCard product={products.jrod78} />
            <ProductCard product={products.qcKit} />
            <ProductCard product={products.reducers} />
          </div>
        </div>
      </section>

      {/* Section 8 — How the Complete System Connects */}
      <section id="how-it-connects" className="bg-slate-900 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={8}
            title="How the Complete System Connects"
            description="Every connection in the system, no photos required. Cyan is chemical draw, blue is discharge, red is switched positive power, gray is negative."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <DropletIcon className="w-4 h-4 text-cyan-400" />
                <h3 className="text-cyan-300 text-sm font-bold uppercase tracking-wider">
                  Chemical Flow
                </h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                From the tank, through the oversized suction side, into the pump, and out to the
                discharge hose.
              </p>
              <FlowColumn
                tone="cyan"
                steps={[
                  'Chemical tank',
                  '3/4″ bulkhead',
                  '3/4″ barb',
                  '3/4″ braided suction hose',
                  'Pump inlet barb',
                  '5 or 7 GPM pump',
                  'Outlet adapter + quick-connect',
                  '1/2″ Flexzilla hose',
                ]}
              />
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <BoltIcon className="w-4 h-4 text-red-400" />
                <h3 className="text-red-300 text-sm font-bold uppercase tracking-wider">
                  Electrical Power
                </h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Fused positive through the master switch; negative straight back to the battery.
              </p>
              <FlowColumn
                tone="red"
                steps={['Marine battery (+)', 'Inline fuse', 'Master switch', 'Pump positive (+)']}
              />
              <div className="mt-4">
                <FlowColumn tone="slate" steps={['Battery negative (−)', 'Pump negative (−)']} />
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <SprayIcon className="w-4 h-4 text-blue-400" />
                <h3 className="text-blue-300 text-sm font-bold uppercase tracking-wider">
                  Gun &amp; Nozzle Setup
                </h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                The business end — quick-connects on both sides of the gun so everything
                separates for storage. The reel stays storage-only.
              </p>
              <FlowColumn
                tone="blue"
                steps={[
                  '1/2″ Flexzilla hose',
                  'Stainless quick-connect',
                  'Suttner ST-515',
                  'Stainless quick-connect',
                  'Flow-matched J-Rod',
                  'Soap & rinse nozzles',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Step-by-Step Assembly Order */}
      <section id="assembly" className="bg-slate-950 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={9}
            title="Step-by-Step Assembly Order"
            description="The order matters — mount before you plumb, plumb before you wire, and test with clean water before chemical ever touches the tank."
          />
          <ol className="space-y-3">
            {assemblySteps.map((step, index) => (
              <li
                key={step.name}
                className="flex items-start gap-4 bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-4"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-sm font-bold rounded-lg flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">{step.name}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 10 — My Exact Build vs. The Cheapest Build */}
      <section id="comparison" className="bg-slate-900 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={10}
            title="My Exact Build vs. The Cheapest Build"
            description="Same skeleton, different spend. Here's exactly where the extra money goes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                    Cheapest Build
                  </p>
                  <h3 className="text-white text-xl font-bold">Budget 5 GPM</h3>
                </div>
                <span className="text-green-400 text-sm font-mono bg-slate-900/70 border border-green-700/30 rounded-lg px-3 py-1.5 whitespace-nowrap">
                  ≈${budgetTotal.toLocaleString()}+
                </span>
              </div>
              <ul className="space-y-2">
                {[
                  'VEVOR 5 GPM pump',
                  '30-gallon drum tank',
                  'Plastic battery box',
                  '50-foot 1/2-inch hose',
                  'Storage reel',
                  'Suttner ST-515 gun',
                  '5–6 GPM J-Rod',
                  'Same wiring, bulkhead, suction hose, and fitting kit as my build',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <CheckIcon className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#budget-build"
                className="mt-5 inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-xs"
              >
                See the Budget Parts List
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 via-slate-800/60 to-slate-800/60 border border-blue-500/40 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    What I Actually Run
                  </p>
                  <h3 className="text-white text-xl font-bold">My 7 GPM Build</h3>
                </div>
                <span className="text-green-400 text-sm font-mono bg-slate-900/70 border border-green-700/30 rounded-lg px-3 py-1.5 whitespace-nowrap">
                  ≈${premiumTotal.toLocaleString()}+
                </span>
              </div>
              <ul className="space-y-2">
                {[
                  'Remco 7 GPM FatBoy pump',
                  '35-gallon tank (or 50 for capacity)',
                  '12V marine battery',
                  'Mounted master switch + inline fuse',
                  '100-foot 1/2-inch hose',
                  'Storage reel',
                  'Suttner ST-515 with stainless quick-connects',
                  '7–8 GPM J-Rod',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#my-build"
                className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-xs"
              >
                See My Full Parts List
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl px-6 py-5">
            <p className="text-blue-200 text-sm leading-relaxed">
              <span className="font-semibold text-blue-300">My recommendation:</span> If you are
              brand new and unsure how much soft washing you&apos;ll do, start with the 5 GPM
              build. If you&apos;re already booking house washes and want more application speed
              and reach, I&apos;d spend the extra money on the Remco.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11 — Before You Order */}
      <section id="before-you-order" className="bg-slate-950 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={11}
            title="Before You Order Anything"
            description="Run through this list first. Most 'the parts don't fit' problems come from skipping one of these checks."
          />
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {orderChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 border border-amber-500/50 rounded flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3 h-3 text-amber-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 12 — Cleaning and Maintenance */}
      <section id="maintenance" className="bg-slate-900 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            num={12}
            title="Cleaning &amp; Maintenance"
            description="A 12V system is cheap to build and cheap to keep alive — if you flush it. Bleach left sitting in a pump is the number one killer of these setups."
          />
          <div className="space-y-3">
            {maintenanceItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-4"
              >
                <DropletIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
            The Whole Build, One Page
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Build It Once. Keep It Simple. Start Washing.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            This is the basic 12V system I&apos;d put together for someone who wants professional
            soft wash flow without buying a full prebuilt skid.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href="#budget-build"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Shop the Budget Build
              <ArrowRightIcon />
            </a>
            <a
              href="#my-build"
              className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Shop My 7 GPM Build
              <ArrowRightIcon />
            </a>
            <Link
              href="/beginner-setup"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Back to Beginner Gear Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-slate-950 border-t border-slate-800/60 px-4 py-5 text-center">
        <p className="text-slate-600 text-xs leading-relaxed max-w-xl mx-auto">
          As an Amazon Associate I earn from qualifying purchases. Some links on this page are
          affiliate links — I may earn a commission at no extra cost to you. Prices are estimates
          and may change; click through for current pricing.
        </p>
      </div>
    </>
  )
}
