export type Testimonial = {
  name: string;
  age: number;
  location: string;
  condition: string;
  quote: string;
  story: string;
  metric: string;
  metricLabel: string;
  image: string;
  imageAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    age: 58,
    location: "Mumbai",
    condition: "Knee Osteoarthritis",
    quote:
      "I was told I needed a knee replacement. After 12 weeks with Reconnect, my pain dropped from 8 to 2.",
    story:
      "Rajesh had been living with severe knee osteoarthritis for over five years and was advised surgery. After joining the Manage track, he followed a personalised strength program that focused on quadriceps activation and joint stability. Within 12 weeks his pain score dropped from 8 to 2 and he returned to walking 5 km daily. He has since completed a second cycle and continues to improve.",
    metric: "8 to 2",
    metricLabel: "Pain score reduction",
    image: "/testimonial-rajesh.jpg",
    imageAlt: "Rajesh Sharma, 58, Reconnect member from Mumbai",
  },
  {
    name: "Meera Raghavan",
    age: 42,
    location: "Bengaluru",
    condition: "Chronic Back Pain",
    quote:
      "I spent years avoiding movement because of my back. Reconnect helped me build strength around the problem.",
    story:
      "Meera had a diagnosed L4-L5 disc bulge and chronic lower back pain that kept her from exercising for three years. Her program focused on core stability, posterior chain strengthening, and gradual loading. After completing the 12-week Manage track, her medication was reduced by 80 percent and she has not had a flare-up in over four months. She now trains three times a week independently.",
    metric: "80%",
    metricLabel: "Medication reduced",
    image: "/testimonial-meera.jpg",
    imageAlt: "Meera Raghavan, 42, Reconnect member from Bengaluru",
  },
  {
    name: "Amit Kapoor",
    age: 65,
    location: "Delhi",
    condition: "Osteoporosis",
    quote:
      "My DEXA scan improved for the first time in years. The combination of strength training and nutrition made a visible difference.",
    story:
      "Amit was diagnosed with osteoporosis after a wrist fracture and had a T-score of -3.2. His program combined load-bearing exercises with anti-inflammatory nutrition guidance and vitamin D optimisation. After 12 weeks his follow-up DEXA showed measurable improvement in lumbar spine density. His balance and confidence have also improved significantly, reducing his fall risk.",
    metric: "DEXA improved",
    metricLabel: "Bone density gain",
    image: "/testimonial-amit.jpg",
    imageAlt: "Amit Kapoor, 65, Reconnect member from Delhi",
  },
];
