import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A science-backed, 4-step roadmap to pain-free movement. Medical assessment, strength training, nutrition, and mindset coaching — all designed by a rheumatologist.",
};

const steps = [
  {
    number: "01",
    icon: "clinical_notes",
    title: "Your Clinical Foundation",
    description:
      "Every journey starts with understanding your body. Dr. Shruthi conducts a thorough medical assessment — not a generic intake form, but a real clinical evaluation that considers your diagnosis, imaging, medication, pain levels, and lifestyle.",
    checklist: [
      "Detailed condition report based on your diagnosis",
      "Joint mobility and baseline strength assessment",
      "Safety protocol tailored to your medications",
      "Clear exercise readiness evaluation",
    ],
    imagePlaceholder: "Doctor reviewing patient medical records and joint mobility assessment",
  },
  {
    number: "02",
    icon: "fitness_center",
    title: "Your Movement Prescription",
    description:
      "Based on your clinical assessment, you receive a week-by-week strength training plan built for your specific condition. Not random exercises from the internet — a progressive, graded loading program that respects your pain thresholds and builds real strength.",
    checklist: [
      "Week-by-week structured strength program",
      "Video demonstrations for every movement",
      "Progressive loading that adapts to your pace",
      "Form feedback and movement corrections",
    ],
    imagePlaceholder: "Person performing guided resistance band exercise with proper form",
  },
  {
    number: "03",
    icon: "restaurant",
    title: "Fueling Joint Recovery",
    description:
      "What you eat directly impacts inflammation, bone density, and recovery. You get a nutrition plan rooted in anti-inflammatory science — adapted to Indian meals, your dietary preferences, and your specific condition.",
    checklist: [
      "Anti-inflammatory nutrition framework",
      "Personalized macro and calorie targets",
      "Indian meal plans you will actually follow",
      "Supplement guidance reviewed by your doctor",
    ],
    imagePlaceholder: "Colorful Indian meal with anti-inflammatory ingredients like turmeric and greens",
  },
  {
    number: "04",
    icon: "psychology",
    title: "The Mindset for Movement",
    description:
      "Fear of pain keeps people immobile. Our coaching addresses the psychology behind chronic pain — helping you overcome kinesiophobia, build consistency, and trust your body again through mindfulness and behavioral strategies.",
    checklist: [
      "Overcoming the fear of movement (kinesiophobia)",
      "Mindfulness techniques for pain management",
      "One-on-one behavior change coaching",
      "Building lasting habits that stick",
    ],
    imagePlaceholder: "Person meditating peacefully in a calm, sunlit room",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl mx-auto mb-6">
            A science-backed roadmap to pain-free movement.
          </h1>
          <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Four pillars. One integrated program. Designed by a rheumatologist who
            believes strength training is the most underused prescription in
            medicine.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          {/* Vertical connector line (desktop) */}
          <div className="flex flex-col gap-20 md:gap-28 relative">
            {steps.map((step, idx) => {
              const isReversed = idx % 2 !== 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-10 md:gap-16 items-center`}
                >
                  {/* Image placeholder */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-surface-container-high rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                      <p className="text-body-md text-on-surface-variant text-center">
                        {step.imagePlaceholder}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-title-lg font-bold shrink-0">
                        {step.number}
                      </div>
                      <span className="material-symbols-outlined text-primary text-3xl">
                        {step.icon}
                      </span>
                    </div>

                    <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
                      {step.title}
                    </h2>
                    <p className="text-body-lg text-on-surface-variant mb-6">
                      {step.description}
                    </p>

                    {/* Checklist card */}
                    <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6">
                      <h3 className="text-label-md text-primary uppercase tracking-wider mb-4">
                        What you get
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {step.checklist.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-success text-xl mt-0.5 shrink-0">
                              check_circle
                            </span>
                            <span className="text-body-md text-on-surface">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Ready to start your roadmap?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            It begins with a 3-minute assessment. No commitments, no spam — just
            a clear picture of where you stand and what is possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn-amber">
              Take the free assessment
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
