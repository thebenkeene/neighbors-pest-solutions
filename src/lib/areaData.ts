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
    intro: "Pest control in Clairemont, CA — canyon-edge defense for one of San Diego's original postwar neighborhoods.",
    bodyParagraph: "Clairemont was San Diego's first big postwar suburb, and its 1950s–60s homes are now 60-plus years old — worn garage seals, original vents, and aging drain lines that invite rodents and American cockroaches. The neighborhood is also carved up by Tecolote and San Clemente canyons, which keep a steady supply of rats, ants, and black widows moving toward canyon-rim streets. Older homes plus canyon edges is Clairemont's signature pest combination.",
    commonPests: [
      "Roof Rats & House Mice (canyon corridors, older garages)",
      "American & German Cockroaches (aging drain lines)",
      "Argentine Ants",
      "Black Widow Spiders",
      "Earwigs & Silverfish",
      "Crickets",
      "Fleas & Ticks",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Sixty-Year-Old Homes Need Exclusion First",
        paragraphs: [
          "Clairemont's mid-century construction predates modern pest exclusion by decades: original foundation vents, garage doors that no longer seal, and stucco gaps at every utility penetration. Mice and roaches exploit exactly these — which is why our Clairemont service starts with an entry-point inspection, not just product.",
          "Sealing three or four worn openings on a 1958 house routinely does more lasting good than any spray program alone.",
        ],
      },
      {
        heading: "Tecolote and San Clemente Canyon Pressure",
        paragraphs: [
          "Streets backing Tecolote Canyon or the Highway 52 canyon corridor live with continuous pest traffic from protected open space — rats along fence lines, black widows in block-wall gaps, ants re-invading from canyon soil.",
          "For canyon-edge homes we maintain a quarterly perimeter; interior-only treatments in these locations fade within weeks because the source never empties.",
        ],
      },
    ],
    neighborhoods: ["Clairemont Mesa East & West", "Bay Ho", "Bay Park border", "North Clairemont", "Tecolote Canyon edge"],
    faqs: [
      {
        question: "Why does my 1950s Clairemont home get mice every fall?",
        answer: "Sixty years of settling opens entry points — worn door sweeps, torn vent screens, stucco gaps. Cooling weather pushes mice indoors through them. We seal the openings, trap out what's inside, and verify the structure is tight.",
      },
      {
        question: "We back up to Tecolote Canyon — what should we expect?",
        answer: "Steady seasonal pressure from rats, ants, and black widows moving out of the canyon. A maintained quarterly perimeter keeps canyon wildlife in the canyon — one-time treatments can't hold that line.",
      },
      {
        question: "Do you offer same-day pest control in Clairemont?",
        answer: "Yes. Same-day service is available for most pest situations in Clairemont — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
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
    intro: "Pest control in Mission Valley, CA — river-corridor and multi-unit expertise for the valley's condos, apartments, and businesses.",
    bodyParagraph: "Mission Valley is defined by two things pests love: the San Diego River running its entire length, and some of the densest multi-unit housing in the county. The river bottom sustains year-round rodent and mosquito populations that spill into adjacent complexes, while shared walls, trash rooms, and plumbing chases let roaches move between units. Add hotels, restaurants, and retail, and Mission Valley pest work is as much about buildings as it is about bugs.",
    commonPests: [
      "German Cockroaches (multi-unit spread)",
      "Roof Rats & House Mice (river corridor)",
      "Mosquitoes (river bottom)",
      "Argentine Ants",
      "American Cockroaches (garages & drains)",
      "Bed Bugs (rental & hotel turnover)",
      "Black Widow Spiders",
      "Fleas",
    ],
    localInsights: [
      {
        heading: "The River Is a Permanent Pest Reservoir",
        paragraphs: [
          "The San Diego River corridor gives rodents and mosquitoes permanent habitat through the middle of the valley — vegetation, water, and cover that never goes away. Complexes and businesses backing the river path see the most pressure, especially in fall when rats seek indoor harborage.",
          "For river-adjacent properties we prioritize structural exclusion and standing-water elimination — the corridor itself can't be treated, so the building envelope is the defense.",
        ],
      },
      {
        heading: "Condos and Apartments: Treat the Building, Not Just the Unit",
        paragraphs: [
          "In Mission Valley's multi-unit buildings, German cockroaches and bed bugs travel through shared walls and utility chases. Treating one unit in isolation often relocates the problem next door — and back again a month later.",
          "We coordinate with HOAs and property managers on adjacent-unit treatments and common-area programs, with documentation for boards and owners. See our commercial pest control service for scheduled multi-unit programs.",
        ],
      },
    ],
    neighborhoods: ["Civita", "Fenton Marketplace area", "Hotel Circle", "Grantville border", "Fashion Valley area", "Serra Mesa border"],
    faqs: [
      {
        question: "I live in a Mission Valley condo — can you treat just my unit?",
        answer: "Yes, with owner or HOA authorization — but for roaches and bed bugs we'll often recommend coordinating with the building, since single-unit treatments in shared structures commonly see reinfestation from neighbors. We're happy to work with your property manager.",
      },
      {
        question: "Why are there rats around our complex near the river path?",
        answer: "The river corridor is permanent rodent habitat, and complexes along it absorb the overflow. Effective control means sealing the buildings, managing trash areas, and maintained exterior baiting — we set that up as an ongoing program.",
      },
      {
        question: "Do you offer same-day pest control in Mission Valley?",
        answer: "Yes. Same-day service is available for most pest situations in Mission Valley — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Do you service hotels and businesses in Mission Valley?",
        answer: "Yes — restaurants, hotels, retail, and offices throughout the valley, with scheduled service and written reports for inspections. See our commercial pest control page for details.",
      },
    ],
  },
  "rancho-bernardo": {
    cityName: "Rancho Bernardo",
    slug: "rancho-bernardo",
    intro: "Pest control in Rancho Bernardo, CA — protecting RB's golf-course communities and Lake Hodges-adjacent homes from rodents, ants, and spiders.",
    bodyParagraph: "Rancho Bernardo wraps around golf courses, Bernardo Mountain, and the Lake Hodges basin — beautiful geography that keeps pests supplied year-round. The neighborhood's 1970s–80s housing stock is reaching the age where garage seals, vents, and utility penetrations let rodents in, while irrigated fairway and HOA landscaping sustains Argentine ant colonies through the dry season. Communities like Oaks North and Seven Oaks also count on us for patient, thorough service for older residents.",
    commonPests: [
      "Roof Rats & House Mice (Lake Hodges & open-space edge)",
      "Argentine Ants (irrigated landscaping)",
      "Black Widow Spiders",
      "Gophers & Ground Squirrels",
      "American & German Cockroaches",
      "Earwigs & Crickets",
      "Mosquitoes (Hodges basin)",
      "Fleas & Ticks",
    ],
    localInsights: [
      {
        heading: "Aging Tract Homes, Golf-Course Landscaping",
        paragraphs: [
          "Most of RB went up in the 70s and 80s, and four decades of settling shows at exactly the points pests exploit: garage-door sweeps, foundation vents, and stucco gaps. Meanwhile, the irrigation that keeps the golf corridors and HOA slopes green also keeps ant supercolonies alive through months when they'd otherwise die back.",
          "Our RB service pairs exclusion on the aging entry points with an exterior barrier timed to the ant season — treating the structure and the landscape pressure together.",
        ],
      },
      {
        heading: "The Lake Hodges Effect",
        paragraphs: [
          "Homes on RB's western and southern edges sit above the Lake Hodges basin and Bernardo Mountain open space — permanent habitat for rodents and, in warm months, a mosquito source. Westwood and the streets off Bernardo Center Drive nearest the lake feel it most.",
          "For basin-adjacent homes we lead with rodent exclusion and add standing-water mosquito checks on the property, since the lake itself isn't treatable — your yard is the defensible line.",
        ],
      },
    ],
    neighborhoods: ["Westwood", "Oaks North", "Seven Oaks", "High Country West", "Bernardo Heights", "Greens East"],
    faqs: [
      {
        question: "Why do I suddenly have mice in a house I've owned for 20 years?",
        answer: "Homes age into vulnerability — door sweeps wear, vent screens tear, stucco separates at pipes. RB's 1970s–80s housing is at exactly that stage. We seal the entry points, trap out what's inside, and verify the structure is tight.",
      },
      {
        question: "Do you service the 55+ communities like Oaks North and Seven Oaks?",
        answer: "Yes, regularly. We're happy to coordinate with family members or property managers on scheduling, and our technicians take the time to walk through everything before and after treatment.",
      },
      {
        question: "Do you offer same-day pest control in Rancho Bernardo?",
        answer: "Yes. Same-day service is available for most pest situations in RB — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids, pets, and gardens?",
        answer: "We use EPA-registered products approved for residential use, applied according to their labels — and your technician will explain any product-specific precautions for children, pets, and edible gardens before treating.",
      },
    ],
  },
  "rancho-penasquitos": {
    cityName: "Rancho Peñasquitos",
    slug: "rancho-penasquitos",
    intro: "Pest control in Rancho Peñasquitos, CA — canyon-smart treatments for PQ's family neighborhoods along the preserve.",
    bodyParagraph: "Rancho Peñasquitos sits directly on top of the canyon system that gives it its name — Los Peñasquitos Canyon Preserve runs the neighborhood's entire southern flank, and smaller fingers cut between its 1980s–90s tract streets. That means classic canyon-edge pest pressure: roof rats and black widows commuting from preserved open space, plus Argentine ant surges every time the seasons turn. PQ is family territory, and our service is built accordingly — thorough, scheduled, and explained clearly.",
    commonPests: [
      "Argentine Ants",
      "Roof Rats (canyon corridors)",
      "Black Widow Spiders (fences, garages & play structures)",
      "German & American Cockroaches",
      "Earwigs & Crickets",
      "House Mice",
      "Fleas & Ticks",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Living on the Preserve's Edge",
        paragraphs: [
          "If your street backs to Los Peñasquitos Canyon or one of its fingers, pests don't visit — they commute. Rats move along fence lines and into attics, black widows set up in view fences and garage corners, and ants re-invade from canyon soil after every treatment that only addresses the house.",
          "Canyon-edge homes in PQ get our perimeter-first approach: exclusion at the structure, a maintained yard-line barrier, and quarterly upkeep so the preserve's wildlife stays in the preserve.",
        ],
      },
      {
        heading: "Black Widows Where Kids Play",
        paragraphs: [
          "The single most common PQ concern we hear from parents: black widows in play structures, sandbox lids, garage clutter, and the gaps of block walls. San Diego's black widow population is healthy everywhere, but canyon-adjacent yards see more of them.",
          "Our treatments give play areas, garages, and fence lines specific attention — web removal plus residual treatment of the sheltered spots where widows rebuild.",
        ],
      },
    ],
    neighborhoods: ["Park Village", "Torrey Highlands border", "Black Mountain Ranch border", "PQ core (92129)", "Canyonside area"],
    faqs: [
      {
        question: "We find black widows around our patio and play set — is that normal in PQ?",
        answer: "Very common, especially near the canyon. We remove webs, treat the sheltered spots they rebuild in — play structures, fence caps, garage corners — and keep them suppressed with quarterly service.",
      },
      {
        question: "Our house backs the preserve — can pests actually be kept out?",
        answer: "Yes, with the right structure: exclusion on the home itself plus a maintained perimeter barrier at the yard line. What doesn't work on canyon-edge homes is one-time interior spraying — the pressure source never goes away, so the defense has to be standing.",
      },
      {
        question: "Do you offer same-day pest control in Rancho Peñasquitos?",
        answer: "Yes. Same-day service is available for most pest situations in PQ — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions, and your technician will walk you through any precautions for children and pets before and after treatment.",
      },
    ],
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
    intro: "Pest control in Ocean Beach, CA — beach-cottage and rental-savvy treatments for OB's salt-air blocks.",
    bodyParagraph: "OB's housing is San Diego's most weathered: 1920s–50s beach cottages and converted duplexes living under permanent salt-air humidity. That combination keeps moisture pests — silverfish, earwigs, roaches — active nearly year-round, while Dog Beach culture makes fleas a neighborhood constant. Dense rentals, shared alleys, and beachfront trash zones round out the picture. We work with OB homeowners, long-time renters, and the property managers who run much of the neighborhood.",
    commonPests: [
      "Silverfish & Earwigs (salt-air humidity)",
      "German & American Cockroaches",
      "Fleas (Dog Beach neighborhood)",
      "Roof Rats & House Mice (older cottages)",
      "Argentine Ants",
      "Black Widow Spiders",
      "Bed Bugs (rental turnover)",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Salt Air, Old Wood, and Moisture Pests",
        paragraphs: [
          "OB cottages hold coastal dampness in crawl spaces, garages, and original wood framing — ideal harborage for silverfish, earwigs, and roaches through the marine-layer months. The older the cottage, the more entry points and the more humidity it traps.",
          "We treat the harborage zones directly and show you the ventilation and moisture fixes that make treatments last — in OB, moisture management is half the battle.",
        ],
      },
      {
        heading: "Dogs, Rentals, and Fleas",
        paragraphs: [
          "A neighborhood built around Dog Beach has flea pressure most of San Diego doesn't: pets carry fleas home, and dense rental housing with shared yards spreads them. Flea problems in OB routinely persist because only one unit or one yard gets treated.",
          "Effective flea control here treats home, yard, and (through your vet) the pets simultaneously — and in multi-unit buildings, coordinating with the neighbors matters.",
        ],
      },
    ],
    neighborhoods: ["OB proper (92107)", "Sunset Cliffs border", "Point Loma Heights", "Ocean Beach Highlands", "Voltaire corridor"],
    faqs: [
      {
        question: "Why does my OB cottage get silverfish no matter what I do?",
        answer: "Salt-air humidity plus original construction gives them permanent dark, damp harborage. We treat those zones directly and flag the moisture conditions sustaining them — treatments last when the dampness is managed too.",
      },
      {
        question: "We keep getting fleas even though we treat our dog — why?",
        answer: "Fleas persist in carpets, furniture, and yards for months, so pet treatment alone can't clear an environment. Full elimination treats the home, the yard, and the pets at the same time — we coordinate the first two and your vet handles the third.",
      },
      {
        question: "Do you offer same-day pest control in Ocean Beach?",
        answer: "Yes. Same-day service is available for most pest situations in OB — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "I rent in OB — can you treat my place?",
        answer: "Yes, with your property owner's or manager's authorization. For roaches and bed bugs in shared buildings, we'll often recommend treating adjacent units too — it's the difference between solving and shuffling the problem.",
      },
    ],
  },
  "north-park": {
    cityName: "North Park",
    slug: "north-park",
    intro: "Pest control in North Park, CA — craftsman-home and restaurant-district expertise for San Diego's urban core.",
    bodyParagraph: "North Park runs on two pest engines: a century of housing stock — craftsman bungalows from the 1910s–40s with raised foundations, crawl spaces, and original everything — and one of the county's densest restaurant and bar districts along 30th Street and University Avenue. Old wood framing shelters rodents and termite-adjacent damage; commercial kitchens and shared-wall apartments keep German cockroach and rat pressure constant. Urban pest control is its own discipline, and North Park is where we practice it most.",
    commonPests: [
      "German Cockroaches (restaurant district & apartments)",
      "Roof Rats & House Mice (craftsman crawl spaces)",
      "Argentine Ants",
      "Bed Bugs (dense rental housing)",
      "American Cockroaches (aging drains)",
      "Black Widow Spiders",
      "Silverfish (older wood-frame homes)",
      "Fleas",
    ],
    localInsights: [
      {
        heading: "Craftsman Homes: Beautiful, and Full of Entry Points",
        paragraphs: [
          "North Park's bungalows were framed a century before modern exclusion standards — raised foundations with ventilated crawl spaces, original wood siding, and decades of remodels that left gaps behind. Rats and mice treat these as open invitations, especially in fall.",
          "Our older-home work is exclusion-led: crawl-space and roofline sealing, trap-out, and honest guidance about which original features need attention versus which are fine.",
        ],
      },
      {
        heading: "Living Near the Restaurant District",
        paragraphs: [
          "The blocks around 30th and University enjoy the county's best food — and the pest pressure that comes with dumpster corrals, grease bins, and late-night kitchens. Roaches and rats sustained by the commercial corridor spill into adjacent residential streets.",
          "Homes near the corridor benefit from a maintained exterior program, and for the businesses themselves, our commercial pest control service provides the scheduled, documented treatment health inspectors expect.",
        ],
      },
    ],
    neighborhoods: ["30th & University corridor", "Morley Field area", "Altadena / 28th Street", "University Heights border", "South Park border", "Normal Heights border"],
    faqs: [
      {
        question: "Our 1920s craftsman has rats in the crawl space — can it be sealed?",
        answer: "Yes — century-old homes can absolutely be rodent-proofed; it just takes a thorough inspection to find original vents, gaps, and remodel seams newer homes don't have. We seal, trap out, and verify with follow-up.",
      },
      {
        question: "We live near the 30th Street corridor — is the roach pressure just permanent?",
        answer: "The commercial source is permanent; your exposure isn't. A maintained exterior barrier plus sealed entry points keeps corridor pests from becoming house pests. For businesses, scheduled commercial service handles the source side.",
      },
      {
        question: "Do you offer same-day pest control in North Park?",
        answer: "Yes. Same-day service is available for most pest situations in North Park — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "hillcrest": {
    cityName: "Hillcrest",
    slug: "hillcrest",
    intro: "Pest control in Hillcrest, CA — apartment, condo, and restaurant-row treatments for San Diego's densest urban village.",
    bodyParagraph: "Hillcrest packs restaurants, medical offices, vintage apartment buildings, and canyon edges into one tight urban village. Pre-war apartment stock along the avenues shares walls, plumbing, and — inevitably — German cockroaches and the occasional bed bug introduction; the University Avenue restaurant row sustains rats and roaches at the block level; and the canyon fingers dropping toward Mission Valley bring wildlife-adjacent pests to the neighborhood's north edge.",
    commonPests: [
      "German Cockroaches (apartments & restaurant row)",
      "Roof Rats & House Mice",
      "Bed Bugs (dense rental turnover)",
      "American Cockroaches (older building drains)",
      "Argentine Ants",
      "Black Widow Spiders",
      "Silverfish (older buildings)",
      "Fleas",
    ],
    localInsights: [
      {
        heading: "Vintage Apartments and Shared-Wall Pests",
        paragraphs: [
          "Hillcrest's charm is its older buildings, and its pest challenge is the same thing: decades-old plumbing chases and shared walls that let roaches move between units freely. One untreated unit can re-seed a whole floor.",
          "We work with tenants, owners, and property managers on coordinated treatments — adjacent units together, common areas on schedule, and documentation the building can keep on file.",
        ],
      },
      {
        heading: "Restaurant Row and the Canyon Edge",
        paragraphs: [
          "University and Fifth Avenue's food corridor keeps block-level rat and roach populations fed, while the canyon slopes toward Mission Valley supply the north edge with rodents and spiders. Between them, Hillcrest homes sit in a pincer of urban and wild pest pressure.",
          "The answer is boundary control: sealed structures, managed trash zones, and a maintained exterior program. For the restaurants themselves, our commercial pest control service provides inspection-ready documentation.",
        ],
      },
    ],
    neighborhoods: ["University Avenue corridor", "Fifth Avenue medical district", "Marston Hills", "Park West border", "Mission Hills border", "University Heights border"],
    faqs: [
      {
        question: "Roaches keep coming back to my Hillcrest apartment — why?",
        answer: "In shared buildings, roaches travel plumbing chases and walls between units, so treating one unit alone usually just rotates the problem. Coordinated treatment of adjacent units — which we arrange with your manager — is what actually clears it.",
      },
      {
        question: "Do you work with property managers and HOAs in Hillcrest?",
        answer: "Yes, extensively — scheduled common-area service, unit treatments, and written reports for boards and owners. See our commercial pest control page for program details.",
      },
      {
        question: "Do you offer same-day pest control in Hillcrest?",
        answer: "Yes. Same-day service is available for most pest situations in Hillcrest — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "downtown-san-diego": {
    cityName: "Downtown San Diego",
    slug: "downtown-san-diego",
    intro: "Pest control in Downtown San Diego, CA — high-rise condos, Gaslamp restaurants, and everything the urban core throws at a building.",
    bodyParagraph: "Downtown is San Diego's most concentrated pest environment: high-rise condo towers where a single introduction can travel dozens of units, the Gaslamp and East Village restaurant density feeding street-level rat and roach populations, and constant residential turnover moving bed bugs in and out. Pest control here is building management as much as treatment — coordination with HOAs, property managers, and commercial kitchens is the actual work.",
    commonPests: [
      "German Cockroaches (towers & commercial kitchens)",
      "Bed Bugs (high-turnover housing & hospitality)",
      "Roof Rats & Norway Rats (street level & parking structures)",
      "American Cockroaches (garages, drains & utility levels)",
      "Argentine Ants",
      "Fleas",
      "Flies (waste areas)",
      "Spiders",
    ],
    localInsights: [
      {
        heading: "High-Rise Living, High-Rise Pests",
        paragraphs: [
          "In a condo tower, pests use the building's own systems — trash chutes, utility risers, shared walls — to move between floors. Roach or bed bug introductions in one unit become building issues fast, and unit-by-unit whack-a-mole never ends.",
          "We work at the building level: coordinated unit treatments, chute and utility-level programs, and reporting HOAs can act on. If you're on a board or manage a tower, our commercial pest control service is built for exactly this.",
        ],
      },
      {
        heading: "The Gaslamp Effect",
        paragraphs: [
          "Restaurant density in the Gaslamp and East Village sustains street-level rodent and roach populations that pressure every adjacent building — residential or commercial. Parking structures and basement utility levels are the usual entry points.",
          "Ground-floor defense is exclusion plus maintained exterior control at the loading docks, trash corrals, and structure entrances where the street meets the building.",
        ],
      },
    ],
    neighborhoods: ["Gaslamp Quarter", "East Village", "Marina District", "Little Italy", "Cortez Hill", "Columbia District"],
    faqs: [
      {
        question: "I found roaches in my downtown condo — is it my unit or the building?",
        answer: "In towers it's usually both: roaches travel chutes, risers, and shared walls. We treat your unit and recommend coordinating with your HOA on adjacent units and common areas — which we can arrange and document for the board.",
      },
      {
        question: "Do you service restaurants in the Gaslamp?",
        answer: "Yes — scheduled commercial programs with written service reports for health inspections, off-peak scheduling, and the drain/harborage work commercial kitchens need. See our commercial pest control page.",
      },
      {
        question: "Do you offer same-day pest control downtown?",
        answer: "Yes. Same-day service is available for most pest situations downtown — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "We just moved into a downtown apartment — should we worry about bed bugs?",
        answer: "High-turnover buildings carry elevated risk, and early detection is everything. If the unit had quick turnover or you're seeing bites, a professional inspection catches infestations while they're still small and cheap to fix.",
      },
    ],
  },
  "poway": {
    cityName: "Poway",
    slug: "poway",
    intro: "Pest control in Poway, CA — built for the 'City in the Country's' large lots, horse properties, and open-space borders.",
    bodyParagraph: "Poway earns its 'City in the Country' name with big lots, horse properties, and neighborhoods that run right up against Blue Sky Reserve, Iron Mountain, and miles of preserved open space. That geography sets the pest profile: steady rodent and gopher pressure from the wildland edge, black widows in barns, sheds, and wood piles, and cricket and ant surges when inland heat spikes. Larger properties need genuine perimeter strategies, not a quick spray at the front door.",
    commonPests: [
      "Roof Rats & House Mice (open-space edge)",
      "Gophers & Ground Squirrels",
      "Black Widow Spiders (sheds, barns & wood piles)",
      "Argentine Ants",
      "Crickets & Earwigs",
      "American & German Cockroaches",
      "Fleas & Ticks",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Large Lots Need a Different Strategy",
        paragraphs: [
          "A quarter-acre suburban treatment plan doesn't translate to a Poway horse property or a lot backing Blue Sky Reserve. Outbuildings, hay storage, wood piles, and long fence lines each create their own harborage, and rodents treat the wildland edge as a permanent supply line.",
          "For Poway's larger properties we treat the full perimeter and the outbuildings, prioritize exclusion on the main structure, and put gopher and ground-squirrel programs on a monitoring cadence — because on open-space lots, the question isn't if they return, it's when.",
        ],
      },
      {
        heading: "Heat, Water, and Summer Invasions",
        paragraphs: [
          "Poway runs hotter than coastal San Diego, and when summer peaks, ants and crickets move indoors chasing water. Homes with horse troughs, irrigation, or pool equipment concentrate that pressure around reliable moisture.",
          "A maintained exterior barrier ahead of the summer surge keeps the seasonal invasion outside — late spring is the right time to have it in place.",
        ],
      },
    ],
    neighborhoods: ["Old Poway", "Green Valley", "Rancho Arbolitos", "Bridlewood", "Garden Road area", "Blue Sky / Espola corridor"],
    faqs: [
      {
        question: "Do you treat larger properties and horse properties in Poway?",
        answer: "Yes — large lots, outbuildings, and horse properties are a regular part of our Poway work. We build the treatment plan around the full property: main structure, barns and sheds, fence lines, and the open-space edge.",
      },
      {
        question: "Do you handle gophers in Poway?",
        answer: "Yes. Gopher and ground squirrel pressure is constant on Poway's larger lots and slopes. We run trapping and burrow-treatment programs with follow-up monitoring — see our gopher control service for details.",
      },
      {
        question: "Do you offer same-day pest control in Poway?",
        answer: "Yes. Same-day service is available for most pest situations in Poway — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are treatments safe around horses and livestock?",
        answer: "We use EPA-registered products applied according to their labels, and we plan applications around animal areas — your technician will walk the property with you and flag any specific precautions before treating.",
      },
    ],
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
    intro: "Pest control in El Cajon, CA — built for East County's hottest valley, where summer drives pests indoors in force.",
    bodyParagraph: "El Cajon sits in a valley that traps East County heat, and that changes everything about its pest calendar: when the valley bakes, ants, crickets, and cockroaches head indoors chasing water, and American cockroaches move up from sewer lines into older plumbing. The city's mix of mid-century homes, apartment complexes, and busy commercial corridors gives pests plenty of harborage. Summer in El Cajon is our single busiest season anywhere in the county.",
    commonPests: [
      "American Cockroaches (sewer-line pressure)",
      "Argentine Ants (heat-driven surges)",
      "German Cockroaches (multi-unit housing)",
      "Roof Rats & House Mice",
      "Crickets & Earwigs",
      "Black Widow Spiders",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "Valley Heat Is a Pest Engine",
        paragraphs: [
          "El Cajon regularly runs 10–15 degrees hotter than the coast, and pests respond predictably: the hotter and drier it gets, the harder they push indoors toward water. Kitchens, bathrooms, and laundry rooms become oases, and a small exterior ant colony becomes an interior invasion in a single hot week.",
          "The defense is timing — an exterior barrier established in late spring, before the heat peaks, plus fixing the moisture attractants (dripping hose bibs, AC condensate, over-watered foundations) that call pests in.",
        ],
      },
      {
        heading: "Older Plumbing and American Cockroaches",
        paragraphs: [
          "Much of El Cajon's housing dates to the 1950s–70s, and aging drain lines are the American cockroach's highway. They emerge through floor drains, laundry connections, and dried-out P-traps, especially in summer. Multi-unit buildings add German cockroach pressure that moves between units through shared walls.",
          "We treat the harborage and entry points directly, and for apartment owners we coordinate multi-unit treatments — single-unit treatment in a connected building just relocates the problem.",
        ],
      },
    ],
    neighborhoods: ["Fletcher Hills", "Rancho San Diego border", "Bostonia", "Granite Hills", "Downtown El Cajon", "Crest border"],
    faqs: [
      {
        question: "Why do I get huge cockroaches coming up my drains every summer?",
        answer: "Those are American cockroaches moving up from sewer and drain lines — an El Cajon classic in older plumbing. We treat entry points and harborage, and we'll show you the drain-maintenance habits that keep them down.",
      },
      {
        question: "Every hot spell brings ants into my kitchen — how do I stop the cycle?",
        answer: "Heat pushes colonies indoors toward water, so the fix is a maintained exterior barrier before summer peaks plus eliminating the moisture that attracts them. Treating only the visible indoor trail resets the clock without solving anything.",
      },
      {
        question: "Do you offer same-day pest control in El Cajon?",
        answer: "Yes. Same-day service is available for most pest situations in El Cajon — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Do you treat apartments and commercial properties in El Cajon?",
        answer: "Yes — we service multi-unit residential and commercial properties throughout El Cajon, including coordinated treatments across adjacent units. See our commercial pest control service for documented, scheduled programs.",
      },
    ],
  },
  "santee": {
    cityName: "Santee",
    slug: "santee",
    intro: "Pest control in Santee, CA — river-corridor and open-space defense for East County's family neighborhoods.",
    bodyParagraph: "Santee is shaped by water and open space: the San Diego River runs through its middle, Santee Lakes anchors the north side, and Mission Trails Regional Park borders the west. All three are pest reservoirs — the river bottom and lakes sustain mosquitoes and rodents year-round, and Mission Trails feeds steady rodent and spider pressure into adjacent streets. Add East County summer heat pushing ants and crickets indoors, and Santee homes need a genuinely local plan.",
    commonPests: [
      "Mosquitoes (river corridor & Santee Lakes)",
      "Roof Rats & House Mice",
      "Argentine Ants",
      "Black Widow Spiders",
      "American & German Cockroaches",
      "Crickets & Earwigs",
      "Fleas & Ticks",
      "Gophers & Ground Squirrels",
    ],
    localInsights: [
      {
        heading: "The River and the Lakes",
        paragraphs: [
          "Homes near the San Diego River corridor and Santee Lakes deal with mosquito pressure most of the county doesn't — permanent water plus warm East County evenings is ideal breeding and biting weather. Rodents use the same river-bottom vegetation as habitat and highway.",
          "For river- and lake-adjacent homes we focus on what's controllable: eliminating standing water on the property, treating shaded resting vegetation, and rodent-proofing the structure. The corridor itself never empties, so your property line is the defense.",
        ],
      },
      {
        heading: "Mission Trails Edge and Summer Heat",
        paragraphs: [
          "West Santee streets bordering Mission Trails get classic open-space overflow — rats, ground squirrels, and black widows moving from parkland into yards. Meanwhile the whole city shares El Cajon-style summer heat that drives ants and crickets indoors chasing water.",
          "A maintained perimeter barrier, refreshed ahead of summer, covers both fronts. One-time treatments fade before the season does.",
        ],
      },
    ],
    neighborhoods: ["Santee Lakes area", "Carlton Hills", "Carlton Oaks", "Fanita Ranch area", "Mission Trails border", "West Hills area"],
    faqs: [
      {
        question: "We're near Santee Lakes and getting eaten alive — can you help?",
        answer: "Yes. We can't treat the lakes or river themselves, but most bites come from mosquitoes breeding and resting on or near your own property. Source elimination plus treatment of shaded resting areas substantially cuts bite pressure, especially with seasonal service through summer.",
      },
      {
        question: "Do homes near Mission Trails need ongoing service?",
        answer: "Usually, yes. Parkland-adjacent streets face continuous re-invasion pressure from protected open space, so a maintained quarterly perimeter outperforms one-time treatments by a wide margin.",
      },
      {
        question: "Do you offer same-day pest control in Santee?",
        answer: "Yes. Same-day service is available for most pest situations in Santee — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "la-mesa": {
    cityName: "La Mesa",
    slug: "la-mesa",
    intro: "Pest control in La Mesa, CA — from Village-era homes to Mt. Helix estates, treatments matched to the 'Jewel of the Hills.'",
    bodyParagraph: "La Mesa's charm is its age — 1920s–60s homes around the Village, mature avocado and citrus trees, and the winding estates of Mt. Helix. The same features feed its pest pressure: roof rats thrive in the old fruit trees and dense hillside vegetation, aging drain lines harbor American cockroaches, and original construction gives rodents entry points newer homes don't have. We work the whole city, from Village bungalows to Mt. Helix hillside properties.",
    commonPests: [
      "Roof Rats (fruit trees & Mt. Helix vegetation)",
      "American & German Cockroaches (older plumbing)",
      "Argentine Ants",
      "Black Widow Spiders",
      "House Mice",
      "Earwigs & Silverfish",
      "Fleas & Ticks",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Fruit Trees, Hillsides, and Roof Rats",
        paragraphs: [
          "Mt. Helix and the older La Mesa hillsides are prime roof rat country: mature avocado, citrus, and ornamental trees provide food and canopy highways straight to rooflines. Rats in the attic are the most common call we get from La Mesa, and the pattern almost always traces back to tree contact and unsealed entry points.",
          "Our approach is exclusion-first — seal the roofline and vents, trap out the residents, and show you exactly which limbs need trimming to cut the highway.",
        ],
      },
      {
        heading: "Character Homes, Original Construction",
        paragraphs: [
          "La Mesa's older housing predates modern pest exclusion: raised foundations, original crawl-space vents, and decades-old drain lines. That means more rodent entry points and steady American cockroach pressure from aging sewer laterals, especially in the blocks around the Village and University Avenue corridor.",
          "We treat older construction carefully and thoroughly — full-perimeter inspections, targeted harborage treatment, and exclusion work appropriate to the era of the home.",
        ],
      },
    ],
    neighborhoods: ["La Mesa Village", "Mt. Helix", "Grossmont", "Lake Murray border", "Fletcher Hills border", "Rolando border"],
    faqs: [
      {
        question: "I hear scratching in my attic at night — what is it?",
        answer: "In La Mesa, almost always roof rats, especially if you have mature fruit or ornamental trees near the roofline. We inspect the attic and roof, seal entry points, trap out the population, and identify the tree contact giving them access.",
      },
      {
        question: "Can you treat older homes without damaging them?",
        answer: "Yes — older construction is a large share of our La Mesa work. We use targeted methods appropriate for raised foundations, crawl spaces, and original construction, with no fumigation needed for general pest work.",
      },
      {
        question: "Do you offer same-day pest control in La Mesa?",
        answer: "Yes. Same-day service is available for most pest situations in La Mesa — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Why do roaches keep appearing in my bathroom at night?",
        answer: "American cockroaches travel aging drain lines and emerge through floor drains and dried P-traps — common in older La Mesa plumbing. We treat entry points and harborage and advise on simple drain maintenance that keeps them down.",
      },
    ],
  },
  "national-city": {
    cityName: "National City",
    slug: "national-city",
    intro: "Pest control in National City, CA — dense-housing and bayfront-industrial expertise for South Bay's oldest city.",
    bodyParagraph: "National City is California's second-oldest incorporated city, and its pest picture reflects that history: early-1900s housing stock alongside dense apartments, an active bayfront industrial and port corridor that sustains serious rodent populations, and the Sweetwater River channel on its southern edge. Aging drain infrastructure keeps American cockroaches supplied, and multi-family housing spreads German roaches unit to unit. We serve National City homes, apartment buildings, and businesses with treatments matched to that mix.",
    commonPests: [
      "Norway & Roof Rats (bayfront & rail corridor)",
      "American Cockroaches (aging drains)",
      "German Cockroaches (multi-unit housing)",
      "Argentine Ants",
      "Bed Bugs",
      "Black Widow Spiders",
      "Fleas & Ticks",
      "Mosquitoes (Sweetwater channel)",
    ],
    localInsights: [
      {
        heading: "Port, Rail, and Rodents",
        paragraphs: [
          "The working bayfront — port facilities, rail lines, and industrial yards — sustains some of the county's most established rodent populations, and the neighborhoods east of the corridor absorb the pressure. Older foundations and garages give rats easy entry once they arrive.",
          "Our National City rodent work is exclusion-heavy: seal the structure, trap out residents, and maintain exterior control on properties nearest the corridor.",
        ],
      },
      {
        heading: "Older Housing, Shared Walls",
        paragraphs: [
          "Between historic single-family homes and postwar apartment blocks, much of National City's housing predates modern pest exclusion, and shared-wall buildings let German cockroaches circulate between units.",
          "For apartments we coordinate with owners and managers on adjacent-unit treatments; for older homes we pair harborage treatment with sealing the entry points a century of settling has opened.",
        ],
      },
    ],
    neighborhoods: ["Old Town National City", "Lincoln Acres", "Paradise Hills border", "Bayfront / Mile of Cars area", "Sweetwater Heights"],
    faqs: [
      {
        question: "Why does my older National City home keep getting big roaches from the drains?",
        answer: "American cockroaches travel aging sewer laterals and surface through floor drains and dried P-traps — common in older South Bay infrastructure. We treat entry points and harborage and show you the drain maintenance that keeps them down.",
      },
      {
        question: "Do you treat apartment buildings in National City?",
        answer: "Yes — including coordinated multi-unit treatments with owner or manager authorization, which is what actually clears shared-wall roach problems. See our commercial pest control service for scheduled building programs.",
      },
      {
        question: "Do you offer same-day pest control in National City?",
        answer: "Yes. Same-day service is available for most pest situations in National City — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "spring-valley": {
    cityName: "Spring Valley",
    slug: "spring-valley",
    intro: "Pest control in Spring Valley, CA — hillside and older-home treatments for East County's unincorporated heart.",
    bodyParagraph: "Spring Valley climbs the hills between La Mesa and the Sweetwater Reservoir, and its unincorporated, semi-rural character shapes the pest load: older homes on larger, often sloped lots, mature trees and brush that shelter roof rats, and East County heat that drives ants and crickets indoors every summer. Dictionary Hill and the reservoir-adjacent streets add classic hillside pressure — black widows in outbuildings, gophers on slopes, rodents from the brush.",
    commonPests: [
      "Roof Rats (hillside brush & mature trees)",
      "Argentine Ants (heat-driven surges)",
      "Black Widow Spiders (sheds & outbuildings)",
      "American & German Cockroaches",
      "Crickets & Earwigs",
      "Gophers & Ground Squirrels (slopes)",
      "Fleas & Ticks",
      "Mosquitoes (reservoir area)",
    ],
    localInsights: [
      {
        heading: "Hillside Lots and Brush Pressure",
        paragraphs: [
          "Spring Valley's sloped lots back onto brush, canyons, and reservoir open space — permanent habitat for rats, ground squirrels, and spiders. Outbuildings, wood piles, and older detached garages give them staging areas within feet of the house.",
          "We treat the property as a system: exclusion on the main structure, harborage cleanup guidance for the outbuildings, and a maintained perimeter for the lot line.",
        ],
      },
      {
        heading: "East County Heat and the Summer Push",
        paragraphs: [
          "Like El Cajon and Lakeside, Spring Valley bakes in summer — and heat pushes ants, crickets, and roaches indoors chasing water. Homes with irrigation, pools, or shaded foundations concentrate the traffic.",
          "An exterior barrier established before the heat peaks, plus fixing the moisture attractants at the foundation, keeps the summer invasion outside.",
        ],
      },
    ],
    neighborhoods: ["Dictionary Hill", "Casa de Oro border", "La Presa", "Sweetwater Reservoir area", "Bancroft area"],
    faqs: [
      {
        question: "We hear rats in the brush behind our house — will they get in?",
        answer: "If entry points exist, eventually yes — hillside brush is permanent habitat, and cooling fall nights push rats toward structures. Exclusion now beats trapping later: we seal the house, clear what's inside, and keep the perimeter maintained.",
      },
      {
        question: "Do you handle gophers on Spring Valley slopes?",
        answer: "Yes — slope lots here see constant gopher and ground squirrel activity. We run trapping and burrow-treatment programs with follow-up; see our gopher control service for the full approach.",
      },
      {
        question: "Do you offer same-day pest control in Spring Valley?",
        answer: "Yes. Same-day service is available for most pest situations in Spring Valley — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "lakeside": {
    cityName: "Lakeside",
    slug: "lakeside",
    intro: "Pest control in Lakeside, CA — river-bottom, horse-property, and rural-lot expertise for East County.",
    bodyParagraph: "Lakeside is where San Diego turns rural: horse properties, larger lots, the San Diego River bottom running through town, and Lindo Lake at its center. Water plus animals plus open country is a complete pest ecosystem — mosquitoes from the river and lake, flies and rodents around horse facilities, black widows in barns and hay storage, and gophers working every irrigated pasture and slope. Lakeside properties need more than a doorstep spray, and that's how we treat them.",
    commonPests: [
      "Mosquitoes (river bottom & Lindo Lake)",
      "Flies (horse properties)",
      "Roof Rats & House Mice",
      "Black Widow Spiders (barns & outbuildings)",
      "Gophers & Ground Squirrels",
      "Argentine Ants",
      "Crickets & Earwigs",
      "Fleas & Ticks",
    ],
    localInsights: [
      {
        heading: "Horse Country Pest Management",
        paragraphs: [
          "Feed storage, manure management, and water troughs make horse properties a magnet for flies, rodents, and the spiders that follow them. Barns and tack rooms are classic black widow habitat, and hay deliveries can import rodents directly.",
          "We build Lakeside treatment plans around the whole operation — main house, barns, feed rooms, and fence lines — with fly and rodent programs suited to properties with animals, applied per label with livestock in mind.",
        ],
      },
      {
        heading: "The River Bottom and Lindo Lake",
        paragraphs: [
          "The San Diego River corridor and Lindo Lake keep mosquitoes and rodents supplied year-round, and adjacent neighborhoods feel it every warm evening. The water isn't treatable — your property is.",
          "For river- and lake-adjacent homes: standing-water elimination, resting-area treatment, and structural rodent exclusion form the working defense, refreshed seasonally.",
        ],
      },
    ],
    neighborhoods: ["Lindo Lake area", "Eucalyptus Hills", "Winter Gardens", "Moreno Valley area", "Riverview", "El Monte Valley border"],
    faqs: [
      {
        question: "Do you treat horse properties and barns in Lakeside?",
        answer: "Yes — barns, tack rooms, feed storage, and the main house as one plan. We use EPA-registered products applied per label around animal areas, and your technician will walk the property and flag every precaution before treating.",
      },
      {
        question: "The flies are relentless near our animals — can that actually improve?",
        answer: "Substantially. Fly control on animal properties combines breeding-source management (manure, moisture) with targeted treatment of resting surfaces — it's ongoing work, but the difference is dramatic. See our fly control service.",
      },
      {
        question: "Do you offer same-day pest control in Lakeside?",
        answer: "Yes. Same-day service is available for most pest situations in Lakeside — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Do you handle gophers in Lakeside?",
        answer: "Yes — pastures, slopes, and irrigated lots here see constant gopher pressure. We run trapping and burrow-treatment programs with follow-up monitoring; see our gopher control service.",
      },
    ],
  },
  "solana-beach": {
    cityName: "Solana Beach",
    slug: "solana-beach",
    intro: "Pest control in Solana Beach, CA — our original home turf, from the Cedros Design District to the bluffs.",
    bodyParagraph: "Solana Beach is where Neighbors Pest Solutions got its start, and we know its pest patterns street by street: salt-air humidity keeping silverfish and earwigs active in the older beach homes west of the 101, the San Elijo Lagoon feeding seasonal mosquitoes on the north edge, and mature landscaping carrying roof rats through the view neighborhoods east of the tracks. Small city, distinct micro-zones — and years of our service history in every one of them.",
    commonPests: [
      "Silverfish & Earwigs (coastal moisture)",
      "Roof Rats (mature landscaping & bluff vegetation)",
      "Argentine Ants",
      "Mosquitoes (San Elijo Lagoon edge)",
      "Black Widow Spiders",
      "German & American Cockroaches",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "West of the 101: Salt Air and Older Cottages",
        paragraphs: [
          "The beach blocks and the streets around the Cedros Design District hold Solana Beach's older housing — and the marine layer keeps it damp enough for silverfish, earwigs, and roaches most of the year. Crawl spaces and garages near the bluffs are the usual harborage.",
          "We pair harborage treatment with moisture guidance, because in coastal homes the humidity is the infestation's engine.",
        ],
      },
      {
        heading: "East of the Tracks: Canopy and Lagoon",
        paragraphs: [
          "The view neighborhoods east of the rail corridor — Lomas Santa Fe and the hills — carry roof rats through mature trees and ornamental landscaping, while the San Elijo Lagoon brings seasonal mosquito pressure to the city's north side.",
          "Exclusion-led rodent work and property-side mosquito control (the lagoon itself is protected habitat) are the standing answers, maintained quarterly.",
        ],
      },
    ],
    neighborhoods: ["Cedros Design District", "Fletcher Cove area", "Lomas Santa Fe", "Solana Highlands", "Eden Gardens", "San Elijo Lagoon edge"],
    faqs: [
      {
        question: "Are you actually local to Solana Beach?",
        answer: "It's our original home turf — Neighbors Pest Solutions started here before growing across San Diego County. We've been treating Solana Beach homes since day one and know its coastal pest patterns as well as anyone working in the city.",
      },
      {
        question: "Why does my home near the beach get silverfish year-round?",
        answer: "Salt-air humidity plus older construction gives them permanent dark, damp harborage — the marine layer never really lets coastal crawl spaces dry out. We treat the harborage zones and flag the moisture conditions that sustain them.",
      },
      {
        question: "Do you offer same-day pest control in Solana Beach?",
        answer: "Yes. Same-day service is available for most pest situations in Solana Beach — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Can you reduce mosquitoes near San Elijo Lagoon?",
        answer: "Meaningfully, yes. The lagoon is protected habitat, but most bites come from mosquitoes breeding and resting on your own property — source elimination plus resting-area treatment cuts pressure substantially, especially with seasonal service.",
      },
    ],
  },
  "del-mar": {
    cityName: "Del Mar",
    slug: "del-mar",
    intro: "Pest control in Del Mar, CA — discreet, thorough protection for coastal homes from Olde Del Mar to the lagoon.",
    bodyParagraph: "Del Mar packs remarkable pest diversity into two square miles: salt-air humidity sustaining silverfish and earwigs in Olde Del Mar's older homes, Torrey pines and mature ornamentals carrying roof rats along the hillsides, and the San Dieguito Lagoon generating seasonal mosquitoes on the north end. Del Mar homeowners expect service that's effective and discreet — technicians who respect the property, explain the work, and leave no trace but results.",
    commonPests: [
      "Roof Rats (mature trees & hillside vegetation)",
      "Silverfish & Earwigs (coastal moisture)",
      "Argentine Ants",
      "Mosquitoes (San Dieguito Lagoon area)",
      "Black Widow Spiders",
      "German & American Cockroaches",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "Coastal Estates and Roof Rats",
        paragraphs: [
          "Del Mar's mature landscaping — Torrey pines, eucalyptus, dense ornamental hedges — is exactly the canopy roof rats use to reach rooflines, and the village's older architecture offers entry points modern builds don't. Hillside homes above Crest Road and around Olde Del Mar see it most.",
          "Our rodent work here is exclusion-led and discreet: seal the roofline, trap out quietly, and identify the specific canopy contact points to trim.",
        ],
      },
      {
        heading: "The Lagoon and the Racetrack Season",
        paragraphs: [
          "The San Dieguito Lagoon brings seasonal mosquito pressure to Del Mar's north side, peaking through the summer months when outdoor living — and the fairgrounds season — is in full swing. The lagoon is protected habitat, so effective control lives on your property: breeding-source elimination and treatment of shaded resting areas.",
          "For north-end homes we recommend seasonal mosquito service from late spring through early fall.",
        ],
      },
    ],
    neighborhoods: ["Olde Del Mar", "Del Mar Heights", "Del Mar Woods", "Beach Colony", "Crest Canyon area"],
    faqs: [
      {
        question: "How discreet is your service?",
        answer: "Very. Technicians arrive on schedule, work efficiently, explain findings clearly, and treatments are targeted rather than conspicuous. Many Del Mar clients are on quarterly programs precisely because prevention is quieter than reaction.",
      },
      {
        question: "Something is running across our roof at night — rats?",
        answer: "Almost certainly roof rats using tree canopy to reach the roofline — the most common Del Mar call we get. We inspect, seal entry points, trap out the population, and show you which limbs to trim to cut off access.",
      },
      {
        question: "Do you offer same-day pest control in Del Mar?",
        answer: "Yes. Same-day service is available for most pest situations in Del Mar — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are treatments safe for kids, pets, and coastal gardens?",
        answer: "We use EPA-registered products applied according to their labels, targeted to harborage areas. Your technician will walk the property with you and explain any precautions for children, pets, and garden areas before treating.",
      },
    ],
  },
  "encinitas": {
    cityName: "Encinitas",
    slug: "encinitas",
    intro: "Pest control in Encinitas, CA — eco-conscious treatments for Leucadia cottages, Village homes, and the lagoon-adjacent south side.",
    bodyParagraph: "Encinitas runs from aging Leucadia beach cottages to newer inland communities, with the San Elijo Lagoon anchoring its southern edge — and each zone has its own pest story. Coastal humidity keeps silverfish and earwigs active in the older housing stock, the lagoon drives seasonal mosquito pressure in Cardiff and the south side, and mature landscaping shelters roof rats throughout. This is also a community that cares how treatments are done — our label-first, targeted approach fits Encinitas well.",
    commonPests: [
      "Argentine Ants",
      "Silverfish & Earwigs (coastal moisture)",
      "Roof Rats (mature landscaping)",
      "Mosquitoes (San Elijo Lagoon area)",
      "Black Widow Spiders",
      "German & American Cockroaches",
      "Fleas & Ticks",
      "Bed Bugs",
    ],
    localInsights: [
      {
        heading: "Old Leucadia Cottages vs. New Inland Builds",
        paragraphs: [
          "Leucadia and Old Encinitas cottages — many from the 1940s–60s — hold coastal moisture in crawl spaces and garages, sustaining silverfish, earwigs, and roaches through the marine-layer months. Meanwhile newer inland communities face the familiar HOA-irrigation ant cycle and open-space rodent pressure.",
          "We match the plan to the house: moisture-pest harborage work in the older coastal stock, perimeter ant and rodent defense inland.",
        ],
      },
      {
        heading: "The Lagoon and Mosquito Season",
        paragraphs: [
          "San Elijo Lagoon is protected habitat and a seasonal mosquito source for Cardiff-by-the-Sea and southern Encinitas. Since the lagoon can't be treated, control happens on your side of the fence: standing-water elimination, treatment of shaded resting vegetation, and seasonal timing from late spring through early fall.",
          "For lagoon-adjacent homes we recommend seasonal mosquito service layered on general pest treatment.",
        ],
      },
    ],
    neighborhoods: ["Leucadia", "Old Encinitas / The Village", "Cardiff-by-the-Sea", "Olivenhain", "New Encinitas", "Encinitas Ranch"],
    faqs: [
      {
        question: "Do you use eco-friendly products?",
        answer: "We use EPA-registered products applied strictly according to their labels, targeted to harborage rather than broadcast — the least product for the most effect. Your technician will walk you through everything applied and any precautions.",
      },
      {
        question: "Why does my Leucadia cottage get silverfish every year?",
        answer: "Coastal humidity plus older construction is silverfish heaven — dark, damp crawl spaces and garages keep them going through the marine-layer months. We treat the harborage zones and flag the moisture conditions that sustain them.",
      },
      {
        question: "Do you offer same-day pest control in Encinitas?",
        answer: "Yes. Same-day service is available for most pest situations in Encinitas — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Can you reduce mosquitoes near San Elijo Lagoon?",
        answer: "Meaningfully, yes. The lagoon itself is protected, but most bites come from mosquitoes breeding and resting on your own property — source elimination plus resting-area treatment cuts pressure substantially, especially with seasonal service.",
      },
    ],
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
    intro: "Pest control in San Marcos, CA — from San Elijo Hills to the university district, defense matched to North County's fastest-growing city.",
    bodyParagraph: "San Marcos has grown fast, and its pest pressure follows the growth pattern: master-planned hillside communities like San Elijo Hills and Discovery Hills back directly onto preserved open space and canyons, while the Cal State San Marcos district adds dense student rentals with high turnover. New construction slows pests down but doesn't stop what walks in from the hills — ants, rodents, and spiders re-invade development edges continuously, and warm inland summers push everything indoors.",
    commonPests: [
      "Argentine Ants",
      "Roof Rats & House Mice (canyon & open-space edges)",
      "Black Widow Spiders",
      "German Cockroaches (rental turnover)",
      "Crickets & Earwigs",
      "Gophers & Ground Squirrels (slopes)",
      "Fleas & Ticks",
      "Bed Bugs (student housing turnover)",
    ],
    localInsights: [
      {
        heading: "Hillside Communities on the Open-Space Edge",
        paragraphs: [
          "San Elijo Hills, Discovery Hills, and the ridgeline communities were built into the hills — which means homes on the development edge live with continuous invasion pressure from the canyons and preserved slopes next door. New construction quality helps, but ants, rats, and spiders don't read building permits.",
          "Edge-of-development homes get our perimeter-first program: exclusion at the structure, a maintained barrier at the yard line, and quarterly upkeep matched to the seasonal push.",
        ],
      },
      {
        heading: "The University District and Rental Turnover",
        paragraphs: [
          "The neighborhoods around Cal State San Marcos carry the pest signature of every college district: high tenant turnover, shared housing, and the German cockroach and bed bug pressure that moves with furniture and move-in cycles.",
          "We work with property owners and managers on turnover inspections and coordinated multi-unit treatments — catching problems between tenants, when they're cheapest to fix.",
        ],
      },
    ],
    neighborhoods: ["San Elijo Hills", "Discovery Hills", "Lake San Marcos", "University District / CSUSM area", "Twin Oaks Valley", "Richmar area"],
    faqs: [
      {
        question: "Our San Elijo Hills home backs open space — why do pests keep returning?",
        answer: "Development-edge homes face continuous re-invasion from the preserved hills; the source never depletes. A maintained quarterly perimeter is the realistic defense — one-time treatments fade in weeks in these locations.",
      },
      {
        question: "Do you service student rentals near CSUSM?",
        answer: "Yes — with owner or property-manager authorization. For roaches and bed bugs in shared housing we recommend turnover inspections between tenants and coordinated treatment of adjacent units where needed.",
      },
      {
        question: "Do you offer same-day pest control in San Marcos?",
        answer: "Yes. Same-day service is available for most pest situations in San Marcos — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions. Your technician will explain any product-specific precautions before and after treatment.",
      },
    ],
  },
  "vista": {
    cityName: "Vista",
    slug: "vista",
    intro: "Pest control in Vista, CA — grove-country treatments for North County's hills, older ranch homes, and newer communities.",
    bodyParagraph: "Vista's hills carry the legacy of North County's avocado and citrus era, and its pests know it: roof rats thrive along grove edges and in the mature trees of older neighborhoods, while gophers work the slopes and larger lots. The city's famous growing climate — warm, mild, humid mornings — keeps ants and crickets productive nearly year-round. From downtown's older ranch homes to newer Shadowridge developments, we build the treatment around the property's era and surroundings.",
    commonPests: [
      "Roof Rats (grove edges & mature trees)",
      "Argentine Ants",
      "Gophers & Ground Squirrels (slopes & large lots)",
      "Crickets & Earwigs",
      "American & German Cockroaches",
      "Black Widow Spiders",
      "Fleas & Ticks",
      "Mosquitoes",
    ],
    localInsights: [
      {
        heading: "Grove Country Rodents",
        paragraphs: [
          "Vista's remaining groves and the mature trees of its older hillside neighborhoods sustain some of North County's healthiest roof rat populations. Properties near grove edges — and older homes with untrimmed palms or fruit trees — see steady pressure into attics and outbuildings.",
          "We lead with exclusion: seal the structure, trap out residents, and point out the landscaping conditions that keep inviting replacements.",
        ],
      },
      {
        heading: "The Growing Climate Grows Pests Too",
        paragraphs: [
          "The microclimate that made Vista an agricultural hub — warm days, mild nights, coastal moisture reaching inland — also gives ants, crickets, and earwigs an unusually long active season. Homes with irrigated landscaping or garden beds against the foundation concentrate that activity.",
          "A maintained exterior barrier plus moisture management at the foundation line is the difference between an occasional scout and a seasonal invasion.",
        ],
      },
    ],
    neighborhoods: ["Shadowridge", "Downtown Vista", "Vista Village", "Buena Creek area", "Foothill / Gopher Canyon area", "Business Park district"],
    faqs: [
      {
        question: "We're near an old grove and keep getting rats — is that why?",
        answer: "Very likely. Grove edges are prime roof rat habitat, and adjacent properties absorb the overflow. We seal your structure's entry points, trap out what's inside, and set up ongoing monitoring if the pressure source is permanent.",
      },
      {
        question: "Do you handle gophers on slope properties in Vista?",
        answer: "Yes — gophers and ground squirrels are constant on Vista's hillsides and larger lots. We run trapping and burrow-treatment programs with follow-up. See our gopher control service for the full approach.",
      },
      {
        question: "Do you offer same-day pest control in Vista?",
        answer: "Yes. Same-day service is available for most pest situations in Vista — call (858) 878-2847 and we'll do our best to dispatch a technician today.",
      },
      {
        question: "Are your treatments safe for kids, pets, and gardens?",
        answer: "We use EPA-registered products approved for residential use, applied per label directions — and your technician will flag any precautions for children, pets, and edible gardens before treatment.",
      },
    ],
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
