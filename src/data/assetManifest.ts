export interface AssetMeta {
  filename: string;
  category: 'brand' | 'hero' | 'initiatives' | 'campaigns' | 'volunteers' | 'community' | 'gallery' | 'backgrounds';
  intendedSection: string;
  aspectRatio: string;
  suggestedAlt: string;
  required: boolean;
  status: 'pending_user_upload' | 'svg_fallback_ready' | 'verified_system_asset';
  path: string;
}

export const ASSET_MANIFEST: Record<string, AssetMeta> = {
  logoLight: {
    filename: 'foundation-logo-light.svg',
    category: 'brand',
    intendedSection: 'Footer & Dark Overlays',
    aspectRatio: '4:1',
    suggestedAlt: 'Basanthi Foundation official logo mark (light variant)',
    required: true,
    status: 'verified_system_asset',
    path: '/assets/brand/foundation-logo-light.svg',
  },
  logoDark: {
    filename: 'foundation-logo.svg',
    category: 'brand',
    intendedSection: 'Main Navigation & Light Cards',
    aspectRatio: '4:1',
    suggestedAlt: 'Basanthi Foundation official logo mark',
    required: true,
    status: 'verified_system_asset',
    path: '/assets/brand/foundation-logo.svg',
  },
  heroCommunity: {
    filename: 'hero-main.webp',
    category: 'hero',
    intendedSection: 'Hero Section Main Visual',
    aspectRatio: '4:5',
    suggestedAlt: 'Children learning in renovated government classroom with new desks and clean walls',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/hero/hero-main.webp',
  },
  schoolPeddagudem: {
    filename: 'school-peddagudem-01.webp',
    category: 'initiatives',
    intendedSection: 'Initiatives - Government Primary School Adoption',
    aspectRatio: '16:10',
    suggestedAlt: 'Peddagudem primary school after structural waterproofing, vitrified flooring, and modern desks',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/initiatives/school-peddagudem-01.webp',
  },
  anganwadiModernization: {
    filename: 'anganwadi-renovation-01.webp',
    category: 'initiatives',
    intendedSection: 'Initiatives - Rural Anganwadi Modernization',
    aspectRatio: '16:10',
    suggestedAlt: 'Anganwadi early childhood center with educational murals and child-friendly seating',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/initiatives/anganwadi-renovation-01.webp',
  },
  policeOutpostKphb: {
    filename: 'police-outpost-kphb.webp',
    category: 'initiatives',
    intendedSection: 'Initiatives - Civic Police Outpost Collaboration',
    aspectRatio: '16:10',
    suggestedAlt: 'Basanthi Foundation sponsored police outpost beneath KPHB Metro Station',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/initiatives/police-outpost-kphb.webp',
  },
  campaignArriveAlive: {
    filename: 'campaign-arrive-alive-01.webp',
    category: 'campaigns',
    intendedSection: 'Featured Campaigns - Arrive Alive Road Safety Drive',
    aspectRatio: '16:9',
    suggestedAlt: 'Ajay Raidu and police dignitaries presenting helmets to motorists',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/campaigns/campaign-arrive-alive-01.webp',
  },
  campaignWaterRelief: {
    filename: 'campaign-water-relief-01.webp',
    category: 'campaigns',
    intendedSection: 'Featured Campaigns - Festival Hydration Camp',
    aspectRatio: '16:9',
    suggestedAlt: 'Volunteers distributing drinking water packets near IDL Lake Kukatpally',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/campaigns/campaign-water-relief-01.webp',
  },
  medicalSupport: {
    filename: 'healthcare-support-01.webp',
    category: 'community',
    intendedSection: 'Trust & Impact - Healthcare Lifeline',
    aspectRatio: '4:3',
    suggestedAlt: 'Healthcare financial assistance and support for underprivileged family',
    required: true,
    status: 'pending_user_upload',
    path: '/assets/community/healthcare-support-01.webp',
  },
};
