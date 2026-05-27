import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from real people who reduced pain, rebuilt strength, and reclaimed independence through Reconnect's doctor-led programs.",
};

const testimonials = [
  {
    name: "Rajesh Sharma",
    age: 58,
    location: "Mumbai",
    condition: "Osteoarthritis",
    metric: "Pain 8/10 → 2/10",
    metricLabel: "in 12 weeks",
    quote:
      "I had accepted that morning walks were behind me. My knees would swell after ten minutes. Now I walk 4 km every morning before breakfast.",
    story:
      "Rajesh was diagnosed with bilateral knee osteoarthritis three years ago. He had been told to rest, lose weight, and consider a knee replacement. After 12 weeks on the Care plan, his pain dropped from 8 out of 10 to 2 out of 10. He lost 6 kg, regained full walking capacity, and postponed surgery indefinitely — with his orthopaedic surgeon's approval.",
    imagePlaceholder: "Portrait of a 58-year-old man walking outdoors in morning light",
  },
  {
    name: "Meera Raghavan",
    age: 42,
    location: "Bengaluru",
    condition: "Chronic Back Pain",
    metric: "Medications reduced 80%",
    metricLabel: "in 16 weeks",
    quote:
      "The moment I picked up my daughter without wincing, I cried. I had not been able to do that in two years.",
    story:
      "Meera had been living with chronic lower back pain after two disc bulges. She was on daily painkillers and muscle relaxants, and had stopped exercising entirely out of fear. Through Reconnect's graded strength program and coaching, she rebuilt her core and posterior chain. Her physician reduced her medications by 80 percent, and she returned to an active life with her family.",
    imagePlaceholder: "Portrait of a 42-year-old woman smiling with her young daughter",
  },
  {
    name: "Amit Kapoor",
    age: 65,
    location: "Delhi",
    condition: "Osteoporosis",
    metric: "T-Score improved",
    metricLabel: "in 6 months",
    quote:
      "I was terrified of fractures. Now I lift weights three times a week, and my bone density scan actually improved. My doctor could not believe it.",
    story:
      "Amit was diagnosed with osteoporosis after a routine DEXA scan. He was afraid to do anything physical — even carrying groceries felt risky. Reconnect's program introduced progressive resistance training under medical supervision. After six months, his follow-up DEXA scan showed measurable improvement in T-Score. More importantly, he regained the confidence to live independently.",
    imagePlaceholder: "Portrait of a 65-year-old man confidently holding light dumbbells",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
            Success Stories
          </p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl mx-auto mb-6">
            Real stories of strength and recovery.
          </h1>
          <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            These are not influencer transformations. These are ordinary people
            who were told to rest, take pills, or prepare for surgery — and found
            a better path.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 flex flex-col gap-16">
          {testimonials.map((t, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={t.name}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } gap-10 md:gap-16 items-center`}
              >
                {/* Image + metric */}
                <div className="w-full md:w-5/12">
                  <div className="bg-surface-container-high rounded-2xl aspect-[4/5] flex items-center justify-center p-8 mb-4">
                    <p className="text-body-md text-on-surface-variant text-center">
                      {t.imagePlaceholder}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-4 text-center">
                    <p className="text-headline-md-mobile text-primary font-bold">
                      {t.metric}
                    </p>
                    <p className="text-caption text-on-surface-variant">
                      {t.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-secondary-container text-on-secondary-container text-caption font-semibold px-3 py-1 rounded-full">
                      {t.condition}
                    </span>
                  </div>

                  <blockquote className="text-headline-md-mobile md:text-headline-md text-on-surface mb-6 font-[var(--font-display)]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <p className="text-body-lg text-on-surface-variant mb-6">
                    {t.story}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="text-on-primary font-semibold text-label-md">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-label-md text-on-surface font-semibold">
                        {t.name}, {t.age}
                      </p>
                      <p className="text-caption text-on-surface-variant">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Your story could be next.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            It starts with understanding where you are today. The assessment takes
            three minutes and costs nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn-amber">
              Take the free assessment
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View pricing plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
