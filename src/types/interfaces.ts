export interface Client {
  imageURL: string;
  alt: string;
}
export interface Features {
  imageURL: string;
  title: string;
  content: string;
}
export interface featureBlock extends Features {
  isReversed?: boolean;
}
export interface Pricing {
  title: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}
export interface Testimonial {
  imageURL: string;
  name: string;
  role: string;
  review: string;
}
export interface FooterColumn {
  title: string;
  links: string[];
}

export type PricingMode = "monthly" | "annually";
