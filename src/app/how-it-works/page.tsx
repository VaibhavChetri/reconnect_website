import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Stagger from "@/components/Stagger";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { SkeletonSvg, SpineSvg } from "@/components/AnatomicalArt";
import StickyJourneySequence from "./_components/StickyJourneySequence";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A doctor-led, personalised process. Assessment first, then a program built around your exact condition — exercise, nutrition, and psychology integrated into one journey.",
};

/* ── Data ──────────────────────────────────────────────────── */

const differentRecap = [
  {
    badge: "01",
    title: "Doctor-led",
    body: "Designed and overseen by a rheumatologist. Trainers carry out the program — the medicine sits behind it.",
  },
  {
    badge: "02",
    title: "Personalised",
    body: "Built from your assessment — not a template, not your height and weight.",
  },
  {
    badge: "03",
    title: "Pain-first",
    body: "We calm the pain, respect it, then build strength around it. Never push through it.",
  },
  {
    badge: "04",
    title: "Structured roadmap",
    body: "A 12-week cycle with measurable checkpoints. The direction and motivation YouTube can’t give you.",
  },
] as const;

const expectation = [
  {
    when: "Week 1",
    title: "Assessment & baseline",
    body: "Medical intake done. Pain mapped. A program built for your body — not a generic template.",
  },
  {
    when: "Weeks 4–6",
    title: "Pain quietening",
    body: "Supporting muscles starting to switch back on. Most members notice the first meaningful drop in daily pain.",
  },
  {
    when: "Month 2",
    title: "Muscles activating — start loading",
    body: "Now the body can take load. Standing strength, real-life patterns, full-body work that protects the joint.",
  },
  {
    when: "Month 3",
    title: "Resilience & routine",
    body: "Higher capacity, fewer flare-ups, a routine you can carry on your own. Medical reassessment to confirm.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1) HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-bone pt-36 md:pt-44 pb-24 md:pb-32">
        <SkeletonSvg className="watermark text-ink right-[-120px] top-[60px] w-[520px] hidden md:block" />

        <div className="container-site relative">
          <div className="xray-glow max-w-4xl">
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-hero text-ink mt-6">
                A doctor-led process,{" "}
                <span className="serif-italic text-clay">built around you.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-lg text-ink-soft mt-8 max-w-2xl">
                Assessment first. Then a program shaped around your exact condition,
                history, and life — exercise, nutrition, and psychology integrated into
                one connected journey. Care is patient-to-patient. Nothing is generic.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button variant="clay" size="lg" href="/assessment" arrow>
                  Take free assessment
                </Button>
                <Button variant="ghost" size="lg" href="#the-journey">
                  See the four steps
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2) BIG NUMBERED STICKY-SCROLL SEQUENCE
          ═══════════════════════════════════════════════════════ */}
      <Section bg="bg-bone-deep" id="the-journey">
        <SectionHeader
          eyebrowNumber="(01)"
          eyebrow="The connected journey"
          title="One method. Four pillars. Always in this order."
          description="The pillars are integrated, not bolted on. Each one informs the next — and the assessment governs all of them."
          align="left"
          className="mb-16 md:mb-20"
        />

        <StickyJourneySequence />
      </Section>

      {/* ═══════════════════════════════════════════════════════
          3) "WHY NOT JUST YOUTUBE?" CALLOUT
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-bone section-py overflow-hidden">
        <SpineSvg className="watermark text-ink left-[-100px] top-[40px] w-[420px] hidden md:block" />

        <div className="container-site relative">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow number="(02)">A fair question</Eyebrow>
              <h2 className="text-h2 font-display text-ink mt-6 leading-tight">
                <span className="serif-italic">“Why not just</span>{" "}
                <span className="serif-italic text-clay">YouTube?”</span>
              </h2>

              <blockquote className="text-h4 font-display text-ink-soft mt-10 border-l-2 border-clay pl-6 max-w-2xl">
                YouTube has endless exercises — but no motivation, and no direction for
                where <em className="serif-italic text-ink">your</em> body is at. We give
                you the roadmap.
              </blockquote>
              <p className="text-caption text-ink-soft mt-4 pl-6">
                — Dr. Shruthi Desai, Rheumatologist
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    label: "Endless videos",
                    body: "Plenty of exercises. Zero idea which ones apply to your knee, your spine, or your age.",
                  },
                  {
                    label: "No accountability",
                    body: "Nobody’s watching. Adherence drops within weeks. Pain doesn’t.",
                  },
                  {
                    label: "No roadmap",
                    body: "Random workouts don’t add up to a 12-week plan with milestones and medical oversight.",
                  },
                ].map((item, i) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="text-eyebrow text-ink-soft">0{i + 1}</span>
                    <p className="text-body font-medium text-ink">{item.label}</p>
                    <p className="text-body-sm text-ink-soft">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4) RECONNECT vs GENERIC APPS COMPARISON
          ═══════════════════════════════════════════════════════ */}
      <Section bg="bg-bone-deep">
        <SectionHeader
          eyebrowNumber="(03)"
          eyebrow="A different starting point"
          title="Reconnect vs generic fitness apps."
          description="The difference isn’t in the workouts. It’s in what comes before them."
          align="left"
          className="mb-12"
        />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic apps card */}
            <div className="bg-calcium rounded-[20px] p-8 md:p-10 hairline flex flex-col gap-6 h-full">
              <div className="flex items-baseline justify-between">
                <h3 className="text-h3 font-display text-ink-soft">
                  Generic fitness apps
                </h3>
                <span className="text-caption text-ink-soft uppercase tracking-widest">
                  e.g. HealthifyMe, Fitternity
                </span>
              </div>
              <div className="hairline-b" />
              <ul className="flex flex-col gap-4">
                {[
                  "Inputs: height + weight + a few preferences",
                  "Output: one generic template per goal",
                  "Same workout served to thousands of bodies",
                  "No medical intake; no condition awareness",
                  "Pain? You’re on your own to modify",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-body text-ink-soft">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-ink-soft/40 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reconnect card */}
            <div className="bg-sage-deep text-bone rounded-[20px] p-8 md:p-10 flex flex-col gap-6 h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
                   style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,100,224,0.18), transparent 70%)" }}
                   aria-hidden="true" />

              <div className="flex items-baseline justify-between relative">
                <h3 className="text-h3 font-display text-bone">Reconnect</h3>
                <span className="text-caption text-clay-soft uppercase tracking-widest">
                  Rheumatologist-led
                </span>
              </div>
              <div className="border-b border-bone/15 relative" />
              <ul className="flex flex-col gap-4 relative">
                {[
                  "Inputs: medical history, imaging, medications, pain map",
                  "Output: a program built for your exact condition",
                  "Region-split: upper / lower / back / target joint",
                  "Age- and severity-scaled prescriptions",
                  "Pain-first: we calm, respect, and build around it",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-body text-bone/85">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          5) WHAT MAKES US DIFFERENT — 4-card recap
          ═══════════════════════════════════════════════════════ */}
      <Section bg="bg-bone">
        <SectionHeader
          eyebrowNumber="(04)"
          eyebrow="What makes us different"
          title="Four ideas that sit under everything we do."
          align="left"
          className="mb-12"
        />

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentRecap.map((d) => (
            <Card key={d.title} padding="md" className="bg-calcium h-full flex flex-col gap-3">
              <span className="text-eyebrow text-clay">{d.badge}</span>
              <h4 className="text-h4 font-display text-ink">{d.title}</h4>
              <p className="text-body-sm text-ink-soft">{d.body}</p>
            </Card>
          ))}
        </Stagger>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          6) EXPECTATION TIMELINE — week 1, 4-6, month 2, month 3
          ═══════════════════════════════════════════════════════ */}
      <Section bg="bg-bone-deep">
        <SectionHeader
          eyebrowNumber="(05)"
          eyebrow="What to expect"
          title="The 12-week shape."
          description="Measured language — trajectories, not promises. Outcomes always sit alongside, not instead of, your existing medical care."
          align="left"
          className="mb-16"
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {expectation.map((e, i) => (
            <div
              key={e.when}
              className="relative glow-card bg-calcium rounded-[18px] p-6 md:p-7 flex flex-col gap-3 h-full"
            >
              <div className="flex items-center justify-between">
                <span className="text-eyebrow text-clay">{e.when}</span>
                <span className="text-h4 font-display text-line">0{i + 1}</span>
              </div>
              <div className="hairline-b" />
              <h4 className="text-h4 font-display text-ink">{e.title}</h4>
              <p className="text-body-sm text-ink-soft">{e.body}</p>
            </div>
          ))}
        </Stagger>

        <p className="text-caption text-ink-soft italic mt-8 max-w-2xl border-l border-line pl-5">
          Reconnect is non-surgical. We coordinate with your treating doctor and never modify
          prescriptions. Stories shared across the site are with explicit consent; outcomes
          vary by individual.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          7) FINAL CTA
          ═══════════════════════════════════════════════════════ */}
      <CTASection
        headline="The assessment is where the personalisation begins."
        description="Two minutes. A handful of questions. We confirm the right track and shape the program around your body."
        primaryHref="/assessment"
        primaryLabel="Take free assessment"
        secondaryHref="/contact"
        secondaryLabel="Book consultation"
        variant="sage"
      />
    </>
  );
}
