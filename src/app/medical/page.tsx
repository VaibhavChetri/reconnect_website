import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Assessment — Your Clinical Foundation",
  description:
    "Every Reconnect program begins with a thorough medical assessment by Dr. Shruthi Desai. Condition report, mobility baseline, and safety protocols tailored to your diagnosis.",
};

const included = [
  {
    icon: "description",
    title: "Condition Report",
    description:
      "A detailed summary of your diagnosis, disease activity, imaging findings, and current treatment. This becomes the clinical blueprint for your entire program — ensuring every exercise and nutrition recommendation is grounded in your medical reality.",
  },
  {
    icon: "accessibility_new",
    title: "Mobility Baseline",
    description:
      "We measure your current joint range of motion, baseline strength, and functional capacity. These numbers give us a starting point and allow us to track meaningful progress over weeks and months — not vague feelings, but real data.",
  },
  {
    icon: "verified_user",
    title: "Safety Protocol",
    description:
      "Based on your medications, contraindications, and pain profile, Dr. Shruthi creates a safety protocol that defines your exercise boundaries. This includes movements to avoid, load limits, and flare-up response plans.",
  },
];

export default function MedicalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
                Medical Pillar
              </p>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
                Your Clinical Foundation
              </h1>
              <p className="text-body-lg text-on-primary/80">
                Before a single exercise is prescribed, Dr. Shruthi Desai
                evaluates your condition with the thoroughness of a clinical
                consultation — not a fitness intake form. This is the foundation
                that makes everything else safe and effective.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-on-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-primary/60 text-center">
                  Doctor reviewing patient records, X-rays, and mobility assessment notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Dr. Shruthi evaluates */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4 text-center">
              How Dr. Shruthi evaluates your case
            </h2>
            <p className="text-body-lg text-on-surface-variant text-center mb-12">
              This is not a checkbox form. It is a structured clinical evaluation
              that considers the full picture of your musculoskeletal health.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Medical History Review",
                  desc: "Your diagnosis, disease duration, medications (including biologics, DMARDs, steroids), previous surgeries, imaging results, and any comorbidities.",
                },
                {
                  step: "02",
                  title: "Pain & Function Assessment",
                  desc: "Current pain levels across affected joints, functional limitations in daily life, fear of movement patterns, and activity history.",
                },
                {
                  step: "03",
                  title: "Physical Evaluation",
                  desc: "Joint range of motion, baseline strength testing, posture analysis, and movement quality screening to identify safe starting points.",
                },
                {
                  step: "04",
                  title: "Program Readiness",
                  desc: "Determining exercise boundaries, contraindicated movements, appropriate loading parameters, and creating your personalized safety protocol.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex items-start gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-label-md font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-title-lg text-on-surface mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
              What you receive
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              After your assessment, you receive three documents that form the
              clinical backbone of your Reconnect program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {included.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-title-lg text-on-surface mb-3">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Start with a clear clinical picture
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            The free assessment gives us an initial understanding of your
            condition. From there, Dr. Shruthi builds your full clinical
            foundation.
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
