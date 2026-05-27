import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psychology — The Mindset for Movement",
  description:
    "Overcoming kinesiophobia, building consistency, and managing chronic pain through mindfulness and behavior change coaching. The psychological pillar of Reconnect.",
};

const cards = [
  {
    icon: "psychology_alt",
    title: "Overcoming Kinesiophobia",
    description:
      "Fear of movement is one of the biggest barriers to recovery. When you have been in pain for months or years, your brain learns to associate movement with danger. We use evidence-based techniques to gradually retrain that response — helping you trust your body again, one movement at a time.",
    details: [
      "Graded exposure to feared movements",
      "Cognitive reframing of pain signals",
      "Building confidence through small, safe wins",
    ],
  },
  {
    icon: "self_improvement",
    title: "Mindfulness for Pain Management",
    description:
      "Chronic pain is not just physical — it reshapes how you think, feel, and make decisions. Mindfulness techniques help you observe pain without catastrophizing, reduce stress-driven inflammation, and develop a calmer relationship with your body that supports healing.",
    details: [
      "Guided breathing and body scan practices",
      "Pain acceptance and observation techniques",
      "Stress reduction for inflammation management",
    ],
  },
  {
    icon: "route",
    title: "Behavior Change Coaching",
    description:
      "Knowing what to do and actually doing it are two different things. Our coaches work with you on the habits, routines, and identity shifts that make consistency natural — not a daily battle of willpower. We focus on building systems, not relying on motivation.",
    details: [
      "Habit stacking for exercise consistency",
      "Identity-based behavior change strategies",
      "Accountability without shame or pressure",
    ],
  },
];

export default function PsychologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
                Psychology Pillar
              </p>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
                The Mindset for Movement
              </h1>
              <p className="text-body-lg text-on-primary/80">
                The biggest barrier to recovery is rarely physical — it is
                psychological. Fear of pain, loss of confidence, and years of
                inactivity create patterns that no exercise program alone can
                break. This pillar addresses the mind behind the movement.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-on-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-primary/60 text-center">
                  Person sitting peacefully in a sunlit room, practising mindful breathing with eyes closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
              Healing the mind to free the body
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Pain changes the brain. Inactivity reinforces the change. Our
              psychological approach reverses that cycle through structured,
              compassionate coaching.
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

      {/* The fear-pain cycle */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
                Breaking the fear-pain cycle
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6">
                When pain persists, your nervous system becomes hypervigilant. You
                avoid movement. Muscles weaken. Joints stiffen. Pain increases.
                And the cycle deepens.
              </p>
              <p className="text-body-lg text-on-surface-variant mb-6">
                Our approach breaks this cycle at its root — not by ignoring pain,
                but by teaching you to respond to it differently. Through graded
                exposure, mindfulness, and coaching, we help you rebuild the
                relationship between your mind and your body.
              </p>
              <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-5">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-amber text-xl mt-0.5">
                    format_quote
                  </span>
                  <p className="text-body-md text-on-surface-variant italic">
                    &ldquo;I was afraid to bend down. Afraid to climb stairs.
                    Afraid to live. The coaching did not remove my pain — it
                    removed my fear of it. And that changed everything.&rdquo;
                    <span className="block mt-2 text-label-md text-on-surface not-italic">
                      — Reconnect member, 54, Pune
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="bg-surface-container-high rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-surface-variant text-center">
                  Illustration of the fear-avoidance cycle being broken through graded movement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Your body is ready. Let your mind catch up.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            The free assessment helps us understand not just your physical
            condition, but the barriers holding you back. Take the first step.
          </p>
          <Link href="/assessment" className="btn-amber">
            Take the free assessment
          </Link>
        </div>
      </section>
    </>
  );
}
