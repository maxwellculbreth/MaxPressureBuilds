import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "What I'd Buy Again Starting a Pressure Washing Business",
  description:
    "The beginner pressure washing gear I'd actually buy again — ranked by buy order, built around real field experience running Max Pressure from the ground up.",
  openGraph: {
    title: "What I'd Buy Again Starting a Pressure Washing Business",
    description:
      "Skip the trial and error. Here's the exact beginner setup I'd build again if I was starting Max Pressure from scratch.",
    url: 'https://maxpressureequipment.com/beginner-setup',
  },
}

// ─── Product data — swap links or add picks here ─────────────────────────────

type Badge = 'no-commission' | 'canpump' | 'amazon'

interface Pick {
  title: string
  note: string
  url: string
  badge: Badge
}

interface BuyOrderItem {
  num: number
  title: string
  description: string
  picks: Pick[]
}

const beginnerBuyOrder: BuyOrderItem[] = [
  {
    num: 1,
    title: '4–5 GPM Pressure Washer',
    description:
      "This is the first real decision. If you're trying to make money, I would skip tiny electric units and start with a serious gas machine. A 4–5 GPM unit is enough for beginner residential house washes, driveways, patios, and sidewalks without jumping straight into a huge trailer build.",
    picks: [
      {
        title: 'Harbor Freight Predator 4400 PSI / 4.2 GPM Commercial Duty Pressure Washer',
        note: "Budget-friendly first serious washer. Good if you want local pickup and a lower upfront cost. I'd consider this if you're starting lean and need to get working fast.",
        url: 'https://www.harborfreight.com/4400-psi-42-gpm-13-hp-420cc-commercial-duty-pressure-washer-epa-71102.html',
        badge: 'no-commission',
      },
      {
        title: 'Canpump Belt Drive 5 GPM Pressure Washer — 13 HP Loncin',
        note: 'My stronger pick if you want to start closer to a professional setup. 5 GPM helps you work faster, and belt drive is a better direction if you plan to build a trailer or skid setup.',
        url: 'https://www.canpump.com/canpump-belt-drive-pressure-washer-13-hp-loncin-engine-triplex-pump/?ref=qraopqpr',
        badge: 'canpump',
      },
    ],
  },
  {
    num: 2,
    title: '16–21 Inch Surface Cleaner',
    description:
      'This is what makes flatwork profitable. Wand-cleaning an entire driveway is slow. A surface cleaner lets you clean driveways, patios, and sidewalks faster and more consistently.',
    picks: [
      {
        title: 'Canpump 21 Inch Stainless Steel Surface Cleaner',
        note: "My bigger surface cleaner pick for a 5 GPM setup. Better for production work, driveways, and larger concrete areas.",
        url: 'https://www.canpump.com/canpump-stainless-steel-surface-cleaner-4000-psi/?ref=qraopqpr',
        badge: 'canpump',
      },
      {
        title: '18 Inch WOJET Surface Cleaner',
        note: "Good smaller option for a 4 GPM beginner setup. Easier to handle and a better match if you're not running a higher-flow machine yet.",
        url: 'https://www.amazon.com/dp/REPLACE-WOJET-ASIN?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 3,
    title: '100–200 Ft High Pressure Hose',
    description:
      "Extra hose saves time because you don't have to drag the pressure washer around every corner of the house. For paid jobs, 100–200 ft of hose makes you look and work more professionally.",
    picks: [
      {
        title: 'POHIR Blue High Pressure Hose',
        note: 'Good beginner-friendly blue pressure hose option. Before ordering, verify the length, fitting size, PSI rating, and whether you need 3/8 quick connects for your setup.',
        url: 'https://www.amazon.com/dp/B0C69298VP?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 4,
    title: 'Ball Valve and Quick Connects',
    description:
      'A ball valve is one of the first upgrades that makes your setup feel professional. It lets you control water flow and swap from gun to surface cleaner faster without walking back to the machine every time.',
    picks: [
      {
        title: 'MTM Hydro DN10 Ball Valve',
        note: "This is the style of ball valve I'd want in a beginner setup. Make sure your fittings match your hose, gun, and surface cleaner setup. Keep extra O-rings around because quick connects will leak eventually.",
        url: 'https://www.amazon.com/dp/B07LCSWL4Y?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 5,
    title: 'Downstream Injector',
    description:
      'A downstream injector lets you apply house wash mix through your pressure washer line. This is the simple beginner way to start soft washing siding before you overcomplicate your setup.',
    picks: [
      {
        title: 'Canpump Adjustable Chemical Injector — 5 GPM / 2.1 mm',
        note: "My pick for a 5 GPM setup. Match your injector/orifice to your machine's flow so it pulls chemical properly.",
        url: 'https://www.canpump.com/adjustable-chemical-injector-4500-psi-5-us-gpm-2-1-mm-orifice-qc-socket-inlet-general-pump-style/?ref=qraopqpr',
        badge: 'canpump',
      },
      {
        title: 'General Pump Chemical Injector 100775',
        note: "Common downstream injector option. Good to test if you're building a simple beginner house wash setup. Hose length, injector size, and nozzle choice can affect whether it pulls well.",
        url: 'https://www.amazon.com/dp/B01JB6D23K?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 6,
    title: 'J-Rod / Shooter Tips',
    description:
      "A J-rod keeps your main soap and rinse tips together so you're not digging through loose nozzles on every job. This is especially useful for house washing.",
    picks: [
      {
        title: 'Jariko J-Rod Nozzle Kit — 4 GPM',
        note: 'Good starter J-rod for a 4 GPM machine. If you move to 5 GPM, make sure your nozzles are sized correctly for your machine.',
        url: 'https://www.amazon.com/dp/B09RV52WGP?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 7,
    title: 'PPE and Safety Gear',
    description:
      "Do not skip safety gear. When you're working with house wash mix, bleach, surfactant, or hot chemical batches, you need eye protection, gloves, and respiratory protection where appropriate.",
    picks: [
      {
        title: 'Clear Safety Goggles',
        note: 'Basic eye protection for mixing, spraying, and rinsing around chemicals. Eye protection is cheap compared to a chemical splash.',
        url: 'https://www.amazon.com/dp/B0G7YLYCNB?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'Disposable Nitrile Gloves',
        note: 'Useful when mixing chemicals, handling injectors, or dealing with stronger batches. Keep a box on the truck.',
        url: 'https://www.amazon.com/dp/B0C3SSXL4K?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: '3M Reusable Respirator',
        note: "Useful baseline respirator option for chemical work, but users should verify the cartridges are rated for the exact chemicals they're using by checking the SDS and manufacturer specs. Never mix chemicals and avoid breathing fumes.",
        url: 'https://www.amazon.com/dp/B01H0S90QE?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 8,
    title: 'Pump Sprayer',
    description:
      'A pump sprayer is useful for spot treating, applying small chemical batches, touching up problem areas, and handling small jobs without pulling out a full soft wash system.',
    picks: [
      {
        title: 'Chapin 1 Gallon Bleach/Disinfectant Sprayer',
        note: 'Good small sprayer for bleach-compatible spot treatment and simple beginner use.',
        url: 'https://www.amazon.com/dp/B00295QD96?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'Chapin 2 Gallon Sprayer Two Pack',
        note: "Good if you want extra capacity or want separate sprayers for different uses. Label your sprayers and don't cross-contaminate chemicals.",
        url: 'https://www.amazon.com/dp/B0C7LY7NV4?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 9,
    title: 'Hose Reel / Storage Upgrades',
    description:
      "Hose reels are not required on day one, but they make you look cleaner, save time, and help keep your trailer or skid from becoming a mess.",
    picks: [
      {
        title: 'VEVOR Wall Mounted Garden Hose Reel',
        note: "Cheap garden hose reel option I'd consider bolting onto a trailer or skid. Verify fitting size and mounting before ordering.",
        url: 'https://www.amazon.com/dp/B0F5NL3SC8?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'MINGLE High Pressure Hose Reel',
        note: 'Cheap high pressure hose reel similar to the type I started with. Make sure the pressure rating, hose capacity, and fittings match your setup.',
        url: 'https://www.amazon.com/dp/B09Q8PPMPK?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
]

// ─── Badge config ─────────────────────────────────────────────────────────────

const badgeConfig: Record<Badge, { label: string; className: string }> = {
  'no-commission': {
    label: 'No commission',
    className: 'bg-slate-700/80 text-slate-300 border border-slate-600/60',
  },
  canpump: {
    label: 'Canpump partner link',
    className: 'bg-green-900/50 text-green-300 border border-green-700/50',
  },
  amazon: {
    label: 'Amazon paid link',
    className: 'bg-orange-900/40 text-orange-300 border border-orange-700/40',
  },
}

// ─── Other page data ──────────────────────────────────────────────────────────

const softWashItems = [
  { title: 'Chemical-Resistant Gloves', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Safety Glasses / Face Shield', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Respirator or Mask', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Pump Sprayer', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: '12V Soft Wash Pump', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Soft Wash Hose', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Nozzle Tips', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Measuring Containers', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
]

const organizeItems = [
  { title: 'Pressure Hose Reel', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Garden Hose Reel', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Contractor-Grade Garden Hose', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Hose Guides / Corner Guards', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Toolbox or Parts Organizer', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Spare O-Rings', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Spare Nozzles', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
  { title: 'Teflon Tape / Thread Sealant', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=maxpressure45-20' },
]

const wouldntBuy = [
  'Giant trailer build before having customers',
  'Overpriced chemical systems before understanding downstreaming',
  'Tiny electric pressure washers for business use',
  'Random cheap spray guns with bad fittings',
  'Cheap surface cleaners that wobble or leave stripes',
  'Too many accessories before mastering the basics',
]

const starterSetup = [
  '4–5 GPM gas pressure washer',
  '16–21 inch surface cleaner',
  '100–200 ft pressure hose',
  'Ball valve and quick connects',
  'Downstream injector',
  'J-rod / shooter tips',
  'PPE and safety gear',
  'Pump sprayer',
  'Hose reel / storage upgrades',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BeginnerSetupPage() {
  return (
    <>
      {/* Minimal landing page header */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
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
                Beginner Pressure Washing Gear List
              </div>
            </div>
          </div>
          <a
            href="https://www.tiktok.com/@maxpressurellcllc"
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">
              From Max Pressure — Built on Real Experience
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            The Gear I&apos;d Buy Again If I Started Pressure Washing{' '}
            <span className="text-blue-400">From Scratch</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed mb-7 max-w-2xl">
            I wasted money figuring out what worked. This is the simple beginner setup I&apos;d
            recommend after building Max Pressure from the ground up — focused on getting paid
            jobs done without overbuilding too early.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#buy-order"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Shop the Starter Setup
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@maxpressurellcllc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Ask Me About a Setup
            </a>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-slate-800 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-slate-400 text-sm text-center">
            <span className="text-slate-300 font-medium">Disclosure:</span> As an Amazon Associate
            I earn from qualifying purchases. Some links on this page are affiliate links, meaning I
            may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Buy Order Accordion */}
      <section id="buy-order" className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Start Here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Beginner Buy Order</h2>
          <p className="text-slate-400 mb-10">
            This is the sequence I&apos;d follow. Tap any item to see my picks and notes.
          </p>

          <div className="space-y-3 mb-10">
            {beginnerBuyOrder.map((item) => (
              <details
                key={item.num}
                className="group bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden open:border-blue-500/30"
              >
                <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold rounded-full flex items-center justify-center">
                    {item.num}
                  </span>
                  <span className="text-white font-semibold flex-1">{item.title}</span>
                  <svg
                    className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="px-5 pb-6 pt-1 border-t border-slate-700/50">
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{item.description}</p>

                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
                    My picks
                  </p>
                  <div className="space-y-4">
                    {item.picks.map((pick) => {
                      const badge = badgeConfig[pick.badge]
                      return (
                        <div
                          key={pick.url}
                          className="bg-slate-900/60 border border-slate-700/40 rounded-lg p-4"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <span className="text-white font-semibold text-sm leading-snug flex-1">
                              {pick.title}
                            </span>
                            <span
                              className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${badge.className}`}
                            >
                              {badge.label}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mb-4">{pick.note}</p>
                          <a
                            href={pick.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-xs"
                          >
                            View this pick
                            <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl px-6 py-5">
            <p className="text-blue-200 text-sm leading-relaxed">
              <span className="font-semibold text-blue-300">Pro tip:</span> Don&apos;t buy
              everything at once. Buy the essentials, make money, then upgrade the stuff that
              saves you time.
            </p>
          </div>
        </div>
      </section>

      {/* Soft Wash Basics */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              PPE &amp; Chemical Application
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Soft Wash Gear I&apos;d Buy Before Taking House Washes Seriously
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              This list is short but non-negotiable. Don&apos;t skip the safety equipment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {softWashItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800 border border-slate-700/50 hover:border-blue-500/40 rounded-xl p-5 transition-all flex flex-col gap-3"
              >
                <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  {item.title}
                </span>
                <span className="text-blue-400 text-xs font-medium">
                  Check on Amazon →{' '}
                  <span className="text-slate-500 font-normal">paid link</span>
                </span>
              </a>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-xl px-6 py-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-200 text-sm leading-relaxed">
                <span className="font-semibold text-amber-300">Heads up:</span> Soft washing is
                where beginners can mess things up fast. Learn your ratios, protect plants, rinse
                properly, and use PPE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization & Upgrades */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Time-Savers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upgrades That Save Time on Every Job
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These aren&apos;t sexy but they add up fast. Every one of these makes your day
              smoother once you&apos;re doing jobs regularly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {organizeItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800 border border-slate-700/50 hover:border-blue-500/40 rounded-xl p-5 transition-all flex flex-col gap-3"
              >
                <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  {item.title}
                </span>
                <span className="text-blue-400 text-xs font-medium">
                  Check on Amazon →{' '}
                  <span className="text-slate-500 font-normal">paid link</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What I Wouldn't Buy */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Save Your Money
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I Wouldn&apos;t Waste Money on Day One
            </h2>
            <p className="text-slate-400 mb-10">
              These are the common traps. I see beginners make these mistakes all the time and it
              sets them back before they even get started.
            </p>
            <div className="space-y-3">
              {wouldntBuy.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-slate-800 border border-slate-700/50 rounded-xl px-5 py-4"
                >
                  <svg
                    className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Starter Package */}
      <section id="starter-setup" className="bg-blue-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">
              The Short List
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Recommended Starter Business Setup
            </h2>
            <p className="text-blue-100 mb-10">
              If I had to hand someone a shopping list today, this is it. Buy these, learn the
              basics, get your first jobs done, then upgrade.
            </p>
            <div className="bg-blue-800/60 border border-blue-500/30 rounded-xl p-8 mb-8 text-left">
              <ul className="space-y-3">
                {starterSetup.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#buy-order"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Shop the Starter Setup
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Get Personal Advice
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Need Help Choosing Your Setup?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              DM me <span className="text-white font-semibold">&ldquo;SETUP&rdquo;</span> on TikTok
              and send your budget, current gear, and what kind of jobs you want to do. I&apos;ll
              point you in the right direction before you waste money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.tiktok.com/@maxpressurellcllc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Message Me on TikTok
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Contact Max Pressure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
