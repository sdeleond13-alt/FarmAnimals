// =========================================================================
// 1. DATA: All 16 Farm Animals & Baby Animals
// =========================================================================
const ANIMALS = [
  {
    id: `chicken`,
    name: `Chicken`,
    role: `adult`,
    pairId: `chick`,
    pairLabel: `Baby: Chick`,
    soundText: `Cluck-cluck!`,
    factTag: `100+ Faces & Eggs`,
    fact: `Hens cluck and lay eggs. They can remember over 100 human faces!`,
    tint: `pink`,
    factIconType: `egg`
  },
  {
    id: `chick`,
    name: `Chick`,
    role: `baby`,
    pairId: `chicken`,
    pairLabel: `Mom: Chicken`,
    soundText: `Cheep-cheep!`,
    factTag: `Egg-Tooth Hatcher`,
    fact: `A baby chicken! Chicks peck out of eggs using a tiny special egg-tooth on their beak.`,
    tint: `sky`,
    factIconType: `hatch`
  },
  {
    id: `horse`,
    name: `Horse`,
    role: `adult`,
    pairId: `foal`,
    pairLabel: `Baby: Foal`,
    soundText: `Neigh!`,
    factTag: `Sleeps Standing Up`,
    fact: `Horses can sleep lying down or standing up by locking their leg joints!`,
    tint: `grape`,
    factIconType: `moon`
  },
  {
    id: `foal`,
    name: `Foal`,
    role: `baby`,
    pairId: `horse`,
    pairLabel: `Mom: Horse`,
    soundText: `Wee-neigh!`,
    factTag: `Fast New Runner`,
    fact: `A baby horse! Foals can stand up and run just a few hours after they are born.`,
    tint: `pink`,
    factIconType: `star`
  },
  {
    id: `cow`,
    name: `Cow`,
    role: `adult`,
    pairId: `calf`,
    pairLabel: `Baby: Calf`,
    soundText: `Moo!`,
    factTag: `Best Friends & Milk`,
    fact: `Cows form close friendships with other cows, chew grass, and give delicious milk!`,
    tint: `sky`,
    factIconType: `milk`
  },
  {
    id: `calf`,
    name: `Calf`,
    role: `baby`,
    pairId: `cow`,
    pairLabel: `Mom: Cow`,
    soundText: `Mee-moo!`,
    factTag: `Milk & Green Grass`,
    fact: `A baby cow! Calves drink milk from their mother and love to play in green grass.`,
    tint: `grape`,
    factIconType: `grass`
  },
  {
    id: `pig`,
    name: `Pig`,
    role: `adult`,
    pairId: `piglet`,
    pairLabel: `Baby: Piglet`,
    soundText: `Oink-oink!`,
    factTag: `Cool Mud Bath`,
    fact: `Pigs are super smart and clean! They roll in cool mud to protect their skin from the sun.`,
    tint: `pink`,
    factIconType: `sun`
  },
  {
    id: `piglet`,
    name: `Piglet`,
    role: `baby`,
    pairId: `pig`,
    pairLabel: `Mom: Pig`,
    soundText: `Squeak-oink!`,
    factTag: `Cozy Snuggler`,
    fact: `A baby pig! Piglets love snuggling together with their brothers and sisters to keep warm.`,
    tint: `sky`,
    factIconType: `heart`
  },
  {
    id: `dog`,
    name: `Dog`,
    role: `adult`,
    pairId: null,
    pairLabel: ``,
    soundText: `Woof-woof!`,
    factTag: `Farm's Best Helper`,
    fact: `The farm's best helper! Dogs wag their tails fast whenever they are happy.`,
    tint: `grape`,
    factIconType: `paw`
  },
  {
    id: `sheep`,
    name: `Sheep`,
    role: `adult`,
    pairId: `lamb`,
    pairLabel: `Baby: Lamb`,
    soundText: `Baa!`,
    factTag: `Fluffy Warm Wool`,
    fact: `Sheep are covered in soft, fluffy wool that is used to make warm sweaters!`,
    tint: `pink`,
    factIconType: `wool`
  },
  {
    id: `lamb`,
    name: `Lamb`,
    role: `baby`,
    pairId: `sheep`,
    pairLabel: `Mom: Sheep`,
    soundText: `Maa-baa!`,
    factTag: `Bouncy Jumper`,
    fact: `A baby sheep! Lambs know their mother's voice right away and love to bounce and leap.`,
    tint: `sky`,
    factIconType: `star`
  },
  {
    id: `duck`,
    name: `Duck`,
    role: `adult`,
    pairId: null,
    pairLabel: ``,
    soundText: `Quack-quack!`,
    factTag: `Webbed-Foot Swimmer`,
    fact: `Water-loving birds with webbed feet for swimming and waterproof feathers!`,
    tint: `grape`,
    factIconType: `water`
  },
  {
    id: `goat`,
    name: `Goat`,
    role: `adult`,
    pairId: `kid`,
    pairLabel: `Baby: Kid`,
    soundText: `Maa!`,
    factTag: `Playful Climber`,
    fact: `Playful climbers with special rectangular eyes that help them see all around!`,
    tint: `pink`,
    factIconType: `rock`
  },
  {
    id: `kid`,
    name: `Kid`,
    role: `baby`,
    pairId: `goat`,
    pairLabel: `Mom: Goat`,
    soundText: `Mee-maa!`,
    factTag: `Rock Jumper`,
    fact: `A baby goat is called a kid, just like you! Kids love jumping on rocks.`,
    tint: `sky`,
    factIconType: `rock`
  },
  {
    id: `turkey`,
    name: `Turkey`,
    role: `adult`,
    pairId: null,
    pairLabel: ``,
    soundText: `Gobble-gobble!`,
    factTag: `Tree-Flying Bird`,
    fact: `Large farm birds with colorful fan tails! Wild turkeys can even fly into trees.`,
    tint: `grape`,
    factIconType: `feather`
  },
  {
    id: `rabbit`,
    name: `Rabbit`,
    role: `adult`,
    pairId: null,
    pairLabel: ``,
    soundText: `Hop-hop!`,
    factTag: `Happy Binky Jumps`,
    fact: `Soft bunnies with long ears and twitchy noses! Their happy jumps are called binkies.`,
    tint: `pink`,
    factIconType: `carrot`
  }
];

// =========================================================================
// 2. BESPOKE CARTOON SVG ILLUSTRATIONS (All colors via CSS vars)
// =========================================================================
function getAnimalSvg(id) {
  const backdropMeadow = `<circle cx="130" cy="112" r="92" fill="var(--animal-sky-soft)" />
    <path d="M46 154 Q130 128 214 154 A92 92 0 0 1 46 154 Z" fill="var(--animal-meadow)" />`;
  const backdropWater = `<circle cx="130" cy="112" r="92" fill="var(--animal-sky-soft)" />
    <path d="M46 152 Q90 140 130 152 Q170 164 214 152 A92 92 0 0 1 46 152 Z" fill="var(--animal-water)" />`;

  switch (id) {
    case `chicken`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Tail feathers -->
        <path d="M62 126 Q38 92 60 80 Q72 95 76 112 Z" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M56 134 Q30 118 46 100 Q65 112 72 126 Z" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Legs -->
        <path d="M112 164 L112 184 M102 184 L112 184 L118 188" stroke="var(--animal-orange)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M144 164 L144 184 M136 184 L144 184 L152 188" stroke="var(--animal-orange)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <!-- Plump Body -->
        <ellipse cx="126" cy="132" rx="54" ry="42" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Wing -->
        <path d="M98 122 Q132 114 144 138 Q126 156 96 144 Q88 134 98 122 Z" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head -->
        <circle cx="164" cy="86" r="28" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Red Comb -->
        <path d="M148 64 Q152 44 164 56 Q172 42 180 58 Q192 50 186 70 Z" fill="var(--animal-red)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Wattle -->
        <ellipse cx="176" cy="108" rx="7" ry="10" fill="var(--animal-red)" stroke="var(--animal-ink)" stroke-width="3"/>
        <!-- Beak -->
        <polygon points="188,82 210,90 188,98" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Eye & Cheek -->
        <circle cx="172" cy="80" r="6" fill="var(--animal-ink)"/>
        <circle cx="174" cy="78" r="2.2" fill="var(--animal-white)"/>
        <ellipse cx="162" cy="94" rx="7" ry="4.5" fill="var(--animal-cheek)"/>
        <!-- Cute Egg -->
        <ellipse cx="64" cy="170" rx="13" ry="16" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
      </svg>`;

    case `chick`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Feet -->
        <path d="M114 166 L114 182 M104 182 L122 182" stroke="var(--animal-orange)" stroke-width="5" stroke-linecap="round"/>
        <path d="M146 166 L146 182 M138 182 L156 182" stroke="var(--animal-orange)" stroke-width="5" stroke-linecap="round"/>
        <!-- Fluffy body -->
        <circle cx="130" cy="130" r="44" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Wing tufts -->
        <path d="M88 124 Q68 112 78 138 Q86 146 94 138" fill="var(--animal-yellow-shade)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M172 124 Q192 112 182 138 Q174 146 166 138" fill="var(--animal-yellow-shade)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Head -->
        <circle cx="130" cy="86" r="34" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Top fluff -->
        <path d="M124 54 Q130 36 136 52 Q144 40 142 56" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Big Sparkle Eyes -->
        <circle cx="114" cy="84" r="7" fill="var(--animal-ink)"/>
        <circle cx="116" cy="81" r="2.6" fill="var(--animal-white)"/>
        <circle cx="146" cy="84" r="7" fill="var(--animal-ink)"/>
        <circle cx="148" cy="81" r="2.6" fill="var(--animal-white)"/>
        <!-- Cheeks -->
        <ellipse cx="104" cy="96" rx="7" ry="4.5" fill="var(--animal-cheek)"/>
        <ellipse cx="156" cy="96" rx="7" ry="4.5" fill="var(--animal-cheek)"/>
        <!-- Open Cheeping Beak -->
        <polygon points="122,94 138,94 130,108" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Cracked Eggshell Half -->
        <path d="M168 158 L178 150 L186 160 L196 150 L204 162 Q198 186 178 184 Q166 180 168 158 Z" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
      </svg>`;

    case `horse`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Flowing Tail -->
        <path d="M70 120 Q42 128 48 164 Q64 156 72 136 Z" fill="var(--animal-brown-dark)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Legs -->
        <rect x="78" y="142" width="14" height="44" rx="6" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="100" y="142" width="14" height="44" rx="6" fill="var(--animal-brown-dark)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="136" y="142" width="14" height="44" rx="6" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="156" y="142" width="14" height="44" rx="6" fill="var(--animal-brown-dark)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Body -->
        <ellipse cx="122" cy="128" rx="54" ry="30" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Neck -->
        <path d="M142 118 L156 64 L182 70 L170 132 Z" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
        <!-- Mane -->
        <path d="M156 64 Q138 72 146 88 Q134 94 144 108 L158 94 Z" fill="var(--animal-brown-dark)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Ears -->
        <polygon points="154,54 160,34 170,54" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <polygon points="172,54 182,34 188,56" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Head & Snout -->
        <rect x="154" y="50" width="52" height="38" rx="18" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="4"/>
        <ellipse cx="194" cy="74" rx="16" ry="14" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Eye & Smile -->
        <circle cx="172" cy="64" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="174" cy="62" r="2" fill="var(--animal-white)"/>
        <circle cx="198" cy="70" r="2.5" fill="var(--animal-ink)"/>
        <path d="M188 80 Q196 86 202 80" stroke="var(--animal-ink)" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `foal`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Cute tiny tail -->
        <path d="M84 114 Q64 118 68 140 Q80 134 86 122 Z" fill="var(--animal-brown-dark)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Extra long baby legs -->
        <rect x="92" y="130" width="11" height="56" rx="5" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="112" y="132" width="11" height="54" rx="5" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="140" y="130" width="11" height="56" rx="5" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="158" y="132" width="11" height="54" rx="5" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Small Body -->
        <ellipse cx="128" cy="118" rx="42" ry="24" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Neck -->
        <path d="M144 110 L154 66 L176 72 L166 120 Z" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
        <!-- Fluffy baby mohawk mane -->
        <path d="M150 66 Q140 74 148 84 Q142 94 152 100" stroke="var(--animal-brown-dark)" stroke-width="8" stroke-linecap="round" fill="none"/>
        <!-- Big Ears -->
        <ellipse cx="156" cy="48" rx="7" ry="14" transform="rotate(-14 156 48)" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="176" cy="48" rx="7" ry="14" transform="rotate(14 176 48)" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Cute Head -->
        <rect x="148" y="50" width="46" height="36" rx="18" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4"/>
        <ellipse cx="184" cy="72" rx="13" ry="11" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- White forehead star -->
        <circle cx="164" cy="60" r="4" fill="var(--animal-white)"/>
        <!-- Big Baby Eye & Cheek -->
        <circle cx="168" cy="64" r="6" fill="var(--animal-ink)"/>
        <circle cx="170" cy="62" r="2.2" fill="var(--animal-white)"/>
        <ellipse cx="164" cy="76" rx="6" ry="3.5" fill="var(--animal-cheek)"/>
      </svg>`;

    case `cow`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Tail -->
        <path d="M68 128 Q48 134 52 158" stroke="var(--animal-ink)" stroke-width="4" stroke-linecap="round" fill="none"/>
        <ellipse cx="52" cy="162" rx="6" ry="8" fill="var(--animal-ink)"/>
        <!-- Legs -->
        <rect x="82" y="144" width="16" height="40" rx="7" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="106" y="146" width="16" height="38" rx="7" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="142" y="144" width="16" height="40" rx="7" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="164" y="146" width="16" height="38" rx="7" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Body -->
        <ellipse cx="126" cy="128" rx="58" ry="36" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Dairy Spots -->
        <path d="M88 106 Q110 98 114 120 Q100 132 82 124 Z" fill="var(--animal-ink)"/>
        <circle cx="144" cy="136" r="13" fill="var(--animal-ink)"/>
        <!-- Gold Bell -->
        <circle cx="158" cy="122" r="8" fill="var(--animal-gold)" stroke="var(--animal-ink)" stroke-width="3"/>
        <!-- Horns & Ears -->
        <path d="M148 54 Q138 38 152 38" stroke="var(--animal-cream-shade)" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M192 54 Q202 38 188 38" stroke="var(--animal-cream-shade)" stroke-width="8" stroke-linecap="round" fill="none"/>
        <ellipse cx="140" cy="64" rx="14" ry="8" transform="rotate(-18 140 64)" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="200" cy="64" rx="14" ry="8" transform="rotate(18 200 64)" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head -->
        <rect x="144" y="48" width="52" height="52" rx="22" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4"/>
        <path d="M148 54 Q166 50 164 68 Q148 70 144 60 Z" fill="var(--animal-ink)"/>
        <!-- Eyes -->
        <circle cx="158" cy="68" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="160" cy="66" r="2" fill="var(--animal-white)"/>
        <circle cx="182" cy="68" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="184" cy="66" r="2" fill="var(--animal-white)"/>
        <!-- Big Pink Snout -->
        <ellipse cx="170" cy="90" rx="22" ry="14" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <circle cx="162" cy="88" r="2.8" fill="var(--animal-ink)"/>
        <circle cx="178" cy="88" r="2.8" fill="var(--animal-ink)"/>
        <path d="M162 96 Q170 102 178 96" stroke="var(--animal-ink)" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `calf`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Legs -->
        <rect x="94" y="144" width="13" height="36" rx="6" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="114" y="146" width="13" height="34" rx="6" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="140" y="144" width="13" height="36" rx="6" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="158" y="146" width="13" height="34" rx="6" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Small Body -->
        <ellipse cx="128" cy="134" rx="44" ry="28" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4"/>
        <circle cx="104" cy="128" r="12" fill="var(--animal-brown)"/>
        <!-- Floppy Ears -->
        <ellipse cx="102" cy="82" rx="16" ry="9" transform="rotate(-24 102 82)" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="178" cy="82" rx="16" ry="9" transform="rotate(24 178 82)" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Cute Big Head -->
        <rect x="112" y="62" width="56" height="52" rx="24" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Sweet Eyes & Cheek -->
        <circle cx="128" cy="82" r="6.5" fill="var(--animal-ink)"/>
        <circle cx="130" cy="80" r="2.4" fill="var(--animal-white)"/>
        <circle cx="152" cy="82" r="6.5" fill="var(--animal-ink)"/>
        <circle cx="154" cy="80" r="2.4" fill="var(--animal-white)"/>
        <!-- Pink Snout -->
        <ellipse cx="140" cy="102" rx="18" ry="12" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <circle cx="133" cy="100" r="2.4" fill="var(--animal-ink)"/>
        <circle cx="147" cy="100" r="2.4" fill="var(--animal-ink)"/>
        <path d="M134 107 Q140 112 146 107" stroke="var(--animal-ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `pig`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Cool Mud Puddle -->
        <ellipse cx="128" cy="176" rx="70" ry="16" fill="var(--animal-mud)" stroke="var(--animal-mud-dark)" stroke-width="3"/>
        <!-- Curly Tail -->
        <path d="M74 126 Q56 122 60 110 Q68 106 68 116 Q66 124 52 120" stroke="var(--animal-pink-shade)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <!-- Legs -->
        <rect x="88" y="146" width="16" height="30" rx="6" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="112" y="148" width="16" height="28" rx="6" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="142" y="146" width="16" height="30" rx="6" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="162" y="148" width="16" height="28" rx="6" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Chubby Body -->
        <ellipse cx="128" cy="128" rx="56" ry="38" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Mud splash on side -->
        <ellipse cx="114" cy="144" rx="18" ry="10" fill="var(--animal-mud)"/>
        <!-- Ears -->
        <polygon points="146,66 152,44 166,62" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <polygon points="174,62 186,44 192,68" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Head -->
        <circle cx="168" cy="92" r="32" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Eyes & Cheeks -->
        <circle cx="156" cy="82" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="158" cy="80" r="2" fill="var(--animal-white)"/>
        <circle cx="182" cy="82" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="184" cy="80" r="2" fill="var(--animal-white)"/>
        <!-- Flat Snout -->
        <ellipse cx="172" cy="98" rx="16" ry="12" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <circle cx="166" cy="98" r="3" fill="var(--animal-ink)"/>
        <circle cx="178" cy="98" r="3" fill="var(--animal-ink)"/>
      </svg>`;

    case `piglet`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Cozy Pink Heart above -->
        <path d="M130 44 C122 32 106 36 106 48 C106 60 130 70 130 70 C130 70 154 60 154 48 C154 36 138 32 130 44 Z" fill="var(--primary-container)" stroke="var(--primary)" stroke-width="3"/>
        <!-- Legs -->
        <rect x="96" y="150" width="12" height="28" rx="6" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="114" y="152" width="12" height="26" rx="6" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="138" y="150" width="12" height="28" rx="6" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="154" y="152" width="12" height="26" rx="6" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Round Little Body -->
        <ellipse cx="130" cy="134" rx="40" ry="28" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Curly Tail -->
        <path d="M90 132 Q78 128 82 120 Q88 118 86 126" stroke="var(--animal-pink-shade)" stroke-width="4" stroke-linecap="round" fill="none"/>
        <!-- Oversized Cute Ears -->
        <ellipse cx="110" cy="86" rx="14" ry="10" transform="rotate(-30 110 86)" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="162" cy="86" rx="14" ry="10" transform="rotate(30 162 86)" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head -->
        <circle cx="136" cy="108" r="28" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Big Sparkle Eyes -->
        <circle cx="124" cy="100" r="6" fill="var(--animal-ink)"/>
        <circle cx="126" cy="98" r="2.2" fill="var(--animal-white)"/>
        <circle cx="148" cy="100" r="6" fill="var(--animal-ink)"/>
        <circle cx="150" cy="98" r="2.2" fill="var(--animal-white)"/>
        <!-- Tiny Snout -->
        <ellipse cx="136" cy="114" rx="12" ry="9" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="3"/>
        <circle cx="132" cy="114" r="2.2" fill="var(--animal-ink)"/>
        <circle cx="140" cy="114" r="2.2" fill="var(--animal-ink)"/>
      </svg>`;

    case `dog`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Wagging Tail -->
        <path d="M74 134 Q50 114 60 96" stroke="var(--animal-tan)" stroke-width="12" stroke-linecap="round" fill="none"/>
        <path d="M74 134 Q50 114 60 96" stroke="var(--animal-ink)" stroke-width="4" stroke-linecap="round" fill="none"/>
        <!-- Legs -->
        <rect x="86" y="142" width="16" height="40" rx="8" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="110" y="146" width="16" height="36" rx="8" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="140" y="142" width="16" height="40" rx="8" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="160" y="146" width="16" height="36" rx="8" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Body -->
        <ellipse cx="128" cy="128" rx="52" ry="32" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Red Collar & Gold Tag -->
        <path d="M144 98 Q166 106 180 98" stroke="var(--animal-red)" stroke-width="9" stroke-linecap="round" fill="none"/>
        <circle cx="164" cy="108" r="6" fill="var(--animal-gold)" stroke="var(--animal-ink)" stroke-width="2.5"/>
        <!-- Floppy Ears -->
        <ellipse cx="134" cy="74" rx="12" ry="22" transform="rotate(14 134 74)" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="194" cy="74" rx="12" ry="22" transform="rotate(-14 194 74)" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head -->
        <circle cx="164" cy="74" r="30" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Cream Muzzle & Happy Tongue -->
        <ellipse cx="166" cy="86" rx="16" ry="12" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3"/>
        <path d="M162 94 Q166 108 172 94 Z" fill="var(--animal-pink-shade)" stroke="var(--animal-ink)" stroke-width="2.5"/>
        <!-- Nose & Eyes -->
        <ellipse cx="166" cy="80" rx="6" ry="4.5" fill="var(--animal-ink)"/>
        <circle cx="152" cy="68" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="154" cy="66" r="2" fill="var(--animal-white)"/>
        <circle cx="178" cy="68" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="180" cy="66" r="2" fill="var(--animal-white)"/>
      </svg>`;

    case `sheep`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Legs -->
        <rect x="92" y="148" width="13" height="36" rx="6" fill="var(--animal-ink)"/>
        <rect x="112" y="150" width="13" height="34" rx="6" fill="var(--animal-ink)"/>
        <rect x="142" y="148" width="13" height="36" rx="6" fill="var(--animal-ink)"/>
        <rect x="160" y="150" width="13" height="34" rx="6" fill="var(--animal-ink)"/>
        <!-- Fluffy Scalloped Cloud Body -->
        <g fill="var(--animal-wool)" stroke="var(--animal-ink)" stroke-width="4">
          <circle cx="94" cy="126" r="26"/>
          <circle cx="122" cy="106" r="28"/>
          <circle cx="154" cy="112" r="28"/>
          <circle cx="164" cy="138" r="24"/>
          <circle cx="134" cy="144" r="26"/>
          <circle cx="106" cy="144" r="24"/>
        </g>
        <circle cx="128" cy="126" r="32" fill="var(--animal-wool)"/>
        <!-- Ears -->
        <ellipse cx="144" cy="84" rx="14" ry="8" transform="rotate(-18 144 84)" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="196" cy="84" rx="14" ry="8" transform="rotate(18 196 84)" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head -->
        <ellipse cx="170" cy="94" rx="22" ry="26" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Woolly Hair Puff -->
        <circle cx="164" cy="68" r="11" fill="var(--animal-wool)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <circle cx="178" cy="70" r="10" fill="var(--animal-wool)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Eyes & Smile -->
        <circle cx="160" cy="92" r="5" fill="var(--animal-ink)"/>
        <circle cx="162" cy="90" r="1.8" fill="var(--animal-white)"/>
        <circle cx="180" cy="92" r="5" fill="var(--animal-ink)"/>
        <circle cx="182" cy="90" r="1.8" fill="var(--animal-white)"/>
        <ellipse cx="154" cy="102" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <ellipse cx="186" cy="102" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <path d="M164 106 Q170 112 176 106" stroke="var(--animal-ink)" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `lamb`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Bouncing Shadow on Grass -->
        <ellipse cx="130" cy="176" rx="34" ry="8" fill="var(--animal-meadow-deep)" opacity="0.5"/>
        <!-- Bouncing Legs (mid-hop!) -->
        <rect x="96" y="136" width="11" height="28" rx="5" transform="rotate(20 96 136)" fill="var(--animal-ink)"/>
        <rect x="150" y="134" width="11" height="28" rx="5" transform="rotate(-22 150 134)" fill="var(--animal-ink)"/>
        <!-- Small Fluffy Wool Body -->
        <g fill="var(--animal-wool)" stroke="var(--animal-ink)" stroke-width="4">
          <circle cx="104" cy="122" r="20"/>
          <circle cx="128" cy="110" r="22"/>
          <circle cx="148" cy="124" r="20"/>
          <circle cx="126" cy="132" r="20"/>
        </g>
        <circle cx="126" cy="122" r="22" fill="var(--animal-wool)"/>
        <!-- Big Floppy Ears -->
        <ellipse cx="108" cy="78" rx="14" ry="8" transform="rotate(-26 108 78)" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="164" cy="78" rx="14" ry="8" transform="rotate(26 164 78)" fill="var(--animal-pink)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Cute Head -->
        <circle cx="136" cy="84" r="24" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <circle cx="136" cy="60" r="12" fill="var(--animal-wool)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Big Baby Eyes & Smile -->
        <circle cx="126" cy="84" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="128" cy="82" r="2" fill="var(--animal-white)"/>
        <circle cx="146" cy="84" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="148" cy="82" r="2" fill="var(--animal-white)"/>
        <ellipse cx="120" cy="94" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <ellipse cx="152" cy="94" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <path d="M130 96 Q136 102 142 96" stroke="var(--animal-ink)" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `duck`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropWater}
        <!-- Orange Webbed Feet under ripple -->
        <path d="M112 162 L100 182 L124 182 Z" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3" stroke-linejoin="round"/>
        <path d="M144 162 L134 182 L158 182 Z" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3" stroke-linejoin="round"/>
        <!-- Body -->
        <path d="M68 122 Q86 106 128 112 Q170 112 174 140 Q168 164 122 164 Q76 164 68 122 Z" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
        <!-- Wing -->
        <path d="M96 124 Q134 118 144 140 Q124 156 96 144 Z" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Head -->
        <circle cx="158" cy="84" r="28" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Cute Crest -->
        <path d="M150 56 Q156 42 162 56" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <!-- Flat Orange Bill -->
        <ellipse cx="192" cy="90" rx="20" ry="10" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <path d="M180 92 Q194 96 206 90" stroke="var(--animal-ink)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <!-- Eye & Cheek -->
        <circle cx="164" cy="78" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="166" cy="76" r="2" fill="var(--animal-white)"/>
        <ellipse cx="154" cy="90" rx="6.5" ry="4" fill="var(--animal-cheek)"/>
      </svg>`;

    case `goat`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Legs -->
        <rect x="86" y="144" width="13" height="40" rx="6" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="108" y="146" width="13" height="38" rx="6" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="142" y="144" width="13" height="40" rx="6" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="162" y="146" width="13" height="38" rx="6" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Body -->
        <ellipse cx="128" cy="128" rx="50" ry="30" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <circle cx="110" cy="124" r="14" fill="var(--animal-tan)"/>
        <!-- Curved Horns -->
        <path d="M156 54 Q142 30 128 38" stroke="var(--animal-brown)" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M180 54 Q194 30 206 38" stroke="var(--animal-brown)" stroke-width="8" stroke-linecap="round" fill="none"/>
        <!-- Ears -->
        <ellipse cx="144" cy="68" rx="14" ry="7" transform="rotate(-14 144 68)" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="194" cy="68" rx="14" ry="7" transform="rotate(14 194 68)" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head & Chin Beard -->
        <path d="M158 104 L168 126 L178 104 Z" fill="var(--animal-cream-shade)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <rect x="146" y="52" width="46" height="54" rx="22" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Authentic Goat Rectangular Eyes! -->
        <circle cx="158" cy="74" r="6.5" fill="var(--animal-gold)" stroke="var(--animal-ink)" stroke-width="2.5"/>
        <rect x="154" y="72.5" width="8" height="3.2" rx="1.5" fill="var(--animal-ink)"/>
        <circle cx="180" cy="74" r="6.5" fill="var(--animal-gold)" stroke="var(--animal-ink)" stroke-width="2.5"/>
        <rect x="176" y="72.5" width="8" height="3.2" rx="1.5" fill="var(--animal-ink)"/>
        <!-- Nose & Smile -->
        <path d="M162 92 Q169 98 176 92" stroke="var(--animal-ink)" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `kid`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Jumping Rock! -->
        <path d="M76 184 Q88 150 130 150 Q174 150 186 184 Z" fill="var(--animal-rock)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
        <!-- Tiny Legs Standing on Rock -->
        <rect x="102" y="130" width="11" height="26" rx="5" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <rect x="146" y="130" width="11" height="26" rx="5" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Small Baby Body -->
        <ellipse cx="130" cy="118" rx="38" ry="24" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <circle cx="114" cy="118" r="10" fill="var(--animal-tan)"/>
        <!-- Tiny Horn Buds -->
        <path d="M126 58 L122 44" stroke="var(--animal-brown)" stroke-width="6" stroke-linecap="round"/>
        <path d="M150 58 L154 44" stroke="var(--animal-brown)" stroke-width="6" stroke-linecap="round"/>
        <!-- Floppy Ears -->
        <ellipse cx="108" cy="72" rx="14" ry="7" transform="rotate(-24 108 72)" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="168" cy="72" rx="14" ry="7" transform="rotate(24 168 72)" fill="var(--animal-tan)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Cute Head -->
        <circle cx="138" cy="78" r="24" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Eyes & Cheeks -->
        <circle cx="128" cy="76" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="130" cy="74" r="2" fill="var(--animal-white)"/>
        <circle cx="148" cy="76" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="150" cy="74" r="2" fill="var(--animal-white)"/>
        <ellipse cx="122" cy="86" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <ellipse cx="154" cy="86" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <path d="M132 88 Q138 94 144 88" stroke="var(--animal-ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      </svg>`;

    case `turkey`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Colorful Tail Feather Fan -->
        <g stroke="var(--animal-ink)" stroke-width="3.5">
          <ellipse cx="82" cy="108" rx="16" ry="40" transform="rotate(-48 82 108)" fill="var(--animal-orange)"/>
          <ellipse cx="102" cy="88" rx="16" ry="42" transform="rotate(-24 102 88)" fill="var(--animal-yellow)"/>
          <ellipse cx="130" cy="80" rx="16" ry="44" fill="var(--primary)"/>
          <ellipse cx="158" cy="88" rx="16" ry="42" transform="rotate(24 158 88)" fill="var(--secondary)"/>
          <ellipse cx="178" cy="108" rx="16" ry="40" transform="rotate(48 178 108)" fill="var(--tertiary)"/>
        </g>
        <!-- Legs -->
        <path d="M114 158 L114 182 M104 182 L124 182" stroke="var(--animal-orange)" stroke-width="5" stroke-linecap="round"/>
        <path d="M146 158 L146 182 M136 182 L156 182" stroke="var(--animal-orange)" stroke-width="5" stroke-linecap="round"/>
        <!-- Plump Body -->
        <ellipse cx="130" cy="134" rx="48" ry="38" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Head -->
        <circle cx="130" cy="92" r="24" fill="var(--animal-brown-dark)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Red Snood/Wattle -->
        <path d="M136 96 Q148 108 136 122 Q128 112 132 100 Z" fill="var(--animal-red)" stroke="var(--animal-ink)" stroke-width="3"/>
        <!-- Beak -->
        <polygon points="122,94 138,94 130,108" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Eyes -->
        <circle cx="118" cy="86" r="5.5" fill="var(--animal-white)"/>
        <circle cx="119" cy="86" r="3" fill="var(--animal-ink)"/>
        <circle cx="142" cy="86" r="5.5" fill="var(--animal-white)"/>
        <circle cx="141" cy="86" r="3" fill="var(--animal-ink)"/>
      </svg>`;

    case `rabbit`:
      return `<svg viewBox="0 0 260 220" aria-hidden="true">
        ${backdropMeadow}
        <!-- Happy Binky Jump Stars -->
        <path d="M68 78 L72 86 L80 88 L72 90 L68 98 L64 90 L56 88 L64 86 Z" fill="var(--animal-gold)"/>
        <path d="M192 72 L195 78 L201 80 L195 82 L192 88 L189 82 L183 80 L189 78 Z" fill="var(--primary-container)"/>
        <!-- Shadow below mid-jump bunny -->
        <ellipse cx="130" cy="178" rx="34" ry="8" fill="var(--animal-meadow-deep)" opacity="0.5"/>
        <!-- Fluffy Cotton Tail -->
        <circle cx="82" cy="134" r="14" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Long Tall Ears -->
        <ellipse cx="122" cy="58" rx="12" ry="30" transform="rotate(-12 122 58)" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <ellipse cx="122" cy="58" rx="6" ry="20" transform="rotate(-12 122 58)" fill="var(--animal-pink)"/>
        <ellipse cx="152" cy="58" rx="12" ry="30" transform="rotate(14 152 58)" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <ellipse cx="152" cy="58" rx="6" ry="20" transform="rotate(14 152 58)" fill="var(--animal-pink)"/>
        <!-- Body -->
        <ellipse cx="122" cy="134" rx="38" ry="28" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Hopping Feet -->
        <ellipse cx="104" cy="158" rx="18" ry="9" transform="rotate(-12 104 158)" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <ellipse cx="150" cy="154" rx="18" ry="9" transform="rotate(14 150 154)" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <!-- Head -->
        <circle cx="144" cy="100" r="28" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <!-- Big Eyes, Twitchy Pink Nose, Cheeks -->
        <circle cx="132" cy="96" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="134" cy="94" r="2" fill="var(--animal-white)"/>
        <circle cx="156" cy="96" r="5.5" fill="var(--animal-ink)"/>
        <circle cx="158" cy="94" r="2" fill="var(--animal-white)"/>
        <ellipse cx="124" cy="106" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <ellipse cx="164" cy="106" rx="5.5" ry="3.5" fill="var(--animal-cheek)"/>
        <polygon points="140,104 150,104 145,110" fill="var(--animal-pink-shade)"/>
        <path d="M138 114 Q145 118 152 114" stroke="var(--animal-ink)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </svg>`;

    default:
      return ``;
  }
}

function getFactIconSvg(type) {
  switch (type) {
    case `egg`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <ellipse cx="40" cy="42" rx="22" ry="28" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4"/>
        <circle cx="33" cy="36" r="4" fill="var(--animal-pink)"/>
        <circle cx="48" cy="48" r="5" fill="var(--animal-gold)"/>
      </svg>`;
    case `hatch`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M18 44 L28 34 L38 46 L48 34 L62 44 Q58 68 40 68 Q22 68 18 44 Z" fill="var(--animal-cream)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="40" cy="26" r="14" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="3.5"/>
      </svg>`;
    case `milk`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <rect x="24" y="24" width="32" height="44" rx="6" fill="var(--animal-white)" stroke="var(--animal-ink)" stroke-width="4"/>
        <polygon points="24,24 40,12 56,24" fill="var(--tertiary)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
        <rect x="28" y="38" width="24" height="16" rx="4" fill="var(--animal-sky-soft)"/>
      </svg>`;
    case `grass`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M16 62 Q22 24 32 48 Q40 16 46 48 Q56 24 64 62 Z" fill="var(--animal-meadow-deep)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
      </svg>`;
    case `sun`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="18" fill="var(--animal-yellow)" stroke="var(--animal-ink)" stroke-width="4"/>
        <path d="M40 10 L40 16 M40 64 L40 70 M10 40 L16 40 M64 40 L70 40 M18 18 L24 24 M56 56 L62 62 M62 18 L56 24 M24 56 L18 62" stroke="var(--animal-orange)" stroke-width="4.5" stroke-linecap="round"/>
      </svg>`;
    case `heart`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 64 C40 64 14 48 14 29 C14 19 22 14 30 14 C35 14 38 17 40 21 C42 17 45 14 50 14 C58 14 66 19 66 29 C66 48 40 64 40 64 Z" fill="var(--primary-container)" stroke="var(--primary)" stroke-width="4"/>
      </svg>`;
    case `paw`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <ellipse cx="40" cy="48" rx="16" ry="14" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <circle cx="22" cy="30" r="6" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3"/>
        <circle cx="34" cy="22" r="6" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3"/>
        <circle cx="48" cy="22" r="6" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3"/>
        <circle cx="58" cy="30" r="6" fill="var(--animal-brown)" stroke="var(--animal-ink)" stroke-width="3"/>
      </svg>`;
    case `wool`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="24" fill="var(--primary-container)" stroke="var(--primary)" stroke-width="4"/>
        <path d="M22 34 Q40 24 58 34 M20 46 Q40 36 60 46 M30 20 Q42 40 30 60" stroke="var(--primary)" stroke-width="3.5" fill="none"/>
      </svg>`;
    case `water`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 14 Q60 40 60 52 A20 20 0 1 1 20 52 Q20 40 40 14 Z" fill="var(--animal-water)" stroke="var(--animal-ink)" stroke-width="4"/>
      </svg>`;
    case `rock`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M12 60 Q22 26 44 28 Q66 30 68 60 Z" fill="var(--animal-rock)" stroke="var(--animal-ink)" stroke-width="4" stroke-linejoin="round"/>
      </svg>`;
    case `feather`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <ellipse cx="40" cy="40" rx="14" ry="28" transform="rotate(24 40 40)" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3.5"/>
        <line x1="28" y1="62" x2="50" y2="18" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linecap="round"/>
      </svg>`;
    case `carrot`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M36 22 Q30 10 40 12 Q50 10 44 22" stroke="var(--animal-meadow-deep)" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <polygon points="28,24 52,24 40,68" fill="var(--animal-orange)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
      </svg>`;
    case `moon`:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M48 16 A24 24 0 1 0 64 52 A18 18 0 1 1 48 16 Z" fill="var(--animal-gold)" stroke="var(--animal-ink)" stroke-width="3.5"/>
      </svg>`;
    default:
      return `<svg viewBox="0 0 80 80" aria-hidden="true">
        <polygon points="40,12 48,30 68,32 52,46 56,66 40,56 24,66 28,46 12,32 32,30" fill="var(--animal-gold)" stroke="var(--animal-ink)" stroke-width="3.5" stroke-linejoin="round"/>
      </svg>`;
  }
}

// =========================================================================
// 3. STATE MANAGEMENT & PERSISTENCE
// =========================================================================
let appState = {
  currentId: `chicken`,
  filter: `all`,
  mode: `cards`,
  voiceOn: true,
  discoveredIds: [`chicken`],
  isFlipped: false
};

let audioCtx = null;
let bubbleTimeout = null;
let gameState = {
  targetId: `cow`,
  choices: [],
  answered: false
};

function getFilteredAnimals() {
  if (appState.filter === `adult`) {
    return ANIMALS.filter(a => a.role === `adult`);
  }
  if (appState.filter === `baby`) {
    return ANIMALS.filter(a => a.role === `baby`);
  }
  if (appState.filter === `paired`) {
    return ANIMALS.filter(a => a.pairId !== null);
  }
  return ANIMALS;
}

function getAnimalById(id) {
  return ANIMALS.find(a => a.id === id) || ANIMALS[0];
}

async function saveState() {
  try {
    if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
      await window.notebookAppApi.setAppState({
        currentId: appState.currentId,
        filter: appState.filter,
        mode: appState.mode,
        voiceOn: appState.voiceOn,
        discoveredIds: appState.discoveredIds
      });
    }
  } catch (e) {
    // Ignore persistence errors silently in local preview
  }
}

// =========================================================================
// 4. WEB AUDIO ANIMAL SOUND SYNTHESIZER + FRIENDLY VOICE
// =========================================================================
let currentAnimalAudio = null;
let currentAnimalId = null;
let voiceTimeout = null;

function stopAnimalSound() {
  if (currentAnimalAudio) {
    currentAnimalAudio.pause();
    currentAnimalAudio.currentTime = 0;
    currentAnimalAudio = null;
  }
  currentAnimalId = null;
  clearTimeout(voiceTimeout);
  if (`speechSynthesis` in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
}

function playAnimalSynth(id) {
  try {
    stopAnimalSound();

    const fileName = id.charAt(0).toUpperCase() + id.slice(1);
    currentAnimalAudio = new Audio(`Sounds/${fileName}.mp3.mp3`);
    currentAnimalId = id;
    
    // Cuando el audio termine solo, limpia las variables
    currentAnimalAudio.onended = () => {
      currentAnimalAudio = null;
      currentAnimalId = null;
    };

    currentAnimalAudio.play().catch(() => {
      currentAnimalAudio = null;
      currentAnimalId = null;
      playFallbackSynth(id);
    });
  } catch (e) {
    currentAnimalAudio = null;
    currentAnimalId = null;
    playFallbackSynth(id);
  }
}

// Sonido de respaldo por si falta algún archivo .mp3
function playFallbackSynth(id) {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  const t = ctx.currentTime;
  playTone(ctx, t, 0.2, 440, 660, `sine`, 0.15);
}

// =========================================================================
// 5. RENDERING & INTERACTIONS
// =========================================================================
function renderIcons() {
  if (window.lucide && typeof window.lucide.createIcons === `function`) {
    window.lucide.createIcons();
  }
}

function markDiscovered(id) {
  if (!appState.discoveredIds.includes(id)) {
    appState.discoveredIds.push(id);
  }
}

function renderProgress() {
  const starEl = document.getElementById(`star-count-text`);
  if (starEl) {
    starEl.textContent = `${appState.discoveredIds.length} / ${ANIMALS.length}`;
  }

  const list = getFilteredAnimals();
  const idx = Math.max(0, list.findIndex(a => a.id === appState.currentId));
  const pct = Math.round(((idx + 1) / list.length) * 100);

  const fillEl = document.getElementById(`progress-fill`);
  if (fillEl) fillEl.style.width = `${pct}%`;

  const labelEl = document.getElementById(`progress-label`);
  if (labelEl) labelEl.textContent = `Card ${idx + 1} of ${list.length}`;
}

function renderFlashcard() {
  const animal = getAnimalById(appState.currentId);
  const cardEl = document.getElementById(`flashcard`);
  const frontEl = document.getElementById(`card-front`);
  const backEl = document.getElementById(`card-back`);

  if (cardEl) {
    cardEl.classList.toggle(`is-flipped`, appState.isFlipped);
  }

  if (frontEl) {
    frontEl.className = `flashcard-face flashcard-front tint-${animal.tint}`;
    frontEl.setAttribute(`aria-hidden`, String(appState.isFlipped));
  }
  if (backEl) {
    const backTint = animal.tint === `pink` ? `sky` : (animal.tint === `sky` ? `grape` : `pink`);
    backEl.className = `flashcard-face flashcard-back tint-${backTint}`;
    backEl.setAttribute(`aria-hidden`, String(!appState.isFlipped));
  }
  const backReadBtn = document.getElementById(`back-read-btn`);
  if (backReadBtn) {
    backReadBtn.tabIndex = appState.isFlipped ? 0 : -1;
  }

  const roleBadge = document.getElementById(`front-role-badge`);
  if (roleBadge) {
    roleBadge.textContent = animal.role === `baby` ? `Baby Animal` : `Grown-Up`;
    roleBadge.className = `role-badge ${animal.role === `baby` ? `is-baby` : `is-adult`}`;
  }

  const pairBtn = document.getElementById(`front-pair-btn`);
  const pairLabel = document.getElementById(`front-pair-label`);
  if (pairBtn && pairLabel) {
    if (animal.pairId) {
      pairBtn.classList.remove(`hidden-view`);
      pairLabel.textContent = animal.pairLabel;
      pairBtn.tabIndex = appState.isFlipped ? -1 : 0;
    } else {
      pairBtn.classList.add(`hidden-view`);
      pairBtn.tabIndex = -1;
    }
  }

  const svgSlot = document.getElementById(`front-svg-slot`);
  if (svgSlot) svgSlot.innerHTML = getAnimalSvg(animal.id);

  const bubbleEl = document.getElementById(`sound-bubble`);
  if (bubbleEl) bubbleEl.textContent = animal.soundText;

  const frontName = document.getElementById(`front-name`);
  if (frontName) frontName.textContent = animal.name;

  const frontSound = document.getElementById(`front-sound`);
  if (frontSound) frontSound.textContent = animal.soundText;

  const backMini = document.getElementById(`back-mini-svg`);
  if (backMini) backMini.innerHTML = getAnimalSvg(animal.id);

  const backName = document.getElementById(`back-name`);
  if (backName) backName.textContent = animal.name;

  const backSound = document.getElementById(`back-sound`);
  if (backSound) backSound.textContent = animal.soundText;

  const factIcon = document.getElementById(`back-fact-icon`);
  if (factIcon) factIcon.innerHTML = getFactIconSvg(animal.factIconType);

  const factTag = document.getElementById(`back-fact-tag`);
  if (factTag) factTag.textContent = animal.factTag;

  const factText = document.getElementById(`back-fact-text`);
  if (factText) factText.textContent = animal.fact;

  const soundBtnLabel = document.getElementById(`play-sound-btn-label`);
  if (soundBtnLabel) soundBtnLabel.textContent = `Hear ${animal.soundText}`;

  const flipBtnLabel = document.getElementById(`flip-card-btn-label`);
  if (flipBtnLabel) flipBtnLabel.textContent = appState.isFlipped ? `Show Picture` : `Flip Card`;

  renderProgress();
  renderTray();
}

function renderTray() {
  const trayEl = document.getElementById(`tray-grid`);
  if (!trayEl) return;
  const list = getFilteredAnimals();

  trayEl.innerHTML = list.map(animal => {
    const isCurrent = animal.id === appState.currentId;
    const isSeen = appState.discoveredIds.includes(animal.id);
    return `<button type="button" class="tray-card ${isCurrent ? `is-current` : ``} ${isSeen ? `is-seen` : ``}" onclick="selectAnimal('${animal.id}')" aria-label="Select ${animal.name}">
      <span class="tray-star" aria-hidden="true"><i data-lucide="star" style="width:13px;height:13px;"></i></span>
      ${getAnimalSvg(animal.id)}
      <span class="tray-card-name">${animal.name}</span>
    </button>`;
  }).join(``);

  renderIcons();
}

function animateAnimalPop() {
  const wrap = document.getElementById(`front-illustration-wrap`);
  const bubble = document.getElementById(`sound-bubble`);
  if (wrap) {
    wrap.classList.remove(`is-boing`);
    void wrap.offsetWidth;
    wrap.classList.add(`is-boing`);
  }
  if (bubble) {
    bubble.classList.add(`is-visible`);
    clearTimeout(bubbleTimeout);
    bubbleTimeout = setTimeout(() => {
      bubble.classList.remove(`is-visible`);
    }, 1200);
  }
}

// =========================================================================
// 6. USER ACTION HANDLERS
// =========================================================================
function setMode(newMode) {
  appState.mode = newMode;
  const cardsView = document.getElementById(`cards-view`);
  const gameView = document.getElementById(`game-view`);
  const cardsBtn = document.getElementById(`mode-cards-btn`);
  const gameBtn = document.getElementById(`mode-game-btn`);

  if (cardsView) cardsView.classList.toggle(`hidden-view`, newMode !== `cards`);
  if (gameView) gameView.classList.toggle(`hidden-view`, newMode !== `game`);

  if (cardsBtn) {
    cardsBtn.classList.toggle(`is-active`, newMode === `cards`);
    cardsBtn.setAttribute(`aria-selected`, String(newMode === `cards`));
  }
  if (gameBtn) {
    gameBtn.classList.toggle(`is-active`, newMode === `game`);
    gameBtn.setAttribute(`aria-selected`, String(newMode === `game`));
  }

  if (newMode === `game`) {
    nextGameRound();
  }
  saveState();
}

function toggleVoice() {
  appState.voiceOn = !appState.voiceOn;
  const btn = document.getElementById(`voice-toggle-btn`);
  const label = document.getElementById(`voice-toggle-label`);
  if (btn) {
    btn.classList.toggle(`is-on`, appState.voiceOn);
    btn.setAttribute(`aria-pressed`, String(appState.voiceOn));
  }
  if (label) {
    label.textContent = appState.voiceOn ? `Voice: On` : `Voice: Off`;
  }
  if (!appState.voiceOn && `speechSynthesis` in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  saveState();
}

function setFilter(filterKey) {
  appState.filter = filterKey;
  document.querySelectorAll(`.filter-chip`).forEach(btn => {
    const active = btn.dataset.filter === filterKey;
    btn.classList.toggle(`is-active`, active);
    btn.setAttribute(`aria-pressed`, String(active));
  });

  const list = getFilteredAnimals();
  if (!list.some(a => a.id === appState.currentId) && list.length > 0) {
    appState.currentId = list[0].id;
    appState.isFlipped = false;
  }
  markDiscovered(appState.currentId);
  renderFlashcard();
  saveState();
}

function selectAnimal(id) {
  appState.currentId = id;
  appState.isFlipped = false;
  markDiscovered(id);
  renderFlashcard();
  triggerAnimalSound();
  saveState();
}

function prevCard() {
  const list = getFilteredAnimals();
  const idx = list.findIndex(a => a.id === appState.currentId);
  const prevIdx = (idx - 1 + list.length) % list.length;
  appState.currentId = list[prevIdx].id;
  appState.isFlipped = false;
  markDiscovered(appState.currentId);
  renderFlashcard();
  triggerAnimalSound();
  saveState();
}

function nextCard() {
  const list = getFilteredAnimals();
  const idx = list.findIndex(a => a.id === appState.currentId);
  const nextIdx = (idx + 1) % list.length;
  appState.currentId = list[nextIdx].id;
  appState.isFlipped = false;
  markDiscovered(appState.currentId);
  renderFlashcard();
  triggerAnimalSound();
  saveState();
}

function toggleFlip() {
  appState.isFlipped = !appState.isFlipped;
  const animal = getAnimalById(appState.currentId);
  markDiscovered(animal.id);
  renderFlashcard();
  if (appState.isFlipped) {
    speakText(animal.fact);
  }
  saveState();
}

function handleCardClick(event) {
  if (event && event.target && event.target.closest(`button`)) {
    return;
  }
  toggleFlip();
}

function handleCardKeydown(event) {
  if (event.key === `Enter` || event.key === ` `) {
    event.preventDefault();
    toggleFlip();
  }
}

function jumpToPartner(event) {
  if (event) event.stopPropagation();
  const animal = getAnimalById(appState.currentId);
  if (!animal.pairId) return;

  // Switch to 'all' if partner is outside current filter
  const list = getFilteredAnimals();
  if (!list.some(a => a.id === animal.pairId)) {
    appState.filter = `all`;
    document.querySelectorAll(`.filter-chip`).forEach(btn => {
      const active = btn.dataset.filter === `all`;
      btn.classList.toggle(`is-active`, active);
      btn.setAttribute(`aria-pressed`, String(active));
    });
  }
  selectAnimal(animal.pairId);
}

function triggerAnimalSound() {
  const animal = getAnimalById(appState.currentId);
  const bubble = document.getElementById(`sound-bubble`);

  // Solo pausa o reanuda si el audio guardado corresponde al MISMO animal que estás viendo
  if (currentAnimalAudio && currentAnimalId === animal.id) {
    if (!currentAnimalAudio.paused) {
      // Si está sonando -> PAUSAR
      currentAnimalAudio.pause();
      clearTimeout(voiceTimeout);
      if (`speechSynthesis` in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      if (bubble) bubble.classList.remove(`is-visible`);
    } else {
      // Si estaba pausado -> REANUDAR
      currentAnimalAudio.play();
      animateAnimalPop();
    }
    return;
  }

  // Si es un animal diferente o no había audio -> DETENER el anterior e INICIAR el nuevo
  playAnimalSynth(animal.id);
  animateAnimalPop();

  clearTimeout(voiceTimeout);
  voiceTimeout = setTimeout(() => {
    speakText(`${animal.name}! ${animal.soundText}`);
  }, 1400);
}