export type Differentiator = {
  title: string;
  description: string;
  icon: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Doctor-led, not influencer-led",
    description:
      "Every program is designed by a rheumatologist with over 12 years of clinical experience. Your exercise plan is medical-grade, not copied from a fitness app.",
    icon: "medical_services",
  },
  {
    title: "Personalised to your diagnosis",
    description:
      "No two bodies are the same. Your program accounts for your specific condition, severity, imaging findings, and pain points.",
    icon: "tune",
  },
  {
    title: "Pain-first approach",
    description:
      "We do not push through pain. We work around it, respect it, and reduce it systematically over time.",
    icon: "favorite",
  },
  {
    title: "Structured 12-week roadmap",
    description:
      "Clear phases, measurable milestones, and regular check-ins so you can see real progress every month. No guesswork, no generic plans.",
    icon: "route",
  },
];
