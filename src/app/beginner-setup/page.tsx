import type { Metadata } from 'next'
import Link from 'next/link'

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

const mainProducts = [
  {
    id: 'A',
    title: '4 GPM Gas Pressure Washer',
    bestFor: 'First serious business machine',
    why: 'Strong enough for houses, driveways, patios, and basic residential jobs without jumping straight into a trailer build.',
    mistake: "Don't start with a weak electric unit if your goal is to make money.",
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'B',
    title: '16–20 Inch Surface Cleaner',
    bestFor: 'Driveways, patios, sidewalks',
    why: 'Makes flatwork faster and more profitable.',
    mistake: "Don't undercharge driveway cleaning if you're using the right equipment.",
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'C',
    title: '100–200 Ft Pressure Hose',
    bestFor: 'Moving around houses without dragging the machine everywhere',
    why: 'Saves time and makes you look more professional.',
    mistake: "Don't buy the cheapest hose if it kinks constantly.",
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'D',
    title: 'DN10 / High-Flow Ball Valve',
    bestFor: 'Fast nozzle changes and controlling water flow',
    why: 'One of the first upgrades that makes your setup feel professional.',
    mistake: 'Make sure your fittings match your hose setup.',
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'E',
    title: 'Quick Connect Kit',
    bestFor: 'Nozzles, guns, hoses, surface cleaners',
    why: 'Cheap upgrade that saves constant frustration.',
    mistake: 'Keep extra O-rings.',
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'F',
    title: 'Downstream Injector',
    bestFor: 'Applying house wash mix',
    why: 'Simple, affordable, and enough for many beginner house wash jobs.',
    mistake: "Don't expect every injector to pull perfectly with every hose length.",
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'G',
    title: 'J-Rod Nozzle Kit',
    bestFor: 'House washing and rinsing',
    why: 'Lets you change spray patterns quickly without digging through loose tips.',
    mistake: 'Know which tips are soap and which are rinse.',
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
  {
    id: 'H',
    title: 'X-Jet',
    bestFor: 'Higher areas or when downstreaming is not enough',
    why: 'Useful tool for certain jobs and troubleshooting.',
    mistake: "Don't rely on it as your only chemical application method forever.",
    url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20',
  },
]

const softWashItems = [
  { title: 'Chemical-Resistant Gloves', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Safety Glasses / Face Shield', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Respirator or Mask', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Pump Sprayer', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: '12V Soft Wash Pump', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Soft Wash Hose', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Nozzle Tips', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Measuring Containers', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
]

const organizeItems = [
  { title: 'Pressure Hose Reel', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Garden Hose Reel', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Contractor-Grade Garden Hose', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Hose Guides / Corner Guards', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Toolbox or Parts Organizer', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Spare O-Rings', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Spare Nozzles', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
  { title: 'Teflon Tape / Thread Sealant', url: 'https://www.amazon.com/dp/REPLACE-ME?tag=YOURTAG-20' },
]

const buyOrder = [
  '4 GPM gas pressure washer',
  '16–20 inch surface cleaner',
  '100–200 ft pressure hose',
  'Ball valve and quick connects',
  'Downstream injector',
  'J-rod / shooter tips',
  'PPE and safety gear',
  'Pump sprayer',
  'Hose reel / storage upgrades',
  'Backup parts kit',
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
  '4 GPM gas pressure washer',
  '16–20 inch surface cleaner',
  '100–200 ft pressure hose',
  'Ball valve',
  'Downstream injector',
  'J-rod tips',
  'PPE',
  'Pump sprayer',
  'Basic repair parts kit',
]

export default function BeginnerSetupPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-slate-950 min-h-[80vh] flex items-center"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">
                From Max Pressure — Built on Real Experience
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              The Gear I&apos;d Buy Again If I Started Pressure Washing{' '}
              <span className="text-blue-400">From Scratch</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              I wasted money figuring out what worked. This is the simple beginner setup I&apos;d
              recommend after building Max Pressure from the ground up — focused on getting paid
              jobs done without overbuilding too early.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#starter-setup"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Shop the Starter Setup
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@maxpressure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Ask Me About a Setup
              </a>
            </div>
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

      {/* Buy Order */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Start Here
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Beginner Buy Order</h2>
            <p className="text-slate-400 mb-10">
              This is the sequence I&apos;d follow. Don&apos;t jump ahead — every item in this list
              unlocks the next one.
            </p>
            <div className="space-y-3 mb-10">
              {buyOrder.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-slate-800 border border-slate-700/50 rounded-xl px-5 py-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-white font-medium">{item}</span>
                </div>
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
        </div>
      </section>

      {/* Main Product Cards */}
      <section id="product-cards" className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Gear Breakdown
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Beginner Setup I&apos;d Actually Start With
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every item below is something I&apos;ve used or tested. I&apos;ve included the real
              reason I&apos;d buy it again — and the mistake that burns beginners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 flex flex-col gap-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white text-sm font-black rounded-lg flex items-center justify-center">
                    {product.id}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug pt-1">{product.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <span className="flex-shrink-0 text-xs font-semibold text-blue-400 uppercase tracking-wider pt-0.5 w-24">
                      Best for
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{product.bestFor}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex-shrink-0 text-xs font-semibold text-blue-400 uppercase tracking-wider pt-0.5 w-24">
                      Why
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{product.why}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex-shrink-0 text-xs font-semibold text-amber-400 uppercase tracking-wider pt-0.5 w-24">
                      Mistake
                    </span>
                    <span className="text-slate-400 text-sm leading-relaxed">{product.mistake}</span>
                  </div>
                </div>
                <div className="pt-1">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm w-full justify-center"
                  >
                    Check on Amazon
                    <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-blue-300 text-xs font-normal">paid link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Wash Basics */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              PPE & Chemical Application
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
                className="group bg-slate-800 hover:bg-slate-750 border border-slate-700/50 hover:border-blue-500/40 rounded-xl p-5 transition-all flex flex-col gap-3"
              >
                <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  {item.title}
                </span>
                <span className="text-blue-400 text-xs font-medium flex items-center gap-1">
                  Check on Amazon →
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
      <section className="bg-slate-950 py-20 md:py-28">
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
                className="group bg-slate-800 hover:bg-slate-750 border border-slate-700/50 hover:border-blue-500/40 rounded-xl p-5 transition-all flex flex-col gap-3"
              >
                <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  {item.title}
                </span>
                <span className="text-blue-400 text-xs font-medium flex items-center gap-1">
                  Check on Amazon →
                  <span className="text-slate-500 font-normal">paid link</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What I Wouldn't Buy */}
      <section className="bg-slate-900 py-20 md:py-28">
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
              href="#product-cards"
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
                href="https://www.tiktok.com/@maxpressure"
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
