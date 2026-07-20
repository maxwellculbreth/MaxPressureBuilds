// ─── 12V Soft Wash Build — product data ──────────────────────────────────────
// Swap links, prices, or parts here. Image paths are case-sensitive on Vercel.

export type BadgeTone = 'green' | 'blue' | 'cyan' | 'slate' | 'amber'

export interface ProductBadge {
  label: string
  tone: BadgeTone
}

export type Retailer = 'amazon' | 'sprayerDepot' | 'usPlastic'

export interface BuildProduct {
  id: string
  title: string
  approxPrice: string
  priceNum: number
  url: string
  retailer: Retailer
  image: string
  alt: string
  badges?: ProductBadge[]
  description: string
  bullets?: string[]
}

export const retailerConfig: Record<
  Retailer,
  { cta: string; rel: string; chip: string; chipClass: string }
> = {
  amazon: {
    cta: 'View on Amazon',
    rel: 'noopener noreferrer sponsored',
    chip: 'Amazon partner',
    chipClass: 'bg-green-900/30 text-green-400/80 border border-green-700/30',
  },
  sprayerDepot: {
    cta: 'View at Sprayer Depot',
    rel: 'noopener noreferrer',
    chip: 'Non-Amazon',
    chipClass: 'bg-slate-700/80 text-slate-300 border border-slate-600/60',
  },
  usPlastic: {
    cta: 'View at US Plastic',
    rel: 'noopener noreferrer',
    chip: 'Non-Amazon',
    chipClass: 'bg-slate-700/80 text-slate-300 border border-slate-600/60',
  },
}

export const badgeToneClass: Record<BadgeTone, string> = {
  green: 'bg-green-500 text-slate-900 shadow-lg shadow-green-500/20',
  blue: 'bg-blue-500 text-white shadow-lg shadow-blue-500/20',
  cyan: 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/20',
  slate: 'bg-slate-700 text-slate-100 border border-slate-500/40',
  amber: 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/20',
}

const IMG = '/media/12V-Softwash-Build'

export const products = {
  vevorPump: {
    id: 'vevorPump',
    title: 'VEVOR 5 GPM 12V Pump',
    approxPrice: '≈$55',
    priceNum: 55,
    url: 'https://amzn.to/4fIBlgm',
    retailer: 'amazon',
    image: `${IMG}/VEVOR5GPM.jpg`,
    alt: 'VEVOR 5 GPM 12V diaphragm pump for a budget soft wash system',
    badges: [{ label: 'Budget Option', tone: 'slate' }],
    description:
      'This is the inexpensive way I’d test the waters. Five gallons per minute is enough to wash houses, apply roof mix, and learn how a dedicated soft wash system works without putting a lot of money into the pump.',
    bullets: [
      'Pair it with the 5–6 GPM J-Rod so your nozzles match the flow.',
      'Good fit for a beginner or as a backup system on the trailer.',
      'Be realistic about durability — this is not built like the Remco. Treat it as a starting point, not a forever pump.',
    ],
  },
  remcoPump: {
    id: 'remcoPump',
    title: 'Remco 5538 ProFlo FatBoy 7 GPM Pump',
    approxPrice: '≈$240',
    priceNum: 240,
    url: 'https://www.sprayerdepot.com/products/remco-5538-1i1-94a-proflo-fatboy-electric-diaphragm-pump-automatic-demand?variant=12928984023107&msclkid=5c8fca4cf4171aacf656a011883a689b&utm_source=bing&utm_medium=cpc&utm_campaign=SC+-+Shopping+-+Branded+-+EE&utm_term=4585307093660726&utm_content=All+Products',
    retailer: 'sprayerDepot',
    image: `${IMG}/REMCO7GPM.png`,
    alt: 'Remco 5538 ProFlo FatBoy 7 GPM 12V electric diaphragm pump',
    badges: [
      { label: 'My Pick', tone: 'green' },
      { label: 'Non-Amazon', tone: 'slate' },
    ],
    description:
      'This is the pump I used for my main build. The extra flow gives me better reach and faster application than a small budget pump, while still keeping the entire system simple and battery powered.',
    bullets: [
      'Pair it with the 7–8 GPM J-Rod.',
      'Better choice if you’re already booking house washes and want speed.',
      'It’s still a demand pump — it needs proper wiring, fuse protection, plumbing, and maintenance like anything else.',
    ],
  },
  tank30: {
    id: 'tank30',
    title: '30 Gallon Drum-Style Tank',
    approxPrice: '≈$80',
    priceNum: 80,
    url: 'https://amzn.to/4hmM3dL',
    retailer: 'amazon',
    image: `${IMG}/30GALLONDRUMTANK.jpg`,
    alt: '30 gallon drum-style chemical tank for a budget soft wash build',
    badges: [{ label: 'Lowest-Cost Option', tone: 'slate' }],
    description:
      'The cheapest way into a dedicated tank. Thirty gallons is lighter, easier to fit on a small trailer or truck bed, and still enough mix for most single house washes.',
  },
  tank35: {
    id: 'tank35',
    title: '35 Gallon Round Chemical Tank',
    approxPrice: '≈$190',
    priceNum: 190,
    url: 'https://amzn.to/4pNW7yV',
    retailer: 'amazon',
    image: `${IMG}/35GALLONCHEMTANK.jpg`,
    alt: '35 gallon round chemical tank for a 12V soft wash system',
    badges: [{ label: 'Good All-Around Size', tone: 'blue' }],
    description:
      'The middle ground I’d point most people to. Enough capacity for a full job with margin, without the weight and footprint of a 50 gallon tank.',
  },
  tank50: {
    id: 'tank50',
    title: '50 Gallon Chemical Tank',
    approxPrice: '≈$200',
    priceNum: 200,
    url: 'https://amzn.to/4fmlpPE',
    retailer: 'amazon',
    image: `${IMG}/50GALLONCHEMTANK.jpg`,
    alt: '50 gallon chemical tank for a 12V soft wash system',
    badges: [{ label: 'More Capacity', tone: 'blue' }],
    description:
      'Fewer refills, more back-to-back jobs — but also a lot more weight when it’s full. Make sure your trailer and mounting spot can actually handle it.',
  },
  bulkheads: {
    id: 'bulkheads',
    title: '3/4-Inch Bulkheads, 2 Pack',
    approxPrice: '≈$6',
    priceNum: 6,
    url: 'https://amzn.to/4w8K8Ov',
    retailer: 'amazon',
    image: `${IMG}/34INCHBULKHEADS.jpg`,
    alt: '3/4 inch bulkhead tank fittings, 2 pack',
    badges: [
      { label: 'Required', tone: 'green' },
      { label: 'Verify Fitment', tone: 'amber' },
    ],
    description:
      'The bulkhead is what turns a plain tank into a plumbed tank — it seals through the tank wall and gives you a threaded port for the suction fitting. The 3/4 inch here is the nominal plumbing size, not the size of the hole you drill.',
  },
  holeSaw: {
    id: 'holeSaw',
    title: 'Hole Saw Kit',
    approxPrice: '≈$8',
    priceNum: 8,
    url: 'https://amzn.to/4vF7Kt0',
    retailer: 'amazon',
    image: `${IMG}/HOLESAWSET.jpg`,
    alt: 'Hole saw kit for drilling the tank bulkhead opening',
    description:
      'Cheap kit that covers the cutout for the bulkhead. Match the saw to the bulkhead manufacturer’s specified cutout — not to the “3/4 inch” in the product name.',
  },
  suctionHose: {
    id: 'suctionHose',
    title: '3/4-Inch Braided Hose With Clamps',
    approxPrice: '≈$15',
    priceNum: 15,
    url: 'https://amzn.to/4pts9zP',
    retailer: 'amazon',
    image: `${IMG}/34HOSE10FT.jpg`,
    alt: '3/4 inch braided suction hose with hose clamps',
    badges: [{ label: 'Required', tone: 'green' }],
    description:
      'This is the suction line that feeds the pump from the tank. Braided hose resists collapsing under suction, and the clamps lock it onto the barbs at both ends.',
  },
  banjo90: {
    id: 'banjo90',
    title: '3/4-Inch Male NPT to 3/4-Inch Barb, 90-Degree Banjo',
    approxPrice: '≈$4',
    priceNum: 4,
    url: 'https://amzn.to/4b4N8mB',
    retailer: 'amazon',
    image: `${IMG}/34MALENPTTO34BARB90DEGREE.jpg`,
    alt: '3/4 inch male NPT to 3/4 inch barb 90 degree banjo fitting',
    description:
      'Threads into the bulkhead and turns the suction line 90 degrees so the hose runs low and tight along the tank instead of kinking straight out the side.',
  },
  inletAdapter: {
    id: 'inletAdapter',
    title: '1/2-Inch Male NPT to 3/4-Inch Barb',
    approxPrice: '≈$1.70 + shipping',
    priceNum: 1.7,
    url: 'https://www.usplastic.com/catalog/item.aspx?itemid=159226',
    retailer: 'usPlastic',
    image: `${IMG}/12MNPTto34BARB.jpg`,
    alt: '1/2 inch male NPT to 3/4 inch barb pump inlet fitting',
    badges: [
      { label: 'Non-Amazon', tone: 'slate' },
      { label: 'Verify Fitment', tone: 'amber' },
    ],
    description:
      'This is the fitting that adapts the 3/4 inch suction hose down to the pump inlet on my build. Verify your exact pump’s inlet port size and thread before ordering — not every pump uses the same ports.',
  },
  battery: {
    id: 'battery',
    title: '12V Marine Battery',
    approxPrice: '≈$155',
    priceNum: 155,
    url: 'https://amzn.to/4hmluW6',
    retailer: 'amazon',
    image: `${IMG}/12VMARINEBATTERY.jpg`,
    alt: '12V deep cycle marine battery for powering the soft wash pump',
    badges: [{ label: 'Required', tone: 'green' }],
    description:
      'The whole system runs off this battery. A marine deep-cycle style battery handles the repeated draw-down and recharge cycles of pump work better than a basic car starting battery.',
  },
  batteryBoxPlastic: {
    id: 'batteryBoxPlastic',
    title: 'Plastic Battery Box',
    approxPrice: '≈$30',
    priceNum: 30,
    url: 'https://amzn.to/4fL4p6U',
    retailer: 'amazon',
    image: `${IMG}/12VPlasticBatteryBox.jpg`,
    alt: 'Plastic 12V battery box',
    badges: [{ label: 'Budget Option', tone: 'slate' }],
    description:
      'Keeps the battery contained, covered, and away from chemical splash. Cheap, light, and easy to drill for the switch and wiring pass-throughs.',
  },
  batteryBoxSteel: {
    id: 'batteryBoxSteel',
    title: 'Steel Battery Box',
    approxPrice: '≈$50',
    priceNum: 50,
    url: 'https://amzn.to/4fcbBJ9',
    retailer: 'amazon',
    image: `${IMG}/12VSTEELBATTERYBOX.jpg`,
    alt: 'Steel 12V battery box',
    badges: [{ label: 'More Durable', tone: 'blue' }],
    description:
      'Tougher option if the box lives on an open trailer and takes abuse. Costs more and is heavier, but it holds up better long term.',
  },
  ringTerminals: {
    id: 'ringTerminals',
    title: 'Heat-Shrink Ring Terminal Kit',
    approxPrice: '≈$10',
    priceNum: 10,
    url: 'https://amzn.to/3RHWdeE',
    retailer: 'amazon',
    image: `${IMG}/HEATSHRINKRINGTERMINALS.jpg`,
    alt: 'Heat shrink ring terminal crimp connector kit',
    badges: [{ label: 'Required', tone: 'green' }],
    description:
      'Crimped and heat-shrunk ring terminals are what keep your connections solid around water and chemical. Twisted bare wire on a battery terminal is how systems die early.',
  },
  switch: {
    id: 'switch',
    title: 'Battery Box On/Off Switch',
    approxPrice: '≈$13',
    priceNum: 13,
    url: 'https://amzn.to/4hmB1VO',
    retailer: 'amazon',
    image: `${IMG}/ONOFFSWITCH.jpg`,
    alt: '12V on/off toggle switch panel for a battery box',
    badges: [{ label: 'Verify Fitment', tone: 'amber' }],
    description:
      'A master switch mounted to the battery box lets you kill the pump without popping the lid and pulling a terminal. Verify the switch’s continuous 12V DC amp rating against your pump’s current draw — if it isn’t rated for it, run a properly rated relay or contactor instead of switching the full load directly.',
  },
  fuseHolder: {
    id: 'fuseHolder',
    title: '10-Gauge Inline Fuse Holder Kit',
    approxPrice: '≈$10',
    priceNum: 10,
    url: 'https://amzn.to/4wo7HTu',
    retailer: 'amazon',
    image: `${IMG}/10GAUGEFUSEHOLDER.jpg`,
    alt: '10 gauge inline blade fuse holder kit',
    badges: [{ label: 'Required', tone: 'green' }],
    description:
      'The fuse protects the wiring if something shorts. Use the fuse amperage your pump manufacturer specifies — not a guess — and mount the holder as close to the battery as practical.',
  },
  hose50: {
    id: 'hose50',
    title: 'Flexzilla 50-Foot, 1/2-Inch Hose',
    approxPrice: '≈$45',
    priceNum: 45,
    url: 'https://amzn.to/4wf54DG',
    retailer: 'amazon',
    image: `${IMG}/FLEXZILLASOFTWASH50FT.jpg`,
    alt: 'Flexzilla 50 foot 1/2 inch hose for a compact soft wash setup',
    badges: [{ label: 'Compact Option', tone: 'slate' }],
    description:
      'Fifty feet keeps the budget build cheap and easy to manage. Fine for single-story houses and smaller properties where you can park close.',
  },
  hose100: {
    id: 'hose100',
    title: 'Flexzilla 100-Foot, 1/2-Inch Hose',
    approxPrice: '≈$85',
    priceNum: 85,
    url: 'https://amzn.to/4fHrese',
    retailer: 'amazon',
    image: `${IMG}/FLEXZILLASOFTWASH100FT.jpg`,
    alt: 'Flexzilla 100 foot 1/2 inch hose for a 12V soft wash system',
    badges: [{ label: 'My Preferred Length', tone: 'green' }],
    description:
      'A hundred feet is what I run. It lets me park the trailer once and reach all the way around most houses without dragging the whole system.',
  },
  reel: {
    id: 'reel',
    title: 'VEVOR Storage Reel',
    approxPrice: '≈$85',
    priceNum: 85,
    url: 'https://amzn.to/4vCgNuU',
    retailer: 'amazon',
    image: `${IMG}/VEVORSTORAGEREEL.jpg`,
    alt: 'VEVOR hose storage reel',
    badges: [
      { label: 'Optional', tone: 'slate' },
      { label: 'Verify Fitment', tone: 'amber' },
    ],
    description:
      'I use this as a storage reel — a clean place to wind up 100 feet of soft wash hose so it isn’t piled on the trailer deck. Treat it as storage only unless you’ve confirmed your exact reel has a chemical-rated live swivel. Don’t assume chemical can safely flow through the reel’s swivel.',
  },
  reelAdapter34F12M: {
    id: 'reelAdapter34F12M',
    title: '3/4-Inch Female NPT to 1/2-Inch Male NPT',
    approxPrice: '≈$14',
    priceNum: 14,
    url: 'https://amzn.to/4fjCMRa',
    retailer: 'amazon',
    image: `${IMG}/34FNMPTto12MALE.jpg`,
    alt: '3/4 inch female NPT to 1/2 inch male NPT adapter',
    badges: [{ label: 'Verify Fitment', tone: 'amber' }],
    description:
      'One of the two adapters I use so the hose can connect neatly to the reel for organized storage.',
  },
  reelAdapter12F12F: {
    id: 'reelAdapter12F12F',
    title: '1/2-Inch Female NPT to 1/2-Inch Female NPT',
    approxPrice: '≈$7',
    priceNum: 7,
    url: 'https://amzn.to/4b1ajhN',
    retailer: 'amazon',
    image: `${IMG}/12FNPTto12FNPT.jpg`,
    alt: '1/2 inch female NPT to 1/2 inch female NPT coupler',
    badges: [{ label: 'Verify Fitment', tone: 'amber' }],
    description:
      'The second adapter in my reel hookup. Between these two, the hose end mates cleanly with the reel instead of dangling loose.',
  },
  gun: {
    id: 'gun',
    title: 'Suttner ST-515 Gun',
    approxPrice: '≈$25',
    priceNum: 25,
    url: 'https://amzn.to/44A6Zqj',
    retailer: 'amazon',
    image: `${IMG}/SUTTNER515.jpg`,
    alt: 'Suttner ST-515 soft wash spray gun',
    badges: [{ label: 'My Gun Setup', tone: 'green' }],
    description:
      'The soft wash gun I actually run. Simple, cheap, comfortable to hold all day, and it takes the quick-connect setup below so the J-Rod pops on and off in seconds.',
  },
  jrod56: {
    id: 'jrod56',
    title: '5–6 GPM J-Rod',
    approxPrice: '≈$40',
    priceNum: 40,
    url: 'https://amzn.to/4prU0Aq',
    retailer: 'amazon',
    image: `${IMG}/JROD5-6GPM.jpg`,
    alt: '5-6 GPM soft wash J-Rod nozzle assembly',
    badges: [{ label: 'For the Vevor Build', tone: 'blue' }],
    description:
      'Nozzles sized for a 5–6 GPM pump. If you go with the VEVOR pump, this is the J-Rod that matches its flow.',
  },
  jrod78: {
    id: 'jrod78',
    title: '7–8 GPM J-Rod',
    approxPrice: '≈$40',
    priceNum: 40,
    url: 'https://amzn.to/44I69Yu',
    retailer: 'amazon',
    image: `${IMG}/JROD7-8GPM.jpg`,
    alt: '7-8 GPM soft wash J-Rod nozzle assembly',
    badges: [{ label: 'For the Remco Build', tone: 'green' }],
    description:
      'Nozzles sized for a 7–8 GPM pump. This is what I run on the Remco — matching the J-Rod to the pump’s actual flow is what gets you real distance.',
  },
  qcKit: {
    id: 'qcKit',
    title: '3/8-Inch Male NPT Quick-Connect Kit',
    approxPrice: '≈$15',
    priceNum: 15,
    url: 'https://amzn.to/4pwrMo7',
    retailer: 'amazon',
    image: `${IMG}/38MNPTQCKIT.jpg`,
    alt: '3/8 inch male NPT stainless quick-connect fitting kit',
    badges: [{ label: 'Verify Fitment', tone: 'amber' }],
    description:
      'The stainless quick-connects that make the gun and J-Rod modular. I believe these correspond to my Suttner setup, but confirm your exact gun’s threads before ordering.',
  },
  reducers: {
    id: 'reducers',
    title: '1/2-Inch Male NPT to 3/8-Inch Female Reducer, 2 Pack',
    approxPrice: '≈$8',
    priceNum: 8,
    url: 'https://amzn.to/3R04QRC',
    retailer: 'amazon',
    image: `${IMG}/12MNPTto38REDUCER.jpg`,
    alt: '1/2 inch male NPT to 3/8 inch female NPT reducers, 2 pack',
    badges: [{ label: 'Verify Fitment', tone: 'amber' }],
    description:
      'Steps the 1/2 inch side down to 3/8 inch so the quick-connect kit ties into the gun and hose ends. Same warning as above — verify threads on your exact parts.',
  },
} satisfies Record<string, BuildProduct>

export type ProductId = keyof typeof products

// ─── Build options ───────────────────────────────────────────────────────────

export interface BuildOption {
  id: 'budget' | 'premium'
  eyebrow: string
  label: string
  shortLabel: string
  gpm: string
  description: string
  partIds: ProductId[]
}

export const buildOptions: BuildOption[] = [
  {
    id: 'budget',
    eyebrow: 'Option 1',
    label: 'Budget 5 GPM Build',
    shortLabel: 'Budget 5 GPM',
    gpm: '5 GPM',
    description:
      'The cheapest way I’d put together a real dedicated soft wash system. VEVOR pump, 30 gallon drum tank, plastic battery box, 50 feet of hose, and the 5–6 GPM J-Rod — with the same wiring, bulkhead, and fitting kit as my build.',
    partIds: [
      'vevorPump',
      'tank30',
      'battery',
      'batteryBoxPlastic',
      'hose50',
      'jrod56',
      'gun',
      'reel',
      'bulkheads',
      'holeSaw',
      'suctionHose',
      'banjo90',
      'inletAdapter',
      'ringTerminals',
      'switch',
      'fuseHolder',
      'qcKit',
      'reducers',
      'reelAdapter34F12M',
      'reelAdapter12F12F',
    ],
  },
  {
    id: 'premium',
    eyebrow: 'Option 2',
    label: 'My 7 GPM Build',
    shortLabel: 'My 7 GPM',
    gpm: '7 GPM',
    description:
      'The system I actually built and run. Remco 7 GPM FatBoy, 35 gallon tank (or the 50 if you want capacity), marine battery with a mounted master switch and inline fuse, 100 feet of hose, and the 7–8 GPM J-Rod.',
    partIds: [
      'remcoPump',
      'tank35',
      'battery',
      'batteryBoxSteel',
      'hose100',
      'jrod78',
      'gun',
      'reel',
      'bulkheads',
      'holeSaw',
      'suctionHose',
      'banjo90',
      'inletAdapter',
      'ringTerminals',
      'switch',
      'fuseHolder',
      'qcKit',
      'reducers',
      'reelAdapter34F12M',
      'reelAdapter12F12F',
    ],
  },
]

export function buildTotal(option: BuildOption): number {
  return Math.round(
    option.partIds.reduce((sum, id) => sum + products[id].priceNum, 0)
  )
}
