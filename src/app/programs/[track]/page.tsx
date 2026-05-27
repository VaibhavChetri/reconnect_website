import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ─────────────────────────── Data ─────────────────────────── */

type TrackData = {
  title: string;
  badge: string;
  badgeColor: string;
  heroHeadline: string;
  heroSub: string;
  icon: string;
  heroImage: string;
  heroImageAlt: string;
  whoItsFor: {
    title: string;
    description: string;
    icon: string;
  }[];
  roadmap: {
    week: string;
    title: string;
    description: string;
  }[];
  exercises: {
    name: string;
    target: string;
    icon: string;
  }[];
  reassurance: string;
  testimonial: {
    quote: string;
    name: string;
    detail: string;
  };
};

const trackData: Record<string, TrackData> = {
  prevent: {
    title: "Prevent",
    badge: "Prevention Track",
    badgeColor: "bg-primary",
    heroHeadline: "Keep your joints strong as you age",
    heroSub:
      "A proactive strength and mobility program designed by a rheumatologist to protect your joints, build bone density, and keep you moving with confidence \u2014 no matter your age.",
    icon: "shield",
    heroImage: "/woman-dumbbell-side.jpg",
    heroImageAlt: "Woman performing a dumbbell exercise as part of a proactive strength program",
    whoItsFor: [
      {
        title: "Age 30 \u2013 40",
        description:
          "You\u2019re active but starting to notice stiffness after long runs or sitting all day. Build the foundation now.",
        icon: "directions_run",
      },
      {
        title: "Age 40 \u2013 50",
        description:
          "Recovery takes longer, joints creak in the morning. Targeted strength work keeps you ahead of the curve.",
        icon: "self_improvement",
      },
      {
        title: "Age 50 \u2013 60",
        description:
          "Bone density matters more than ever. Our program focuses on load-bearing exercises that stimulate bone growth.",
        icon: "accessibility_new",
      },
      {
        title: "Age 60+",
        description:
          "Maintain independence and reduce fall risk with gentle progressive resistance tailored to your ability.",
        icon: "elderly",
      },
    ],
    roadmap: [
      {
        week: "Week 1 \u2013 4",
        title: "Foundation & Assessment",
        description:
          "Baseline mobility tests, movement screening, and introductory exercises to establish safe form and load tolerance.",
      },
      {
        week: "Week 5 \u2013 8",
        title: "Progressive Loading",
        description:
          "Gradually increase resistance and introduce compound movements. Most members report improved energy and less morning stiffness.",
      },
      {
        week: "Week 9 \u2013 12",
        title: "Strength & Resilience",
        description:
          "Full program intensity. Measurable improvements in grip strength, lower body power, and joint range of motion.",
      },
    ],
    exercises: [
      {
        name: "Goblet Squat",
        target: "Knees, hips & core",
        icon: "fitness_center",
      },
      {
        name: "Farmer\u2019s Carry",
        target: "Grip, shoulders & spine",
        icon: "exercise",
      },
      {
        name: "Band Pull-Apart",
        target: "Upper back & posture",
        icon: "sports_gymnastics",
      },
    ],
    reassurance:
      "This program is designed for people who are currently healthy but want to stay that way. No prior gym experience needed \u2014 every exercise is demonstrated and scaled.",
    testimonial: {
      quote:
        "I\u2019m 52 and hadn\u2019t touched a weight in 20 years. After 12 weeks with Reconnect, my knee pain during stairs is completely gone and I feel stronger than I did at 40.",
      name: "Meera S.",
      detail: "Age 52 \u00b7 Prevention Track",
    },
  },

  manage: {
    title: "Manage",
    badge: "Management Track",
    badgeColor: "bg-accent-amber",
    heroHeadline: "Relieve pain and regain mobility",
    heroSub:
      "Targeted exercise protocols that work alongside your treatment to reduce pain, strengthen the muscles around affected joints, and restore the daily activities you\u2019ve been avoiding.",
    icon: "healing",
    heroImage: "/hero-resistance-band.jpg",
    heroImageAlt: "Man performing a resistance band exercise for joint pain management",
    whoItsFor: [
      {
        title: "Arthritis (OA)",
        description:
          "Knee, hip, or hand osteoarthritis causing daily pain and limiting your movement. Strength training is first-line treatment.",
        icon: "rheumatology",
      },
      {
        title: "Spine & Disc Issues",
        description:
          "Disc bulge, sciatica, or chronic back pain. Specific core and posterior chain work to decompress and stabilise.",
        icon: "skeleton",
      },
      {
        title: "Osteoporosis",
        description:
          "Low bone density or osteopenia diagnosis. Load-bearing and impact exercises proven to stimulate bone growth.",
        icon: "bone",
      },
      {
        title: "Inflammatory Joint Disease (RA)",
        description:
          "Rheumatoid arthritis or other inflammatory conditions. Gentle progressive resistance during stable phases.",
        icon: "immunology",
      },
    ],
    roadmap: [
      {
        week: "Week 1 \u2013 4",
        title: "Pain Mapping & Gentle Start",
        description:
          "Identify pain triggers, establish safe ranges of motion, and begin low-load exercises that reduce inflammation without flaring symptoms.",
      },
      {
        week: "Week 5 \u2013 8",
        title: "Functional Strength",
        description:
          "Progress to meaningful resistance. Most members report a noticeable drop in daily pain scores and improved ability to climb stairs, carry groceries, and sit/stand.",
      },
      {
        week: "Week 9 \u2013 12",
        title: "Sustained Improvement",
        description:
          "Consolidate gains with condition-specific protocols. Measurable improvements in joint function, reduced reliance on painkillers, and better sleep quality.",
      },
    ],
    exercises: [
      {
        name: "Wall Sit Hold",
        target: "Quadriceps & knee stability",
        icon: "fitness_center",
      },
      {
        name: "Dead Bug",
        target: "Deep core & spinal stability",
        icon: "exercise",
      },
      {
        name: "Resistance Band Row",
        target: "Upper back & posture",
        icon: "sports_gymnastics",
      },
    ],
    reassurance:
      "Works alongside your medication and existing treatment plan. We coordinate with your doctor and never replace medical advice. Every exercise is adapted to your current pain level.",
    testimonial: {
      quote:
        "My rheumatologist told me to exercise but never told me how. Reconnect gave me a structured plan that actually reduced my knee pain within 6 weeks. I can walk my dog again without dreading it.",
      name: "Anjali P.",
      detail: "Knee OA \u00b7 Management Track",
    },
  },

  recover: {
    title: "Recover",
    badge: "Recovery Track",
    badgeColor: "bg-secondary",
    heroHeadline: "Safe return to activity after injury or surgery",
    heroSub:
      "Structured rehabilitation programs that guide you from post-op or post-injury back to full strength, with clear milestones and medical oversight every step of the way.",
    icon: "sprint",
    heroImage: "/mat-stretching.jpg",
    heroImageAlt: "Woman performing gentle recovery stretches on a mat",
    whoItsFor: [
      {
        title: "Ligament / ACL Rehab",
        description:
          "Recovering from an ACL tear, meniscus repair, or ligament sprain. Phased protocol from protected movement to return-to-sport.",
        icon: "personal_injury",
      },
      {
        title: "Post-Op Rehabilitation",
        description:
          "After knee replacement, hip replacement, or spinal surgery. Safe, guided progression from bed mobility to full independence.",
        icon: "surgical",
      },
    ],
    roadmap: [
      {
        week: "Week 1 \u2013 4",
        title: "Protected Phase",
        description:
          "Gentle range-of-motion work, swelling management, and isometric holds. Rebuilding neural connection with the affected area.",
      },
      {
        week: "Week 5 \u2013 8",
        title: "Rebuilding Phase",
        description:
          "Progressive resistance, balance training, and functional movements. Regaining confidence in daily tasks like climbing stairs and getting in/out of a car.",
      },
      {
        week: "Week 9 \u2013 12",
        title: "Return to Activity",
        description:
          "Sport-specific or activity-specific training. Strength testing, movement quality assessment, and clearance milestones before returning to full activity.",
      },
    ],
    exercises: [
      {
        name: "Terminal Knee Extension",
        target: "Quad activation & knee control",
        icon: "fitness_center",
      },
      {
        name: "Single-Leg Balance",
        target: "Proprioception & stability",
        icon: "exercise",
      },
      {
        name: "Step-Up Progression",
        target: "Functional leg strength",
        icon: "sports_gymnastics",
      },
    ],
    reassurance:
      "Every recovery program is coordinated with your surgeon or treating doctor. We follow established post-operative protocols and adjust based on your healing timeline.",
    testimonial: {
      quote:
        "After my ACL reconstruction, I was terrified of re-injury. Reconnect\u2019s phased approach gave me the confidence to trust my knee again. I\u2019m back to playing badminton at 9 months post-op.",
      name: "Rohan K.",
      detail: "ACL Rehab \u00b7 Recovery Track",
    },
  },
};

/* ────────────────────── Static Params ─────────────────────── */

export async function generateStaticParams() {
  return [{ track: "prevent" }, { track: "manage" }, { track: "recover" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  const data = trackData[track];
  if (!data) return {};
  return {
    title: `${data.badge} \u2013 ${data.heroHeadline}`,
    description: data.heroSub,
  };
}

/* ─────────────────────── Component ────────────────────────── */

export default async function ProgramTrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  const data = trackData[track];

  if (!data) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <span
                className={`inline-flex text-caption font-semibold uppercase tracking-wider text-on-primary px-3 py-1 rounded-full mb-4 ${data.badgeColor === "bg-primary" ? "bg-primary-container" : data.badgeColor}`}
              >
                {data.badge}
              </span>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary font-[var(--font-display)] mb-6">
                {data.heroHeadline}
              </h1>
              <p className="text-body-lg text-primary-fixed-dim font-[var(--font-body)] max-w-xl mb-8">
                {data.heroSub}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/assessment" className="btn-amber">
                  Start your assessment
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <Link href="/programs" className="btn-secondary !text-on-primary !border-on-primary/30 hover:!bg-white/10">
                  View all programs
                </Link>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden">
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface font-[var(--font-display)] mb-3">
              Who is this for?
            </h2>
            <p className="text-body-lg text-on-surface-variant font-[var(--font-body)] max-w-xl mx-auto">
              Select the condition or life stage that best describes you. Each
              variant is tailored with specific exercise selections and
              progressions.
            </p>
          </div>

          <div className={`grid gap-6 ${data.whoItsFor.length <= 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-2 lg:grid-cols-4"}`}>
            {data.whoItsFor.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-title-lg text-on-surface font-[var(--font-body)] mb-2">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant font-[var(--font-body)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Roadmap ── */}
      <section className="bg-surface-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface font-[var(--font-display)] mb-3">
              The Roadmap
            </h2>
            <p className="text-body-lg text-on-surface-variant font-[var(--font-body)] max-w-xl mx-auto">
              A clear 12-week journey with measurable milestones so you always
              know where you are and what comes next.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-outline-variant" />

            <div className="space-y-8">
              {data.roadmap.map((step, i) => (
                <div key={step.week} className="flex gap-6 items-start">
                  {/* Timeline node */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary text-on-primary items-center justify-center font-semibold text-label-md z-10">
                    {i + 1}
                  </div>

                  <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex-1">
                    <span className="text-caption text-primary font-semibold uppercase tracking-wider">
                      {step.week}
                    </span>
                    <h3 className="text-title-lg text-on-surface font-[var(--font-body)] mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant font-[var(--font-body)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Exercises ── */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10">
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface font-[var(--font-display)] mb-3">
              Sample Exercises
            </h2>
            <p className="text-body-lg text-on-surface-variant font-[var(--font-body)] max-w-xl mx-auto">
              A glimpse at the kind of movements you&apos;ll be doing. Every
              exercise includes video demos, scaling options, and safety cues.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.exercises.map((ex) => (
              <div
                key={ex.name}
                className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="bg-surface-container-high aspect-video flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">
                    {ex.icon}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-title-lg text-on-surface font-[var(--font-body)] mb-1">
                    {ex.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant font-[var(--font-body)]">
                    {ex.target}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reassurance Band ── */}
      <section className="bg-primary-container">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <span className="material-symbols-outlined text-on-primary text-4xl">
            verified_user
          </span>
          <p className="text-body-lg text-on-primary font-[var(--font-body)] flex-1">
            {data.reassurance}
          </p>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <span className="material-symbols-outlined text-accent-amber text-4xl mb-4">
              format_quote
            </span>
            <blockquote className="text-body-lg text-on-surface font-[var(--font-body)] italic mb-6">
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <p className="text-title-lg text-on-surface font-[var(--font-body)]">
              {data.testimonial.name}
            </p>
            <p className="text-body-md text-on-surface-variant font-[var(--font-body)]">
              {data.testimonial.detail}
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-surface-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface font-[var(--font-display)] mb-4">
            Ready to start your {data.title} journey?
          </h2>
          <p className="text-body-lg text-on-surface-variant font-[var(--font-body)] max-w-xl mx-auto mb-8">
            Take our free 2-minute assessment and get a personalised program
            recommendation based on your age, condition, and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/assessment" className="btn-amber">
              Take the free assessment
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link href="/programs" className="btn-secondary">
              Back to all programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
