import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exercise — Movement as Medicine",
  description:
    "Condition-specific, graded strength training designed by a rheumatologist. Progressive loading, video-guided routines, and pain-first protocols for joint and bone health.",
};

const cards = [
  {
    icon: "shield_with_heart",
    title: "Pain-First Protocol",
    description:
      "Every exercise in your program is selected with your pain levels in mind. We do not believe in 'no pain, no gain' — we believe in smart, graded loading that builds strength without triggering flare-ups. Your program adapts as your pain changes.",
    details: [
      "Pain-threshold-based exercise selection",
      "Modified movements for active flare-ups",
      "Regular pain tracking and program adjustments",
    ],
  },
  {
    icon: "exercise",
    title: "Tools of the Trade",
    description:
      "You do not need a fancy gym. Our programs use resistance bands, light dumbbells, and your own bodyweight — equipment that is affordable, portable, and effective. Every movement comes with a video demonstration so your form stays safe.",
    details: [
      "Resistance bands for joint-friendly loading",
      "Dumbbells for progressive strength building",
      "Bodyweight movements for mobility and stability",
    ],
  },
  {
    icon: "trending_up",
    title: "Week-by-Week Progression",
    description:
      "Your program is not a static PDF. It evolves every week based on how your body responds. We increase load, volume, and complexity gradually — giving your joints and bones time to adapt and grow stronger without being overwhelmed.",
    details: [
      "Structured 4-week training blocks",
      "Progressive overload tailored to your condition",
      "Deload weeks built in for recovery",
    ],
  },
];

export default function ExercisePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
                Exercise Pillar
              </p>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
                Movement as Medicine: Graded Strength Training
              </h1>
              <p className="text-body-lg text-on-primary/80">
                Not random exercises from the internet. Not generic physio sheets.
                These are condition-specific, doctor-designed strength routines
                that respect your pain, your diagnosis, and your pace — and build
                real, lasting strength.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-on-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-primary/60 text-center">
                  Person performing a guided resistance band squat with proper form and alignment cues
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this is different */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
              Why this is not just &ldquo;exercise&rdquo;
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Most exercise programs are designed for healthy people. Ours is
              designed for people who have been told exercise might hurt them — and
              proves that the right kind of movement is exactly what they need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary">
                    {card.icon}
                  </span>
                </div>
                <h3 className="text-title-lg text-on-surface mb-3">
                  {card.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-5">
                  {card.description}
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {card.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-success text-lg mt-0.5 shrink-0">
                        check
                      </span>
                      <span className="text-body-md text-on-surface">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a session looks */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-surface-container-high rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-surface-variant text-center">
                  Screenshot of app showing a structured workout session with video guidance
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
                What a session looks like
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6">
                Each session is 30 to 45 minutes and follows a structured format
                designed for safety and effectiveness.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { step: "Warm-up", desc: "Joint mobilization and activation (5-8 min)" },
                  { step: "Main Block", desc: "Strength exercises with video guidance (20-30 min)" },
                  { step: "Cool-down", desc: "Stretching and recovery movements (5-8 min)" },
                  { step: "Check-in", desc: "Rate your pain and energy to inform next session" },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-label-md font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-label-md text-on-surface font-semibold">
                        {item.step}
                      </p>
                      <p className="text-body-md text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Ready to move with confidence?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Your strength program starts with understanding your body. Take the
            free assessment to get your personalized movement prescription.
          </p>
          <Link href="/assessment" className="btn-amber">
            Take the free assessment
          </Link>
        </div>
      </section>
    </>
  );
}
