export const BUSINESS = {
  name: "Neighbors Pest Solutions",
  tagline: "Your Neighborhood Bug Guys",
  phone: "(858) 878-2847",
  phoneFull: "+18588782847",
  phoneHref: "tel:+18588782847",
  email: "info@neighborspestsolutions.com",
  emailHref: "mailto:info@neighborspestsolutions.com",
  address: {
    street: "9030 Kenamar Drive, Suite 301",
    city: "San Diego",
    state: "CA",
    zip: "92121",
    full: "9030 Kenamar Drive, Suite 301, San Diego, CA 92121",
  },
  hours: "Monday–Friday: 8:00 AM – 5:00 PM",
  hoursShort: "Mon–Fri 8AM–5PM",
  geo: {
    latitude: "32.9014",
    longitude: "-117.1939",
  },
  url: "https://neighborspestsolutions.com",
  socialFacebook: "https://www.facebook.com/p/Neighbors-Pest-Solutions-61583820067806/",
  socialInstagram: "https://www.instagram.com/neighborspestsolutions",
  socialX: "https://x.com/NeighborsPest",
  socialYouTube: "https://www.youtube.com/channel/UCmAbvVUFpHleRE7XLz-KNGA",
  socialLinkedIn: "https://www.linkedin.com/company/neighbors-pest-solutions/",
  yearsExperience: 15,
  homesTreated: "5,000+",
};

export const SERVICES = [
  { name: "Ant Control", slug: "ant-control", emoji: "🐜" },
  { name: "Bed Bug Control", slug: "bed-bug-control", emoji: "🐛" },
  { name: "Spider Control", slug: "spider-control", emoji: "🕷️" },
  { name: "Rodent Control", slug: "rodent-control", emoji: "🐭" },
  { name: "Cockroach Control", slug: "cockroach-control", emoji: "🪳" },
  { name: "Mosquito Control", slug: "mosquito-control", emoji: "🦟" },
  { name: "Flea Control", slug: "flea-control", emoji: "🐾" },
  { name: "Tick Control", slug: "tick-control", emoji: "🐞" },
  { name: "Carpenter Ant Control", slug: "carpenter-ant-control", emoji: "🐜" },
  { name: "Stinging Pest Control", slug: "stinging-pest-control", emoji: "🐝" },
  { name: "Fly Control", slug: "fly-control", emoji: "🪰" },
  { name: "Earwig Control", slug: "earwig-control", emoji: "🪲" },
  { name: "Cricket Control", slug: "cricket-control", emoji: "🦗" },
  { name: "Silverfish Control", slug: "silverfish-control", emoji: "🐟" },
  { name: "Centipede & Millipede Control", slug: "centipede-millipede-control", emoji: "🐛" },
  { name: "Beetle Control", slug: "beetle-control", emoji: "🪲" },
  { name: "Moth Control", slug: "moth-control", emoji: "🦋" },
  { name: "Stink Bug Control", slug: "stink-bug-control", emoji: "🐞" },
];

export const TOP_SERVICES = SERVICES.slice(0, 8);

export const SERVICE_AREAS = {
  neighborhoods: [
    { name: "La Jolla", slug: "la-jolla" },
    { name: "Mira Mesa", slug: "mira-mesa" },
    { name: "Scripps Ranch", slug: "scripps-ranch" },
    { name: "Clairemont", slug: "clairemont" },
    { name: "Pacific Beach", slug: "pacific-beach" },
    { name: "Carmel Valley", slug: "carmel-valley" },
    { name: "Mission Valley", slug: "mission-valley" },
    { name: "Rancho Bernardo", slug: "rancho-bernardo" },
    { name: "Rancho Peñasquitos", slug: "rancho-penasquitos" },
    { name: "Point Loma", slug: "point-loma" },
    { name: "Ocean Beach", slug: "ocean-beach" },
    { name: "North Park", slug: "north-park" },
    { name: "Hillcrest", slug: "hillcrest" },
    { name: "Downtown San Diego", slug: "downtown-san-diego" },
    { name: "Poway", slug: "poway" },
  ],
  cities: [
    { name: "Chula Vista", slug: "chula-vista" },
    { name: "El Cajon", slug: "el-cajon" },
    { name: "Santee", slug: "santee" },
    { name: "La Mesa", slug: "la-mesa" },
    { name: "National City", slug: "national-city" },
    { name: "Spring Valley", slug: "spring-valley" },
    { name: "Lakeside", slug: "lakeside" },
    { name: "Solana Beach", slug: "solana-beach" },
    { name: "Del Mar", slug: "del-mar" },
    { name: "Encinitas", slug: "encinitas" },
    { name: "Carlsbad", slug: "carlsbad" },
    { name: "Escondido", slug: "escondido" },
    { name: "San Marcos", slug: "san-marcos" },
    { name: "Vista", slug: "vista" },
    { name: "Oceanside", slug: "oceanside" },
  ],
};

export const ALL_AREAS = [
  ...SERVICE_AREAS.neighborhoods,
  ...SERVICE_AREAS.cities,
];

export const TESTIMONIALS = [
  {
    name: "Crystal Freeman",
    text: "Tanner was great, he spent ample time on my property and was very thorough. There was one area that I wanted to have more attention, and with a great attitude he did what I asked. I am very very pleased with this company!",
    rating: 5,
    source: "Google",
  },
  {
    name: "AkshaysZone",
    text: "Neighbors Pest Solutions is a notably professional pest control company that provided me with cost-effective services for my residence. They specialize in eradicating a variety of pests. Unlike many companies that tend to oversell, Josh presented a personalized solution tailored to my home's needs.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Courtney McNair",
    text: "Derek knocked on our door the same day we had happened to find a massive spider in our daughter's toy box. Perfect timing! Albert showed up to perform the service a few days later. He was very professional and explained everything he did. Hoping this makes a difference in the webs all over our backyard!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Lynn Speckhard",
    text: "Albert was great. Took his time explaining the process once we left. He took his time and did not miss any areas. I would highly recommend them.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Jacob Taiariol",
    text: "I just recently used Neighbors Pest Solutions and was really impressed with the quick results. The customer service that the team provides is excellent. I will continue to use this company for any of my needs going forward.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Mary Lugo",
    text: "Albert did a great job, friendly, and professional!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Aly J",
    text: "He answered all of my and my husband's questions and worked quickly and efficiently. I would highly recommend them for all your pest control needs! They are very professional and thorough.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Inbar Cohen",
    text: "Very professional work. Our technician Josh was very kind and helpful. Really recommend!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Jeffery Mcfarland",
    text: "Neighbors Pest Solutions was recommended to me by a friend, and they did an excellent job of treating my home and preventing further infestations. Their team was knowledgeable and friendly. I would definitely use their services again.",
    rating: 5,
    source: "Google",
  },
];

export const FAQS = [
  {
    question: "Do you offer same-day pest control service in San Diego?",
    answer:
      "Yes! We offer same-day service for most pest situations in San Diego and surrounding areas. Call us at (858) 878-2847 and we will do our best to get a technician out to you that day.",
  },
  {
    question: "Are your pest control treatments safe for children and pets?",
    answer:
      "Absolutely. We use eco-friendly, family-safe products that are approved for use in homes with children and pets. Our technicians will let you know of any specific precautions to take after treatment.",
  },
  {
    question: "Do you guarantee your pest control services?",
    answer:
      "Yes, we back every treatment with our satisfaction guarantee. If pests return after we have treated your property, we will come back and re-treat the affected areas at no additional cost to you.",
  },
  {
    question: "What areas of San Diego do you serve?",
    answer:
      "We serve all of San Diego County including La Jolla, Mira Mesa, Scripps Ranch, Clairemont, Pacific Beach, Carmel Valley, Poway, Mission Valley, Chula Vista, El Cajon, Encinitas, Carlsbad, Oceanside, Escondido, and all surrounding neighborhoods.",
  },
  {
    question: "How much does pest control cost in San Diego?",
    answer:
      "Pricing varies based on the type of pest, the size of your home, and the level of infestation. We offer free inspections and quotes, call us at (858) 878-2847 or fill out our online form to get a no-obligation estimate.",
  },
  {
    question: "How often should I have my home treated for pests?",
    answer:
      "For most San Diego homes, we recommend quarterly (every 3 months) preventative treatments to stay ahead of ants, spiders, roaches, and other common pests year-round. We offer recurring service plans at a discounted rate.",
  },
  {
    question: "Do I need to leave my home during pest control treatment?",
    answer:
      "For most exterior and general interior treatments, you can remain home. For specific treatments like bed bug heat treatment or fumigation, we will advise you on how long to vacate. Your technician will walk you through all requirements before treatment begins.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Neighbors Pest Solutions is fully licensed by the California Department of Pesticide Regulation and carries comprehensive liability insurance. You can have complete peace of mind when our technicians are on your property.",
  },
];
