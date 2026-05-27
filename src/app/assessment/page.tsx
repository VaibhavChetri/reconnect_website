"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── Types ─── */
type Branch = "prevent" | "manage" | "recover" | null;

interface FormState {
  stage: Branch;
  subChoice: string;
  goal: string;
  daysPerWeek: string;
  foodPref: string;
  name: string;
  phone: string;
}

/* ─── Step configuration ─── */
const TOTAL_STEPS = 6;

/* ─── Option Card ─── */
function OptionCard({
  icon,
  label,
  description,
  selected,
  onSelect,
}: {
  icon: string;
  label: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`
        w-full text-left rounded-xl p-6 transition-all duration-200
        soft-shadow cursor-pointer
        ${
          selected
            ? "border-2 border-primary-container bg-surface-container"
            : "hairline-border bg-surface-container-lowest hover:shadow-md"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <span
          className={`material-symbols-outlined text-[28px] mt-0.5 ${
            selected ? "text-primary-container" : "text-on-surface-variant"
          }`}
        >
          {icon}
        </span>
        <div className="flex-1">
          <p className="text-title-lg text-on-surface">{label}</p>
          {description && (
            <p className="text-body-md text-on-surface-variant mt-1">
              {description}
            </p>
          )}
        </div>
        {selected && (
          <span className="material-symbols-outlined text-primary-container text-[24px] mt-1">
            check_circle
          </span>
        )}
      </div>
    </button>
  );
}

/* ─── Progress Bar ─── */
function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-label-md text-on-surface-variant">
          Step {step} of {total}
        </span>
        <span className="text-label-md text-on-surface-variant">
          {Math.round(pct)}%
        </span>
      </div>
      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="progress-bar"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

/* ─── Mini Header ─── */
function AssessmentHeader() {
  return (
    <div className="flex items-center justify-between w-full px-5 md:px-16 h-16 max-w-[1200px] mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-[var(--font-display)] text-2xl font-bold text-primary tracking-tight">
          Reconnect
        </span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-1 text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-[20px]">close</span>
        Exit
      </Link>
    </div>
  );
}

/* ─── Result Card ─── */
function ResultCard({
  formState,
  onRestart,
}: {
  formState: FormState;
  onRestart: () => void;
}) {
  const programName =
    formState.stage === "prevent"
      ? "Reconnect Prevent"
      : formState.stage === "manage"
      ? "Reconnect Manage"
      : "Reconnect Recover";

  const programDescription =
    formState.stage === "prevent"
      ? "A proactive strength and mobility program designed to protect your joints, build bone density, and keep you moving pain-free for decades."
      : formState.stage === "manage"
      ? "A doctor-designed exercise and nutrition plan tailored to your condition, focused on reducing pain, building functional strength, and improving quality of life."
      : "A structured rehabilitation program that guides you safely from recovery to full strength, with expert oversight at every stage.";

  const features = [
    "Personalized exercise plan by Dr. Shruthi",
    `${formState.daysPerWeek === "2" ? "2" : formState.daysPerWeek === "3-4" ? "3-4" : "5+"} sessions/week, designed around your schedule`,
    `${formState.foodPref === "veg" ? "Vegetarian" : formState.foodPref === "non-veg" ? "Non-vegetarian" : "Eggetarian"} nutrition guidance`,
    "WhatsApp support & monthly check-ins",
    "Video demonstrations for every exercise",
  ];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <span className="material-symbols-outlined text-[56px] text-primary-container">
          emoji_objects
        </span>
      </div>
      <h2 className="text-display-lg-mobile md:text-headline-md text-on-surface mb-3">
        Your personalized plan is ready, {formState.name || "friend"}!
      </h2>
      <p className="text-body-lg text-on-surface-variant mb-8">
        Based on your answers, we recommend:
      </p>

      <div className="bg-surface-container-lowest rounded-xl p-8 hairline-border soft-shadow mb-8 text-left">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-[32px] text-primary-container">
            {formState.stage === "prevent"
              ? "shield"
              : formState.stage === "manage"
              ? "healing"
              : "trending_up"}
          </span>
          <h3 className="text-title-lg text-on-surface">{programName}</h3>
        </div>
        <p className="text-body-md text-on-surface-variant mb-6">
          {programDescription}
        </p>
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[20px] text-success mt-0.5">
                check
              </span>
              <span className="text-body-md text-on-surface">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/pricing" className="btn-primary px-8 py-3 text-base">
          View Pricing & Enroll
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </Link>
        <button
          type="button"
          onClick={onRestart}
          className="btn-secondary px-8 py-3 text-base"
        >
          Retake Assessment
        </button>
      </div>

      <p className="text-caption text-on-surface-variant mt-6">
        Our team will reach out to {formState.phone || "you"} within 24 hours to
        discuss your plan in detail.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<FormState>({
    stage: null,
    subChoice: "",
    goal: "",
    daysPerWeek: "",
    foodPref: "",
    name: "",
    phone: "",
  });

  /* helpers */
  const update = (patch: Partial<FormState>) =>
    setFormState((prev) => ({ ...prev, ...patch }));

  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return formState.stage !== null;
      case 2:
        return formState.subChoice !== "";
      case 3:
        return formState.goal !== "";
      case 4:
        return formState.daysPerWeek !== "";
      case 5:
        return (
          formState.foodPref !== "" &&
          formState.name.trim() !== "" &&
          formState.phone.trim() !== ""
        );
      default:
        return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS && canAdvance()) setStep((s) => s + 1);
  };
  const back = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const restart = () => {
    setStep(1);
    setFormState({
      stage: null,
      subChoice: "",
      goal: "",
      daysPerWeek: "",
      foodPref: "",
      name: "",
      phone: "",
    });
  };

  /* ─── Step renderers ─── */
  const renderStep = () => {
    switch (step) {
      /* STEP 1 — Where are you right now? */
      case 1:
        return (
          <StepWrapper
            heading="Where are you right now?"
            subtext="This helps us tailor every recommendation to your situation."
          >
            <div className="grid gap-4">
              <OptionCard
                icon="shield"
                label="No pain — I want to prevent problems"
                description="Build strength and protect your joints proactively."
                selected={formState.stage === "prevent"}
                onSelect={() =>
                  update({ stage: "prevent", subChoice: "" })
                }
              />
              <OptionCard
                icon="healing"
                label="Ongoing joint or back pain"
                description="Manage arthritis, disc issues, or chronic pain."
                selected={formState.stage === "manage"}
                onSelect={() =>
                  update({ stage: "manage", subChoice: "" })
                }
              />
              <OptionCard
                icon="trending_up"
                label="Recovering from injury or surgery"
                description="Get back to full strength safely and confidently."
                selected={formState.stage === "recover"}
                onSelect={() =>
                  update({ stage: "recover", subChoice: "" })
                }
              />
            </div>
          </StepWrapper>
        );

      /* STEP 2 — Branched sub-question */
      case 2:
        if (formState.stage === "prevent") {
          return (
            <StepWrapper
              heading="What is your age range?"
              subtext="We adjust intensity and exercise selection based on your age."
            >
              <div className="grid gap-4">
                {[
                  { val: "30-40", icon: "pace", label: "30 – 40 years" },
                  { val: "40-50", icon: "sprint", label: "40 – 50 years" },
                  { val: "50-60", icon: "directions_walk", label: "50 – 60 years" },
                  { val: "60+", icon: "elderly", label: "60+ years" },
                ].map((opt) => (
                  <OptionCard
                    key={opt.val}
                    icon={opt.icon}
                    label={opt.label}
                    selected={formState.subChoice === opt.val}
                    onSelect={() => update({ subChoice: opt.val })}
                  />
                ))}
              </div>
            </StepWrapper>
          );
        }
        if (formState.stage === "manage") {
          return (
            <StepWrapper
              heading="Which condition are you dealing with?"
              subtext="Knowing your condition helps Dr. Shruthi design a safe, effective plan."
            >
              <div className="grid gap-4">
                {[
                  {
                    val: "arthritis",
                    icon: "rheumatology",
                    label: "Arthritis (OA / RA)",
                    desc: "Knee, hip, or hand arthritis pain.",
                  },
                  {
                    val: "spine",
                    icon: "skeleton",
                    label: "Spine & disc issues",
                    desc: "Disc bulge, sciatica, or chronic back pain.",
                  },
                  {
                    val: "osteoporosis",
                    icon: "bone",
                    label: "Osteoporosis / low bone density",
                    desc: "Bone thinning or fracture risk.",
                  },
                  {
                    val: "inflammatory",
                    icon: "local_fire_department",
                    label: "Inflammatory condition",
                    desc: "Ankylosing spondylitis, lupus, or similar.",
                  },
                ].map((opt) => (
                  <OptionCard
                    key={opt.val}
                    icon={opt.icon}
                    label={opt.label}
                    description={opt.desc}
                    selected={formState.subChoice === opt.val}
                    onSelect={() => update({ subChoice: opt.val })}
                  />
                ))}
              </div>
            </StepWrapper>
          );
        }
        /* recover */
        return (
          <StepWrapper
            heading="What best describes your situation?"
            subtext="We'll match you with the right rehab path."
          >
            <div className="grid gap-4">
              <OptionCard
                icon="personal_injury"
                label="Recovering from an injury"
                description="Ligament tear, fracture, sprain, or muscle injury."
                selected={formState.subChoice === "injury"}
                onSelect={() => update({ subChoice: "injury" })}
              />
              <OptionCard
                icon="surgical"
                label="Post-surgery rehabilitation"
                description="Joint replacement, ACL repair, spinal surgery, etc."
                selected={formState.subChoice === "post-op"}
                onSelect={() => update({ subChoice: "post-op" })}
              />
            </div>
          </StepWrapper>
        );

      /* STEP 3 — Main goal */
      case 3:
        return (
          <StepWrapper
            heading="What is your main goal?"
            subtext="Pick the one that matters most right now. Your plan will address all of these over time."
          >
            <div className="grid gap-4">
              {[
                {
                  val: "relieve-pain",
                  icon: "sentiment_satisfied",
                  label: "Relieve pain & stiffness",
                },
                {
                  val: "get-stronger",
                  icon: "fitness_center",
                  label: "Get stronger & more mobile",
                },
                {
                  val: "protect-joints",
                  icon: "security",
                  label: "Protect my joints & bones",
                },
                {
                  val: "return-sport",
                  icon: "sports_tennis",
                  label: "Return to sport or active life",
                },
              ].map((opt) => (
                <OptionCard
                  key={opt.val}
                  icon={opt.icon}
                  label={opt.label}
                  selected={formState.goal === opt.val}
                  onSelect={() => update({ goal: opt.val })}
                />
              ))}
            </div>
          </StepWrapper>
        );

      /* STEP 4 — Days per week */
      case 4:
        return (
          <StepWrapper
            heading="How many days a week can you train?"
            subtext="There is no wrong answer. We design around your real life."
          >
            <div className="grid gap-4">
              {[
                {
                  val: "2",
                  icon: "event",
                  label: "2 days a week",
                  desc: "Great starting point. Consistency beats intensity.",
                },
                {
                  val: "3-4",
                  icon: "date_range",
                  label: "3 – 4 days a week",
                  desc: "The sweet spot for most people.",
                },
                {
                  val: "5+",
                  icon: "calendar_month",
                  label: "5+ days a week",
                  desc: "For those ready to fully commit.",
                },
              ].map((opt) => (
                <OptionCard
                  key={opt.val}
                  icon={opt.icon}
                  label={opt.label}
                  description={opt.desc}
                  selected={formState.daysPerWeek === opt.val}
                  onSelect={() => update({ daysPerWeek: opt.val })}
                />
              ))}
            </div>
          </StepWrapper>
        );

      /* STEP 5 — Food pref + contact */
      case 5:
        return (
          <StepWrapper
            heading="Almost there! A few final details."
            subtext="We will use this to build your nutrition guidance and reach out with your plan."
          >
            <div className="space-y-8">
              {/* Food pref */}
              <div>
                <p className="text-label-md text-on-surface mb-3">
                  Food preference
                </p>
                <div className="grid gap-3">
                  {[
                    { val: "veg", icon: "eco", label: "Vegetarian" },
                    { val: "non-veg", icon: "restaurant", label: "Non-vegetarian" },
                    { val: "eggetarian", icon: "egg_alt", label: "Eggetarian" },
                  ].map((opt) => (
                    <OptionCard
                      key={opt.val}
                      icon={opt.icon}
                      label={opt.label}
                      selected={formState.foodPref === opt.val}
                      onSelect={() => update({ foodPref: opt.val })}
                    />
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="assess-name"
                  className="text-label-md text-on-surface block mb-2"
                >
                  Your name
                </label>
                <input
                  id="assess-name"
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={formState.name}
                  onChange={(e) => update({ name: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 bg-surface-container-lowest hairline-border text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container transition-shadow"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="assess-phone"
                  className="text-label-md text-on-surface block mb-2"
                >
                  WhatsApp / phone number
                </label>
                <input
                  id="assess-phone"
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={formState.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 bg-surface-container-lowest hairline-border text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container transition-shadow"
                />
              </div>
            </div>
          </StepWrapper>
        );

      /* STEP 6 — Result */
      case 6:
        return <ResultCard formState={formState} onRestart={restart} />;

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-surface flex flex-col">
      {/* Mini header */}
      <div className="border-b border-hairline bg-surface/90 backdrop-blur-md sticky top-0 z-50">
        <AssessmentHeader />
      </div>

      {/* Progress */}
      {step < TOTAL_STEPS && (
        <div className="w-full max-w-2xl mx-auto px-5 md:px-0 pt-6">
          <ProgressBar step={step} total={TOTAL_STEPS - 1} />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-start px-5 md:px-0 py-8 md:py-12">
        <div className="w-full max-w-2xl">{renderStep()}</div>
      </div>

      {/* Navigation buttons */}
      {step < TOTAL_STEPS && (
        <div className="border-t border-hairline bg-surface-container-lowest/80 backdrop-blur-md sticky bottom-0">
          <div className="max-w-2xl mx-auto px-5 md:px-0 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className={`flex items-center gap-1 text-label-md transition-colors ${
                step === 1
                  ? "text-outline cursor-not-allowed"
                  : "text-on-surface-variant hover:text-on-surface cursor-pointer"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
              Back
            </button>

            <button
              type="button"
              onClick={next}
              disabled={!canAdvance()}
              className={`btn-primary px-6 py-3 ${
                !canAdvance() ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {step === TOTAL_STEPS - 1 ? "See My Plan" : "Next"}
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Shared step wrapper ─── */
function StepWrapper({
  heading,
  subtext,
  children,
}: {
  heading: string;
  subtext: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-display-lg-mobile md:text-headline-md text-on-surface mb-2">
        {heading}
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-8">{subtext}</p>
      {children}
    </div>
  );
}
