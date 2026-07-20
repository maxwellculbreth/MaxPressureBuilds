import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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

type AffiliateBadge = 'no-commission' | 'canpump' | 'amazon'
type PickBadge =
  | 'my-pick'
  | 'best-value'
  | 'budget'
  | 'buy-first'
  | 'upgrade-later'
  | 'backup'
  | 'starter'
  | 'high-reach'
type StageId = 'essentials' | 'reach' | 'safety'

interface Pick {
  title: string
  note: string
  url: string
  badge: AffiliateBadge
  approxPrice: string
  image: string
  pickBadge?: PickBadge
  cta: string
}

interface BuyOrderItem {
  num: number
  title: string
  summaryPrice: string
  description: string
  picks: Pick[]
  stage: StageId
}

interface SoftWashItem {
  title: string
  url: string
  badge: AffiliateBadge
  approxPrice: string
  description: string
}

const beginnerBuyOrder: BuyOrderItem[] = [
  {
    num: 1,
    title: '4–5 GPM Pressure Washer',
    summaryPrice: '≈$850–$1,300',
    stage: 'essentials',
    description:
      "This is the first real decision. If you're trying to make money, I would skip tiny electric units and start with a serious gas machine. A 4–5 GPM unit is enough for beginner residential house washes, driveways, patios, and sidewalks without jumping straight into a huge trailer build.",
    picks: [
      {
        title: 'Harbor Freight Predator 4400 PSI / 4.2 GPM Commercial Duty',
        approxPrice: '≈$850',
        note: "Budget-friendly first serious washer if you want to take washing seriously. I ran one of these after messing around with a 2 GPM electric machine and used it for a full year before upgrading.",
        url: 'https://www.harborfreight.com/4400-psi-42-gpm-13-hp-420cc-commercial-duty-pressure-washer-epa-71102.html',
        badge: 'no-commission',
        image: '/media/BeginnerBuy/HARBORFREIGHT4GPM.jpg',
        pickBadge: 'starter',
        cta: 'View at Harbor Freight',
      },
      {
        title: 'Canpump Belt Drive 5 GPM — 13 HP Loncin',
        approxPrice: '≈$1,300',
        note: "Stronger pick if you want a prebuilt skid for a trailer or truck skid build. I've ran Canpump pumps on all my machines and can strongly recommend them, especially their customer support team.",
        url: 'https://www.canpump.com/canpump-belt-drive-pressure-washer-13-hp-loncin-engine-triplex-pump/?ref=qraopqpr',
        badge: 'canpump',
        image: '/media/BeginnerBuy/CANPUMP5GPM.jpg',
        pickBadge: 'my-pick',
        cta: 'View at Canpump',
      },
    ],
  },
  {
    num: 2,
    title: 'Short Wands / Guns',
    summaryPrice: '≈$25–$30',
    stage: 'essentials',
    description:
      "House washing is way easier with a short gun than trying to use a long wand all day. A short gun gives you better control, makes switching attachments easier, and is more comfortable when you're walking around a house, rinsing, or using a ball valve setup.",
    picks: [
      {
        title: 'RIDGE WASHER Short Pressure Washer Gun',
        approxPrice: '≈$27',
        note: "Good beginner short gun option. The big thing I like is the trigger lock, so you do not have to constantly hold the trigger down the whole time you're washing.",
        url: 'https://www.amazon.com/dp/B08QHV6FBZ?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/RIDGEWASHERSHORTGUN.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
      {
        title: 'Canpump High Pressure Spray Gun + Wand Assembly',
        approxPrice: '≈$29',
        note: 'Good longer backup wand/gun option to keep around. I still prefer a short gun for most house washing, but having a longer wand as backup is useful.',
        url: 'https://www.canpump.com/canpump-hi-pressure-spray-gun-wand-assembly-3600-psi/?ref=qraopqpr',
        badge: 'canpump',
        image: '/media/BeginnerBuy/CANPUMPHIGHPRESSUREWAND.jpg',
        pickBadge: 'backup',
        cta: 'View at Canpump',
      },
    ],
  },
  {
    num: 3,
    title: '16–21 Inch Surface Cleaner',
    summaryPrice: '≈$170–$350',
    stage: 'essentials',
    description:
      'This is what makes flatwork profitable. Wand-cleaning an entire driveway is slow. A surface cleaner lets you clean driveways, patios, and sidewalks faster and more consistently.',
    picks: [
      {
        title: '16.5 Inch Stainless Steel Surface Cleaner',
        approxPrice: '≈$170',
        note: 'Good pick if your machine is closer to or below 4 GPM. A decent rule of thumb is about 4 inches of surface cleaner for every 1 GPM of flow, so smaller machines usually do better with a smaller surface cleaner.',
        url: 'https://www.amazon.com/dp/B0D83BZDMG?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/16.5INCHSTAINLESS.jpg',
        pickBadge: 'budget',
        cta: 'View on Amazon',
      },
      {
        title: 'WOJET 18 Inch Surface Cleaner',
        approxPrice: '≈$230',
        note: 'This is the surface cleaner I started on after moving past the little attachable homeowner-style ones. Good middle option for a beginner 4 GPM setup.',
        url: 'https://www.amazon.com/dp/B079BDG12J?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/18INCHWOJET.jpg',
        pickBadge: 'best-value',
        cta: 'View on Amazon',
      },
      {
        title: 'Canpump 21 Inch Stainless Steel Surface Cleaner',
        approxPrice: '≈$350',
        note: 'I run this on my 5 GPM machine and it works great. Better fit once you have more flow and want to move faster on driveways and bigger concrete.',
        url: 'https://www.canpump.com/canpump-stainless-steel-surface-cleaner-4000-psi/?ref=qraopqpr',
        badge: 'canpump',
        image: '/media/BeginnerBuy/CANPUMP21INCH.jpg',
        pickBadge: 'my-pick',
        cta: 'View at Canpump',
      },
    ],
  },
  {
    num: 4,
    title: '100–200 Ft High Pressure Hose',
    summaryPrice: '≈$95–$140',
    stage: 'essentials',
    description:
      "Extra hose saves time because you don't have to drag the pressure washer around every corner of the house. For paid jobs, 100–200 ft of hose makes you look and work more professionally.",
    picks: [
      {
        title: 'POHIR Blue High Pressure Hose',
        approxPrice: '≈$140',
        note: 'Good beginner-friendly blue pressure hose option. Before ordering, verify the length, fitting size, PSI rating, and whether you need 3/8 quick connects for your setup.',
        url: 'https://www.amazon.com/dp/B0C69298VP?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/POHIRBLUEHOSE.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
      {
        title: 'POHIR Black High Pressure Hose',
        approxPrice: '≈$95',
        note: "Cheaper POHIR hose option if you're trying to keep the starting budget lower. Still verify length, PSI rating, and fittings before ordering.",
        url: 'https://www.amazon.com/dp/B094Z7SHPY?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/POHIRBLACKHOSE.jpg',
        pickBadge: 'budget',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 5,
    title: '50–100 Ft Garden Hose',
    summaryPrice: '≈$70',
    stage: 'essentials',
    description:
      "You need garden hose to feed water from the customer's house spigot into your pressure washer or buffer tank inlet. This is one of those boring pieces of gear that matters a lot because bad garden hose kinks, restricts flow, and slows everything down.",
    picks: [
      {
        title: 'Flexzilla 100 Ft Garden Hose',
        approxPrice: '≈$70',
        note: 'Flexzilla is my favorite kink-resistant hose material. I run this style of hose on my builds and reels because it is way easier to work with than stiff cheap garden hose.',
        url: 'https://www.amazon.com/dp/B0080JA346?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/FLEXZILLAHOSE.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 6,
    title: 'Ball Valve and Quick Connects',
    summaryPrice: '≈$30–$60',
    stage: 'essentials',
    description:
      "A ball valve lets you turn your machine's water flow on and off at the end of the hose so you can swap attachments easily without walking back to the pressure washer every time.",
    picks: [
      {
        title: 'MTM Hydro DN10 Ball Valve',
        approxPrice: '≈$60',
        note: 'Higher quality ball valve option. This is the style of upgrade that makes switching between your gun, surface cleaner, and other attachments way smoother.',
        url: 'https://www.amazon.com/dp/B07LCSWL4Y?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/DN10BALLVALVE.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
      {
        title: 'M MINGLE Ball Valve with Quick Connect Attachments',
        approxPrice: '≈$30',
        note: 'Cheaper beginner option that already comes with attachments. Good if you want a simple starter setup without piecing together every fitting separately.',
        url: 'https://www.amazon.com/dp/B0H4FS44L4?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/MMINGLEBALLVALVE.jpg',
        pickBadge: 'budget',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 7,
    title: 'Downstream Injector',
    summaryPrice: '≈$15–$30',
    stage: 'essentials',
    description:
      "A downstream injector is extremely efficient for house washing. You drop the intake tube into 10–12.5% bleach/SH, connect the other end into the injector, and it automatically pulls a diluted mix through your pressure washer line. With the right injector/nozzle setup, this can give you the rough 1–2% blend needed for most vinyl house washes.",
    picks: [
      {
        title: 'Canpump Adjustable Chemical Injector — 5 GPM / 2.1 mm',
        approxPrice: '≈$25',
        note: "My pick for a 5 GPM setup. Match your injector/orifice to your machine's flow so it pulls chemical properly.",
        url: 'https://www.canpump.com/adjustable-chemical-injector-4500-psi-5-us-gpm-2-1-mm-orifice-qc-socket-inlet-general-pump-style/?ref=qraopqpr',
        badge: 'canpump',
        image: '/media/BeginnerBuy/CANPUMPDSI.jpg',
        pickBadge: 'my-pick',
        cta: 'View at Canpump',
      },
      {
        title: 'General Pump Chemical Injector 100775',
        approxPrice: '≈$15–$30',
        note: "Common downstream injector option. Good to test if you're building a simple beginner house wash setup. Hose length, injector size, and nozzle choice can affect whether it pulls well.",
        url: 'https://www.amazon.com/dp/B01JB6D23K?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/GENERALPUMPDSI.jpg',
        pickBadge: 'best-value',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 8,
    title: 'J-Rod / Shooter Tips',
    summaryPrice: '≈$25–$50',
    stage: 'reach',
    description:
      "A J-rod keeps your main soap and rinse tips together so you're not digging through loose nozzles on every job. This is especially useful for house washing.",
    picks: [
      {
        title: 'Jariko J-Rod Nozzle Kit — 4 GPM',
        approxPrice: '≈$50',
        note: 'Good starter J-rod for a 4 GPM machine. If you move to 5 GPM, make sure your nozzles are sized correctly for your machine.',
        url: 'https://www.amazon.com/dp/B09RV52WGP?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/JROD.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
      {
        title: 'JOEJET Shooter Tip',
        approxPrice: '≈$25',
        note: 'Shooter tips help you reach higher sections from the ground. You can also downstream with a shooter tip, which makes it useful for applying house wash mix higher up without needing a ladder.',
        url: 'https://www.amazon.com/dp/B0CYSWS346?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/SHOOTERTIP.jpg',
        pickBadge: 'high-reach',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 9,
    title: 'X-Jet Kit / DS Twist',
    summaryPrice: '≈$80–$180',
    stage: 'reach',
    description:
      "An X-Jet is one of the easiest ways for a beginner to get into house washing because it can pull a stronger mix through the barb and spray higher without relying only on a downstream injector. The DS Twist gives you a similar high-reach effect while still downstreaming chemical through the injector shown earlier. In general, the X-Jet can pull a higher percentage, but the DS Twist can still pull enough chemical for a lot of normal house washing when your downstream setup is dialed in.",
    picks: [
      {
        title: 'X-Jet Adjustable Long Range Nozzle Kit',
        approxPrice: '≈$180',
        note: "Good fit for 4–4.5 GPM beginner machines. The X-Jet can pull a stronger mix through the barb, which makes it useful when you want an easy way to apply house wash mix without depending only on downstreaming.",
        url: 'https://www.amazon.com/dp/B071RR8M91?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/XJETFULLKIT.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
      {
        title: 'DS Twist Downstream Shooter Nozzle',
        approxPrice: '≈$80',
        note: 'This is basically the downstreaming-style version of the X-Jet idea. It is meant to be used with a downstream injector so you can reach higher areas while still pulling chemical through your normal downstream setup.',
        url: 'https://www.amazon.com/dp/B088ZV5DDX?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/DSTWIST.jpg',
        pickBadge: 'best-value',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 10,
    title: 'PPE and Safety Gear',
    summaryPrice: '≈$15–$55',
    stage: 'safety',
    description:
      "Do not skip safety gear. When you're working with house wash mix, bleach, surfactant, or hot chemical batches, you need eye protection, gloves, and respiratory protection where appropriate.",
    picks: [
      {
        title: 'Clear Safety Goggles',
        approxPrice: '≈$15',
        note: 'Basic eye protection for mixing, spraying, and rinsing around chemicals. Eye protection is cheap compared to a chemical splash.',
        url: 'https://www.amazon.com/dp/B0G7YLYCNB?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/GOGGLES.jpg',
        pickBadge: 'buy-first',
        cta: 'View on Amazon',
      },
      {
        title: 'Disposable Nitrile Gloves',
        approxPrice: '≈$17',
        note: 'Useful when mixing chemicals, handling injectors, or dealing with stronger batches. Keep a box on the truck.',
        url: 'https://www.amazon.com/dp/B0C3SSXL4K?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/NITRILEGLOVES.jpg',
        pickBadge: 'buy-first',
        cta: 'View on Amazon',
      },
      {
        title: '3M Reusable Respirator',
        approxPrice: '≈$55',
        note: "Useful baseline respirator option for chemical work, but users should verify the cartridges are rated for the exact chemicals they're using by checking the SDS and manufacturer specs. Never mix chemicals and avoid breathing fumes.",
        url: 'https://www.amazon.com/dp/B01H0S90QE?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/3MRESPIRATOR.jpg',
        pickBadge: 'upgrade-later',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 11,
    title: 'Pump Sprayer',
    summaryPrice: '≈$15–$45',
    stage: 'safety',
    description:
      'A pump sprayer is useful for spot treating, applying small chemical batches, touching up problem areas, and handling small jobs without pulling out a full soft wash system.',
    picks: [
      {
        title: 'Chapin 1 Gallon Bleach/Disinfectant Sprayer',
        approxPrice: '≈$15',
        note: 'Good small sprayer for bleach-compatible spot treatment and simple beginner use.',
        url: 'https://www.amazon.com/dp/B00295QD96?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/1GALLONSPRAYER.jpg',
        pickBadge: 'my-pick',
        cta: 'View on Amazon',
      },
      {
        title: 'Chapin 2 Gallon Sprayer Two Pack',
        approxPrice: '≈$45',
        note: "Good if you want extra capacity or want separate sprayers for different uses. Label your sprayers and don't cross-contaminate chemicals.",
        url: 'https://www.amazon.com/dp/B0C7LY7NV4?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/1GALLONSPRAYER.jpg',
        pickBadge: 'upgrade-later',
        cta: 'View on Amazon',
      },
    ],
  },
  {
    num: 12,
    title: 'Hose Reel / Storage Upgrades',
    summaryPrice: '≈$85–$105',
    stage: 'safety',
    description:
      "Hose reels are not required on day one, but they make you look cleaner, save time, and help keep your trailer or skid from becoming a mess.",
    picks: [
      {
        title: 'VEVOR Wall Mounted Garden Hose Reel',
        approxPrice: '≈$85',
        note: "Cheap garden hose reel option I'd consider bolting onto a trailer or skid. Verify fitting size and mounting before ordering.",
        url: 'https://www.amazon.com/dp/B0F5NL3SC8?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/VEVORHOSEREEL.jpg',
        pickBadge: 'budget',
        cta: 'View on Amazon',
      },
      {
        title: 'MINGLE High Pressure Hose Reel',
        approxPrice: '≈$105',
        note: 'Cheap high pressure hose reel similar to the type I started with. Make sure the pressure rating, hose capacity, and fittings match your setup.',
        url: 'https://www.amazon.com/dp/B09Q8PPMPK?tag=maxpressure45-20',
        badge: 'amazon',
        image: '/media/BeginnerBuy/M-MINGLEHOSEREEL.jpg',
        pickBadge: 'upgrade-later',
        cta: 'View on Amazon',
      },
    ],
  },
]

// ─── Stage groupings ─────────────────────────────────────────────────────────

interface Stage {
  id: StageId
  eyebrow: string
  title: string
  description: string
}

const stages: Stage[] = [
  {
    id: 'essentials',
    eyebrow: 'Stage 1',
    title: 'Start Here — The Essentials',
    description:
      'The core kit you need to actually take on paid jobs. If you only buy from this stage, you can start booking work.',
  },
  {
    id: 'reach',
    eyebrow: 'Stage 2',
    title: 'Improve Reach & Efficiency',
    description:
      'Second-round upgrades that make house washing faster and easier once you have the basics down.',
  },
  {
    id: 'safety',
    eyebrow: 'Stage 3',
    title: 'Safety & Convenience Upgrades',
    description:
      'PPE is non-negotiable — buy it first. Sprayers and hose reels can wait until you have jobs on the books.',
  },
]

// ─── Recommended starter setup (curated first-buy bundle) ────────────────────

interface StarterEntry {
  category: string
  pickIndex: number
  itemNum: number
}

const starterSetupEntries: StarterEntry[] = [
  { category: 'Pressure Washer', itemNum: 1, pickIndex: 0 },
  { category: 'Surface Cleaner', itemNum: 3, pickIndex: 1 },
  { category: 'Short Gun', itemNum: 2, pickIndex: 0 },
  { category: 'HP Hose', itemNum: 4, pickIndex: 0 },
  { category: 'Downstream Injector', itemNum: 7, pickIndex: 1 },
  { category: 'Ball Valve + QCs', itemNum: 6, pickIndex: 1 },
]

// ─── Badge configs ────────────────────────────────────────────────────────────

const affiliateBadgeConfig: Record<AffiliateBadge, { label: string; className: string }> = {
  'no-commission': {
    label: 'No commission',
    className: 'bg-slate-700/80 text-slate-300 border border-slate-600/60',
  },
  canpump: {
    label: 'Canpump partner',
    className: 'bg-green-900/50 text-green-300 border border-green-700/50',
  },
  amazon: {
    label: 'Amazon partner',
    className: 'bg-green-900/30 text-green-400/80 border border-green-700/30',
  },
}

const pickBadgeConfig: Record<PickBadge, { label: string; className: string }> = {
  'my-pick': {
    label: 'My Pick',
    className: 'bg-green-500 text-slate-900 shadow-lg shadow-green-500/20',
  },
  'best-value': {
    label: 'Best Value',
    className: 'bg-blue-500 text-white shadow-lg shadow-blue-500/20',
  },
  budget: {
    label: 'Budget Option',
    className: 'bg-slate-700 text-slate-100 border border-slate-500/40',
  },
  'buy-first': {
    label: 'Buy First',
    className: 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/20',
  },
  'upgrade-later': {
    label: 'Upgrade Later',
    className: 'bg-slate-800 text-slate-300 border border-slate-600/50',
  },
  backup: {
    label: 'Backup Option',
    className: 'bg-slate-700 text-slate-200 border border-slate-500/40',
  },
  starter: {
    label: 'Great Starter',
    className: 'bg-blue-500 text-white shadow-lg shadow-blue-500/20',
  },
  'high-reach': {
    label: 'For High Reach',
    className: 'bg-blue-500 text-white shadow-lg shadow-blue-500/20',
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
    approxPrice: '≈$15',
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
    approxPrice: '≈$15',
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

// ─── Small icon helpers ──────────────────────────────────────────────────────

function ArrowRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

// ─── Sub-components ──────────────────────────────────────────────────────────

function ProductImageBox({
  src,
  alt,
  pickBadge,
  sizes,
}: {
  src: string
  alt: string
  pickBadge?: PickBadge
  sizes: string
}) {
  return (
    <div className="relative bg-white border-b border-slate-200/60 aspect-[4/3] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain p-4"
      />
      {pickBadge && (
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${pickBadgeConfig[pickBadge].className}`}
        >
          {pickBadgeConfig[pickBadge].label}
        </span>
      )}
    </div>
  )
}

function ProductCard({ pick }: { pick: Pick }) {
  const affiliate = affiliateBadgeConfig[pick.badge]
  return (
    <div className="group bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col hover:border-blue-500/40 transition-colors">
      <ProductImageBox
        src={pick.image}
        alt={pick.title}
        pickBadge={pick.pickBadge}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs text-green-400 bg-slate-900/60 border border-green-700/30 rounded px-2 py-0.5 font-mono">
            {pick.approxPrice}
          </span>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${affiliate.className}`}>
            {affiliate.label}
          </span>
        </div>
        <h4 className="text-white font-semibold text-sm leading-snug mb-2">{pick.title}</h4>
        <p className="text-slate-400 text-xs leading-relaxed mb-5 flex-1">{pick.note}</p>
        <a
          href={pick.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs"
        >
          {pick.cta}
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}

function StarterTile({
  entry,
  pick,
  itemTitle,
}: {
  entry: StarterEntry
  pick: Pick
  itemTitle: string
}) {
  return (
    <a
      href={pick.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/60 rounded-xl overflow-hidden flex flex-col transition-colors"
    >
      <div className="relative bg-white aspect-square overflow-hidden">
        <Image
          src={pick.image}
          alt={pick.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-contain p-3"
        />
        <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shadow">
          {entry.itemNum}
        </span>
      </div>
      <div className="p-3 flex flex-col flex-1 gap-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">
          {entry.category}
        </p>
        <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
          {itemTitle}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-[11px] font-mono text-green-400">{pick.approxPrice}</span>
          <span className="text-[10px] font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            Shop →
          </span>
        </div>
      </div>
    </a>
  )
}

function CategoryBlock({ item }: { item: BuyOrderItem }) {
  const singlePick = item.picks.length === 1
  const gridCols = singlePick
    ? 'grid-cols-1 max-w-md'
    : item.picks.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div
      id={`item-${item.num}`}
      className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 sm:p-7 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
        <div className="flex items-start gap-4 min-w-0">
          <span className="flex-shrink-0 w-11 h-11 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-base font-bold rounded-xl flex items-center justify-center">
            {item.num}
          </span>
          <div className="min-w-0">
            <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-2 max-w-2xl">{item.description}</p>
          </div>
        </div>
        <span className="flex-shrink-0 self-start md:self-auto md:mt-1.5 text-green-400 text-xs font-mono bg-slate-900/70 border border-green-700/30 rounded-lg px-3 py-1.5">
          {item.summaryPrice}
        </span>
      </div>

      <div className={`grid ${gridCols} gap-4`}>
        {item.picks.map((pick) => (
          <ProductCard key={pick.url} pick={pick} />
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BeginnerSetupPage() {
  const findPick = (itemNum: number, pickIndex: number) => {
    const item = beginnerBuyOrder.find((entry) => entry.num === itemNum)
    if (!item) return null
    return { item, pick: item.picks[pickIndex] }
  }

  return (
    <>
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
              <ArrowRightIcon />
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

      {/* Buy Order — redesigned */}
      <section id="buy-order" className="bg-slate-900 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-3xl mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              My Buy Order
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I&apos;d Buy — and In What Order
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              This is the exact sequence I&apos;d follow if I were starting from scratch. Buy Stage 1,
              start booking jobs, then use the money you make to fill in Stages 2 and 3. You do{' '}
              <span className="text-white font-semibold">not</span> need everything on day one.
            </p>
          </div>

          {/* Compact summary — what to buy now vs later */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
            <div className="bg-slate-800/70 border border-blue-500/30 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  1
                </span>
                <p className="text-white text-sm font-semibold">Start booking jobs</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Buy the essentials in Stage 1. That gets you a working, professional setup for
                house washes and flatwork.
              </p>
            </div>
            <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 bg-slate-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  2
                </span>
                <p className="text-white text-sm font-semibold">Add reach &amp; speed</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                After a few paid jobs, add J-rod/shooter tips and an X-Jet or DS Twist to reach
                higher and mix chemical more easily.
              </p>
            </div>
            <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 bg-slate-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
                <p className="text-white text-sm font-semibold">Safety &amp; quality of life</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                PPE is non-negotiable — buy it before spraying chemical. Sprayers and hose reels
                are convenience upgrades that can wait.
              </p>
            </div>
          </div>

          {/* Recommended Starter Setup */}
          <div className="relative rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-900 p-6 sm:p-8 mb-16 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                <div>
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Curated Bundle
                  </p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                    My Recommended Starter Setup
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2 max-w-2xl">
                    If you asked me &quot;what do I buy first?&quot; — these six items are the answer.
                    Tap any tile to jump to its full breakdown or shop it directly.
                  </p>
                </div>
                <span className="flex-shrink-0 self-start sm:self-auto text-xs font-mono bg-slate-900/70 border border-green-700/40 text-green-300 rounded-lg px-3 py-1.5">
                  Total ≈ $1,300
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {starterSetupEntries.map((entry) => {
                  const result = findPick(entry.itemNum, entry.pickIndex)
                  if (!result) return null
                  return (
                    <StarterTile
                      key={`${entry.itemNum}-${entry.pickIndex}`}
                      entry={entry}
                      pick={result.pick}
                      itemTitle={result.item.title}
                    />
                  )
                })}
              </div>
              <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                Prices are estimates and vary by retailer. Click through each item to confirm
                current price and availability.
              </p>
            </div>
          </div>

          {/* Staged buy order */}
          <div className="space-y-16">
            {stages.map((stage, stageIdx) => {
              const items = beginnerBuyOrder.filter((item) => item.stage === stage.id)
              return (
                <div key={stage.id}>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6 pb-4 border-b border-slate-700/50">
                    <div>
                      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">
                        {stage.eyebrow}
                      </p>
                      <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mt-2 max-w-2xl">
                        {stage.description}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-slate-400 text-xs font-mono">
                      Items {items[0]?.num}–{items[items.length - 1]?.num} of {beginnerBuyOrder.length}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {items.map((item) => (
                      <CategoryBlock key={item.num} item={item} />
                    ))}
                  </div>

                  {stageIdx < stages.length - 1 && (
                    <div className="mt-10 text-center">
                      <span className="inline-flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest">
                        <span className="w-8 h-px bg-slate-700" />
                        Next stage
                        <span className="w-8 h-px bg-slate-700" />
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Pro tip */}
          <div className="mt-14 bg-blue-600/10 border border-blue-500/20 rounded-xl px-6 py-5">
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
                  <span className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${affiliateBadgeConfig[item.badge].className}`}>
                    {affiliateBadgeConfig[item.badge].label}
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

      {/* 12V Soft Wash Build CTA */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/50 via-slate-900 to-slate-900 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.15) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />
            <div className="relative grid md:grid-cols-[1fr_220px] gap-8 items-center p-6 sm:p-8">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Full DIY Build
                </p>
                <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  Ready to Build a Dedicated Soft Wash System?
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
                  See the complete 5–7 GPM 12V build, including the pump, tank, wiring, plumbing,
                  reel, gun, quick-connects, and J-Rod.
                </p>
                <Link
                  href="/12v-softwash-build"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  See the Full 12V Build
                  <ArrowRightIcon />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="rounded-xl overflow-hidden border border-slate-700/40 bg-white p-4">
                  <Image
                    src="/media/12V-Softwash-Build/REMCO7GPM.png"
                    alt="Remco 7 GPM 12V soft wash pump"
                    width={1060}
                    height={1053}
                    sizes="220px"
                    className="w-full h-auto"
                  />
                </div>
              </div>
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

      {/* Custom Pumps CTA */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Advanced Builds
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Build a Custom Pressure Washer?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Looking for replacement pumps, gear-driven setups, or components for a custom skid or
            trailer build? Browse my recommended custom pressure washer pumps and build resources.
          </p>
          <Link
            href="/custom-pumps"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
          >
            Browse Custom Pumps
            <ArrowRightIcon />
          </Link>
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
                <ExternalLinkIcon className="w-4 h-4" />
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
