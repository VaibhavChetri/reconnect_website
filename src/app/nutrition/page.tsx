import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutrition — Fueling Joint Recovery",
  description:
    "Anti-inflammatory nutrition designed for Indian diets. Personalized macros, condition-specific meal plans, and supplement guidance reviewed by a rheumatologist.",
};

const cards = [
  {
    icon: "local_fire_department",
    title: "Anti-Inflammatory Focus",
    description:
      "Chronic inflammation drives joint destruction, bone loss, and pain. Your nutrition plan is built around foods that actively reduce inflammation — omega-3 rich sources, antioxidant-dense vegetables, turmeric, and anti-inflammatory fats — while minimizing triggers like refined sugar, processed oils, and excess alcohol.",
    details: [
      "Evidence-based anti-inflammatory food framework",
      "Foods that reduce CRP and inflammatory markers",
      "Trigger identification for your specific condition",
    ],
  },
  {
    icon: "restaurant_menu",
    title: "Indian Meal Plans",
    description:
      "We do not hand you a Western diet plan and call it personalized. Your meals are built around the foods you actually eat — dal, roti, rice, sabzi, curd, and seasonal Indian ingredients. Vegetarian, non-vegetarian, or regional preferences are all accounted for.",
    details: [
      "Familiar Indian meals, not foreign food charts",
      "Vegetarian and non-vegetarian options",
      "Regional and seasonal ingredient flexibility",
    ],
  },
  {
    icon: "monitoring",
    title: "Personalized Macros",
    description:
      "Your protein, carbohydrate, and fat targets are calculated based on your body composition, activity level, condition, and goals. Whether you need to preserve muscle mass, support bone density, or manage weight alongside arthritis, your numbers are tailored to you.",
    details: [
      "Protein targets for muscle preservation",
      "Calcium and vitamin D optimization",
      "Calorie guidance aligned with your goals",
    ],
  },
];

export default function NutritionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
                Nutrition Pillar
              </p>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
                Fueling Joint Recovery
              </h1>
              <p className="text-body-lg text-on-primary/80">
                What you eat is either feeding the inflammation or fighting it.
                Your nutrition plan is designed around anti-inflammatory science,
                adapted to Indian meals, and personalized to your condition,
                medications, and lifestyle.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-on-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-primary/60 text-center">
                  Vibrant Indian thali with anti-inflammatory ingredients — turmeric dal, leafy greens, curd, and fresh fruit
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
              Nutrition that works with your treatment
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Your doctor manages your disease. Your nutrition manages the
              environment your body heals in. We make sure the two work together.
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

      {/* Supplements note */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-surface-container-high rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
                <p className="text-body-md text-on-surface-variant text-center">
                  Close-up of calcium, vitamin D, and omega-3 supplements alongside natural food sources
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
                Supplements — only what you need
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-4">
                The supplement industry thrives on confusion. We cut through the
                noise. Dr. Shruthi reviews your blood work and condition to
                recommend only the supplements that have evidence behind them and
                relevance to your situation.
              </p>
              <p className="text-body-md text-on-surface-variant">
                Common recommendations include vitamin D, calcium, omega-3 fatty
                acids, and collagen — but only when indicated. We never sell
                supplements. Our role is to advise, not to profit from products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Eat to recover. Eat to strengthen.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Your personalized nutrition plan starts with understanding your
            condition. Take the free assessment to begin.
          </p>
          <Link href="/assessment" className="btn-amber">
            Take the free assessment
          </Link>
        </div>
      </section>
    </>
  );
}
