import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "What I'd Buy Again Starting a Pressure Washing Business",
  description:
    "My beginner pressure washing gear list — the exact type of equipment I'd buy again starting from scratch.",
  openGraph: {
    title: "What I'd Buy Again Starting a Pressure Washing Business",
    description:
      "My beginner pressure washing gear list — the exact type of equipment I'd buy again starting from scratch.",
    url: 'https://maxpressureequipment.com/beginner-setup',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What I'd Buy Again Starting a Pressure Washing Business",
    description:
      "My beginner pressure washing gear list — the exact type of equipment I'd buy again starting from scratch.",
  },
}

// ─── Product data — swap links or add picks here ─────────────────────────────

type Badge = 'no-commission' | 'canpump' | 'amazon'

interface Pick {
  title: string
  note: string
  url: string
  badge: Badge
  approxPrice: string
}

interface BuyOrderItem {
  num: number
  title: string
  summaryPrice: string
  description: string
  picks: Pick[]
}

interface SoftWashItem {
  title: string
  url: string
  badge: Badge
  approxPrice: string
  description: string
}

const beginnerBuyOrder: BuyOrderItem[] = [
  {
    num: 1,
    title: '4–5 GPM Pressure Washer',
    summaryPrice: '≈$849–$1,290',
    description:
      "This is the first real decision. If you're trying to make money, I would skip tiny electric units and start with a serious gas machine. A 4–5 GPM unit is enough for beginner residential house washes, driveways, patios, and sidewalks without jumping straight into a huge trailer build.",
    picks: [
      {
        title: 'Harbor Freight Predator 4400 PSI / 4.2 GPM Commercial Duty Pressure Washer',
        approxPrice: '≈$849',
        note: "Budget-friendly first serious washer if you want to take washing seriously. I ran one of these after messing around with a 2 GPM electric machine and used it for a full year before upgrading.",
        url: 'https://www.harborfreight.com/4400-psi-42-gpm-13-hp-420cc-commercial-duty-pressure-washer-epa-71102.html',
        badge: 'no-commission',
      },
      {
        title: 'Canpump Belt Drive 5 GPM Pressure Washer — 13 HP Loncin',
        approxPrice: '≈$1,290',
        note: "Stronger pick if you want a prebuilt skid for a trailer or truck skid build. I've ran Canpump pumps on all my machines and can strongly recommend them, especially their customer support team.",
        url: 'https://www.canpump.com/canpump-belt-drive-pressure-washer-13-hp-loncin-engine-triplex-pump/?ref=qraopqpr',
        badge: 'canpump',
      },
    ],
  },
  {
    num: 2,
    title: 'Short Wands / Guns',
    summaryPrice: '≈$27–$29',
    description:
      'House washing is way easier with a short gun than trying to use a long wand all day. A short gun gives you better control, makes switching attachments easier, and is more comfortable when you\'re walking around a house, rinsing, or using a ball valve setup.',
    picks: [
      {
        title: 'RIDGE WASHER Short Pressure Washer Gun',
        approxPrice: '≈$27',
        note: "Good beginner short gun option. The big thing I like is the trigger lock, so you do not have to constantly hold the trigger down the whole time you're washing.",
        url: 'https://www.amazon.com/dp/B08QHV6FBZ?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'Canpump High Pressure Spray Gun + Wand Assembly',
        approxPrice: '≈$29',
        note: 'Good longer backup wand/gun option to keep around. I still prefer a short gun for most house washing, but having a longer wand as backup is useful.',
        url: 'https://www.canpump.com/canpump-hi-pressure-spray-gun-wand-assembly-3600-psi/?ref=qraopqpr',
        badge: 'canpump',
      },
    ],
  },
  {
    num: 3,
    title: '16–21 Inch Surface Cleaner',
    summaryPrice: '≈$170–$390',
    description:
      'This is what makes flatwork profitable. Wand-cleaning an entire driveway is slow. A surface cleaner lets you clean driveways, patios, and sidewalks faster and more consistently.',
    picks: [
      {
        title: '16.5 Inch Stainless Steel Surface Cleaner',
        approxPrice: '≈$170',
        note: 'Good pick if your machine is closer to or below 4 GPM. A decent rule of thumb is about 4 inches of surface cleaner for every 1 GPM of flow, so smaller machines usually do better with a smaller surface cleaner.',
        url: 'https://www.amazon.com/dp/B0D83BZDMG?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'WOJET 18 Inch Surface Cleaner',
        approxPrice: '≈$229',
        note: 'This is the surface cleaner I started on after moving past the little attachable homeowner-style ones. Good middle option for a beginner 4 GPM setup.',
        url: 'https://www.amazon.com/dp/B079BDG12J?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'Canpump 21 Inch Stainless Steel Surface Cleaner',
        approxPrice: '≈$350-ish',
        note: 'I run this on my 5 GPM machine and it works great. Better fit once you have more flow and want to move faster on driveways and bigger concrete.',
        url: 'https://www.canpump.com/canpump-stainless-steel-surface-cleaner-4000-psi/?ref=qraopqpr',
        badge: 'canpump',
      },
    ],
  },
  {
    num: 4,
    title: '100–200 Ft High Pressure Hose',
    summaryPrice: '≈$93–$140',
    description:
      "Extra hose saves time because you don't have to drag the pressure washer around every corner of the house. For paid jobs, 100–200 ft of hose makes you look and work more professionally.",
    picks: [
      {
        title: 'POHIR Blue High Pressure Hose',
        approxPrice: '≈$140-ish',
        note: 'Good beginner-friendly blue pressure hose option. Before ordering, verify the length, fitting size, PSI rating, and whether you need 3/8 quick connects for your setup.',
        url: 'https://www.amazon.com/dp/B0C69298VP?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'POHIR Black High Pressure Hose',
        approxPrice: '≈$93',
        note: "Cheaper POHIR hose option if you're trying to keep the starting budget lower. Still verify length, PSI rating, and fittings before ordering.",
        url: 'https://www.amazon.com/dp/B094Z7SHPY?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 5,
    title: '50–100 Ft Garden Hose',
    summaryPrice: '≈$69',
    description:
      "You need garden hose to feed water from the customer's house spigot into your pressure washer or buffer tank inlet. This is one of those boring pieces of gear that matters a lot because bad garden hose kinks, restricts flow, and slows everything down.",
    picks: [
      {
        title: 'Flexzilla 100 Ft Garden Hose',
        approxPrice: '≈$69',
        note: 'Flexzilla is my favorite kink-resistant hose material. I run this style of hose on my builds and reels because it is way easier to work with than stiff cheap garden hose.',
        url: 'https://www.amazon.com/dp/B0080JA346?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 6,
    title: 'Ball Valve and Quick Connects',
    summaryPrice: '≈$30–$60',
    description:
      "A ball valve lets you turn your machine's water flow on and off at the end of the hose so you can swap attachments easily without walking back to the pressure washer every time.",
    picks: [
      {
        title: 'MTM Hydro DN10 Ball Valve',
        approxPrice: '≈$60',
        note: "Higher quality ball valve option. This is the style of upgrade that makes switching between your gun, surface cleaner, and other attachments way smoother.",
        url: 'https://www.amazon.com/dp/B07LCSWL4Y?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'M MINGLE Ball Valve with Quick Connect Attachments',
        approxPrice: '≈$30',
        note: 'Cheaper beginner option that already comes with attachments. Good if you want a simple starter setup without piecing together every fitting separately.',
        url: 'https://www.amazon.com/dp/B0H4FS44L4?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 7,
    title: 'Downstream Injector',
    summaryPrice: '≈$16–$26',
    description:
      "A downstream injector is extremely efficient for house washing. You drop the intake tube into 10–12.5% bleach/SH, connect the other end into the injector, and it automatically pulls a diluted mix through your pressure washer line. With the right injector/nozzle setup, this can give you the rough 1–2% blend needed for most vinyl house washes.",
    picks: [
      {
        title: 'Canpump Adjustable Chemical Injector — 5 GPM / 2.1 mm',
        approxPrice: '≈$25.60',
        note: "My pick for a 5 GPM setup. Match your injector/orifice to your machine's flow so it pulls chemical properly.",
        url: 'https://www.canpump.com/adjustable-chemical-injector-4500-psi-5-us-gpm-2-1-mm-orifice-qc-socket-inlet-general-pump-style/?ref=qraopqpr',
        badge: 'canpump',
      },
      {
        title: 'General Pump Chemical Injector 100775',
        approxPrice: '≈$16–$31',
        note: "Common downstream injector option. Good to test if you're building a simple beginner house wash setup. Hose length, injector size, and nozzle choice can affect whether it pulls well.",
        url: 'https://www.amazon.com/dp/B01JB6D23K?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 8,
    title: 'J-Rod / Shooter Tips',
    summaryPrice: '≈$25–$55',
    description:
      "A J-rod keeps your main soap and rinse tips together so you're not digging through loose nozzles on every job. This is especially useful for house washing.",
    picks: [
      {
        title: 'Jariko J-Rod Nozzle Kit — 4 GPM',
        approxPrice: '≈$50-ish',
        note: 'Good starter J-rod for a 4 GPM machine. If you move to 5 GPM, make sure your nozzles are sized correctly for your machine.',
        url: 'https://www.amazon.com/dp/B09RV52WGP?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'JOEJET Shooter Tip',
        approxPrice: '≈$25',
        note: 'Shooter tips help you reach higher sections from the ground. You can also downstream with a shooter tip, which makes it useful for applying house wash mix higher up without needing a ladder.',
        url: 'https://www.amazon.com/dp/B0CYSWS346?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 9,
    title: 'X-Jet Kit / DS Twist',
    summaryPrice: '≈$80–$180',
    description:
      "An X-Jet is one of the easiest ways for a beginner to get into house washing because it can pull a stronger mix through the barb and spray higher without relying only on a downstream injector. The DS Twist gives you a similar high-reach effect while still downstreaming chemical through the injector shown earlier. In general, the X-Jet can pull a higher percentage, but the DS Twist can still pull enough chemical for a lot of normal house washing when your downstream setup is dialed in.",
    picks: [
      {
        title: 'X-Jet Adjustable Long Range Nozzle Kit',
        approxPrice: '≈$180',
        note: "Good fit for 4–4.5 GPM beginner machines. The X-Jet can pull a stronger mix through the barb, which makes it useful when you want an easy way to apply house wash mix without depending only on downstreaming.",
        url: 'https://www.amazon.com/dp/B071RR8M91?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'DS Twist Downstream Shooter Nozzle',
        approxPrice: '≈$80',
        note: 'This is basically the downstreaming-style version of the X-Jet idea. It is meant to be used with a downstream injector so you can reach higher areas while still pulling chemical through your normal downstream setup.',
        url: 'https://www.amazon.com/dp/B088ZV5DDX?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 10,
    title: 'PPE and Safety Gear',
    summaryPrice: '≈$15–$55',
    description:
      "Do not skip safety gear. When you're working with house wash mix, bleach, surfactant, or hot chemical batches, you need eye protection, gloves, and respiratory protection where appropriate.",
    picks: [
      {
        title: 'Clear Safety Goggles',
        approxPrice: '≈$16',
        note: 'Basic eye protection for mixing, spraying, and rinsing around chemicals. Eye protection is cheap compared to a chemical splash.',
        url: 'https://www.amazon.com/dp/B0G7YLYCNB?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'Disposable Nitrile Gloves',
        approxPrice: '≈$17',
        note: 'Useful when mixing chemicals, handling injectors, or dealing with stronger batches. Keep a box on the truck.',
        url: 'https://www.amazon.com/dp/B0C3SSXL4K?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: '3M Reusable Respirator',
        approxPrice: '≈$55',
        note: "Useful baseline respirator option for chemical work, but users should verify the cartridges are rated for the exact chemicals they're using by checking the SDS and manufacturer specs. Never mix chemicals and avoid breathing fumes.",
        url: 'https://www.amazon.com/dp/B01H0S90QE?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 11,
    title: 'Pump Sprayer',
    summaryPrice: '≈$14–$43',
    description:
      'A pump sprayer is useful for spot treating, applying small chemical batches, touching up problem areas, and handling small jobs without pulling out a full soft wash system.',
    picks: [
      {
        title: 'Chapin 1 Gallon Bleach/Disinfectant Sprayer',
        approxPrice: '≈$14.49',
        note: 'Good small sprayer for bleach-compatible spot treatment and simple beginner use.',
        url: 'https://www.amazon.com/dp/B00295QD96?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'Chapin 2 Gallon Sprayer Two Pack',
        approxPrice: '≈$43',
        note: "Good if you want extra capacity or want separate sprayers for different uses. Label your sprayers and don't cross-contaminate chemicals.",
        url: 'https://www.amazon.com/dp/B0C7LY7NV4?tag=maxpressure45-20',
        badge: 'amazon',
      },
    ],
  },
  {
    num: 12,
    title: 'Hose Reel / Storage Upgrades',
    summaryPrice: '≈$87–$105',
    description:
      "Hose reels are not required on day one, but they make you look cleaner, save time, and help keep your trailer or skid from becoming a mess.",
    picks: [
      {
        title: 'VEVOR Wall Mounted Garden Hose Reel',
        approxPrice: '≈$87',
        note: "Cheap garden hose reel option I'd consider bolting onto a trailer or skid. Verify fitting size and mounting before ordering.",
        url: 'https://www.amazon.com/dp/B0F5NL3SC8?tag=maxpressure45-20',
        badge: 'amazon',
      },
      {
        title: 'MINGLE High Pressure Hose Reel',
        approxPrice: '≈$105',
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
    label: 'Amazon Partner link',
    className: 'bg-green-900/30 text-green-400/80 border border-green-700/30',
  },
}

// ─── Other page data ──────────────────────────────────────────────────────────

const softWashItems: SoftWashItem[] = [
  {
    title: 'Chemical Resistant Gloves',
    url: 'https://www.amazon.com/dp/B0C3SSXL4K?tag=maxpressure45-20',
    badge: 'amazon',
    approxPrice: '≈$17',
    description:
      'Disposable nitrile gloves are a must when mixing or handling house wash chemicals. Keep a box on the truck and replace them often.',
  },
  {
    title: 'Safety Glasses / Clear Goggles',
    url: 'https://www.amazon.com/dp/B0G7YLYCNB?tag=maxpressure45-20',
    badge: 'amazon',
    approxPrice: '≈$16',
    description:
      'Eye protection is non-negotiable around bleach, surfactant, wind drift, and rinsing.',
  },
  {
    title: 'Respirator or Mask',
    url: 'https://www.amazon.com/dp/B01H0S90QE?tag=maxpressure45-20',
    badge: 'amazon',
    approxPrice: '≈$55',
    description:
      'Useful for chemical work, but verify cartridges against the SDS and manufacturer specs for the exact chemicals you use. Never breathe fumes or mix chemicals.',
  },
  {
    title: 'Pump Sprayer',
    url: 'https://www.amazon.com/dp/B00295QD96?tag=maxpressure45-20',
    badge: 'amazon',
    approxPrice: '≈$14.49',
    description:
      'Good for spot treating, small chemical batches, and touching up problem areas without pulling out a full soft wash system.',
  },
  {
    title: '12V Soft Wash Pump — Remco Fatboy 7 GPM',
    url: 'https://www.amazon.com/dp/B00QB1IR6Q?tag=maxpressure45-20',
    badge: 'amazon',
    approxPrice: '≈$180–$230',
    description:
      "This is the style of 12V pump I use for soft washing. Good for a simple dedicated soft wash setup when you're ready to move beyond only downstreaming or X-Jet use.",
  },
  {
    title: 'Soft Wash Hose — Flexzilla 1/2 Inch Hose',
    url: 'https://www.amazon.com/dp/B004IQWNNE?tag=maxpressure45-20',
    badge: 'amazon',
    approxPrice: '≈$45–$80',
    description:
      'This is technically Flexzilla air hose, but it can work fine as beginner soft wash hose. Verify size, length, fittings, and chemical compatibility before building around it.',
  },
]

const wouldntBuy = [
  'Giant trailer build before having customers',
  'Overpriced chemical systems before understanding downstreaming',
  'Tiny electric pressure washers for business use',
  'Random cheap spray guns with bad fittings',
  'Cheap surface cleaners that wobble or leave stripes',
  'Too many accessories before mastering the basics',
]

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
              href="https://www.tiktok.com/@maxpressurellc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Ask Me About a Setup
            </a>
          </div>

          <div className="mt-8 rounded-xl overflow-hidden border border-slate-700/40">
            <Image
              src="/media/general/beginner-setup-pressurewashing.png"
              alt="Beginner pressure washing setup in truck bed that helped build Max Pressure"
              width={900}
              height={600}
              className="w-full object-cover max-h-80"
              priority
            />
          </div>
        </div>
      </section>


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
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-3 min-w-0">
                    <span className="text-white font-semibold">{item.title}</span>
                    <span className="text-green-400 text-xs font-mono flex-shrink-0">{item.summaryPrice}</span>
                  </div>
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
                  <p className="text-slate-100 text-sm leading-relaxed mb-6">{item.description}</p>

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
                            <div className="flex-1 min-w-0">
                              <span className="text-white font-semibold text-sm leading-snug block">
                                {pick.title}
                              </span>
                              <span className="inline-block mt-1 text-xs text-green-400 bg-slate-800 border border-green-700/30 rounded px-2 py-0.5 font-mono">
                                Approx. {pick.approxPrice}
                              </span>
                            </div>
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
              saves you time. Yes, it takes money to make money, but it also makes sense to
              expand as you grow. Do not financially screw yourself over buying or financing a
              giant setup before you have a client base, real understanding of the industry, or
              the drive to actually stick with exterior cleaning.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {softWashItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800 border border-slate-700/50 hover:border-blue-500/40 rounded-xl p-5 transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors flex-1">
                    {item.title}
                  </span>
                  <span className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${badgeConfig[item.badge].className}`}>
                    {badgeConfig[item.badge].label}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{item.description}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400 bg-slate-900/60 border border-slate-600/40 rounded px-2 py-0.5 font-mono">
                    Approx. {item.approxPrice}
                  </span>
                  <span className="text-blue-400 text-xs font-medium group-hover:text-blue-300 transition-colors">
                    View on Amazon →
                  </span>
                </div>
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
                properly, use PPE, and check SDS/manufacturer guidance before spraying chemicals.
              </p>
            </div>
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

      {/* Custom Build Pumps */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Advanced Builds
            </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
            {customBuildPumps.map((pump) => (
              <div
                key={pump.url}
                className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col"
              >
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
                href="https://www.tiktok.com/@maxpressurellc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Message Me on TikTok
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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
