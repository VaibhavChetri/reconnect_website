export type SciencePoint = {
  title: string;
  description: string;
  stat?: string;
};

export const sciencePoints: SciencePoint[] = [
  {
    title: "Less Pain",
    description:
      "Targeted strength work reduces joint load and inflammation, easing chronic pain over time.",
    stat: "60%",
  },
  {
    title: "Denser Bones",
    description:
      "Resistance training stimulates bone formation and slows mineral loss, especially post-menopause.",
    stat: "1-3%",
  },
  {
    title: "Retained Muscle",
    description:
      "After 30, you lose 3-5% muscle per decade. Strength training reverses sarcopenia at any age.",
    stat: "3-5%",
  },
  {
    title: "Prevent Degeneration",
    description:
      "Strong muscles stabilise joints and protect cartilage, slowing the progression of osteoarthritis.",
  },
];
