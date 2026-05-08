import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/tshirts")({
  head: () => ({
    meta: [
      { title: "T-Shirts — Coming Soon | TheSuperCover" },
      { name: "description", content: "Our recovery-friendly T-shirt collection is on the way. Sign up to be the first to know." },
    ],
  }),
  component: TShirts,
});

function TShirts() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-warm-gradient opacity-60" />
      <div className="container-tsc relative py-24 md:py-36 text-center max-w-2xl mx-auto">
        <span className="eyebrow">Coming soon</span>
        <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 leading-[1.05]">
          T-Shirts, <em className="not-italic" style={{ color: "var(--coral)" }}>reimagined</em> for recovery.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Soft fabrics, easy access design, and the same vibrant TheSuperCover spirit. Be the first to know when we drop.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("You're on the list!"); }}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input required type="email" placeholder="Your email" className="flex-1 h-12 rounded-full bg-background px-5 border border-border focus:ring-2 focus:ring-ring outline-none" />
          <button className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> Notify me</button>
        </form>
        <Link to="/arm-sling" className="mt-6 inline-block text-sm font-medium underline-offset-4 hover:underline">Meanwhile, shop the slings →</Link>
      </div>
    </section>
  );
}
