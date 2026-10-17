export type InitiativeCategory = 'education' | 'safety' | 'healthcare' | 'community';

export interface Initiative {
  id: string;
  title: string;
  category: InitiativeCategory;
  categoryLabel: string;
  tagline: string;
  location: string;
  overview: string;
  highlights: string[];
  image: string;
  fallbackGradient: string;
  verifiedStatus: 'Verified On-Ground Project' | 'Active Partnership';
  partnerAgency?: string;
  stats?: {
    label: string;
    value: string;
  };
}

export type CampaignStatus = 'Ongoing Initiative' | 'Seasonal Program' | 'Civic Mission';

export interface Campaign {
  id: string;
  title: string;
  badge: string;
  status: CampaignStatus;
  location: string;
  dateOrFrequency: string;
  leadPartner?: string;
  description: string;
  actionsTaken: string[];
  image: string;
  actionCta: {
    label: string;
    type: 'volunteer' | 'inquire' | 'partner' | 'readMore';
    targetId: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  alt: string;
  src: string;
  description: string;
  aspectRatio: string;
}

export interface FoundationStat {
  id: string;
  label: string;
  value: string;
  subtext: string;
  isVerified: boolean;
  citation: string;
}

export interface Story {
  id: string;
  title: string;
  quote: string;
  speaker: string;
  role: string;
  location: string;
  initiativeTag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
