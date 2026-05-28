export type Plan = {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular: boolean;
  description: string;
};

export const plans: Plan[] = [
  {
    name: "Essential",
    price: 2499,
    period: "/month",
    features: [
      "Medical assessment",
      "Personalised strength plan",
      "Monthly check-in",
    ],
    popular: false,
    description:
      "A solid foundation for anyone starting their strength journey with medical guidance and a tailored exercise plan.",
  },
  {
    name: "Care",
    price: 4999,
    period: "/month",
    features: [
      "Everything in Essential",
      "Nutrition guidance",
      "Weekly coaching calls",
      "Progress tracking",
    ],
    popular: true,
    description:
      "Our most popular plan combining strength training with nutrition support and regular coaching to keep you on track.",
  },
  {
    name: "Elite",
    price: 8999,
    period: "/month",
    features: [
      "Everything in Care",
      "Psychology support",
      "Priority doctor access",
      "Daily coach check-ins",
    ],
    popular: false,
    description:
      "The complete Reconnect experience with dedicated psychology support, priority access to Dr. Shruthi, and daily accountability.",
  },
];
