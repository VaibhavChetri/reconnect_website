import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Reconnect's doctor-led strength training programs. Three plans designed for maintenance, chronic conditions, and post-surgery recovery.",
};

const plans = [
  {
    name: "Essential",
    price: "2,499",
    period: "/mo",
    description: "For maintenance and prevention",
    audience:
      "Ideal if you have mild joint concerns, want to prevent bone loss, or simply want a doctor-reviewed strength program.",
    features: [
      "Medical assessment and condition report",
      "Personalized strength training program",
      "Anti-inflammatory nutrition chart",
      "App access with video demonstrations",
      "Email support",
    ],
    highlighted: false,
    cta: "Get started",
    ctaStyle: "btn-primary",
  },
  {
    name: "Care",
    price: "4,999",
    period: "/mo",
    badge: "Recommended",
    description: "For active chronic conditions",
    audience:
      "Built for people managing arthritis, disc issues, chronic back pain, or early osteoporosis who need ongoing clinical oversight.",
    features: [
      "Everything in Essential, plus:",
      "Monthly rheumatologist check-in with Dr. Shruthi",
      "Video form feedback and movement corrections",
      "One-on-one coaching sessions",
      "Personalized Indian meal plans",
      "Priority chat support",
    ],
    highlighted: true,
    cta: "Start with Care",
    ctaStyle: "btn-amber",
  },
  {
    name: "Elite Recovery",
    price: "8,999",
    period: "/mo",
    description: "For post-surgery or acute conditions",
    audience:
      "Designed for people recovering from joint surgery, managing severe flare-ups, or dealing with advanced bone and joint conditions.",
    features: [
      "Everything in Care, plus:",
      "Bi-weekly consultations with Dr. Shruthi",
      "Custom rehabilitation protocol",
      "Flare-up management and protocol adjustments",
      "Priority WhatsApp support",
      "Coordination with your treating doctor",
    ],
    highlighted: false,
    cta: "Get Elite Recovery",
    ctaStyle: "btn-primary",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary max-w-2xl mx-auto mb-6">
            Investment in your mobility
          </h1>
          <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Every plan includes a medical
            assessment and a program built around your specific condition.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 flex flex-col relative ${
                  plan.highlighted
                    ? "bg-surface-container-lowest hairline-border ring-2 ring-accent-amber soft-shadow scale-[1.02] md:scale-105"
                    : "bg-surface-container-lowest hairline-border soft-shadow"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-6 bg-accent-amber text-on-surface text-caption font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-title-lg text-on-surface mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-headline-md text-on-surface">
                      ₹{plan.price}
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <p className="text-body-md text-on-surface-variant mb-6">
                  {plan.audience}
                </p>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-success text-xl mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span className="text-body-md text-on-surface">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/assessment"
                  className={`${plan.ctaStyle} text-center w-full mt-auto`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
                No pressure. No lock-in.
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                We want this to work for you — not trap you. Here are the things
                people commonly ask before signing up.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0">
                  swap_horiz
                </span>
                <div>
                  <h3 className="text-title-lg text-on-surface mb-2">
                    Can I switch plans later?
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    Absolutely. You can upgrade or downgrade your plan at any time.
                    If your condition improves and you no longer need monthly
                    check-ins, you can move to the Essential plan. If things get
                    more complex, you can step up to Care or Elite Recovery. We
                    will help you decide what makes sense.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional reassurance points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: "shield",
                  label: "Cancel anytime",
                  detail: "No contracts or exit fees",
                },
                {
                  icon: "verified",
                  label: "Doctor-reviewed",
                  detail: "Every program is clinically sound",
                },
                {
                  icon: "lock",
                  label: "Secure payments",
                  detail: "Encrypted and private",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-label-md text-on-surface">{item.label}</p>
                    <p className="text-caption text-on-surface-variant">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Not sure which plan is right?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Take the free assessment and we will recommend the plan that fits your
            condition, goals, and budget.
          </p>
          <Link href="/assessment" className="btn-amber">
            Take the free assessment
          </Link>
        </div>
      </section>
    </>
  );
}
