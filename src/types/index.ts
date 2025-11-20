export interface PartnershipTier {
  name: string;
  benefits: string[];
  price?: string;
  color: string;
}

export interface PrizeCategory {
  title: string;
  prize: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  location?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category: string;
}

export interface SummitRegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  organization: string;
  title: string;
  attendanceType: string;
  interests: string[];
}

export interface HackathonRegistrationFormData {
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  institution: string;
  teamSize: number;
  qualifierEvent: string;
  projectIdea: string;
}

export interface PartnershipFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  tier: string;
  message: string;
}
