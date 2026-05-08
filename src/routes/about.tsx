import { createFileRoute } from "@tanstack/react-router";
import physio from "@/assets/physio.jpg";
import lifestyle from "@/assets/lifestyle-kid.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TheSuperCover" },
      { name: "description", content: "TheSuperCover brings color, style and comfort to orthopaedic essentials. Designed by a mother and physiotherapist." },
      { property: "og:title", content: "About TheSuperCover" },
      { property: "og:image", content: physio },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-warm-gradient opacity-60" />
        <div className="container-tsc relative py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Our story</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-tight">A mother's care meets a clinician's eye.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            TheSuperCover was born from a simple question: why should recovery feel dull? We design fashion-forward orthopaedic essentials that lift moods, boost confidence and make healing feel positive — for every age.
          </p>
        </div>
      </section>

      <section className="container-tsc py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={physio} alt="Founder" className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full" loading="lazy" />
        <div>
          <span className="eyebrow">Mission</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 leading-tight">
            To bring color, style, and comfort to orthopaedic essentials.
          </h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Lifting moods. Boosting confidence. Making recovery positive for every age — because a happy mind helps the body heal faster.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-card p-4"><div className="font-display text-2xl font-bold">10+</div><div className="text-xs text-muted-foreground">Years physio expertise</div></div>
            <div className="rounded-2xl bg-card p-4"><div className="font-display text-2xl font-bold">7</div><div className="text-xs text-muted-foreground">Sizes for perfect fit</div></div>
            <div className="rounded-2xl bg-card p-4"><div className="font-display text-2xl font-bold">100%</div><div className="text-xs text-muted-foreground">Made in India</div></div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container-tsc grid md:grid-cols-3 gap-6">
          {[
            { t: "Color & Vibrancy", b: "Bright, thoughtful prints make recovery feel less clinical and more positive." },
            { t: "Perfect Fit", b: "Accurate sizing matters. An improper fit can be uncomfortable and may aggravate the injury." },
            { t: "Designed by Experts", b: "Built by a mother and physiotherapist with 10+ years of industry experience." },
          ].map(({ t, b }) => (
            <div key={t} className="rounded-3xl p-8 bg-background shadow-soft">
              <h3 className="font-display text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-tsc py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Designed for recovery — and beyond.</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            The spacious arm sling pouch doubles as everyday storage for your phone, keys or essentials. Every detail is intentional, every print is hand-picked.
          </p>
        </div>
        <img src={lifestyle} alt="Child in sling" className="rounded-3xl shadow-card aspect-square object-cover w-full" loading="lazy" />
      </section>
    </div>
  );
}
