import { AreaPageData } from "@/components/AreaPageTemplate";

const commonPestsSanDiego = [
  "Argentine Ants & Fire Ants",
  "Black Widow Spiders",
  "Roof Rats & House Mice",
  "German & American Cockroaches",
  "Bed Bugs",
  "Fleas & Ticks",
  "Mosquitoes",
  "Earwigs & Silverfish",
];

function makeFAQs(city: string) {
  return [
    {
      question: `Do you offer same-day pest control in ${city}?`,
      answer: `Yes! We offer same-day service for most pest situations in ${city} and throughout San Diego County. Call us at (858) 878-2847 and we'll do our best to dispatch a technician the same day.`,
    },
    {
      question: `How much does pest control cost in ${city}?`,
      answer: `Pricing depends on the type of pest, size of your property, and level of infestation. We offer free inspections and quotes, call (858) 878-2847 or fill out our online form for a no-obligation estimate.`,
    },
    {
      question: `Are your pest control treatments safe in ${city} homes?`,
      answer: `We use EPA-registered products approved for residential use in California, applied according to their labels. Our technicians will walk you through any product-specific precautions before and after treatment.`,
    },
    {
      question: `Do you offer recurring pest control service in ${city}?`,
      answer: `Yes. We recommend quarterly preventative treatments for most ${city} homes. San Diego's mild climate means pests are active year-round, so regular service is the best way to stay ahead of infestations.`,
    },
  ];
}

export const areaPages: Record<string, AreaPageData> = {
  "la-jolla": {
    cityName: "La Jolla",
    slug: "la-jolla",
    intro: "Professional pest control in La Jolla, CA, trusted by homeowners from the Village to La Jolla Shores, Bird Rock, and the Muirlands.",
    bodyParagraph: "La Jolla sits squarely in San Diego's coastal fog belt, and the mature landscaping that makes the neighborhood beautiful — ivy-covered slopes, ficus hedges, towering palms — is exactly what roof rats and Argentine ants love. Add older estate homes with crawl spaces and detached garages, and La Jolla has some of the most persistent pest pressure on the coast. We treat everything from hillside homes above La Jolla Scenic Drive to condos in the Village.",
    commonPests: [
      "Roof Rats (palms, ivy & attic spaces)",
      "Argentine Ants",
      "Black Widow Spiders",
      "Silverfish (marine-layer moisture)",
      "German & American Cockroaches",
      "Earwigs",
      "Bed Bugs",
      "Fleas & Ticks",
    ],
    localInsights: [
      {
        heading: "Why Roof Rats Are La Jolla's #1 Problem",
        paragraphs: [
          "Roof rats travel the neighborhood's mature tree canopy and utility lines, then drop onto tile roofs and slip into attics through gaps as small as a quarter. Homes with ivy on slopes, fruit trees, or untrimmed palms are the most common targets we see in La Jolla — especially in the Muirlands, La Jolla Mesa, and along Mount Soledad, where landscaping meets open hillside.",
          "Our La Jolla rodent work centers on exclusion: sealing entry points at rooflines, vents, and garage doors, then trapping out whatever is already inside. Bait-only approaches don't hold in this neighborhood because new rats keep arriving from the canopy.",
        ],
      },
      {
        heading: "Coastal Moisture Pests in Older La Jolla Homes",
        paragraphs: [
          "The marine layer keeps La Jolla humid enough that silverfish, earwigs, and cockroaches stay active in months when inland neighborhoods dry out. Pre-1970s homes in the Village, Bird Rock, and La Jolla Shores — with original crawl spaces and garages — give these pests the dark, damp harborage they need.",
          "We pair interior treatments with moisture and harborage guidance, so the fix lasts longer than the product does.",
        ],
      },
    ],
    neighborhoods: ["The Village", "La Jolla Shores", "Bird Rock", "Muirlands", "La Jolla Mesa", "Mount Soledad", "Windansea"],
    faqs: [
      {
        question: "Do you handle roof rats in La Jolla attics?",
        answer: "Yes — attic rodent work is one of our most common La Jolla services. We inspect the roofline and attic, seal entry points, set traps, and follow up until the attic is clear. We also advise on the landscaping conditions (palms, ivy, fruit trees) that keep attracting them.",
      },
      {
        question: "Can you treat older or historic La Jolla homes safely?",
        answer: "Absolutely. Much of our La Jolla work is in older homes with crawl spaces, original garages, and mature landscaping. We use targeted, eco-friendly products and treatment methods appropriate for older construction — no fumigation needed for general pest work.",
      },
      {
        question: "Do you offer same-day pest control in La Jolla?",
        answer: "Yes. We offer same-day service for most pest situations in La Jolla. Call (858) 878-2847 and we'll do our best to dispatch a technician the same day.",
      },
      {
        question: "How often should La Jolla homes be treated?",
        answer: "For most La Jolla properties we recommend quarterly service. The coastal climate never gets cold or dry enough to knock pest populations down naturally, so consistent perimeter protection is what keeps ants, spiders, and roaches out year-round.",
      },
    ],
  },
  "mira-mesa": {
    cityName: "Mira Mesa",
    slug: "mira-mesa",
    intro: "Fast, reliable pest control in Mira Mesa, CA — built for the neighborhood's 1970s–80s tract homes and canyon-edge streets.",
    bodyParagraph: "Mira Mesa is San Diego's classic tract-home neighborhood: block after block of 1970s and 80s construction, now 40-plus years old, bordered on the south by Los Peñasquitos Canyon and threaded with smaller canyon fingers. Aging garage-door seals, original vents, and settling slabs give pests entry points, while the canyons supply a steady stream of ants, rats, and spiders. It's also where our office is closest — Mira Mesa and the surrounding 92126/92121 area is home turf.",
    commonPests: [
      "Argentine Ants",
      "Roof Rats (canyon corridors)",
      "German & American Cockroaches",
      "Black Widow Spiders (garages & side yards)",
      "Earwigs & Crickets",
      "House Mice",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "40-Year-Old Tract Homes Need Exclusion Work",
        paragraphs: [
          "Mira Mesa's housing went up fast in the 70s and 80s, and four decades later the pest-relevant parts are wearing out: garage door sweeps that no longer seal, foundation vents with torn screens, stucco gaps at utility penetrations. Mice and roaches don't need much — a gap the width of a pencil is an open door.",
          "Our standard Mira Mesa service includes an exclusion check, because sealing three or four aging entry points often does more lasting good than any amount of product.",
        ],
      },
      {
        heading: "Los Peñasquitos Canyon and the Southern Streets",
        paragraphs: [
          "Homes along the neighborhood's southern edge — backing to Los Peñasquitos Canyon Preserve — live with the same canyon dynamics as much pricier zip codes: rodents and spiders commuting from protected open space into adjacent yards. The preserve is a treasure; the overflow is manageable with a maintained perimeter.",
          "If you're on a canyon-adjacent street, quarterly service is the realistic baseline. Interior-only treatments in these locations are a temporary patch.",
        ],
      },
    ],
    neighborhoods: ["Mira Mesa core (92126)", "Sorrento Valley border", "Los Peñasquitos Canyon edge", "Miramar border", "Scripps Ranch border"],
    faqs: [
      {
        question: "Why does my older Mira Mesa home get mice every fall?",
        answer: "Cooling weather pushes mice indoors, and 40-year-old tract construction offers plenty of worn entry points. Exclusion — sealing garage doors, vents, and utility gaps — plus trapping solves it durably; we check entry points as part of every rodent job.",
      },
      {
        question: "We back up to Los Peñasquitos Canyon — what should we expect?",
        answer: "Steady, seasonal pressure from ants, rats, and spiders moving out of the preserve. A maintained quarterly perimeter keeps the canyon's wildlife in the canyon; one-time treatments fade within weeks in these locations.",
      },
      {
        question: "Do you offer same-day pest control in Mira Mesa?",
        answer: "Yes — and Mira Mesa is our home area, so response times here are typically our fastest. Call (858) 878-2847.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use in California, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "scripps-ranch": {
    cityName: "Scripps Ranch",
    slug: "scripps-ranch",
    intro: "Pest control in Scripps Ranch, CA — protecting homes among the eucalyptus groves and canyons from roof rats, spiders, and seasonal invaders.",
    bodyParagraph: "Scripps Ranch's signature eucalyptus groves are also its signature pest problem: roof rats nest and travel in the canopy, and the neighborhood's canyon systems and Miramar Lake open space keep rodents, spiders, and gophers supplied year-round. Homes here are well-built, but the setting — trees touching rooflines, slopes of groundcover, open space over the back fence — creates pressure that construction quality alone can't solve.",
    commonPests: [
      "Roof Rats (eucalyptus canopy)",
      "Black Widow Spiders",
      "Argentine Ants",
      "Gophers & Ground Squirrels (slopes & open space)",
      "Earwigs & Crickets",
      "German & American Cockroaches",
      "Fleas & Ticks",
      "Mosquitoes (Miramar Lake area)",
    ],
    localInsights: [
      {
        heading: "Eucalyptus and Roof Rats Go Together",
        paragraphs: [
          "Roof rats are arboreal — they'd rather travel branches than ground — and Scripps Ranch's mature eucalyptus canopy is a rat freeway network. Anywhere limbs overhang or touch a roofline, rats have direct attic access, and we see the results in attics across the neighborhood, especially near the groves along Pomerado Road and around Miramar Lake.",
          "Effective control here means exclusion at the roofline, trapping, and — critically — trimming canopy contact points. We'll show you exactly which limbs are the problem.",
        ],
      },
      {
        heading: "Slopes, Groundcover, and Gophers",
        paragraphs: [
          "Scripps Ranch's landscaped slopes and iceplant groundcover are ideal gopher and ground squirrel habitat, and canyon-adjacent yards inherit the populations of the open space next door. Left alone, gophers undermine slopes and irrigation lines; ground squirrels burrow under foundations and decks.",
          "We run targeted gopher and squirrel programs alongside general pest service — a common pairing for Scripps Ranch properties with any slope frontage.",
        ],
      },
    ],
    neighborhoods: ["Scripps Miramar Ranch", "Miramar Lake area", "Stonebridge Estates", "Scripps Ranch Villages", "Pomerado corridor"],
    faqs: [
      {
        question: "I hear scratching in the attic at night — is that rats?",
        answer: "In Scripps Ranch, almost certainly roof rats, especially if trees touch your roofline. We inspect the attic and roof, seal entry points, trap out the population, and identify the branch contact points that gave them access.",
      },
      {
        question: "Do you handle gophers and ground squirrels in Scripps Ranch?",
        answer: "Yes — slope and open-space properties here deal with both, and we run dedicated control programs for them alongside standard pest service.",
      },
      {
        question: "Do you offer same-day pest control in Scripps Ranch?",
        answer: "Yes. Same-day service is available for most pest situations in Scripps Ranch — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Will trimming my eucalyptus really make a difference for rats?",
        answer: "A significant one. Cutting canopy contact with the roofline removes the rats' primary highway. Combined with sealing entry points, it's the difference between permanent control and a recurring problem.",
      },
    ],
  },
  "clairemont": {
    cityName: "Clairemont",
    slug: "clairemont",
    intro: "Trusted pest control in Clairemont, CA, effective treatments for ants, spiders, roaches, rodents, and other common pests.",
    bodyParagraph: "Clairemont is one of San Diego's most established residential neighborhoods, with a mix of older homes that can be more susceptible to rodent entry and cockroach infestations. Our team has extensive experience treating Clairemont homes.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Clairemont"),
  },
  "pacific-beach": {
    cityName: "Pacific Beach",
    slug: "pacific-beach",
    intro: "Pest control in Pacific Beach, CA — fast, discreet treatments for PB's beach cottages, apartments, and rental properties.",
    bodyParagraph: "Pacific Beach has some of the densest housing in San Diego: aging beach cottages, converted duplexes, and apartment blocks separated by shared alleys and dumpster corrals. That density is why PB's pest problems spread — German cockroaches move between units, high tenant turnover keeps bed bug risk elevated, and beach-town dog culture makes fleas a year-round issue. We work with homeowners, tenants, and the property managers who run much of the neighborhood.",
    commonPests: [
      "German Cockroaches (multi-unit spread)",
      "Bed Bugs (rental turnover)",
      "Fleas",
      "Argentine Ants",
      "Silverfish & Earwigs (coastal moisture)",
      "Roof Rats & House Mice",
      "Black Widow Spiders",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Pest Control in PB's Multi-Unit Housing",
        paragraphs: [
          "In a detached home, treating one structure solves the problem. In PB's duplexes, triplexes, and apartment buildings, roaches and bed bugs travel through shared walls, plumbing chases, and alleys — so a single-unit treatment often just pushes the problem next door and back again. Where we can, we coordinate with owners and property managers to treat adjacent units together.",
          "Shared trash areas along PB's alleys are the other density problem: they sustain roach and rodent populations that re-seed the whole block. Exterior baiting and harborage cleanup around these zones is a core part of our PB service.",
        ],
      },
      {
        heading: "Turnover, Rentals, and Bed Bugs",
        paragraphs: [
          "Between vacation rentals, student housing, and one-year leases, Pacific Beach has constant resident turnover — and with it, some of the steadiest bed bug pressure in coastal San Diego. Early detection is everything: a light infestation is a manageable treatment, while a mature one is a major disruption.",
          "If you're a landlord or property manager, we can inspect between tenants and treat before the next move-in, which is by far the cheapest time to catch a problem.",
        ],
      },
    ],
    neighborhoods: ["North Pacific Beach", "Crown Point", "Sail Bay", "Mission Beach border", "Bay Park border"],
    faqs: [
      {
        question: "I'm a renter in PB — can you treat my apartment?",
        answer: "Yes, with your property owner's or manager's authorization. For roaches and bed bugs in multi-unit buildings we'll often recommend the owner treat neighboring units too, since single-unit treatments in shared buildings frequently see reinfestation.",
      },
      {
        question: "Do you do bed bug inspections for vacation rentals in Pacific Beach?",
        answer: "Yes — we inspect and treat short-term and long-term rentals, including turnover inspections between guests or tenants. Early detection keeps treatment fast and discreet.",
      },
      {
        question: "Do you offer same-day pest control in Pacific Beach?",
        answer: "Yes. Same-day service is available for most pest situations in PB — call (858) 878-2847 and we'll do our best to get a technician out today.",
      },
      {
        question: "Why does my PB home get silverfish every summer?",
        answer: "The marine layer keeps coastal PB humid through early summer, and older beach construction offers plenty of dark, damp harborage. We treat the harborage zones and point out the moisture conditions that attract them.",
      },
    ],
  },
  "carmel-valley": {
    cityName: "Carmel Valley",
    slug: "carmel-valley",
    intro: "Expert pest control in Carmel Valley, CA — protecting canyon-rim homes and master-planned communities from ants, rodents, and spiders.",
    bodyParagraph: "Carmel Valley's homes are newer, but its pest pressure is real — and it comes from the canyons. The neighborhood is laced with preserved open space (Los Peñasquitos Canyon, Gonzales Canyon, Carmel Valley Creek), and homes backing to those corridors face constant pressure from rodents, ants, and spiders that new construction alone doesn't stop. Heavy HOA irrigation keeps Argentine ant colonies thriving through the dry season, and view fencing along canyon rims is prime black widow habitat.",
    commonPests: [
      "Argentine Ants (irrigation-driven colonies)",
      "Roof Rats (canyon corridors)",
      "Black Widow Spiders (view fences & garages)",
      "German & American Cockroaches",
      "Earwigs & Silverfish",
      "Mosquitoes",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "Canyon-Rim Homes Face Different Pressure",
        paragraphs: [
          "If your home backs to Los Peñasquitos Canyon, Gonzales Canyon, or any of the open-space fingers running through Carmel Valley and Pacific Highlands Ranch, your pest situation is fundamentally different from a home in the interior of the same development. Rodents, spiders, and ants move from the canyon into yards along the rim, so one-time treatments fade fast.",
          "For canyon-adjacent homes we build a defensive perimeter — exclusion at the structure, barrier treatment at the yard line, and quarterly maintenance to keep it intact.",
        ],
      },
      {
        heading: "Why New Construction Still Gets Ants",
        paragraphs: [
          "Argentine ants don't care that your home was built in 2015. Carmel Valley's lush HOA landscaping runs on irrigation, and consistent moisture is exactly what lets ant supercolonies persist through San Diego's dry summers. The first hot week after spring rains, trails show up in kitchens and baths across the neighborhood.",
          "We treat the colony structure outside — not just the trail inside — which is the difference between the ants disappearing for a year versus reappearing in three weeks.",
        ],
      },
    ],
    neighborhoods: ["Pacific Highlands Ranch", "Torrey Hills", "Del Mar Mesa", "Sorrento Valley border", "Del Mar Heights border"],
    faqs: [
      {
        question: "Our home backs to the canyon — do we need a different treatment plan?",
        answer: "Usually yes. Canyon-adjacent homes in Carmel Valley face continuous re-invasion pressure, so we emphasize exclusion and a maintained perimeter barrier rather than one-off treatments. It's the difference between managing the source and chasing symptoms.",
      },
      {
        question: "Why do I keep getting ants in a newer Carmel Valley home?",
        answer: "Irrigated landscaping sustains Argentine ant supercolonies year-round, and new construction does nothing to stop them. Effective control targets the exterior colonies and entry points — we treat the source, not just the visible trail.",
      },
      {
        question: "Do you offer same-day pest control in Carmel Valley?",
        answer: "Yes. Same-day service is available for most pest situations in Carmel Valley — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use in California, applied per label directions — and we explain every product-specific precaution up front, a priority for the young families that make up most of our Carmel Valley customers.",
      },
    ],
  },
  "mission-valley": {
    cityName: "Mission Valley",
    slug: "mission-valley",
    intro: "Pest control in Mission Valley, CA, residential and commercial treatments for the heart of San Diego.",
    bodyParagraph: "Mission Valley's mix of condos, apartments, and commercial properties experiences persistent cockroach, ant, and rodent pressure. We serve multi-unit properties, individual condos, and residential homes throughout Mission Valley.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Mission Valley"),
  },
  "rancho-bernardo": {
    cityName: "Rancho Bernardo",
    slug: "rancho-bernardo",
    intro: "Pest control in Rancho Bernardo, CA, protecting Rancho Bernardo families from rodents, spiders, ants, and seasonal pests.",
    bodyParagraph: "Rancho Bernardo's location near Bernardo Mountain and open space preserves means regular pressure from rodents and spiders. We deliver comprehensive exclusion and treatment programs for RB homeowners.",
    commonPests: [...commonPestsSanDiego, "Gophers & Ground Squirrels"],
    faqs: makeFAQs("Rancho Bernardo"),
  },
  "rancho-penasquitos": {
    cityName: "Rancho Peñasquitos",
    slug: "rancho-penasquitos",
    intro: "Pest control in Rancho Peñasquitos, CA, professional treatments for this family-friendly San Diego community.",
    bodyParagraph: "Rancho Peñasquitos homeowners regularly deal with Argentine ants, roof rats, and occasional black widow infestations, especially in homes backing to canyon areas. Our team provides tailored treatment programs for the area.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Rancho Peñasquitos"),
  },
  "point-loma": {
    cityName: "Point Loma",
    slug: "point-loma",
    intro: "Pest control in Point Loma, CA — protecting the peninsula's historic homes from Sunset Cliffs to Liberty Station against rodents, ants, and coastal moisture pests.",
    bodyParagraph: "Point Loma is one of San Diego's oldest neighborhoods, and its housing shows it: Spanish-style and Craftsman homes from the 1920s–50s with original crawl spaces, detached garages, and decades-old trees. Surrounded by water on three sides, the peninsula stays humid under the marine layer nearly year-round — ideal conditions for rats, silverfish, and earwigs. We work the whole peninsula, from Sunset Cliffs bungalows to Liberty Station townhomes and the harbor-adjacent commercial strip.",
    commonPests: [
      "Roof Rats & House Mice (older garages, mature trees)",
      "Silverfish & Earwigs (marine-layer moisture)",
      "Argentine Ants",
      "Black Widow Spiders",
      "German & American Cockroaches",
      "Fleas & Ticks",
      "Bed Bugs",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Rodents and Point Loma's Older Housing Stock",
        paragraphs: [
          "The peninsula's pre-war homes were framed long before modern pest exclusion standards — original vents, unscreened crawl-space openings, and garage doors that no longer seal. Combined with mature ficus and palm canopies in Fleetridge, Roseville, and the Wooded Area, rats have both highways and entry points. Rodent exclusion on older construction is the single most common job we do in Point Loma.",
          "Our approach: full-perimeter inspection, sealing every entry point we find, trap-out, and a follow-up visit to confirm the structure is tight.",
        ],
      },
      {
        heading: "Living With the Marine Layer",
        paragraphs: [
          "Point Loma spends a large share of the year under coastal fog, and that persistent dampness keeps moisture pests active when inland San Diego dries out. Silverfish in bathrooms and closets, earwigs along foundations, and roaches around water heaters and under-sink plumbing are steady peninsula complaints.",
          "We treat the harborage zones directly and flag the moisture conditions — irrigation overspray, blocked crawl-space vents, mulch against stucco — that keep these pests coming back.",
        ],
      },
    ],
    neighborhoods: ["Sunset Cliffs", "Roseville", "Fleetridge", "Liberty Station", "Wooded Area", "La Playa", "Loma Portal"],
    faqs: [
      {
        question: "Do you service military housing and rentals in Point Loma?",
        answer: "Yes — we work with homeowners, renters (with owner authorization), and property managers throughout the peninsula, including Liberty Station and rental properties near the bases.",
      },
      {
        question: "My Point Loma home was built in the 1930s — can you rodent-proof it?",
        answer: "That's our specialty here. Older homes can absolutely be sealed effectively; it just takes a more thorough inspection to find original vents, gaps, and crawl-space openings that modern homes don't have. We seal, trap out, and verify.",
      },
      {
        question: "Do you offer same-day pest control in Point Loma?",
        answer: "Yes. Same-day service is available for most pest situations in Point Loma — call (858) 878-2847 and we'll do our best to get a technician out today.",
      },
      {
        question: "Are treatments safe for households with pets?",
        answer: "We use EPA-registered products approved for residential use in California and apply them per label directions. Your technician will walk you through any product-specific precautions before and after treatment.",
      },
    ],
  },
  "ocean-beach": {
    cityName: "Ocean Beach",
    slug: "ocean-beach",
    intro: "Pest control in Ocean Beach, CA, fast, eco-friendly treatments for OB homes and rentals.",
    bodyParagraph: "Ocean Beach's coastal humidity and older housing stock create favorable conditions for silverfish, cockroaches, and earwigs. We serve OB homeowners, renters, and property managers with responsive, thorough pest treatments.",
    commonPests: [...commonPestsSanDiego, "Silverfish & Earwigs"],
    faqs: makeFAQs("Ocean Beach"),
  },
  "north-park": {
    cityName: "North Park",
    slug: "north-park",
    intro: "Pest control in North Park, CA, keeping one of San Diego's hippest neighborhoods pest-free.",
    bodyParagraph: "North Park's older craftsman homes and dense urban environment make it a prime area for cockroach, rodent, and bed bug activity. We serve both residential and commercial properties throughout North Park and neighboring areas.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("North Park"),
  },
  "hillcrest": {
    cityName: "Hillcrest",
    slug: "hillcrest",
    intro: "Pest control in Hillcrest, CA, reliable treatments for San Diego's urban core.",
    bodyParagraph: "Hillcrest's dense urban setting and older building stock present unique pest challenges, from German cockroaches in restaurants and kitchens to rodents in older structures. We provide both residential and commercial pest solutions.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Hillcrest"),
  },
  "downtown-san-diego": {
    cityName: "Downtown San Diego",
    slug: "downtown-san-diego",
    intro: "Pest control in Downtown San Diego, CA, professional treatments for condos, commercial properties, and residences.",
    bodyParagraph: "Downtown San Diego's high-density living and commercial activity create ideal conditions for cockroaches, bed bugs, and rodents. We serve condo buildings, restaurants, offices, and residential properties throughout the downtown core.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Downtown San Diego"),
  },
  "poway": {
    cityName: "Poway",
    slug: "poway",
    intro: "Pest control in Poway, CA, protecting the 'City in the Country' from rodents, spiders, ants, and suburban pests.",
    bodyParagraph: "Poway's semi-rural setting and proximity to open space means consistent pressure from rodents, gophers, and spiders. We offer full exclusion and treatment programs for Poway homes, including perimeter protection and attic rodent exclusion.",
    commonPests: [...commonPestsSanDiego, "Gophers & Ground Squirrels"],
    faqs: makeFAQs("Poway"),
  },
  "chula-vista": {
    cityName: "Chula Vista",
    slug: "chula-vista",
    intro: "Pest control in Chula Vista, CA — serving both the established west side and the newer Otay Ranch and Eastlake communities.",
    bodyParagraph: "Chula Vista is really two cities from a pest perspective. The west side's older neighborhoods have mature trees, established rodent populations, and decades-old plumbing that shelters roaches. East of the 805 — Otay Ranch, Eastlake, Rancho del Rey — newer homes back up to canyons and undeveloped land, bringing ants, spiders, and rodents in from open space. Warm inland temperatures keep everything active longer than on the coast. We run treatment programs matched to each side of the city.",
    commonPests: [
      "Argentine Ants & Fire Ants",
      "German & American Cockroaches",
      "Roof Rats & House Mice",
      "Black Widow Spiders",
      "Mosquitoes (Sweetwater & Otay corridors)",
      "Earwigs & Crickets",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "West Side vs. East Side: Different Homes, Different Pests",
        paragraphs: [
          "West Chula Vista's homes date back to the mid-1900s — mature ficus and palm canopies for roof rats, original garages and vents for entry, and older drain lines that sustain American cockroaches. Our west-side work leans heavily on exclusion and roach harborage treatment.",
          "East side communities like Otay Ranch and Eastlake are newer, but they're built along canyon fingers and open mesa. Homes on the development edge face steady invasion pressure from ants, spiders, and rodents moving in from undeveloped land — so there, the emphasis is perimeter defense and maintenance.",
        ],
      },
      {
        heading: "Mosquitoes in South Bay",
        paragraphs: [
          "Between the Sweetwater River corridor, the Otay River valley, and neighborhood water features, Chula Vista has more standing-water mosquito habitat than most of San Diego County. Backyard sources — plant saucers, clogged gutters, neglected fountains — do the rest.",
          "Our mosquito service targets breeding sources on your property and treats resting areas, which meaningfully cuts bite pressure even when the neighborhood source can't be eliminated.",
        ],
      },
    ],
    neighborhoods: ["Otay Ranch", "Eastlake", "Rancho del Rey", "Terra Nova", "Sunbow", "West Chula Vista", "Otay Mesa border"],
    faqs: [
      {
        question: "Do you cover all of Chula Vista, including Otay Ranch and Eastlake?",
        answer: "Yes — we service the entire city, west side to east side, including Otay Ranch, Eastlake, Rancho del Rey, and the newer Otay-adjacent developments.",
      },
      {
        question: "Our Eastlake home backs to open space — why do pests keep coming back?",
        answer: "Homes on the development edge face continuous re-invasion from the canyons and mesa. One-time treatments knock down the current population but not the source, which is why we recommend a maintained quarterly perimeter for edge-of-development homes.",
      },
      {
        question: "Do you offer same-day pest control in Chula Vista?",
        answer: "Yes. Same-day service is available for most pest situations in Chula Vista — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Can you treat both my home and my business in Chula Vista?",
        answer: "Yes — we handle residential and commercial properties throughout Chula Vista, from single-family homes to restaurants, offices, and multi-unit buildings.",
      },
    ],
  },
  "el-cajon": {
    cityName: "El Cajon",
    slug: "el-cajon",
    intro: "Pest control in El Cajon, CA, effective treatments for one of San Diego's hottest and most pest-active inland cities.",
    bodyParagraph: "El Cajon's hot, dry summers push pests indoors in large numbers, especially ants, cockroaches, and rodents. We provide responsive, thorough treatments for El Cajon homes and businesses.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("El Cajon"),
  },
  "santee": {
    cityName: "Santee",
    slug: "santee",
    intro: "Pest control in Santee, CA, protecting East San Diego County homes from rodents, ants, spiders, and more.",
    bodyParagraph: "Santee's suburban neighborhoods adjacent to open space experience ongoing pressure from roof rats, ants, and spiders. We deliver targeted exclusion and barrier treatments for Santee homeowners.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Santee"),
  },
  "la-mesa": {
    cityName: "La Mesa",
    slug: "la-mesa",
    intro: "Pest control in La Mesa, CA, trusted treatments for the 'Jewel of the Hills' and surrounding neighborhoods.",
    bodyParagraph: "La Mesa's older residential homes and proximity to urban San Diego make it susceptible to cockroach, rodent, and ant infestations. We serve La Mesa homeowners with customized treatment plans and ongoing service programs.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("La Mesa"),
  },
  "national-city": {
    cityName: "National City",
    slug: "national-city",
    intro: "Pest control in National City, CA, professional treatments for residential and commercial properties.",
    bodyParagraph: "National City's dense urban environment and proximity to the bay create conditions favorable to cockroaches, rodents, and moisture pests. We provide thorough treatments for homes, apartments, and businesses throughout National City.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("National City"),
  },
  "spring-valley": {
    cityName: "Spring Valley",
    slug: "spring-valley",
    intro: "Pest control in Spring Valley, CA, effective treatments for this unincorporated community in San Diego County.",
    bodyParagraph: "Spring Valley's semi-rural character and older housing stock invite rodents, spiders, and ant colonies. Our team provides thorough inspections and customized treatment plans for Spring Valley residents.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Spring Valley"),
  },
  "lakeside": {
    cityName: "Lakeside",
    slug: "lakeside",
    intro: "Pest control in Lakeside, CA, protecting East County families from pests year-round.",
    bodyParagraph: "Lakeside's rural-suburban mix and proximity to the San Diego River corridor means regular rodent, spider, and ant activity. We offer comprehensive residential pest programs for Lakeside homeowners.",
    commonPests: [...commonPestsSanDiego, "Gophers & Ground Squirrels"],
    faqs: makeFAQs("Lakeside"),
  },
  "solana-beach": {
    cityName: "Solana Beach",
    slug: "solana-beach",
    intro: "Pest control in Solana Beach, CA, right in our backyard. We're your true local experts.",
    bodyParagraph: "Neighbors Pest Solutions serves Solana Beach as part of our greater San Diego service area. We know this community well and have treated countless homes here. From ant infestations in coastal homes to rodent exclusion in older properties near the train station, we've done it all.",
    commonPests: [...commonPestsSanDiego, "Silverfish & Earwigs"],
    faqs: makeFAQs("Solana Beach"),
  },
  "del-mar": {
    cityName: "Del Mar",
    slug: "del-mar",
    intro: "Pest control in Del Mar, CA, premium pest protection for one of San Diego's most prestigious coastal communities.",
    bodyParagraph: "Del Mar's luxury coastal properties and lush landscaping create ideal conditions for ants, spiders, and occasional rodent activity. We provide discreet, professional pest control that matches the standards Del Mar homeowners expect.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Del Mar"),
  },
  "encinitas": {
    cityName: "Encinitas",
    slug: "encinitas",
    intro: "Pest control in Encinitas, CA, eco-conscious, effective treatments for this North County coastal community.",
    bodyParagraph: "Encinitas homeowners appreciate our commitment to eco-friendly, family-safe products, a perfect match for this community's environmental values. We provide comprehensive pest control for Encinitas homes, gardens, and businesses.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("Encinitas"),
  },
  "carlsbad": {
    cityName: "Carlsbad",
    slug: "carlsbad",
    intro: "Pest control in Carlsbad, CA — from Village cottages to Bressi Ranch and La Costa, with special attention to the lagoon-driven mosquito pressure North County knows well.",
    bodyParagraph: "Carlsbad's defining pest feature is water: three coastal lagoons (Buena Vista, Agua Hedionda, and Batiquitos) wrap the city in mosquito habitat, and the neighborhoods around them feel it every warm evening. Inland, master-planned communities like Bressi Ranch and La Costa border open space and golf-course landscaping that sustain ants, rodents, and spiders. We tailor treatment to where you sit in that geography — a Village cottage near the lagoon has different needs than a newer home on the La Costa ridge.",
    commonPests: [
      "Mosquitoes (lagoon-adjacent neighborhoods)",
      "Argentine Ants",
      "Roof Rats & House Mice",
      "Black Widow Spiders",
      "German & American Cockroaches",
      "Earwigs & Silverfish",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "Living Near the Lagoons",
        paragraphs: [
          "Homes near Buena Vista, Agua Hedionda, and Batiquitos lagoons enjoy the views and pay for them in mosquitoes. The lagoons themselves are protected habitat — the fix isn't draining them, it's making your own property inhospitable: eliminating backyard breeding water, treating shaded resting vegetation, and timing service ahead of peak season.",
          "For lagoon-adjacent customers we recommend seasonal mosquito service from spring through early fall, when North County's mosquito activity peaks.",
        ],
      },
      {
        heading: "Master-Planned Communities and Open-Space Edges",
        paragraphs: [
          "Bressi Ranch, La Costa, Aviara, and Calavera Hills all share a pattern: irrigated HOA landscaping that feeds Argentine ant colonies, plus open-space borders that funnel rodents and spiders toward homes on the edge. Newer construction slows pests down but doesn't stop them.",
          "Our quarterly perimeter program is built for exactly this — maintaining a treated boundary so what lives in the open space stays there.",
        ],
      },
    ],
    neighborhoods: ["Carlsbad Village", "La Costa", "Bressi Ranch", "Aviara", "Calavera Hills", "Olde Carlsbad", "Terramar"],
    faqs: [
      {
        question: "Can you actually reduce mosquitoes if I live near a Carlsbad lagoon?",
        answer: "Yes — meaningfully. We can't treat the protected lagoon itself, but most bites happen from mosquitoes breeding and resting on or near your own property. Eliminating backyard water sources and treating resting areas substantially cuts bite pressure.",
      },
      {
        question: "Do you service HOA communities like Bressi Ranch and Aviara?",
        answer: "Yes — individual homes within HOA communities are a large share of our Carlsbad work, and we're happy to coordinate with property management where common-area conditions are part of the problem.",
      },
      {
        question: "Do you offer same-day pest control in Carlsbad?",
        answer: "Yes. Same-day service is available for most pest situations in Carlsbad — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "When is mosquito season in Carlsbad?",
        answer: "Activity typically ramps up in late spring and peaks through summer into early fall. Starting service in spring — before populations build — gives the best season-long results near the lagoons.",
      },
    ],
  },
  "escondido": {
    cityName: "Escondido",
    slug: "escondido",
    intro: "Pest control in Escondido, CA — inland North County's toughest pest climate, from historic downtown homes to grove-adjacent properties.",
    bodyParagraph: "Escondido runs hotter and drier than coastal San Diego, and that changes the pest calendar: summer heat drives ants, crickets, and roaches indoors seeking water, while the avocado and citrus grove edges around the city support some of the county's healthiest roof rat populations. Older neighborhoods near downtown add pre-war housing stock with the entry points to match. It's a demanding pest environment, and it's one we know well.",
    commonPests: [
      "Roof Rats (grove & palm habitat)",
      "Argentine Ants (heat-driven indoor surges)",
      "Crickets & Earwigs",
      "American & German Cockroaches",
      "Black Widow Spiders",
      "Gophers & Ground Squirrels",
      "Fleas & Ticks",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Heat Drives Pests Indoors",
        paragraphs: [
          "When inland temperatures spike, pests don't slow down — they relocate. Ant colonies that lived happily in your yard all spring will move trails into kitchens and bathrooms chasing water during Escondido's hot months, and crickets and roaches follow the same logic. Late summer is our busiest season here.",
          "The fix is a maintained exterior barrier plus eliminating the moisture attractants — dripping hose bibs, AC condensate lines, over-watered beds against the foundation.",
        ],
      },
      {
        heading: "Groves, Palms, and Roof Rats",
        paragraphs: [
          "Escondido's agricultural history left it ringed with avocado and citrus, and roof rats treat groves as both pantry and nursery. Properties near grove edges — East Valley, Felicita, the hills toward Hidden Meadows — see steady rodent pressure, and untrimmed palms function as rat hotels even in the city core.",
          "We handle it with exclusion-first rodent work: seal the structure, trap out the residents, and advise on the landscaping that keeps inviting new ones.",
        ],
      },
    ],
    neighborhoods: ["Downtown Escondido", "Felicita", "East Valley", "Midway", "Hidden Meadows border", "San Pasqual Valley border"],
    faqs: [
      {
        question: "Why do ants invade my Escondido home every summer?",
        answer: "Inland heat drives colonies indoors in search of water. The lasting fix is treating the exterior colonies and entry points and maintaining that barrier through the hot months — not just spraying visible trails inside.",
      },
      {
        question: "We're near a grove and keep hearing noises in the attic — rats?",
        answer: "Very likely roof rats; grove-adjacent Escondido properties are prime habitat. We inspect the attic and roofline, seal entry points, trap out what's inside, and verify with a follow-up. Call sooner rather than later — attic populations grow fast.",
      },
      {
        question: "Do you offer same-day pest control in Escondido?",
        answer: "Yes. Same-day service is available for most pest situations in Escondido — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Do you handle gophers in Escondido?",
        answer: "Yes — gopher and ground squirrel activity is common on Escondido's larger lots and slope properties, and we offer targeted control programs for both.",
      },
    ],
  },
  "san-marcos": {
    cityName: "San Marcos",
    slug: "san-marcos",
    intro: "Pest control in San Marcos, CA, protecting North County Inland families and businesses.",
    bodyParagraph: "San Marcos's rapidly growing residential communities and warm inland climate attract ants, rodents, and cockroaches. We serve new construction and established neighborhoods throughout San Marcos.",
    commonPests: commonPestsSanDiego,
    faqs: makeFAQs("San Marcos"),
  },
  "vista": {
    cityName: "Vista",
    slug: "vista",
    intro: "Pest control in Vista, CA, trusted treatments for North County Inland homeowners.",
    bodyParagraph: "Vista's mix of residential neighborhoods and agricultural surroundings creates unique pest challenges, including gophers, rodents, and regular ant pressure. Our Vista service covers comprehensive interior and exterior treatments.",
    commonPests: [...commonPestsSanDiego, "Gophers & Ground Squirrels"],
    faqs: makeFAQs("Vista"),
  },
  "oceanside": {
    cityName: "Oceanside",
    slug: "oceanside",
    intro: "Pest control in Oceanside, CA — serving coastal neighborhoods, the San Luis Rey valley, and the rental communities around Camp Pendleton.",
    bodyParagraph: "Oceanside is North County's largest city and one of its most varied: older beach-area housing downtown and along the Strand, a high-turnover rental market serving Camp Pendleton families, and the San Luis Rey River corridor cutting through the middle of it all. Each brings its own pressure — moisture pests and roaches in the older coastal stock, bed bugs riding the constant move-in/move-out cycle, and mosquitoes and rodents along the river bottom.",
    commonPests: [
      "German & American Cockroaches",
      "Bed Bugs (rental turnover)",
      "Argentine Ants",
      "Roof Rats & House Mice (river corridor)",
      "Mosquitoes (San Luis Rey valley)",
      "Silverfish & Earwigs (coastal moisture)",
      "Black Widow Spiders",
      "Fleas & Ticks",
    ],
    localInsights: [
      {
        heading: "Military Moves and Rental Turnover",
        paragraphs: [
          "With Camp Pendleton next door, Oceanside's rental market never stops churning — and frequent moves are how bed bugs spread. Furniture from storage, moving trucks, and back-to-back tenancies all raise the risk. We work with tenants, homeowners, and property managers on both treatment and the between-tenant inspections that catch problems while they're still small and cheap to fix.",
          "PCS season (summer) is when we see the most bed bug calls in Oceanside — if you're moving in, an early inspection is worth far more than a late treatment.",
        ],
      },
      {
        heading: "The San Luis Rey Corridor",
        paragraphs: [
          "The river valley running inland from the harbor is Oceanside's pest superhighway: year-round vegetation and water supporting mosquitoes, rats, and opossum/skunk activity that spills into adjacent neighborhoods like San Luis Rey, Fire Mountain, and parts of Rancho del Oro.",
          "For homes near the corridor we prioritize rodent exclusion and standing-water mosquito control — the two issues that track most directly with river adjacency.",
        ],
      },
    ],
    neighborhoods: ["Downtown & The Strand", "Fire Mountain", "Rancho del Oro", "San Luis Rey", "South Oceanside", "Morro Hills", "Arrowood"],
    faqs: [
      {
        question: "Do you work with military families and rentals near Camp Pendleton?",
        answer: "Yes — a large share of our Oceanside work is rental properties and military families. We treat with owner/manager authorization and can schedule around move-in and move-out dates.",
      },
      {
        question: "We just moved into an Oceanside rental — should we get a bed bug inspection?",
        answer: "If the unit had quick turnover or you moved with stored furniture, an early inspection is smart. Catching bed bugs in the first weeks makes treatment dramatically simpler than discovering an established infestation months later.",
      },
      {
        question: "Do you offer same-day pest control in Oceanside?",
        answer: "Yes. Same-day service is available for most pest situations in Oceanside — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Why does my home near the river valley have more pests than my old place?",
        answer: "The San Luis Rey corridor sustains year-round rodent and mosquito populations, and adjacent neighborhoods absorb the overflow. Exclusion work plus a maintained perimeter is the right defense for river-adjacent homes.",
      },
    ],
  },
};
