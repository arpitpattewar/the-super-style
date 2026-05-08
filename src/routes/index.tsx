import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Ruler, HeartPulse, Quote, Instagram } from "lucide-react";
import hero from "@/assets/hero.jpg";
import lifestyleKid from "@/assets/lifestyle-kid.jpg";
import physio from "@/assets/physio.jpg";
import { products, fabrics } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import slingImg from "@/assets/product-arm-sling.jpg";
import armCastImg from "@/assets/product-arm-cast.jpg";
import legCastImg from "@/assets/product-leg-cast.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheSuperCover — Recovery Can Feel Good Too" },
      { name: "description", content: "Fashion-forward arm slings, arm cast covers and leg cast covers. Designed by a physiotherapist. Made for comfort, confidence and color." },
      { property: "og:title", content: "TheSuperCover — Recovery Can Feel Good Too" },
      { property: "og:description", content: "Fashion-forward arm slings and cast covers, designed by a physiotherapist." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const categories = [
  { title: "Arm Sling", to: "/arm-sling", image: slingImg, blurb: "Breathable, beautiful, built for healing." },
  { title: "Arm Cast Cover", to: "/arm-cast", image: armCastImg, blurb: "Stretchable lycra. Endless personality." },
  { title: "Leg Cast Cover", to: "/leg-cast", image: legCastImg, blurb: "Walk in confidence, wear in style." },
] as const;

const testimonials = [
  { name: "Anita R.", role: "Mom of two", quote: "My son actually got excited to wear his sling. The superhero print made his week." },
  { name: "Priya M.", role: "Customer", quote: "I felt like myself again. It looked like an accessory, not a medical device." },
  { name: "Dr. Kavya", role: "Physiotherapist", quote: "Thoughtful sizing and beautifully designed. I recommend it to all my patients." },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-gradient opacity-70" />
        <div className="container-tsc relative grid md:grid-cols-2 gap-10 md:gap-14 py-14 md:py-24 items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="eyebrow">Fashion-forward orthopaedic essentials</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Recovery can <em className="not-italic" style={{ color: "var(--coral)" }}>feel good</em> too.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Color, comfort and confidence — woven into every sling and cast cover. For every age, every healing day.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/arm-sling"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:opacity-90 transition shadow-soft"
              >
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-6 py-3.5 font-medium hover:bg-card transition"
              >
                Our story
              </Link>
            </div>
            <div className="flex gap-6 pt-6 text-sm text-muted-foreground">
              <div><strong className="block text-foreground text-2xl font-display">10+</strong>years of physio expertise</div>
              <div><strong className="block text-foreground text-2xl font-display">7</strong>precision sizes</div>
              <div><strong className="block text-foreground text-2xl font-display">100%</strong>washable fabric</div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-coral-gradient blur-3xl opacity-20 rounded-[3rem]" />
            <img
              src={hero}
              alt="Smiling woman wearing a floral fashion arm sling"
              width={1200}
              height={1500}
              className="relative rounded-[2rem] shadow-card object-cover w-full aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-6 border-y border-border/60 bg-card overflow-hidden">
        <div className="flex marquee-track gap-12 whitespace-nowrap font-display text-xl md:text-2xl text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["Designed by a physiotherapist", "★", "Breathable cotton blend", "★", "Stretchable lycra", "★", "Made in India", "★", "Loved by parents", "★", "Ships across India", "★"].map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-tsc py-20">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <span className="eyebrow">Shop by category</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">A premium lifestyle for healing.</h2>
          </div>
          <Link to="/arm-sling" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-coral">
            All products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link key={c.title} to={c.to} className="group relative product-card">
              <div className="img-zoom aspect-[4/5] bg-secondary">
                <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                <p className="text-sm text-white/80 mt-1">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-card py-20">
        <div className="container-tsc grid md:grid-cols-3 gap-6">
          {[
            { Icon: Sparkles, title: "Color & Vibrancy", body: "Bright, thoughtfully designed prints make recovery feel less clinical and far more positive." },
            { Icon: Ruler, title: "Perfect Size & Fit", body: "Accurate sizing is critical. An improper fit can be uncomfortable and may aggravate the injury." },
            { Icon: HeartPulse, title: "Designed by Experts", body: "Built by a mother and physiotherapist with 10+ years of hands-on industry experience." },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="rounded-3xl p-8 bg-background shadow-soft">
              <div className="h-12 w-12 rounded-2xl grid place-items-center bg-coral-gradient text-white mb-5">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIZE MATTERS */}
      <section className="container-tsc py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="eyebrow">Size matters</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Measured with care, fitted for healing.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Measure from the elbow to the base of the little finger with the arm bent at 90°. From Tiny (8" × 5.5") to XL (18" × 9"), there's a precision size for every age.
          </p>
          <Link to="/arm-sling" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-medium">
            See full size chart <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-3xl bg-card shadow-card p-2">
            <div className="rounded-2xl overflow-hidden bg-warm-gradient p-8">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["T / XXS", '8" × 5.5"'],
                  ["XS", '10.5" × 6"'],
                  ["S", '12.5" × 6"'],
                  ["S+", '14" × 8"'],
                  ["M", '16" × 9"'],
                  ["L", '17" × 9"'],
                  ["XL", '18" × 9"'],
                ].map(([s, d]) => (
                  <div key={s} className="rounded-xl bg-background/80 backdrop-blur px-4 py-3">
                    <div className="text-xs text-muted-foreground">{s}</div>
                    <div className="font-display font-semibold">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHYSIO */}
      <section className="container-tsc py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={physio} alt="Physiotherapist designer" loading="lazy" className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full" />
        </div>
        <div>
          <span className="eyebrow">Designed by a physiotherapist</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">A mother's care. A clinician's eye.</h2>
          <blockquote className="mt-6 text-lg text-foreground/80 italic leading-relaxed">
            “Our mission is to bring color, style, and comfort to orthopaedic essentials — lifting moods, boosting confidence, and making recovery positive for every age. Because a happy mind helps the body heal faster.”
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Founder, TheSuperCover</p>
        </div>
      </section>

      {/* SPECIAL FEATURE */}
      <section className="container-tsc py-10">
        <div className="rounded-3xl bg-coral-gradient text-white p-10 md:p-14 shadow-glow relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <span className="eyebrow text-white/80">Thoughtful detail</span>
          <h3 className="font-display text-3xl md:text-5xl font-bold mt-2 max-w-3xl">
            Designed for recovery — and beyond.
          </h3>
          <p className="mt-4 max-w-2xl text-white/90 text-lg">
            The spacious arm sling pouch doubles as everyday storage for your phone, keys or essentials. One thoughtful detail, endless convenience.
          </p>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="container-tsc py-20">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <span className="eyebrow">Bestsellers</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Loved by every age.</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card py-20">
        <div className="container-tsc">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Loved by parents and patients</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Stories of brighter recoveries.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-background p-8 shadow-soft">
                <Quote className="h-7 w-7" style={{ color: "var(--coral)" }} />
                <p className="mt-4 text-foreground/80 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="container-tsc py-20">
        <div className="flex items-end justify-between mb-8 gap-6">
          <div>
            <span className="eyebrow">@thesupercover.com_</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Follow the feed.</h2>
          </div>
          <a href="https://www.instagram.com/thesupercover.com_" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">
            <Instagram className="h-4 w-4" /> Follow
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[hero, slingImg, lifestyleKid, armCastImg, legCastImg, physio].map((img, i) => (
            <a key={i} href="https://www.instagram.com/thesupercover.com_" target="_blank" rel="noreferrer" className="img-zoom aspect-square rounded-2xl bg-secondary block">
              <img src={img} alt="Instagram" loading="lazy" className="h-full w-full object-cover" />
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-tsc pb-20">
        <div className="rounded-3xl bg-warm-gradient p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold">Brighter days, in your inbox.</h3>
            <p className="mt-2 text-muted-foreground">New prints, kid-friendly tips and early access — twice a month, never more.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("Thanks for subscribing!"); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              required
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 rounded-full bg-background px-5 border border-border outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium">Subscribe</button>
          </form>
        </div>
      </section>

      {/* FABRIC TEASER */}
      <section className="container-tsc pb-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Prints we love</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">A fabric for every personality.</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {fabrics.map((f) => (
            <div key={f.id} className="img-zoom aspect-square rounded-2xl bg-secondary">
              <img src={f.image} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
