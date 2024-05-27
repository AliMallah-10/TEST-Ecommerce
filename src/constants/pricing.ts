import { Pricing } from "@/types/interfaces";

export const pricingItems: Pricing[] = [
  {
    title: "Starter Plan",
    description: "Ideal for individuals and small teams getting started.",
    monthlyPrice: 9.99,
    annuallyPrice: 99.99,
    features: ["10 GB Storage", "Unlimited Projects", "Basic Support"],
    glowPosition: "right",
  },
  {
    title: "Business Plan",
    description: "Perfect for growing businesses with additional features.",
    monthlyPrice: 29.99,
    annuallyPrice: 299.99,
    features: [
      "50 GB Storage",
      "Priority Support",
      "Custom Branding",
      "Advanced Analytics",
    ],
    isMostPopular: true,
  },
  {
    title: "Enterprise Plan",
    description:
      "Tailored solutions for large enterprises with premium features.",
    monthlyPrice: 99.99,
    annuallyPrice: 999.99,
    features: [
      "Unlimited Storage",
      "Dedicated Account Manager",
      "API Access",
      "White-labeling",
      "24/7 Priority Support",
    ],
    glowPosition: "left",
  },
];
