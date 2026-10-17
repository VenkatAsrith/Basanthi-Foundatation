import { Initiative, Campaign, GalleryItem, FoundationStat, Story, FaqItem } from '../types';

export const FOUNDATION_META = {
  name: 'Basanthi Foundation',
  legalName: 'Basanthi Rise Foundation',
  tagline: 'Small Acts. Lasting Change.',
  founder: 'Ajay Raidu Abbineni',
  founderTitle: 'Founder & Chairman',
  establishedContext: 'Grassroots Community Welfare & Infrastructure Foundation',
  headquarters: 'Hyderabad, Telangana, India',
  instagramUrl: 'https://www.instagram.com/basanthi_foundation/',
  founderInstagramUrl: 'https://www.instagram.com/ajay_raidu/',
  email: 'connect@basanthifoundation.org',
  phonePlaceholder: '+91 (Hyderabad Operations Office)',
  statusText: 'Verified Non-Profit Community Initiative',
  demoNotice: 'Demonstration and review website prototype for Basanthi Foundation.',
};

export const VERIFIED_STATS: FoundationStat[] = [
  {
    id: 'stat-schools',
    label: 'Primary Education',
    value: 'School Kits & Classrooms',
    subtext: 'Rebuilt classrooms with vitrified tiles, waterproofing & branded educational bags',
    isVerified: true,
    citation: 'Wanaparthy District Schools',
  },
  {
    id: 'stat-safety',
    label: 'Police Collaboration',
    value: 'Cyberabad Police Outpost',
    subtext: 'Official outpost handover beneath KPHB Metro Station to ensure commuter and women safety',
    isVerified: true,
    citation: 'Cyberabad Police Kukatpally Division',
  },
  {
    id: 'stat-helmets',
    label: 'Road Safety Mission',
    value: 'Arrive Alive Helmet Drive',
    subtext: 'ISI-certified helmet distributions conducted alongside Cyberabad Traffic Police in CCTV control room',
    isVerified: true,
    citation: 'Cyberabad Traffic Police Partnership',
  },
  {
    id: 'stat-water',
    label: 'Public Hydration',
    value: 'Free Drinking Water & Buttermilk',
    subtext: 'Mass cold water, buttermilk & sharbat distribution camps serving thousands of pilgrims',
    isVerified: true,
    citation: 'Annual IDL Lake & summer relief camps',
  },
];

export const INITIATIVES: Initiative[] = [
  {
    id: 'school-modernization',
    title: 'Government Primary School & Kit Distribution',
    category: 'education',
    categoryLabel: 'Primary Education',
    tagline: 'Equipping rural children with modern learning kits, desks, and clean classrooms.',
    location: 'Wanaparthy District & Ibrahimpatnam, Telangana',
    overview:
      'Basanthi Foundation undertakes direct, on-ground support for government primary schools. Founder Ajay Raidu and our team personally distribute branded educational kit bags, dictionaries, notebooks, and study materials, alongside structural classroom renovations including durable vitrified tile flooring and concrete roof slab waterproofing.',
    highlights: [
      'Direct distribution of educational backpacks, books, and bilingual learning kits to pupils',
      'Structural concrete roof waterproofing eliminating seasonal leaks during heavy rains',
      'High-grade vitrified tile flooring replacing damaged and dusty classroom floors',
      'Sturdy dual-student desks so children learn with dignity instead of cold floors',
    ],
    image: '/assets/initiatives/school-kit-distribution.png',
    fallbackGradient: 'from-[#173F35] to-[#23584B]',
    verifiedStatus: 'Verified On-Ground Project',
    stats: {
      label: 'Focus Area',
      value: 'Primary School Students',
    },
  },
  {
    id: 'cyberabad-police-partnership',
    title: 'Cyberabad Police Outpost Sponsorship',
    category: 'safety',
    categoryLabel: 'Civic Safety Partnership',
    tagline: 'Official infrastructure partnership with Cyberabad Police to safeguard public transit corridors.',
    location: 'KPHB Metro Station & Kukatpally PS Zone, Hyderabad',
    overview:
      'Basanthi Foundation partnered directly with Cyberabad Police ("Your Safety Our Concern"), formally presenting sponsorship support to senior police leadership for the permanent Police Outpost beneath KPHB Metro Station. This outpost provides 24/7 law enforcement presence, protecting women commuters and curbing street crimes.',
    highlights: [
      'Formal sponsorship handover to Cyberabad Police leadership for KPHB Metro outpost',
      'Permanent sheltered police post beneath KPHB Metro for round-the-clock officer deployment',
      'Direct deterrence against evening transit harassment, public nuisance, and commuter theft',
      'Custom steel traffic barricades deployed at Paparayudu Nagar Junction to regulate traffic flow',
    ],
    image: '/assets/initiatives/cyberabad-police-cheque-handover.png',
    fallbackGradient: 'from-[#0D2620] to-[#173F35]',
    verifiedStatus: 'Active Partnership',
    partnerAgency: 'Cyberabad Police (Kukatpally Division)',
    stats: {
      label: 'Partner Agency',
      value: 'Cyberabad Police',
    },
  },
  {
    id: 'police-outpost-food-relief',
    title: 'Transit Outpost Community Food Relief',
    category: 'community',
    categoryLabel: 'Food Security',
    tagline: 'Freshly prepared hot meals served directly to frontline workers and transit commuters.',
    location: 'KPHB Metro Station / Kukatpally PS Outpost, Hyderabad',
    overview:
      'Directly outside the Kukatpally Police Outpost beneath KPHB Metro Station, Founder Ajay Raidu and our team conduct hot meal distribution drives, serving freshly cooked meals from giant traditional handis to local workers, sanitation staff, and pedestrians.',
    highlights: [
      'Regular hot meal distribution (Biryani & wholesome nutrition) served directly from giant handis',
      'Dignified food support for municipal sanitation workers, daily wagers, and pedestrians',
      'Conducted with police coordination outside the KPHB Metro Feeder Services terminal',
      'Zero food wastage with careful on-ground portioning and biodegradable plates',
    ],
    image: '/assets/initiatives/police-outpost-food-relief.png',
    fallbackGradient: 'from-[#173F35] to-[#23584B]',
    verifiedStatus: 'Verified On-Ground Project',
    stats: {
      label: 'Distribution Node',
      value: 'KPHB Metro Corridor',
    },
  },
  {
    id: 'family-welfare-outreach',
    title: 'Community Welfare & Family Assistance',
    category: 'healthcare',
    categoryLabel: 'Family Support',
    tagline: 'Compassionate assistance for underprivileged families and vulnerable children.',
    location: 'Hyderabad & Rural Telangana',
    overview:
      'Basanthi Foundation works closely with struggling rural and urban families facing economic and healthcare distress. Our volunteers visit communities directly to provide financial support for medical treatments, seasonal clothing, and nutrition assurance.',
    highlights: [
      'Direct assistance for families facing critical pediatric surgeries and healthcare expenses',
      'Compassionate community outreach ensuring no child or elder is left unsupported',
      'Seasonal clothing and essential ration distribution for vulnerable households',
      'Personal engagement by founder Ajay Raidu with every beneficiary family',
    ],
    image: '/assets/community/healthcare-family-support.png',
    fallbackGradient: 'from-[#242622] to-[#173F35]',
    verifiedStatus: 'Verified On-Ground Project',
    stats: {
      label: 'Direct Beneficiaries',
      value: 'Families & Children',
    },
  },
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'arrive-alive-helmets',
    title: 'Arrive Alive — Cyberabad Traffic Police Helmet Drive',
    badge: 'Road Safety Mission',
    status: 'Ongoing Initiative',
    location: 'Cyberabad Traffic Police Headquarters / Hyderabad',
    dateOrFrequency: 'Ongoing in partnership with Traffic Police',
    leadPartner: 'Cyberabad Traffic Police Department',
    description:
      'In direct partnership with Cyberabad Traffic Police leadership inside their CCTV traffic command center, Founder Ajay Raidu presents ISI-certified "STRONG" brand safety helmets for distribution to vulnerable two-wheeler riders to eliminate fatal head injuries.',
    actionsTaken: [
      'Handover of certified helmet batches with senior IPS and traffic police officers',
      'Targeting daily-wage riders, delivery workers, and two-wheeler commuters',
      'State-wide alignment with the Telangana Police "Arrive Alive" road safety campaign',
    ],
    image: '/assets/campaigns/campaign-helmet-drive.png',
    actionCta: {
      label: 'Support Helmet Mission',
      type: 'partner',
      targetId: 'contact',
    },
  },
  {
    id: 'buttermilk-sharbat-relief',
    title: 'Free Drinking Water, Buttermilk & Sharbat Distribution',
    badge: 'Summer Public Relief',
    status: 'Seasonal Program',
    location: 'Hyderabad Public Corridors (Near Mayuri Foot Fashions)',
    dateOrFrequency: 'Annual summer heat relief mobilization',
    leadPartner: 'Basanthi Foundation Relief Wing',
    description:
      'Organizing large-scale public hydration camps providing cold, hygienic drinking water, fresh buttermilk (మజ్జిగ), and refreshing sharbat (షర్బత్) to commuters, pedestrians, and transport workers to prevent heatstroke during extreme summer heatwaves.',
    actionsTaken: [
      'Comprehensive public hydration stations with custom street hoardings and stalls',
      'Distribution of thousands of glasses of freshly prepared buttermilk and cold sharbat',
      'Pure drinking water supply points for auto drivers, bus commuters, and pedestrians',
    ],
    image: '/assets/campaigns/campaign-buttermilk-relief.png',
    actionCta: {
      label: 'Volunteer for Next Drive',
      type: 'volunteer',
      targetId: 'contact',
    },
  },
  {
    id: 'free-water-relief',
    title: 'Ganesh Nimajjanam Free Drinking Water Stalls',
    badge: 'Festival Welfare Drive',
    status: 'Ongoing Initiative',
    location: 'IDL Lake & Kukatpally Procession Routes',
    dateOrFrequency: 'Annual festival season rollout',
    leadPartner: 'Municipal & Police Collaboration',
    description:
      'Deploying illuminated, hygienic hydration pavilions providing pure drinking water packets to thousands of devotees, civic workers, and police personnel during peak procession days under the banner "మనుషులకు సేవే మా లక్ష్యం".',
    actionsTaken: [
      'Mass distribution of pure, sealed drinking water packets from illuminated booth',
      'First-aid and hydration point for frontline municipal workers and police staff',
      'Dedicated volunteer team managing queue discipline and clean disposal',
    ],
    image: '/assets/campaigns/campaign-water-relief.png',
    actionCta: {
      label: 'Support Water Stall',
      type: 'inquire',
      targetId: 'contact',
    },
  },
  {
    id: 'eco-clay-ganesh',
    title: 'Eco-Friendly Clay Ganesha Handover',
    badge: 'Environmental Sustainability',
    status: 'Seasonal Program',
    location: 'Hyderabad City Communities',
    dateOrFrequency: 'Annual festive mobilization',
    leadPartner: 'Basanthi Foundation Community Wing',
    description:
      'Encouraging sustainable festivities by personally distributing thousands of natural, unpainted clay Ganesh idols directly to citizens to protect Hyderabad’s water bodies from toxic Plaster-of-Paris contamination.',
    actionsTaken: [
      'Hand-distribution of natural clay idols by Founder Ajay Raidu and volunteers',
      'Community awareness on preventing lake pollution during festival immersion',
      'Illuminated distribution stall set up under community canopy',
    ],
    image: '/assets/campaigns/campaign-clay-ganesh.png',
    actionCta: {
      label: 'Join Next Handover',
      type: 'volunteer',
      targetId: 'contact',
    },
  },
];

export const STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'Dignity for Rural School Children',
    quote:
      'When Ajay Raidu and the Basanthi Foundation came to our school with quality bags, books, and desks, it transformed the children’s enthusiasm. Seeing their faces light up gave our entire village hope.',
    speaker: 'Primary School Teacher',
    role: 'Government Primary School',
    location: 'Wanaparthy District, Telangana',
    initiativeTag: 'Primary Education',
  },
  {
    id: 'story-2',
    title: 'Police Partnership for Citizen Safety',
    quote:
      'The police outpost beneath KPHB Metro has given commuters, especially women returning from late night shifts, genuine protection and instant police visibility.',
    speaker: 'Cyberabad Police Officer',
    role: 'Kukatpally Police Jurisdiction',
    location: 'KPHB Metro, Hyderabad',
    initiativeTag: 'Civic Safety Infrastructure',
  },
  {
    id: 'story-3',
    title: 'Lifesaving Hydration on Scorching Days',
    quote:
      'During scorching summer afternoons, their free buttermilk and water distribution stalls bring immense relief to auto drivers and daily commuters. It is public service in its purest form.',
    speaker: 'Local Transit Commuter',
    role: 'Daily Commuter',
    location: 'Kukatpally, Hyderabad',
    initiativeTag: 'Mass Public Hydration',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ajay Raidu Handing Over School Kits',
    category: 'Education',
    location: 'Wanaparthy District School',
    alt: 'Ajay Raidu presenting educational kit bags to rural school girl in classroom',
    src: '/assets/gallery/gallery-01-school.png',
    description: 'Providing branded learning kits, dictionaries, and study materials to rural government school students.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-2',
    title: 'Cyberabad Police Outpost Cheque Handover',
    category: 'Civic Safety',
    location: 'Cyberabad Police Headquarters',
    alt: 'Ajay Raidu presenting sponsorship cheque to Cyberabad Police Officer with wall emblem in background',
    src: '/assets/gallery/gallery-08-police-cheque.png',
    description: 'Formal sponsorship cheque handover to Cyberabad Police leadership for the KPHB Metro Police Outpost.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-3',
    title: 'Arrive Alive Helmet Drive with Traffic Police',
    category: 'Road Safety',
    location: 'Cyberabad Traffic Police CCTV Command Room',
    alt: 'Ajay Raidu and IPS officer holding box of certified Strong helmets in front of CCTV surveillance screens',
    src: '/assets/gallery/gallery-06-helmets.png',
    description: 'Presenting certified ISI safety helmets inside Cyberabad Traffic Police CCTV command room for road safety.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-4',
    title: 'Free Buttermilk & Sharbat Distribution Hoarding',
    category: 'Public Welfare',
    location: 'Hyderabad City Corridor',
    alt: 'Large circular Basanthi Foundation hoarding for free drinking water, buttermilk, and sharbat distribution',
    src: '/assets/gallery/gallery-07-buttermilk.png',
    description: 'Mass summer hydration camp providing pure cold water, buttermilk, and sharbat to thousands of pedestrians.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-5',
    title: 'Food Distribution at Kukatpally Police Outpost',
    category: 'Civic Welfare',
    location: 'KPHB Metro Station',
    alt: 'Ajay Raidu serving hot meals from large handi to community members outside police outpost',
    src: '/assets/gallery/gallery-02-police-relief.png',
    description: 'Serving hot, freshly prepared meals to daily-wage workers and citizens outside Kukatpally Police Outpost.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-6',
    title: 'Free Drinking Water Stall at Ganesh Nimajjanam',
    category: 'Public Welfare',
    location: 'IDL Lake, Kukatpally',
    alt: 'Illuminated Basanthi Foundation water stall with banner reading Free Drinking Water For Public',
    src: '/assets/gallery/gallery-03-water-stall.png',
    description: 'Supplying pure, sealed drinking water packets to thousands of pilgrims during the annual festival immersion.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-7',
    title: 'Clay Ganesha Environmental Distribution',
    category: 'Community',
    location: 'Hyderabad City',
    alt: 'Ajay Raidu distributing eco-friendly clay Ganesh idols to citizens from a canopy stall',
    src: '/assets/gallery/gallery-04-eco-idols.png',
    description: 'Promoting eco-friendly traditions by gifting hundreds of natural clay idols to prevent lake pollution.',
    aspectRatio: '9/16',
  },
  {
    id: 'gal-8',
    title: 'Direct Family & Child Support Outreach',
    category: 'Healthcare & Family',
    location: 'Telangana Communities',
    alt: 'Woman in pink attire holding boy hand with Basanthi Foundation watermark',
    src: '/assets/gallery/gallery-05-family-support.png',
    description: 'Visiting underprivileged families to extend medical financial relief, education aid, and dignity.',
    aspectRatio: '9/16',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Who founded Basanthi Foundation and where is it active?',
    answer:
      'Basanthi Foundation was founded by Ajay Raidu Abbineni and is headquartered in Hyderabad, Telangana. The foundation is actively engaged on the ground across Hyderabad (KPHB, Kukatpally), Wanaparthy district, and rural mandals across Telangana.',
  },
  {
    id: 'faq-2',
    category: 'Operations',
    question: 'What are the main programs run by the foundation?',
    answer:
      'Our primary initiatives include: 1) Government school kit distribution and classroom renovations, 2) Cyberabad Police Outpost sponsorship at KPHB Metro, 3) Arrive Alive certified helmet distributions, 4) Free buttermilk, sharbat, and water distribution camps, and 5) Direct healthcare and family assistance.',
  },
  {
    id: 'faq-3',
    category: 'Donations',
    question: 'How are donations and sponsorships handled?',
    answer:
      'Every contribution is allocated directly to tangible physical deliverables: classroom kit bags, student desks, roof waterproofing materials, certified safety helmets, or hospital invoices. We operate with radical transparency and zero intermediary deductions.',
  },
  {
    id: 'faq-4',
    category: 'Partnerships',
    question: 'Can corporate CSR teams or civic organizations partner with you?',
    answer:
      'Yes. Basanthi Foundation has a proven record of collaborative public initiatives, as demonstrated by our permanent civic infrastructure work with the Cyberabad Police Kukatpally division. We welcome CSR partnerships in education and community welfare.',
  },
  {
    id: 'faq-5',
    category: 'Volunteering',
    question: 'How can youth and citizens volunteer with Basanthi Foundation?',
    answer:
      'Volunteers participate directly in on-ground distributions: weekend school mentorship, food distribution drives, and festival hydration camps. Use our volunteer registration form on this site to join our upcoming field events.',
  },
];
