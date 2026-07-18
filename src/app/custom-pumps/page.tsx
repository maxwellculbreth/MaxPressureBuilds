import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Pressure Washer Pumps',
  description:
    'Recommended pressure washer pumps for custom skid builds, trailer builds, replacement pumps, and machine upgrades, including direct-drive and gear-driven Canpump options.',
  alternates: {
    canonical: '/custom-pumps',
  },
  openGraph: {
    title: 'Custom Pressure Washer Pumps | Max Pressure Equipment',
    description:
      'Recommended pressure washer pumps for custom skid builds, trailer builds, replacement pumps, and machine upgrades, including direct-drive and gear-driven Canpump options.',
    url: 'https://maxpressureequipment.com/custom-pumps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Pressure Washer Pumps | Max Pressure Equipment',
    description:
      'Recommended pressure washer pumps for custom skid builds, trailer builds, replacement pumps, and machine upgrades, including direct-drive and gear-driven Canpump options.',
  },
}

// ─── Pump data — swap links or add picks here ────────────────────────────────

interface PumpCard {
  title: string
  image: string
  url: string
  price: string
  specs: string[]
  note: string
}

const customBuildPumps: PumpCard[] = [
  {
    title: 'Canpump CE 3650 GB/GBP — 3600 PSI @ 4.4 GPM Gear Driven Pump',
    image: '/media/pumps/4.4GPMSAVED.jpg',
    url: 'https://www.canpump.com/canpump-3600-psi-4-4-us-gpm-1-in-shaft-pressure-washer-pump-w-gearbox/?ref=qraopqpr',
    price: '$420',
    specs: ['3600 PSI', '4.4 GPM', '1-inch shaft', 'Gearbox reduction system'],
    note: "Good gear-driven option around the 4–4.5 GPM range. I'd look at this if you want something more serious than a basic homeowner setup but don't need huge flow yet.",
  },
  {
    title: 'Canpump CF 3257 G — 3200 PSI @ 5.7 GPM Direct Drive Pump',
    image: '/media/pumps/5.7SAVED.jpg',
    url: 'https://www.canpump.com/canpump-3200-psi-5-7-us-gpm-1-in-shaft-pressure-washer-pump/?ref=qraopqpr',
    price: '$285',
    specs: ['3200 PSI', '5.7 GPM', '1-inch shaft', 'Direct drive'],
    note: "Strong flow for the money, but remember direct-drive pumps can be pickier about water supply. Make sure your inlet plumbing and water feed are dialed if you're trying to pull from a buffer tank.",
  },
  {
    title: 'Canpump CF 3647 G — 3600 PSI @ 4.7 GPM Direct Drive Pump',
    image: '/media/pumps/4.7GPMSAVED.jpg',
    url: 'https://www.canpump.com/canpump-3600-psi-4-7-us-gpm-1-in-shaft-pressure-washer-pump/?ref=qraopqpr',
    price: '$235',
    specs: ['3600 PSI', '4.7 GPM', '1-inch shaft', 'Direct drive'],
    note: "Solid lower-cost direct-drive pump option if you're trying to repair or build a smaller machine. Just make sure the mounting, shaft, unloader, and inlet/outlet plumbing match what you're building.",
  },
  {
    title: 'Canpump CF 4040 G — 4000 PSI @ 4 GPM Direct Drive Pump',
    image: '/media/pumps/4GPMsaved.jpg',
    url: 'https://www.canpump.com/canpump-cf-4040-g-4000-psi-4-us-gpm-1-in-shaft-pressure-washer-pump/?ref=qraopqpr',
    price: '$340',
    specs: ['4000 PSI', '4.0 GPM', '1-inch shaft', 'Direct drive'],
    note: "Basic replacement/custom build pump for a 4 GPM style setup. Good if you're trying to build or repair a smaller machine, but still make sure the shaft, mounting, unloader, and plumbing match your engine/setup.",
  },
  {
    title: 'Canpump CT 4066 GB — 4000 PSI @ 6.61 GPM Gear Driven Pump',
    image: '/media/pumps/6.6GPMSAVED.jpg',
    url: 'https://www.canpump.com/canpump-ct-4066-gb-4000-psi-6-61-us-gpm-1-in-shaft-pressure-washer-pump-gearbox/?ref=qraopqpr',
    price: '$640',
    specs: ['4000 PSI', '6.61 GPM', '1-inch shaft', 'Gearbox reduction system'],
    note: "Good middle ground between a beginner 4–5 GPM machine and a huge 9+ GPM build. This is the kind of pump I'd consider for a serious trailer/skid upgrade.",
  },
  {
    title: 'Canpump CT 3510 GB — 3500 PSI @ 9.2 GPM Gear Driven Pump',
    image: '/media/pumps/9.2GPMSAVED.jpg',
    url: 'https://www.canpump.com/canpump-ct-3510-gb-3500-psi-9-2-us-gpm-1-in-shaft-industrial-high-pressure-pump-w-gearbox/?ref=qraopqpr',
    price: '$820',
    specs: ['3500 PSI', '9.2 GPM', '1-inch shaft', 'Gearbox reduction system'],
    note: "This is big flow. Not what I'd tell a random beginner to buy first, but if you're building a serious rig, 9.2 GPM is where production speed gets real. Make sure your plumbing, buffer tank, bypass, unloader, and engine setup are ready for it.",
  },
]

const directDrivePumps = customBuildPumps.filter((pump) => pump.specs.includes('Direct drive'))
const gearDrivenPumps = customBuildPumps.filter((pump) =>
  pump.specs.includes('Gearbox reduction system')
)

// ─── Pump card ────────────────────────────────────────────────────────────────

function PumpCardItem({ pump }: { pump: PumpCard }) {
  return (
    <div className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col">
      <div className="bg-white flex-shrink-0 flex items-center justify-center p-5" style={{ height: '230px' }}>
        <img
          src={pump.image}
          alt={pump.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs text-green-400 bg-slate-900/60 border border-green-700/30 rounded px-2 py-0.5 font-mono">
            {pump.price}
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-900/50 text-green-300 border border-green-700/50">
            Canpump partner link
          </span>
        </div>
        <h3 className="text-white font-semibold text-sm leading-snug mb-3">
          {pump.title}
        </h3>
        <ul className="space-y-1.5 mb-4">
          {pump.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>
        <p className="text-slate-400 text-xs leading-relaxed mb-5 flex-1">{pump.note}</p>
        <a
          href={pump.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs"
        >
          View on Canpump
          <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CustomPumpsPage() {
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
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Advanced Builds
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Custom Pressure Washer Pumps
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Recommended pumps for custom pressure washer builds, trailer setups, skid builds,
              and machine upgrades.
            </p>
            <Link
              href="/beginner-setup"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Beginner Gear Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Build Pumps */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom Build Pumps I&apos;d Run (Or Currently Run)
            </h2>
            <p className="text-slate-400 mb-8">
              These are the Canpump pumps I&apos;d look at if you&apos;re building your own skid,
              trailer, or upgrading from a basic pressure washer. These are more advanced than
              buying a ready-to-run machine, so do your research before ordering. I have some
              resources linked below these pumps.
            </p>

            <div className="space-y-4 mb-8 text-slate-300 text-sm leading-relaxed">
              <p>
                A replacement pump or custom pump setup can be a great move once you understand
                what you&apos;re building, but I would not tell a brand-new beginner to randomly
                buy one without knowing how it mounts, what engine shaft it fits, what
                gearbox/direct drive setup it uses, and what plumbing/unloader setup it needs.
              </p>
              <p>
                <span className="text-white font-semibold">Direct drive pumps</span> usually bolt
                directly to the engine shaft and spin at engine speed. They&apos;re simple and
                compact, but pulling from a buffer tank can be more annoying because they
                generally like to be force-fed or supplied really well.
              </p>
              <p>
                <span className="text-white font-semibold">Gear-driven pumps</span> still slide
                onto a 1-inch engine shaft, but the gearbox reduces pump speed. In my experience,
                gear-drive setups are a sweet spot for trailer/skid builds because they can pull
                from a buffer tank with less headache than many direct-drive setups, while
                avoiding the extra pulley/belt alignment work of belt drive.
              </p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-6 py-5">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-amber-200 text-sm leading-relaxed">
                  Before buying one of these, watch an install video and make sure you understand
                  shaft size, mounting, keyway, unloader, inlet/outlet plumbing, and whether your
                  engine has enough horsepower.
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-xs mb-5">
            Prices shown are listed Canpump prices from when this page was added. Click through to confirm current pricing and availability.
          </p>

          <h3 className="text-2xl font-bold text-white mb-6">Direct-Drive Pumps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-14">
            {directDrivePumps.map((pump) => (
              <PumpCardItem key={pump.url} pump={pump} />
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-6">Gear-Driven Pumps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
            {gearDrivenPumps.map((pump) => (
              <PumpCardItem key={pump.url} pump={pump} />
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </p>
            <div className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden divide-y divide-slate-700/50">
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-sm leading-snug">
                    How To Install A Horizontal Pressure Washer Pump
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">Allparts Equipment &amp; Accessories</p>
                </div>
                <a
                  href="https://youtu.be/eqt--PjCEsE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778C2.01 8.741 2 12 2 12s.01 3.271.403 4.814a2.504 2.504 0 0 0 1.766 1.763c1.567.43 7.831.423 7.831.423s6.265.007 7.831-.403a2.51 2.51 0 0 0 1.762-1.767C21.99 15.26 22 12 22 12s-.01-3.259-.407-4.797zM10 15V9l5.196 3L10 15z"/>
                  </svg>
                  Watch install video
                </a>
              </div>
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-sm leading-snug">
                    How to Mount a Gearbox to an Engine Shaft
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5 max-w-xs">
                    MPWSR / Thomas Moore — Useful for understanding shaft size, keyway, alignment, and mounting before buying a gear-drive pump.
                  </p>
                </div>
                <a
                  href="https://mpwsr.com/blogs/news/installation-guide-pa-b-18-b-24-b-31-gear-box-assembly-to-machine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs whitespace-nowrap"
                >
                  Read gearbox guide
                  <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-slate-950 border-t border-slate-800/60 px-4 py-5 text-center">
        <p className="text-slate-600 text-xs leading-relaxed max-w-xl mx-auto">
          As an Amazon Associate I earn from qualifying purchases. Some links on this page are affiliate links — I may earn a commission at no extra cost to you. Prices are estimates and may change; click through for current pricing.
        </p>
      </div>
    </>
  )
}
