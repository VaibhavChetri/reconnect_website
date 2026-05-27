import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Shruthi Desai",
  description:
    "Meet Dr. Shruthi Desai — the rheumatologist behind Reconnect. Learn why she created a strength-based program for people living with joint pain, arthritis, and bone conditions.",
};

const pillars = [
  {
    icon: "healing",
    title: "Pain-First Approach",
    description:
      "We never push through pain blindly. Every program begins with a clinical understanding of your pain — its source, its triggers, and the safest way to build strength around it.",
  },
  {
    icon: "tune",
    title: "Personalized to Condition",
    description:
      "Osteoarthritis is not osteoporosis. A disc bulge is not frozen shoulder. Your program is built around your specific diagnosis, imaging, and medication — not a one-size template.",
  },
  {
    icon: "medical_information",
    title: "Non-Surgical Focus",
    description:
      "Surgery is sometimes necessary — but far too often, it is the first option offered when conservative, strength-based approaches have not been tried. We focus on what can be done before the operating table.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Portrait */}
            <div className="w-full md:w-5/12">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] soft-shadow border border-surface-variant">
                <img
                  src="/dr-shruthi.jpg"
                  alt="Dr. Shruthi Desai, Rheumatologist and founder of Reconnect Wellness"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Intro */}
            <div className="w-full md:w-7/12">
              <p className="text-label-md text-primary uppercase tracking-widest mb-3">
                The Doctor Behind Reconnect
              </p>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
                Strength training, prescribed by your rheumatologist.
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-4">
                Dr. Shruthi Desai is a practising rheumatologist with deep
                expertise in autoimmune and musculoskeletal conditions. She is not
                a surgeon, not a fitness influencer, and not a physio — she is a
                physician who understands that the right kind of strength training
                can transform outcomes for people living with chronic joint and
                bone conditions.
              </p>
              <p className="text-body-lg text-on-surface-variant">
                Reconnect was born from her clinical experience: watching patients
                lose mobility, confidence, and independence — not because medicine
                failed them, but because no one prescribed the movement they
                needed alongside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Physician's Journey */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-8">
              The Physician&apos;s Journey
            </h2>
            <blockquote className="relative">
              <span className="text-6xl text-primary/20 font-[var(--font-display)] absolute -top-4 -left-2 select-none">
                &ldquo;
              </span>
              <p className="text-body-lg text-on-surface-variant italic leading-relaxed pl-6">
                I spent years prescribing medication and watching patients
                improve — but only to a point. Their inflammation would settle,
                but their muscles had atrophied, their joints had stiffened, and
                their confidence had eroded. I kept thinking: we are treating the
                disease, but we are not rebuilding the person. Reconnect is my
                answer to that gap. It is not a gym. It is not physiotherapy. It
                is a medically designed strength program that works with your
                treatment, not instead of it.
              </p>
              <footer className="mt-6">
                <p className="text-title-lg text-on-surface">
                  Dr. Shruthi Desai
                </p>
                <p className="text-body-md text-on-surface-variant">
                  MBBS, MD (Medicine), DM (Rheumatology)
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
              The Reconnect Philosophy
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Three principles guide every program, every recommendation, and
              every conversation we have with our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-title-lg text-on-surface mb-3">
                  {pillar.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-on-primary py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-primary mb-4">
            Work with a doctor who understands movement
          </h2>
          <p className="text-body-lg text-on-primary/80 max-w-xl mx-auto mb-8">
            Start with a free assessment to see if Reconnect is the right fit for
            your condition — or book a consultation directly with Dr. Shruthi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn-amber">
              Take the free assessment
            </Link>
            <Link
              href="/contact"
              className="btn-secondary !text-on-primary !border-on-primary/40 hover:!bg-on-primary/10"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
