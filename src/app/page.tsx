import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Reconnect Wellness — a doctor-led strength training programme for joint pain, arthritis, and bone health. Stronger joints. Denser bones. A life without limits.",
};

export default function HomePage() {
  return (
    <div className="section-py container-site">
      <p className="text-eyebrow text-clay mb-4">Home</p>
      <h1 className="text-hero text-ink">
        Stronger joints. Denser bones. A life without limits.
      </h1>
      <p className="text-body-lg text-ink-soft mt-6">Content coming soon.</p>
    </div>
  );
}
