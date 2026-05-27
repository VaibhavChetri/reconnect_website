import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Reconnect's doctor-designed strength programs for joint health, arthritis management, bone density, and post-injury recovery. Choose Prevent, Manage, or Recover.",
};

const tracks = [
  {
    slug: "prevent",
    title: "Prevent",
    tagline: "Keep your joints strong as you age",
    description:
      "Proactive strength and mobility training designed by a rheumatologist to protect your joints, build bone density, and keep you moving with confidence for decades to come.",
    icon: "shield",
    variants: ["Age 30 - 40", "Age 40 - 50", "Age 50 - 60", "Age 60+"],
    color: "bg-primary",
    image: "/yoga-stretching.jpg",
    imageAlt: "Woman performing a yoga stretch as part of a proactive joint health program",
  },
  {
    slug: "manage",
    title: "Manage",
    tagline: "Relieve pain and regain mobility",
    description:
      "Targeted exercise protocols that work alongside your treatment to reduce pain, strengthen the muscles around affected joints, and restore daily function.",
    icon: "healing",
    variants: [
      "Arthritis (OA)",
      "Spine & Disc Issues",
      "Osteoporosis",
      "Inflammatory Joint Disease (RA)",
    ],
    color: "bg-accent-amber",
    image: "/trainer-guided-exercise.jpg",
    imageAlt: "Trainer guiding a patient through a resistance band exercise for pain management",
  },
  {
    slug: "recover",
    title: "Recover",
    tagline: "Safe return to activity after injury or surgery",
    description:
      "Structured rehabilitation programs that guide you from post-op or post-injury back to full strength, with clear milestones and medical oversight every step of the way.",
    icon: "sprint",
    variants: ["Ligament / ACL Rehab", "Post-Op Rehabilitation"],
    color: "bg-secondary",
    image: "/knee-examination.jpg",
    imageAlt: "Close-up of a knee examination during a rehabilitation assessment",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <p className="text-label-md text-primary-fixed-dim mb-4 uppercase tracking-widest font-[var(--font-body)]">
            Our Programs
          </p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary font-[var(--font-display)] mb-6">
            Programs designed around your body
            <br className="hidden md:block" />
            &nbsp;&mdash; not a template.
          </h1>
          <p className="text-body-lg text-primary-fixed-dim max-w-2xl mx-auto font-[var(--font-body)]">
            Every Reconnect program is built on clinical evidence and
            personalised to your age, condition, and goals. Choose the track
            that fits where you are today.
          </p>
        </div>
      </section>

      {/* ── Program Track Cards ── */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid gap-8 md:grid-cols-3">
            {tracks.map((track) => (
              <Link
                key={track.slug}
                href={`/programs/${track.slug}`}
                className="group bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex flex-col transition-all duration-200 hover:-translate-y-1 soft-shadow-hover"
              >
                <div className="rounded-lg w-full aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={track.image}
                    alt={track.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Badge */}
                <span
                  className={`inline-flex self-start text-caption font-semibold uppercase tracking-wider text-on-primary px-3 py-1 rounded-full mb-3 ${track.color}`}
                >
                  {track.title}
                </span>

                <h2 className="text-title-lg text-on-surface font-[var(--font-body)] mb-2">
                  {track.tagline}
                </h2>

                <p className="text-body-md text-on-surface-variant font-[var(--font-body)] mb-5 flex-grow">
                  {track.description}
                </p>

                {/* Condition / variant chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {track.variants.map((v) => (
                    <span
                      key={v}
                      className="text-caption text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <span className="text-label-md text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore {track.title} track
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works Summary ── */}
      <section className="bg-surface-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface font-[var(--font-display)] mb-4">
            Not sure which track is right for you?
          </h2>
          <p className="text-body-lg text-on-surface-variant font-[var(--font-body)] max-w-xl mx-auto mb-8">
            Take our free 2-minute assessment. We&apos;ll recommend the right
            program, intensity level, and starting point based on your answers.
          </p>
          <Link href="/assessment" className="btn-amber">
            Take the free assessment
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ── Trust Band ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "stethoscope",
                title: "Doctor-designed",
                text: "Every program is built by a practising rheumatologist with 10+ years of clinical experience.",
              },
              {
                icon: "tune",
                title: "Personalised to you",
                text: "Your age, condition, pain level, and fitness history shape every exercise selection.",
              },
              {
                icon: "verified",
                title: "Evidence-based",
                text: "Protocols grounded in peer-reviewed research on strength training for musculoskeletal health.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl"
              >
                <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-title-lg text-on-surface font-[var(--font-body)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant font-[var(--font-body)]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
