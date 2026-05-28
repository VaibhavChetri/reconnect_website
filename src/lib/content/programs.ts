export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: string;
};

export const programs: Program[] = [
  {
    slug: "prevent",
    title: "Prevent",
    tagline: "Keep your joints strong as you age",
    description:
      "A proactive strength and mobility program for those with early signs of joint trouble, a family history of arthritis, or age-related bone and joint risk. Built for adults aged 40 and above who want to stay ahead of degeneration before it starts.",
    tags: ["Early Arthritis", "Bone Health", "40+"],
    icon: "shield",
  },
  {
    slug: "manage",
    title: "Manage",
    tagline: "Relieve pain and regain mobility",
    description:
      "A targeted exercise and nutrition program for those already living with arthritis, chronic joint pain, or disc issues. Designed to reduce daily pain, strengthen the muscles around affected joints, and restore the activities you have been avoiding.",
    tags: ["Active Arthritis", "Joint Pain", "Back Pain"],
    icon: "healing",
  },
  {
    slug: "recover",
    title: "Recover",
    tagline: "Safe return to activity after injury or surgery",
    description:
      "Structured rehabilitation for post-surgery or severe joint degeneration. Clear milestones guide you from protected movement back to full strength, with medical oversight at every stage.",
    tags: ["Post-Surgery", "Severe OA", "Rehab"],
    icon: "sprint",
  },
  {
    slug: "cgm",
    title: "CGM",
    tagline: "Track your metabolic health alongside joint recovery",
    description:
      "Continuous glucose monitoring paired with your strength and nutrition program. Understanding blood sugar patterns helps reduce systemic inflammation, a key driver of joint pain and bone loss.",
    tags: ["Metabolic Health", "Blood Sugar", "Inflammation"],
    icon: "monitoring",
  },
];
