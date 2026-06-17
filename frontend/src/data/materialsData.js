// Product portfolio adapted from buildersmart.in/brands catalog structure.
// Using high-quality open/free images generated for each material category

export const categoryImages = {
  cement: '/materials/cement.png',
  sand: '/materials/sand-aggregates.png',
  tmt: '/materials/tmt-steel.png',
  bricks: '/materials/bricks-blocks.png',
  electrical: '/materials/electrical.png',
  plumbing: '/materials/plumbing.png',
  wooden: '/materials/wooden-products.png',
  tiles: '/materials/tiles.png',
  bathroom: '/materials/bathroom.png',
  hardware: '/materials/hardware.png',
  paints: '/materials/paints.png',
  lighting: '/materials/lighting.png',
  'natural-stones': '/materials/tiles.png',
  rmc: '/materials/cement.png',
  roofing: '/materials/tiles.png',
  'upvc-doors': '/materials/plumbing.png',
  'home-automation': '/materials/electrical.png',
  'home-decor': '/materials/tiles.png',
  'modular-kitchen': '/materials/bathroom.png',
  'construction-chemicals': '/materials/paints.png',
  'glass-hardware': '/materials/hardware.png',
  default: '/materials/cement.png',
};

// Category + subcategory filter structure (mirrors BuildersMART "Materials" menu)
export const categories = [
  {
    id: 'cement', name: 'Cement',
    subs: [{ id: 'opc-53', name: 'OPC-53 Grade' }, { id: 'ppc', name: 'PPC Cement' }],
  },
  { id: 'sand', name: 'Sand & Aggregates', subs: [] },
  {
    id: 'tmt', name: 'TMT Steel Bars',
    subs: [
      { id: 'fe-500', name: 'Fe-500 Grade' }, { id: 'fe-550', name: 'Fe-550 Grade' },
      { id: 'binding-wire', name: 'Binding Wire' }, { id: 'couplers', name: 'Rebar Couplers' },
    ],
  },
  {
    id: 'bricks', name: 'Bricks & Blocks',
    subs: [
      { id: 'concrete-solid-blocks', name: 'Concrete Solid Blocks' }, { id: 'flyash', name: 'Flyash Bricks' },
      { id: 'aac', name: 'AAC Blocks' }, { id: 'red-bricks', name: 'Red Bricks' },
    ],
  },
  {
    id: 'electrical', name: 'Electrical',
    subs: [
      { id: 'conduit', name: 'Conduit Pipes & Fittings' }, { id: 'wires-cables', name: 'Wires & Cables' },
      { id: 'modular-switches', name: 'Modular Switches & Sockets' }, { id: 'electric-panels', name: 'Electric Panels' },
      { id: 'switchgear', name: 'Switch Gear (DB/MCB/RCCB)' }, { id: 'others', name: 'Others' },
    ],
  },
  {
    id: 'plumbing', name: 'Plumbing',
    subs: [
      { id: 'cpvc', name: 'CPVC Pipes & Fittings' }, { id: 'upvc', name: 'UPVC Pipes & Fittings' },
      { id: 'swr', name: 'SWR Pipes & Fittings' }, { id: 'swg', name: 'SWG Pipes' },
      { id: 'specials', name: 'Specials & Accessories' },
    ],
  },
  {
    id: 'wooden', name: 'Wooden Products',
    subs: [
      { id: 'plywood', name: 'Plywood' }, { id: 'block-boards', name: 'Block Boards' },
      { id: 'laminates', name: 'Decorative Laminates' }, { id: 'veneers', name: 'Veneers' },
    ],
  },
  {
    id: 'tiles', name: 'Tiles',
    subs: [
      { id: 'floor', name: 'Floor Tiles' }, { id: 'wall', name: 'Wall Tiles' },
      { id: 'parking', name: 'Parking Tiles' }, { id: 'vitrified', name: 'Vitrified Tiles' },
    ],
  },
  {
    id: 'bathroom', name: 'Bathroom Accessories',
    subs: [
      { id: 'faucets', name: 'Faucets' }, { id: 'showers', name: 'Showers' },
      { id: 'sanitaryware', name: 'Sanitaryware' }, { id: 'other', name: 'Other Accessories' },
    ],
  },
  {
    id: 'hardware', name: 'Hardware Fixtures',
    subs: [
      { id: 'premium-handles', name: 'Premium Handles' }, { id: 'ss-pull-handles', name: 'SS Pull Handles' },
      { id: 'mortise-locks', name: 'Mortise Locks' }, { id: 'drawer-cabinet', name: 'Drawer & Cabinet' },
      { id: 'euro-cylinders', name: 'Euro Profile Cylinders' },
    ],
  },
  {
    id: 'paints', name: 'Paints & Finishes',
    subs: [
      { id: 'wall-care-putty', name: 'Wall Care Putty' }, { id: 'decorative', name: 'Decorative Paint Coating' },
      { id: 'texture', name: 'Texture & Wall Finishes' },
    ],
  },
  {
    id: 'lighting', name: 'Lighting & Fixtures',
    subs: [{ id: 'indoor', name: 'Indoor Luminaires' }, { id: 'outdoor', name: 'Outdoor Luminaires' }],
  },
  {
    id: 'natural-stones', name: 'Natural Stones',
    subs: [{ id: 'granites', name: 'Granites' }, { id: 'marbles', name: 'Marbles' }],
  },
  { id: 'rmc', name: 'RMC (Ready Mix Concrete)', subs: [] },
  { id: 'roofing', name: 'Roofing Solutions', subs: [] },
  {
    id: 'upvc-doors', name: 'UPVC Doors & Windows',
    subs: [{ id: 'upvc-doors', name: 'UPVC Doors' }, { id: 'upvc-windows', name: 'UPVC Windows' }],
  },
  { id: 'home-automation', name: 'Home Automation', subs: [] },
  {
    id: 'home-decor', name: 'Home Decor',
    subs: [{ id: 'interior-exterior', name: 'Interior/Exterior' }, { id: 'writing-boards', name: 'Writing Boards' }],
  },
  {
    id: 'modular-kitchen', name: 'Modular Kitchen',
    subs: [{ id: 'ro-system', name: 'RO System' }, { id: 'accessories', name: 'Accessories' }],
  },
  {
    id: 'construction-chemicals', name: 'Construction Chemicals',
    subs: [{ id: 'adhesive', name: 'Adhesive' }, { id: 'dry-mix', name: 'Dry Mix' }, { id: 'solvents', name: 'Solvents' }],
  },
  { id: 'glass-hardware', name: 'Glass Hardware', subs: [{ id: 'mirrors', name: 'Mirrors' }] },
];

const rawProducts = [
  // ---------------- CEMENT ----------------
  { id: 1, name: 'Chettinad OPC 53 Grade', brand: 'Chettinad', category: 'cement', sub: 'opc-53', price: '₹380', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 2, name: 'KCP OPC 53 Grade', brand: 'KCP Cement', category: 'cement', sub: 'opc-53', price: '₹360', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 3, name: 'Birla-A1 OPC 53 Grade', brand: 'Birla-A1', category: 'cement', sub: 'opc-53', price: '₹480', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 4, name: 'Amrit OPC Cement 53 Grade', brand: 'Amrit Cement', category: 'cement', sub: 'opc-53', price: '₹380', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 5, name: 'Surya Gold OPC 53 Grade', brand: 'Surya Gold', category: 'cement', sub: 'opc-53', price: '₹390', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 6, name: 'Priya Premium Cement (PPC)', brand: 'Priya', category: 'cement', sub: 'ppc', price: '₹255', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 7, name: 'Bharathi Ultra Fast Cement', brand: 'Bharathi', category: 'cement', sub: 'ppc', price: '₹295', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 8, name: 'Birla Samrat PPC Cement', brand: 'Birla-A1', category: 'cement', sub: 'ppc', price: '₹367', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 9, name: 'Chettinad PPC Cement', brand: 'Chettinad', category: 'cement', sub: 'ppc', price: '₹275', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 10, name: 'Nagarjuna PPC 43 Grade Cement', brand: 'Nagarjuna Cement', category: 'cement', sub: 'ppc', price: '₹255', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 11, name: 'KCP PPC Cement', brand: 'KCP Cement', category: 'cement', sub: 'ppc', price: '₹285', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 12, name: 'Zuari PPC Cement', brand: 'Zuari', category: 'cement', sub: 'ppc', price: '₹265', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 13, name: 'Ramco Supergrade Cement', brand: 'Ramco', category: 'cement', sub: 'ppc', price: '₹305', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 14, name: 'Maha Solid HD+ Cement', brand: 'Maha Cement', category: 'cement', sub: 'ppc', price: '₹315', unit: 'per Bag', image: '/materials/cement.png' },
  { id: 15, name: 'Ambuja Buildcem Cement', brand: 'Ambuja Cement', category: 'cement', sub: 'ppc', price: '₹460', unit: 'per Bag', image: '/materials/cement.png' },

  // ---------------- SAND & AGGREGATES ----------------
  { id: 16, name: 'M-Sand (Manufactured Sand)', brand: 'Local', category: 'sand', sub: '', price: '₹45', unit: 'per Cft', image: '/materials/sand-aggregates.png' },
  { id: 17, name: 'River Sand', brand: 'Local', category: 'sand', sub: '', price: '₹55', unit: 'per Cft', image: '/materials/sand-aggregates.png' },
  { id: 18, name: '20mm Aggregate (Blue Metal)', brand: 'Local', category: 'sand', sub: '', price: '₹38', unit: 'per Cft', image: '/materials/sand-aggregates.png' },
  { id: 19, name: '40mm Aggregate', brand: 'Local', category: 'sand', sub: '', price: '₹40', unit: 'per Cft', image: '/materials/sand-aggregates.png' },

  // ---------------- TMT STEEL ----------------
  { id: 20, name: 'Binding Wire', brand: 'General', category: 'tmt', sub: 'binding-wire', price: '₹115', unit: 'per Kg', image: '/materials/tmt-steel.png' },
  { id: 21, name: 'Tata Tiscon Fe-500 Grade - 8mm', brand: 'Tata-TMT', category: 'tmt', sub: 'fe-500', price: '₹1,03,000', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 22, name: 'Tata Tiscon Fe-500 Grade - 12mm', brand: 'Tata-TMT', category: 'tmt', sub: 'fe-500', price: '₹1,01,800', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 23, name: 'SAIL TMT Fe-500 Grade - 25mm', brand: 'SAIL', category: 'tmt', sub: 'fe-500', price: '₹74,800', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 24, name: 'SS Gold Fe-500 Grade - 16mm', brand: 'SS Gold', category: 'tmt', sub: 'fe-500', price: '₹93,800', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 25, name: 'Prime Gold TMT Fe-500 Grade - 25mm', brand: 'Prime Gold TMT', category: 'tmt', sub: 'fe-500', price: '₹92,800', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 26, name: 'Birla TMT Fe-500 Grade - 12mm', brand: 'Birla TMT', category: 'tmt', sub: 'fe-500', price: '₹93,800', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 27, name: 'Jairaj Ispat Fe-550 Grade - 16mm', brand: 'Jairaj Ispat', category: 'tmt', sub: 'fe-550', price: '₹58,000', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 28, name: 'Jairaj Ispat Fe-550 Grade - 12mm', brand: 'Jairaj Ispat', category: 'tmt', sub: 'fe-550', price: '₹60,600', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 29, name: 'JSW TMT Fe-550 Grade - 20mm', brand: 'JSW-TMT', category: 'tmt', sub: 'fe-550', price: '₹79,000', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 30, name: 'AF Star TMT Fe-550 Grade - 10mm', brand: 'AF Star TMT', category: 'tmt', sub: 'fe-550', price: '₹78,644', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 31, name: 'Radha Thermex Fe-550 Grade - 16mm', brand: 'Radha Thermex', category: 'tmt', sub: 'fe-550', price: '₹93,469', unit: 'per Ton', image: '/materials/tmt-steel.png' },
  { id: 32, name: 'Rebar Coupler - 25mm', brand: 'Vibgyor', category: 'tmt', sub: 'couplers', price: '₹113.50', unit: 'per Piece', image: '/materials/tmt-steel.png' },
  { id: 33, name: 'Rebar Coupler - 16mm', brand: 'Vibgyor', category: 'tmt', sub: 'couplers', price: '₹69.50', unit: 'per Piece', image: '/materials/tmt-steel.png' },
  { id: 34, name: 'Rebar Coupler + Rod Threading - 25mm', brand: 'Vibgyor', category: 'tmt', sub: 'couplers', price: '₹183', unit: 'per Piece', image: '/materials/tmt-steel.png' },

  // ---------------- BRICKS & BLOCKS ----------------
  { id: 35, name: 'KSP Eco Brick - 4" (100x200x400mm)', brand: 'KSP Eco Bricks', category: 'bricks', sub: 'concrete-solid-blocks', price: '₹39', unit: 'per Nos', image: '/materials/bricks-blocks.png' },
  { id: 36, name: 'KSP Eco Brick - 9" (150x220x300mm)', brand: 'KSP Eco Bricks', category: 'bricks', sub: 'concrete-solid-blocks', price: '₹51.05', unit: 'per Nos', image: '/materials/bricks-blocks.png' },
  { id: 37, name: 'D Lite CLC Block', brand: 'D Lite', category: 'bricks', sub: 'concrete-solid-blocks', price: '₹38', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 38, name: 'Solid Concrete Block 400x200x150', brand: 'Generic', category: 'bricks', sub: 'concrete-solid-blocks', price: '₹42.48', unit: 'per Nos', image: '/materials/bricks-blocks.png' },
  { id: 39, name: 'Generic Fly Ash Brick 6x8x12', brand: 'Generic', category: 'bricks', sub: 'flyash', price: '₹36', unit: 'per Nos', image: '/materials/bricks-blocks.png' },
  { id: 40, name: 'Aerocon AAC Block - 600x200x100mm', brand: 'Aerocon', category: 'bricks', sub: 'aac', price: '₹59', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 41, name: 'ACC AAC Block - 625x240x230mm', brand: 'ACC Limited', category: 'bricks', sub: 'aac', price: '₹76', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 42, name: 'Prime AAC Block - 600x200x230mm', brand: 'Prime', category: 'bricks', sub: 'aac', price: '₹113.90', unit: 'per Nos', image: '/materials/bricks-blocks.png' },
  { id: 43, name: 'Ecolite AAC Block - 625x240x75mm', brand: 'Ecolite', category: 'bricks', sub: 'aac', price: '₹70.50', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 44, name: 'Instablock AAC Block - 625x240x250mm', brand: 'Instablocks', category: 'bricks', sub: 'aac', price: '₹75', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 45, name: 'Karimnagar Red Brick PVC', brand: 'Karimnagar', category: 'bricks', sub: 'red-bricks', price: '₹13', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 46, name: 'Maharashtra Red Brick - 9x4x3', brand: 'Maharashtra Red Brick', category: 'bricks', sub: 'red-bricks', price: '₹15', unit: 'per Piece', image: '/materials/bricks-blocks.png' },
  { id: 47, name: 'HMT Red Brick 9x4x3 inch', brand: 'Red Brick', category: 'bricks', sub: 'red-bricks', price: '₹10', unit: 'per Piece', image: '/materials/bricks-blocks.png' },

  // ---------------- ELECTRICAL ----------------
  { id: 48, name: 'L&T entice Switch 10A 1-way', brand: 'L & T', category: 'electrical', sub: 'modular-switches', price: '₹63.62', unit: 'per Nos', image: '/materials/electrical.png' },
  { id: 49, name: 'L&T entice Socket 6A 2M (Heavy Duty)', brand: 'L & T', category: 'electrical', sub: 'modular-switches', price: '₹123.87', unit: 'per Nos', image: '/materials/electrical.png' },
  { id: 50, name: 'Anchor Neon Indicator 240V-50Hz', brand: 'Anchor', category: 'electrical', sub: 'modular-switches', price: '₹850', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 51, name: 'Finolex Multicore Flexible 4 Core 35sq.mm', brand: 'Finolex', category: 'electrical', sub: 'wires-cables', price: '₹1,21,585', unit: 'per Bundle', image: '/materials/electrical.png' },
  { id: 52, name: 'Polycab Copper Armoured LT Cable 1.5mm 2Core', brand: 'Polycab', category: 'electrical', sub: 'wires-cables', price: '₹125', unit: 'per Metre', image: '/materials/electrical.png' },
  { id: 53, name: 'Polycab LAN Cable CAT 6', brand: 'Polycab', category: 'electrical', sub: 'wires-cables', price: '₹43.69', unit: 'per Metre', image: '/materials/electrical.png' },
  { id: 54, name: 'Havells 0.5sq.mm Single Core Copper Cable (FR)', brand: 'Havells', category: 'electrical', sub: 'wires-cables', price: '₹11.30', unit: 'per Metre', image: '/materials/electrical.png' },
  { id: 55, name: 'Legrand MCB DX3 80A (2 Pole)', brand: 'Legrand', category: 'electrical', sub: 'switchgear', price: '₹5,816', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 56, name: 'V-Guard MCB 6A SP C', brand: 'V-Guard', category: 'electrical', sub: 'switchgear', price: '₹188', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 57, name: 'Hager IP30 Single Door DB - 12 Way', brand: 'Hager', category: 'electrical', sub: 'switchgear', price: '₹1,635', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 58, name: 'Goldmedal C25 SP MCB', brand: 'Goldmedal', category: 'electrical', sub: 'switchgear', price: '₹280', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 59, name: 'Marcos Surface Box - 3M', brand: 'Marcos', category: 'electrical', sub: 'conduit', price: '₹53', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 60, name: 'Hosper RJ-45 Cat 5/Cat 6', brand: 'Hosper', category: 'electrical', sub: 'conduit', price: '₹200', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 61, name: "Havell's 16A SP C Mini MCB", brand: 'Havells', category: 'electrical', sub: 'others', price: '₹281.60', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 62, name: 'Techno 15 KVA AMF Panel', brand: 'Techno Power Controls', category: 'electrical', sub: 'electric-panels', price: '₹22,500', unit: 'per Piece', image: '/materials/electrical.png' },

  // ---------------- PLUMBING ----------------
  { id: 63, name: '1 Inch Long Bends', brand: 'Sudhakar', category: 'plumbing', sub: 'specials', price: '₹18.50', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 64, name: "Supreme 20mm CPVC Elbow", brand: 'Supreme', category: 'plumbing', sub: 'cpvc', price: '₹13.35', unit: 'per Nos', image: '/materials/plumbing.png' },
  { id: 65, name: 'Astral Sch 40 Reducer Tee 65x50mm', brand: 'Astral', category: 'plumbing', sub: 'cpvc', price: '₹956', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 66, name: 'Astral Spears Ball Valve - 32mm', brand: 'Astral', category: 'plumbing', sub: 'cpvc', price: '₹1,161', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 67, name: "Ashirvad CPVC Tee - 3/4\"", brand: 'Ashirvad', category: 'plumbing', sub: 'cpvc', price: '₹34.53', unit: 'per Nos', image: '/materials/plumbing.png' },
  { id: 68, name: 'Ajay UPVC Reducer Tee 50x20mm', brand: 'Ajay Pipes', category: 'plumbing', sub: 'upvc', price: '₹110.70', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 69, name: 'Astral Tee (Soc) - 32mm', brand: 'Astral', category: 'plumbing', sub: 'upvc', price: '₹37', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 70, name: 'Prince SCH 40 - 3Mtr Pipe 150mm (6inch)', brand: 'Prince', category: 'plumbing', sub: 'upvc', price: '₹1,251.50', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 71, name: 'FRP Manhole Cover - Square LD 5 Ton', brand: 'Simtex', category: 'plumbing', sub: 'swr', price: '₹5,780', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 72, name: 'Ajay SWR Cross Tee with Door - 110mm', brand: 'Ajay Pipes', category: 'plumbing', sub: 'swr', price: '₹326.40', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 73, name: 'Astral SWR Coupler - 110mm', brand: 'Astral', category: 'plumbing', sub: 'swr', price: '₹78', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 74, name: 'SWG Pipe - 4"', brand: 'Generic', category: 'plumbing', sub: 'swg', price: '₹80.25', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 75, name: 'SWG Pipe - 8"', brand: 'Generic', category: 'plumbing', sub: 'swg', price: '₹194.75', unit: 'per Piece', image: '/materials/plumbing.png' },
  { id: 76, name: 'Sudhakar Roto Moulded Tank - 500 Ltrs', brand: 'Sudhakar', category: 'plumbing', sub: 'specials', price: '₹6,389', unit: 'per Piece', image: '/materials/plumbing.png' },

  // ---------------- WOODEN PRODUCTS ----------------
  { id: 77, name: 'Century Club Prime Plywood 19mm', brand: 'Century Ply', category: 'wooden', sub: 'plywood', price: '₹95', unit: 'per Sft', image: '/materials/wooden-products.png' },
  { id: 78, name: 'Greenpanel BWP Plywood 18mm', brand: 'Greenpanel', category: 'wooden', sub: 'plywood', price: '₹85', unit: 'per Sft', image: '/materials/wooden-products.png' },
  { id: 79, name: 'Archidply Block Board 19mm', brand: 'Archidply', category: 'wooden', sub: 'block-boards', price: '₹78', unit: 'per Sft', image: '/materials/wooden-products.png' },
  { id: 80, name: 'Greenpanel Max Decorative Laminate 1mm', brand: 'Greenpanelmax', category: 'wooden', sub: 'laminates', price: '₹1,250', unit: 'per Sheet', image: '/materials/wooden-products.png' },
  { id: 81, name: 'Natural Teak Veneer', brand: 'Century Ply', category: 'wooden', sub: 'veneers', price: '₹180', unit: 'per Sft', image: '/materials/wooden-products.png' },

  // ---------------- TILES ----------------
  { id: 82, name: 'Kajaria Brown Garnet - 60x120cm', brand: 'Kajaria Ceramics Limited', category: 'tiles', sub: 'floor', price: '₹98', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 83, name: 'Cera Bianco Ace - 600x600mm', brand: 'Cera', category: 'tiles', sub: 'floor', price: '₹260', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 84, name: 'Kajaria Arena Gris - 60x120cm', brand: 'Kajaria Ceramics Limited', category: 'tiles', sub: 'floor', price: '₹70', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 85, name: 'Orient Virginia Beige', brand: 'Orientbell', category: 'tiles', sub: 'floor', price: '₹90', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 86, name: 'Johnson Urban Chic - 605x605x10mm', brand: 'Johnson Tiles', category: 'tiles', sub: 'wall', price: '₹52', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 87, name: 'Kajaria Black Agate Polished - 30x60cm', brand: 'Kajaria Ceramics Limited', category: 'tiles', sub: 'wall', price: '₹115', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 88, name: 'Nitco Arco White - 300x600mm', brand: 'Nitco', category: 'tiles', sub: 'wall', price: '₹90', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 89, name: "AGL's Zion Crema - 248x375mm", brand: 'AGL Tiles', category: 'tiles', sub: 'wall', price: '₹170', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 90, name: 'Regent Venis Grey', brand: 'Regent Granito India Ltd', category: 'tiles', sub: 'parking', price: '₹55', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 91, name: 'Regent Black Slate', brand: 'Regent Granito India Ltd', category: 'tiles', sub: 'parking', price: '₹65', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 92, name: 'Parking Tile (Football Design) Grey', brand: 'Generic', category: 'tiles', sub: 'parking', price: '₹35', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 93, name: "Johnson's Albeno White - 800x800mm", brand: 'Johnson Tiles', category: 'tiles', sub: 'vitrified', price: '₹85', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 94, name: 'Kajaria Polished Vitrified K12601 - 60x120cm', brand: 'Kajaria Ceramics Limited', category: 'tiles', sub: 'vitrified', price: '₹85', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 95, name: 'RAK Delta Grey - 1000x1000mm', brand: 'RAK Ceramics', category: 'tiles', sub: 'vitrified', price: '₹195', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 96, name: 'Mirage Rio White - 1000x1000mm', brand: 'Mirage Ceramics', category: 'tiles', sub: 'vitrified', price: '₹394', unit: 'per Sft', image: '/materials/tiles.png' },

  // ---------------- BATHROOM ACCESSORIES ----------------
  { id: 97, name: 'Jaquar Continental Pillar Cock', brand: 'Jaquar', category: 'bathroom', sub: 'faucets', price: '₹2,150', unit: 'per Piece', image: '/materials/bathroom.png' },
  { id: 98, name: 'Kohler Single Lever Basin Mixer', brand: 'Kohler', category: 'bathroom', sub: 'faucets', price: '₹6,900', unit: 'per Piece', image: '/materials/bathroom.png' },
  { id: 99, name: 'Jaquar Overhead Shower 5 inch', brand: 'Jaquar', category: 'bathroom', sub: 'showers', price: '₹1,250', unit: 'per Piece', image: '/materials/bathroom.png' },
  { id: 100, name: 'Parryware Wall Hung WC', brand: 'Parryware', category: 'bathroom', sub: 'sanitaryware', price: '₹8,500', unit: 'per Piece', image: '/materials/bathroom.png' },
  { id: 101, name: 'Cera Wash Basin', brand: 'Cera', category: 'bathroom', sub: 'sanitaryware', price: '₹2,800', unit: 'per Piece', image: '/materials/bathroom.png' },
  { id: 102, name: 'Hindware Health Faucet Set', brand: 'Hindware', category: 'bathroom', sub: 'other', price: '₹650', unit: 'per Set', image: '/materials/bathroom.png' },

  // ---------------- HARDWARE FIXTURES ----------------
  { id: 103, name: 'Hettich Mortise Lock Set', brand: 'Hettich', category: 'hardware', sub: 'mortise-locks', price: '₹2,450', unit: 'per Set', image: '/materials/hardware.png' },
  { id: 104, name: 'Harrison Mortise Lock', brand: 'Harrison Locks', category: 'hardware', sub: 'mortise-locks', price: '₹1,250', unit: 'per Set', image: '/materials/hardware.png' },
  { id: 105, name: 'Hafele SS Pull Handle 12 inch', brand: 'Hafele', category: 'hardware', sub: 'ss-pull-handles', price: '₹890', unit: 'per Piece', image: '/materials/hardware.png' },
  { id: 106, name: 'Dorset Premium Handle', brand: 'Dorset', category: 'hardware', sub: 'premium-handles', price: '₹1,150', unit: 'per Piece', image: '/materials/hardware.png' },
  { id: 107, name: 'Ebco Drawer Channel', brand: 'Ebco', category: 'hardware', sub: 'drawer-cabinet', price: '₹420', unit: 'per Pair', image: '/materials/hardware.png' },
  { id: 108, name: 'Yale Euro Profile Cylinder', brand: 'Yale', category: 'hardware', sub: 'euro-cylinders', price: '₹1,680', unit: 'per Piece', image: '/materials/hardware.png' },

  // ---------------- PAINTS & FINISHES ----------------
  { id: 109, name: 'Birla White Putty - 40Kg', brand: 'Birla White', category: 'paints', sub: 'wall-care-putty', price: '₹1,080', unit: 'per Bag', image: '/materials/paints.png' },
  { id: 110, name: 'JK Wall Putty - 40Kg', brand: 'JK Cement Ltd', category: 'paints', sub: 'wall-care-putty', price: '₹1,400', unit: 'per Bag', image: '/materials/paints.png' },
  { id: 111, name: 'Dulux Smoothover Putty - 15 Ltr', brand: 'Dulux', category: 'paints', sub: 'wall-care-putty', price: '₹1,846', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 112, name: 'Shalimar Magic Acrylic Wall Putty - 20 Ltr', brand: 'Shalimar Paints', category: 'paints', sub: 'wall-care-putty', price: '₹1,350', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 113, name: 'Asian Paints Tractor Emulsion White - 20 Ltr', brand: 'Asian Paints', category: 'paints', sub: 'decorative', price: '₹8,200', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 114, name: 'Asian Apcolite Premium Gloss Enamel White - 20 Ltr', brand: 'Asian Paints', category: 'paints', sub: 'decorative', price: '₹5,284', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 115, name: 'Berger Silk Luxury Emulsion - 20 Ltr', brand: 'Berger Paints', category: 'paints', sub: 'decorative', price: '₹10,350', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 116, name: 'British Acrylic Exterior Wall Primer - 20 Ltr', brand: 'British Paints', category: 'paints', sub: 'decorative', price: '₹1,355', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 117, name: 'Dulux Deep Base Interiors - 9 Ltr', brand: 'Dulux', category: 'paints', sub: 'decorative', price: '₹3,555', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 118, name: 'Nippon Satin Glo Aura - 20 Ltr', brand: 'Nippon', category: 'paints', sub: 'texture', price: '₹1,300', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 119, name: 'Shalimar Signature - 20 Ltr', brand: 'Shalimar Paints', category: 'paints', sub: 'texture', price: '₹1,745', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 120, name: 'British Glamour Premium Acrylic Emulsion - 20 Ltr', brand: 'British Paints', category: 'paints', sub: 'texture', price: '₹1,450', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 121, name: 'Snowcem Arctic White - 10 Ltr', brand: 'Snowcem Paints', category: 'paints', sub: 'texture', price: '₹4,468', unit: 'per Tin', image: '/materials/paints.png' },
  { id: 122, name: "JK White Cement - 50Kg", brand: 'JK Cement Ltd', category: 'paints', sub: 'wall-care-putty', price: '₹1,300', unit: 'per Bag', image: '/materials/paints.png' },

  // ---------------- LIGHTING & FIXTURES ----------------
  { id: 123, name: 'Philips LED Panel Light 20W', brand: 'Philips', category: 'lighting', sub: 'indoor', price: '₹650', unit: 'per Piece', image: '/materials/lighting.png' },
  { id: 124, name: 'Crompton LED Batten 20W', brand: 'Crompton', category: 'lighting', sub: 'indoor', price: '₹420', unit: 'per Piece', image: '/materials/lighting.png' },
  { id: 125, name: 'Syska LED Bulb 9W', brand: 'Syska', category: 'lighting', sub: 'indoor', price: '₹110', unit: 'per Piece', image: '/materials/lighting.png' },
  { id: 126, name: 'Havells LED Flood Light 50W', brand: 'Havells', category: 'lighting', sub: 'outdoor', price: '₹1,450', unit: 'per Piece', image: '/materials/lighting.png' },
  { id: 127, name: 'Wipro Street Light 90W', brand: 'Wipro', category: 'lighting', sub: 'outdoor', price: '₹3,200', unit: 'per Piece', image: '/materials/lighting.png' },

  // ---------------- NATURAL STONES ----------------
  { id: 128, name: 'Black Galaxy Granite', brand: 'Greenstone', category: 'natural-stones', sub: 'granites', price: '₹180', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 129, name: 'Tan Brown Granite', brand: 'Imperial Stonex', category: 'natural-stones', sub: 'granites', price: '₹140', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 130, name: 'Italian Statuario Marble', brand: 'Marmo Solutions', category: 'natural-stones', sub: 'marbles', price: '₹350', unit: 'per Sft', image: '/materials/tiles.png' },
  { id: 131, name: 'Makrana White Marble', brand: 'Shree Ganpathi Granites & Marbles', category: 'natural-stones', sub: 'marbles', price: '₹220', unit: 'per Sft', image: '/materials/tiles.png' },

  // ---------------- RMC ----------------
  { id: 132, name: 'M20 Ready Mix Concrete', brand: 'Aparna RMC', category: 'rmc', sub: '', price: '₹4,800', unit: 'per Cum', image: '/materials/cement.png' },
  { id: 133, name: 'M25 Ready Mix Concrete', brand: 'ACC Limited', category: 'rmc', sub: '', price: '₹5,100', unit: 'per Cum', image: '/materials/cement.png' },
  { id: 134, name: 'M30 Ready Mix Concrete', brand: 'Aparna RMC', category: 'rmc', sub: '', price: '₹5,500', unit: 'per Cum', image: '/materials/cement.png' },

  // ---------------- ROOFING ----------------
  { id: 135, name: 'Lotus UPVC Roofing Sheet - 10ft', brand: 'Lotus Roofings Pvt. Ltd.', category: 'roofing', sub: '', price: '₹620', unit: 'per Piece', image: '/materials/tiles.png' },
  { id: 136, name: 'Lotus Roofing Ridge Accessory', brand: 'Lotus Roofings Pvt. Ltd.', category: 'roofing', sub: '', price: '₹180', unit: 'per Piece', image: '/materials/tiles.png' },

  // ---------------- UPVC DOORS & WINDOWS ----------------
  { id: 137, name: 'Fenesta Casement Window', brand: 'Fenesta', category: 'upvc-doors', sub: 'upvc-windows', price: '₹650', unit: 'per Sft', image: '/materials/plumbing.png' },
  { id: 138, name: 'Koemmerling Sliding Window', brand: 'Koemmerling', category: 'upvc-doors', sub: 'upvc-windows', price: '₹580', unit: 'per Sft', image: '/materials/plumbing.png' },
  { id: 139, name: 'Spectus UPVC Door', brand: 'Spectus UPVC', category: 'upvc-doors', sub: 'upvc-doors', price: '₹720', unit: 'per Sft', image: '/materials/plumbing.png' },
  { id: 140, name: 'Genx UPVC Door', brand: 'Genx Windoors', category: 'upvc-doors', sub: 'upvc-doors', price: '₹560', unit: 'per Sft', image: '/materials/plumbing.png' },

  // ---------------- HOME AUTOMATION ----------------
  { id: 141, name: 'GM Smart Switch Module', brand: 'GM Modular', category: 'home-automation', sub: '', price: '₹2,450', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 142, name: 'Legrand Smart Home Hub', brand: 'Legrand', category: 'home-automation', sub: '', price: '₹8,900', unit: 'per Piece', image: '/materials/electrical.png' },
  { id: 143, name: 'Crabtree Smart Touch Switch', brand: 'Crabtree', category: 'home-automation', sub: '', price: '₹3,200', unit: 'per Piece', image: '/materials/electrical.png' },

  // ---------------- HOME DECOR ----------------
  { id: 144, name: 'Aalankritha Decorative Wall Accessory', brand: 'Aalankritha', category: 'home-decor', sub: 'interior-exterior', price: '₹1,200', unit: 'per Piece', image: '/materials/tiles.png' },
  { id: 145, name: 'Writing White Board 4x3', brand: 'Discreet Solutions Pvt Ltd', category: 'home-decor', sub: 'writing-boards', price: '₹1,850', unit: 'per Piece', image: '/materials/tiles.png' },

  // ---------------- MODULAR KITCHEN ----------------
  { id: 146, name: 'Aqua Fresh RO System', brand: 'Aqua Fresh', category: 'modular-kitchen', sub: 'ro-system', price: '₹8,500', unit: 'per Piece', image: '/materials/bathroom.png' },
  { id: 147, name: 'Hettich Kitchen Basket', brand: 'Hettich', category: 'modular-kitchen', sub: 'accessories', price: '₹3,400', unit: 'per Set', image: '/materials/bathroom.png' },
  { id: 148, name: 'Ebco Kitchen Tandem Box', brand: 'Ebco', category: 'modular-kitchen', sub: 'accessories', price: '₹2,900', unit: 'per Set', image: '/materials/bathroom.png' },

  // ---------------- CONSTRUCTION CHEMICALS ----------------
  { id: 149, name: 'MYK Laticrete Tile Adhesive - 20Kg', brand: 'MYK Laticrete', category: 'construction-chemicals', sub: 'adhesive', price: '₹420', unit: 'per Bag', image: '/materials/paints.png' },
  { id: 150, name: 'Weber Tile Adhesive - 20Kg', brand: 'Weber Saint Gobain', category: 'construction-chemicals', sub: 'adhesive', price: '₹480', unit: 'per Bag', image: '/materials/paints.png' },
  { id: 151, name: 'Bondit Waterproofing Compound', brand: 'Bondit', category: 'construction-chemicals', sub: 'dry-mix', price: '₹1,250', unit: 'per Bucket', image: '/materials/paints.png' },
  { id: 152, name: 'Ajay Pipes Solvent - 500ml', brand: 'Ajay Pipes', category: 'construction-chemicals', sub: 'solvents', price: '₹220', unit: 'per Piece', image: '/materials/paints.png' },

  // ---------------- GLASS HARDWARE ----------------
  { id: 153, name: 'Saint Gobain Mirror 4x3', brand: 'Saint Gobain', category: 'glass-hardware', sub: 'mirrors', price: '₹1,850', unit: 'per Piece', image: '/materials/hardware.png' },
  { id: 154, name: 'Modiguard Glass Mirror', brand: 'Modiguard', category: 'glass-hardware', sub: 'mirrors', price: '₹1,450', unit: 'per Piece', image: '/materials/hardware.png' },
];

// Replace every hotlink-protected BuildersMART image with a reliable
// category-matched photo (or the real ACC photo for ACC products).
export const products = rawProducts.map((p) => {
  // All BuildersMART CDN images are hotlink-protected, so use fallbacks
  let image = p.image;
  
  // Check if it's a hotlink-protected BuildersMART image
  if (image && image.indexOf('buildersmart.in') !== -1) {
    if (p.brand && p.brand.indexOf('ACC') !== -1) {
      image = ACC_IMG;
    } else if (p.brand && p.brand.indexOf('UltraTech') !== -1) {
      image = CEMENT_IMG;
    } else {
      image = categoryImages[p.category] || categoryImages.default;
    }
  } else if (!image || image === '') {
    // Handle empty images
    if (p.brand && p.brand.indexOf('ACC') !== -1) {
      image = ACC_IMG;
    } else {
      image = categoryImages[p.category] || categoryImages.default;
    }
  }
  
  return { ...p, image };
});

// Full A–Z brand directory (200+ brands)
export const brands = [
  ['Aalankritha', 'Aalankritha.jpg'], ['Aamoda Ply', 'aamoda2.jpg'], ['Acc Cement', 'acc3.jpg'], ['ACC Limited', 'acc_blocks.png'], ['Aerocon', 'aerocon.jpg'], ['AF Star TMT', 'AF-Star_TMT.jpg'], ['AGL Tiles', 'agl2.jpg'], ['Ajay Pipes', 'ajay.jpg'], ['Alfaa UV', 'Alfaa-logo-new.png'], ['Ambuja Cement', 'Ambuja-Cement.jpg'], ['Amrit Cement', 'amrit-cement.jpg'], ['Anchor', 'Anchor.jpg'], ['Anjani Cement', 'Anjani-Cement.jpg'], ['Aparna RMC', 'aparna2.jpg'], ['Apollo Pipes', 'apollo2.jpg'], ['Aqua Fresh', 'AquaFesh_Logo.jpg'], ['Archidply', 'archidply2.jpg'], ['Ashirvad', 'Ashirvad.png'], ['Asian Paints', 'asian2.jpg'],
  ['Bajaj', 'bajaj2.jpg'], ['Bajaj Tiles', 'bajajtiles2.jpg'], ['Beekay TMT', 'Beekay-TMT.jpg'], ['Berger Paints', 'berger3.jpg'], ['Bharathi Cement', 'bharathi-cement.jpg'], ['Bhavya Cement', 'bhavya-cement.jpg'], ['Bhushan TMT', 'Bhusan.jpg'], ['Biltech', 'biltech2.jpg'], ['Binani', 'Binani.JPG'], ['Birla A1', 'strongcrete.jpg'], ['Birla Gold', 'birla-gold.jpg'], ['Birla TMT', 'Birla-TMT_Logo_1.jpg'], ['Birla White', 'BirlaWhiteLogo.jpg'], ['Birla-Shakti', 'birla-sakthi.jpg'], ['Bison Panel', 'bison2.jpg'], ['Bondit', 'Bondit-logo-01.png'], ['British Paints', 'british3.jpg'],
  ['Captain Pipes', 'Captain-Pipes.jpg'], ['CCI', 'CCI-Cement.jpg'], ['Century Ply', 'century2.jpg'], ['Cera', 'cera2.jpg'], ['Ceramix', 'ceramix.jpg'], ['Chettinad', 'chettinad.jpg'], ['CNR Furniture Fittings', 'cnr2.jpg'], ['Coromandel King', 'coro.jpg'], ['Crabtree', 'Crabtree.png'], ['Crompton', 'crompton.png'],
  ['Dalmia Cement', 'Dalmia_Logo_1.jpg'], ['Deccan', 'deccan.jpg'], ['DhanLaxmi-TMT', 'dhanalaxmi2.jpg'], ['Discreet Solutions', 'discreet2.jpg'], ['Dorma', 'Dorma.jpg'], ['Dorset', 'dorset2.jpg'], ['Double Bull Cement', 'emami.png'], ['Dulux', 'dulux2.jpg'], ['Duraguard Cement', 'Durgaguard.png'], ['Duravit', 'duravit2.jpg'], ['Dutron Pipes', 'Durton.jpg'],
  ['Ebco', 'Ebco.jpg'], ['Ecolite', 'ecolitee.jpg'], ['Ecorex', 'ecorex.jpg'], ['Ecostone', 'Ecostone2.jpg'], ['Enox', 'Enox_Logo_1.png'], ['Essar Steel', 'essar.jpg'],
  ['Falcon Pipes', 'Falcon.jpg'], ['Fenesta', 'Fenesta_Logo_1.png'], ['Finecab', 'fiecab.jpg'], ['Finolex', 'finolex2.jpg'], ['Finolex Pipes', 'finolex-pipes2.jpg'],
  ['Genx Windoors', 'GenxWindoors.jpg'], ['GM Modular', 'gmswitches.jpg'], ['Godrej', 'godrej2.jpg'], ['Goldmedal', 'goldmedal2.jpg'], ['Gravity Bathware', 'Gravity-Hypnotic-Bathware.jpg'], ['GreatWhite Electricals', 'Greatwhite_electricals_1.png'], ['Greenpanel', 'GreenPanel.jpg'], ['Greenpanelmax', 'Greenpanelmax.jpg'], ['Greenstone', 'Greenstone_PNG.png'], ['Grip TMT', 'grip-tmt2.jpg'], ['Grohe', 'grohe2.jpg'],
  ['Hafele', 'Hafele.jpg'], ['Hager', 'hager2.jpg'], ['Hardwyn', 'hardwyn2.jpg'], ['Harrison Locks', 'Harrison.jpg'], ['Hathi Cement', 'hathi-cement.jpg'], ['Havells', 'havells.jpg'], ['Hettich', 'hettich2.jpg'], ['Hibond Cement', 'hi-bond-cement.jpg'], ['Hindware', 'hindware2.jpg'], ['Hosper', 'Hosper.jpg'],
  ['I Len Ply', 'I-Len_Ply_1.png'], ['Icon Tiles', 'Icon-Tiles.png'], ['Imperial Stonex', 'imperial-stonex3.jpg'], ['Indigo Paints', 'Indigo-Logo.png'], ['Infracem', 'infracem.png'], ['Instablocks', 'instablock2.jpg'], ['Ipsa', 'Ipsa.jpg'],
  ['Jairaj Ispat', 'Jairaj-ispat.jpg'], ['Jaquar', 'jaquar2.jpg'], ['Jaypee Cement', 'jaypee-cement.png'], ['Jindal-TMT', 'jindal.jpg'], ['JK Cement Ltd', 'JKC.jpg'], ['JK Lakshmi Cement', 'JKL.jpg'], ['Johnson Tiles', 'johnoson2.jpg'], ['JSW', 'jsw-cement.jpg'], ['JSW-TMT', 'jsw-steel.jpg'],
  ['Kajaria Ceramics', 'kajaria2.jpg'], ['Kalinga TMT', 'Kalinga-tmt.jpg'], ['Kamdhenu', 'kamadhenu1.jpg'], ['Kankai Pipes', 'kankai.jpg'], ['KCP Cement', 'kcp2.jpg'], ['KEI Wires & Cables', 'kei2.jpg'], ['Kesoram Cement', 'kesoram.JPG'], ['Kitply', 'kitply2.jpg'], ['KJS Cement', 'KJS.JPG'], ['KMG Tiles', 'KMG.jpg'], ['Koemmerling', 'kommerling.jpg'], ['Kohler', 'kohler2.jpg'], ['Konark Cement', 'konark.JPG'], ['Kshema Technos', 'kshema2.jpg'], ['KSP Eco Bricks', 'KSP_LOGO.jpg'],
  ['L & T', 'lt2.jpg'], ['Lafarge', 'lafarge.jpg'], ['Legrand', 'legrand.jpg'], ['Lifestyle', 'Lifestyle_logo_1.png'], ['Lotus Roofings', 'lotus2.jpg'], ['Luminous', 'Luminious.jpg'],
  ['Magicrete', 'magicrete2.jpg'], ['Maha Cement', 'maha.jpg'], ['Malabar Cement', 'Malabar.jpg'], ['Mangal-TMT', 'mangal2.jpg'], ['Marmo Solutions', 'Marmo%20Solutions.png'], ['Maru Marcos', 'Marumarcos.jpg'], ['Maruti Cement', 'maruti_cement.jpg'], ['Mayur', 'mayur2.jpg'], ['Meenakshi Steel', 'meenakshi.jpg'], ['Meraki Laminates', 'meraki2.jpg'], ['Mirage Ceramics', 'mirage3.jpg'], ['Modiguard', 'Modiguard.png'], ['MP Birla', 'mpbirla.jpg'], ['MS Agarwal', 'MS-Agrawal.jpg'], ['MS Life-TMT', 'MSlife.jpg'], ['Muniyad Cement', 'muniyad-logo-100.jpg'], ['Mycem', 'Mycem.JPG'], ['MYK Laticrete', 'MYK_Laticrete_Logo.jpg'],
  ['Nagarjuna Cement', 'Nagarjuna-Cement.jpg'], ['Nandi Pipes', 'NandiPipes.jpg'], ['Nippon', 'nippo3.jpg'], ['Nirmax Cement', 'nirmax.jpg'], ['Nitco', 'nitco2.jpg'],
  ['OM Sai TMT', 'OmSaiTMT.jpg'], ['One Plus -1+', 'OnePlus_Logo.png'], ['Orient', 'Orient.jpg'], ['Orientbell', 'orient-tiles2.jpg'], ['Orpat', 'orpat2_1.jpg'], ['Orpat Electricals', 'orpat.jpg'], ['Oyster', 'Oyster.jpg'],
  ['Panasonic', 'panasonic2.jpg'], ['Parasakti Cement', 'Parashakti_1.jpg'], ['Parmeshwar Cement', 'Parmeshwar-cement.png'], ['Parryware', 'parryware2.jpg'], ['Penna Cement', 'penna.jpg'], ['Philips', 'philips2.jpg'], ['Pipole Pipes', 'pipole-pipes-logo.jpg'], ['Plasto', 'Plasto.png'], ['Polycab', 'polycab2.jpg'], ['Precision', 'precision2.jpg'], ['Prime Gold Cement', 'PG.jpg'], ['Prime Gold TMT', 'prime-gold2.jpg'], ['Prince', 'price2_1.jpg'], ['Prism Johnson', 'prism_logo.JPG'], ['Priya', 'priya4.jpg'],
  ['Quba', 'quba_logo.png'],
  ['R R Kabel', 'rrkabelss.jpg'], ['Raasi Gold', 'raasi-cement.jpg'], ['Raavela Doors', 'Raavela.jpg'], ['Radha Thermex', 'Radha-Thermax.jpg'], ['RAK Ceramics', 'rak3.jpg'], ['Ramco', 'ramco2_1.jpg'], ['Rank Group', 'rank3.jpg'], ['Rashmi Cement', 'Rashmi.png'], ['Rathi Steel TMT', 'rathi.jpg'], ['Regent Granito', 'regent-tiles2.jpg'], ['Reliance Cement', 'Reliance.JPG'], ['Reloto', 'reloto.png'], ['Roca', 'roca2.jpg'], ['Rockstrong Cement', 'rockstrong.jpg'], ['Roofon Cement', 'roofon.JPG'],
  ['Sagar Cement', 'sagar-cement2.jpg'], ['Saint Gobain', 'HomeSaint-Gobain-Logo.png'], ['Sankar Cement', 'Sankar.png'], ['Sarda Plywood', 'sarda2.jpg'], ['Shalimar Paints', 'Shalima2.jpg'], ['Shree Cement', 'shree-cement.jpg'], ['Shree Ganpathi', 'ganpathilogo.png'], ['Shree Shakti Blocks', 'Shree_Shakti_Bricks_Logo_1.PNG'], ['Shree-TMT', 'shree-tmt1.jpg'], ['Shriram Cement', 'Shriram.jpg'], ['Simcrete', 'simcrete2.jpg'], ['Simhadri-TMT', 'Simhadri-TMT.jpg'], ['Simtex', 'Simtex_Logo.jpg'], ['Snowcem Paints', 'snowcem3.jpg'], ['Solid Plywood', 'solidply2.jpg'], ['Somany', 'Somany.jpg'], ['South India Cement', 'South-India-cement.jpg'], ['Spectus UPVC', 'spectus2.jpg'], ['Sri Chakra', 'sri.jpg'], ['SS Gold', 'ssgold2.jpg'], ['Star Cement', 'StarCement.JPG'], ['SAIL', 'steel-authority-sail.jpg'], ['Stonelam Laminam', 'stonelam-laminam.jpg'], ['Sudhakar Pipes', 'sudhakar.jpg'], ['Sugna-TMT', 'Sugna-TMT.jpg'], ['Sujana-TMT', 'sujanatmt2.jpg'], ['Supreme', 'supreme.jpg'], ['Surya', 'surya2_1.jpg'], ['Surya Gold Cement', 'Surya.png'], ['Surya Pipes', 'surya2.jpg'], ['Suvarna', 'Suvarna.jpg'], ['Syska', 'syska.jpg'],
  ['Tata-TMT', 'tata2.jpg'], ['Tata Cement', 'tata.jpg'],
  ['Ultrapride', 'CConorb.png'], ['Uniply', 'uniply2.jpg'],
  ['V-Guard', 'V-Guard.jpg'], ['Vectus', 'Vectus.png'], ['Vensai Global', 'Vensai-Global.jpg'], ['Vinayak-TMT', 'vinayaka.jpg'], ['Visa Steel', 'Visa-Steel.jpg'], ['Visa TMT', 'visa2.jpg'], ['Vitero', 'Vitero.png'], ['Vizag-TMT', 'vizag.jpg'],
  ['Weber Saint Gobain', 'Weber-Saint-Gobain.png'], ['Wipro', 'wipro3.jpg'], ['Wonder Cement', 'WC-logo.jpg'],
  ['Xtralite', 'xtralite2.jpg'],
  ['Yale', 'Logo.png'],
  ['Zuari Cement', 'Zuari-Cement.jpg'],
].map(([name, logo]) => ({ name, logo: B + logo }));
