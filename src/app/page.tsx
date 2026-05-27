import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface">
                Stronger joints. Denser bones. A life without the pain.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-[480px]">
                A doctor-designed strength and nutrition program for arthritis,
                joint pain, back issues, and osteoporosis. Built for real
                people, not athletes.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="/assessment" className="btn-amber">
                  <span className="material-symbols-outlined text-[20px]">
                    assignment
                  </span>
                  Take Free Assessment
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Book Consultation
                </Link>
              </div>
              <p className="text-caption text-on-surface-variant flex items-center gap-2 mt-2">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  verified
                </span>
                Designed by Dr. Shruthi Desai, Rheumatologist
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[24px] bg-secondary-container flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <span className="material-symbols-outlined text-[64px] text-primary mb-3 block">
                    fitness_center
                  </span>
                  <p className="text-label-md text-on-secondary-container">
                    Hero image: Person doing guided strength exercise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. STATS / SOCIAL PROOF ===== */}
      <section className="bg-primary py-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Members helped" },
              { value: "12 wk", label: "Structured programs" },
              { value: "4.9", label: "Average rating" },
              { value: "3", label: "Specialist tracks" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-headline-md-mobile md:text-headline-md text-on-primary">
                  {stat.value}
                </span>
                <span className="text-label-md text-on-primary/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. WHY STRENGTH WORKS ===== */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-label-md text-primary uppercase tracking-wider mb-3">
              The Science
            </p>
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface max-w-[600px] mx-auto">
              Why strength training changes everything
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "healing",
                title: "Less Pain",
                desc: "Targeted strength work reduces joint load and inflammation, easing chronic pain over time.",
              },
              {
                icon: "skeleton",
                title: "Denser Bones",
                desc: "Resistance training stimulates bone formation and slows mineral loss, especially post-menopause.",
              },
              {
                icon: "exercise",
                title: "Retained Muscle",
                desc: "After 30, you lose 3-5% muscle per decade. Strength training reverses sarcopenia at any age.",
              },
              {
                icon: "shield",
                title: "Prevent Degeneration",
                desc: "Strong muscles stabilize joints and protect cartilage, slowing the progression of osteoarthritis.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest rounded-[var(--radius-card)] p-6 soft-shadow hairline-border flex flex-col gap-4 transition-shadow duration-200 soft-shadow-hover"
              >
                <div className="w-12 h-12 rounded-[10px] bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-title-lg text-on-surface">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. THREE PROGRAM TRACKS ===== */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-label-md text-primary uppercase tracking-wider mb-3">
              Programs
            </p>
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">
              Choose your path
            </h2>
            <p className="text-body-md text-on-surface-variant mt-3 max-w-[520px] mx-auto">
              Three tracks designed for where you are today. Each one is
              personalized after your medical assessment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Prevent",
                href: "/programs/prevent",
                desc: "For those with early signs, family history, or age-related risk. Build strength before problems start.",
                tags: ["Early arthritis", "Bone health", "40+"],
                color: "bg-primary-fixed",
                icon: "spa",
              },
              {
                title: "Manage",
                href: "/programs/manage",
                desc: "For those living with arthritis, joint pain, or disc issues. Manage symptoms and build resilience.",
                tags: ["Active arthritis", "Joint pain", "Back pain"],
                color: "bg-tertiary-fixed",
                icon: "self_improvement",
              },
              {
                title: "Recover",
                href: "/programs/recover",
                desc: "For post-surgery or severe degeneration. Rebuild strength safely under medical guidance.",
                tags: ["Post-surgery", "Severe OA", "Rehab"],
                color: "bg-secondary-container",
                icon: "emergency",
              },
            ].map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="group bg-surface-container-lowest rounded-[var(--radius-card)] overflow-hidden hairline-border soft-shadow transition-all duration-200 soft-shadow-hover hover:-translate-y-1 flex flex-col"
              >
                <div
                  className={`${track.color} h-48 flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-[48px] text-primary opacity-60 group-hover:opacity-80 transition-opacity">
                    {track.icon}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-title-lg text-on-surface">
                    {track.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant flex-1">
                    {track.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-caption bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. HOW IT WORKS ===== */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-label-md text-primary uppercase tracking-wider mb-3">
              Process
            </p>
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">
              How it works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "stethoscope",
                title: "Medical Assessment",
                desc: "A detailed review of your condition, history, medications, and imaging by our medical team.",
              },
              {
                step: "02",
                icon: "fitness_center",
                title: "Strength Program",
                desc: "A personalized, progressive strength plan built around your diagnosis and pain thresholds.",
              },
              {
                step: "03",
                icon: "nutrition",
                title: "Nutrition Plan",
                desc: "Anti-inflammatory, bone-supportive nutrition guidance tailored to your condition and goals.",
              },
              {
                step: "04",
                icon: "psychology",
                title: "Psychology Support",
                desc: "Mindset coaching to help with pain anxiety, motivation, and building lasting exercise habits.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-4 text-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-caption text-accent-amber font-semibold tracking-widest">
                    STEP {item.step}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] text-primary">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-title-lg text-on-surface">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. WHAT MAKES US DIFFERENT ===== */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-label-md text-primary uppercase tracking-wider mb-3">
              Why Reconnect
            </p>
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface max-w-[560px] mx-auto">
              What makes us different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {[
              {
                icon: "medical_services",
                title: "Doctor-led, not influencer-led",
                desc: "Every program is designed by a rheumatologist. Your exercise plan is medical-grade, not copied from a fitness app.",
              },
              {
                icon: "tune",
                title: "Personalized to your diagnosis",
                desc: "No two bodies are the same. Your program accounts for your specific condition, severity, and pain points.",
              },
              {
                icon: "favorite",
                title: "Pain-first approach",
                desc: "We do not push through pain. We work around it, respect it, and reduce it systematically over time.",
              },
              {
                icon: "route",
                title: "Structured 12-week roadmap",
                desc: "Clear phases, measurable milestones, and regular check-ins so you can see real progress every month.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 bg-surface-container-lowest rounded-[var(--radius-card)] hairline-border soft-shadow"
              >
                <div className="w-11 h-11 rounded-[10px] bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-[22px]">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-title-lg text-on-surface">
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
      </section>

      {/* ===== 6. MEET DR. SHRUTHI ===== */}
      <section className="bg-primary py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-secondary-container mx-auto md:mx-0 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[56px] text-primary">
                person
              </span>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-label-md text-on-primary/60 uppercase tracking-wider">
                Your medical lead
              </p>
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-primary">
                Dr. Shruthi Desai
              </h2>
              <p className="text-label-md text-inverse-primary">
                MBBS, MD (Internal Medicine), DM (Rheumatology)
              </p>
              <p className="text-body-md text-on-primary/80 max-w-[520px]">
                With over 12 years in rheumatology, Dr. Shruthi saw patients
                struggle with generic exercise advice that worsened their
                conditions. Reconnect was born from her belief that strength
                training, done right, is the most powerful medicine for joint
                and bone health.
              </p>
              <div className="mt-2">
                <Link
                  href="/about"
                  className="btn-amber"
                >
                  Read full story
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS ===== */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-label-md text-primary uppercase tracking-wider mb-3">
              Results
            </p>
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">
              Real people, real outcomes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh, 58",
                condition: "Knee osteoarthritis",
                quote:
                  "I was told I needed a knee replacement. After 12 weeks with Reconnect, my pain dropped from 8 to 3. I am walking 5 km daily now.",
                metric: "Pain reduced by 60%",
              },
              {
                name: "Meera, 42",
                condition: "Chronic back pain & disc bulge",
                quote:
                  "I spent years avoiding movement because of my back. The team helped me build strength around the problem. I have not had a flare-up in 4 months.",
                metric: "Zero flare-ups in 4 months",
              },
              {
                name: "Amit, 65",
                condition: "Osteoporosis (T-score -3.2)",
                quote:
                  "My DEXA scan improved for the first time in years. The combination of strength training and nutrition made a visible difference.",
                metric: "DEXA score improved",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-surface-container-lowest rounded-[var(--radius-card)] p-6 hairline-border soft-shadow flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 text-accent-amber">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface-variant flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="bg-secondary-container/40 rounded-lg px-3 py-2">
                  <p className="text-label-md text-primary font-semibold">
                    {t.metric}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-hairline">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="text-label-md text-on-surface">{t.name}</p>
                    <p className="text-caption text-on-surface-variant">
                      {t.condition}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. PRICING TEASER ===== */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-label-md text-primary uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">
              Plans that fit your needs
            </h2>
            <p className="text-body-md text-on-surface-variant mt-3">
              All plans include a medical assessment and personalized program.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {[
              {
                name: "Essential",
                price: "2,499",
                period: "/month",
                features: [
                  "Medical assessment",
                  "Personalized strength plan",
                  "Monthly check-in",
                ],
                popular: false,
              },
              {
                name: "Care",
                price: "4,999",
                period: "/month",
                features: [
                  "Everything in Essential",
                  "Nutrition guidance",
                  "Weekly coaching calls",
                  "Progress tracking",
                ],
                popular: true,
              },
              {
                name: "Elite",
                price: "8,999",
                period: "/month",
                features: [
                  "Everything in Care",
                  "Psychology support",
                  "Priority doctor access",
                  "Daily coach check-ins",
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[var(--radius-card)] p-6 flex flex-col gap-5 ${
                  plan.popular
                    ? "bg-primary text-on-primary ring-2 ring-accent-amber relative"
                    : "bg-surface-container-lowest hairline-border soft-shadow text-on-surface"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-amber text-on-surface text-caption font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <p className="text-label-md opacity-70 uppercase tracking-wider">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-headline-md">
                      &#8377;{plan.price}
                    </span>
                    <span className="text-body-md opacity-60">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={`material-symbols-outlined text-[18px] mt-0.5 ${
                          plan.popular ? "text-inverse-primary" : "text-primary"
                        }`}
                      >
                        check_circle
                      </span>
                      <span className="text-body-md">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={plan.popular ? "btn-amber w-full" : "btn-secondary w-full"}
                >
                  View details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. FAQ ACCORDION ===== */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-label-md text-primary uppercase tracking-wider mb-3">
                FAQ
              </p>
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">
                Common questions
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ===== 10. FINAL CTA BAND ===== */}
      <section className="bg-primary-container py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-primary max-w-[560px] mx-auto">
            Your joints deserve better than painkillers and rest
          </h2>
          <p className="text-body-lg text-on-primary/80 mt-4 max-w-[480px] mx-auto">
            Take a 2-minute assessment and find out which program is right for
            your body.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/assessment" className="btn-amber">
              <span className="material-symbols-outlined text-[20px]">
                assignment
              </span>
              Start Free Assessment
            </Link>
            <Link
              href="/contact"
              className="btn-secondary !text-on-primary !border-on-primary/30 hover:!bg-white/10"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
