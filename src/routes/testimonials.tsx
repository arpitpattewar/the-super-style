import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — TheSuperCover" },
      { name: "description", content: "Stories from parents, patients and physiotherapists who chose TheSuperCover." },
    ],
  }),
  component: Testimonials,
});

const items = [
  { name: "Anita R.", role: "Mom of two", rating: 5, quote: "My son actually got excited to wear his sling. The superhero print made his week and lifted everyone's spirits." },
  { name: "Priya M.", role: "Customer", rating: 5, quote: "I felt like myself again. It looked like an accessory, not a medical device. So much love for the floral print." },
  { name: "Dr. Kavya", role: "Physiotherapist", rating: 5, quote: "Thoughtful sizing and beautifully designed. I recommend it to all my patients without hesitation." },
  { name: "Rohan S.", role: "Customer", rating: 5, quote: "The stretchable lycra cast cover is a game changer. Comfortable all day and looks fantastic." },
  { name: "Meera D.", role: "Mom", rating: 5, quote: "Such a thoughtful brand. The fact that the pouch doubles as storage is brilliant." },
  { name: "Karthik V.", role: "Customer", rating: 5, quote: "Premium feel, great fabric, and shipping was super quick. Already recommended to family." },
];

function Testimonials() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-warm-gradient opacity-60" />
        <div className="container-tsc relative py-16 md:py-24 max-w-3xl text-center mx-auto">
          <span className="eyebrow">Testimonials</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-tight">Brighter recoveries, in their words.</h1>
          <div className="mt-5 inline-flex items-center gap-1 text-foreground/80">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" style={{ color: "var(--coral)" }} />)}
            <span className="ml-2 font-medium">Rated 4.9 by 500+ happy customers</span>
          </div>
        </div>
      </section>

      <section className="container-tsc py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.name} className="rounded-3xl bg-card p-7 shadow-soft">
            <Quote className="h-7 w-7" style={{ color: "var(--coral)" }} />
            <div className="flex gap-0.5 mt-3">
              {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--coral)" }} />)}
            </div>
            <p className="mt-3 text-foreground/80 leading-relaxed">"{t.quote}"</p>
            <div className="mt-6">
              <div className="font-display font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
