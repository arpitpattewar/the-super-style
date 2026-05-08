import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — TheSuperCover" },
      { name: "description", content: "Answers to common questions about sizing, materials, shipping, returns and care for TheSuperCover products." },
    ],
  }),
  component: FAQ,
});

const groups = [
  {
    title: "Sizing & Fit",
    items: [
      ["How do I measure for an arm sling?", "Measure from the elbow to the base of the little finger with the arm bent at 90°. Match the measurement to our size chart from Tiny (8\" × 5.5\") to XL (18\" × 9\")."],
      ["What if I'm between sizes?", "Always size up. A slightly roomier sling is more comfortable than one that pinches."],
      ["Are the cast covers stretchable?", "Yes — our arm and leg cast covers are made from premium Lycra that flexes with you."],
    ],
  },
  {
    title: "Materials & Care",
    items: [
      ["What fabric do you use?", "Arm slings: breathable cotton-blend. Cast covers: stretchable Lycra. All soft on skin and washable."],
      ["How do I wash my product?", "Machine wash cold, gentle cycle. Air dry. Avoid bleach and tumble drying."],
      ["Are the prints child-safe?", "Yes. We use skin-friendly, non-toxic dyes suitable for kids and adults."],
    ],
  },
  {
    title: "Shipping & Returns",
    items: [
      ["Do you ship across India?", "Yes. We ship pan-India with 3–7 business day delivery."],
      ["What payment methods are accepted?", "We accept UPI, credit/debit cards, net banking and popular wallets via Razorpay."],
      ["What's your return policy?", "Unused, unwashed items in original packaging can be returned within 7 days of delivery."],
    ],
  },
];

function FAQ() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-warm-gradient opacity-60" />
        <div className="container-tsc relative py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3">Quick answers, helpful guidance.</h1>
        </div>
      </section>

      <section className="container-tsc py-14 space-y-12 max-w-3xl">
        {groups.map((g, gi) => (
          <div key={g.title}>
            <h2 className="font-display text-2xl font-bold mb-4">{g.title}</h2>
            <div className="space-y-3">
              {g.items.map(([q, a], i) => {
                const key = `${gi}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key} className="rounded-2xl bg-card shadow-soft overflow-hidden">
                    <button onClick={() => setOpen(isOpen ? null : key)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                      <span className="font-display font-semibold">{q}</span>
                      {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
                    </button>
                    {isOpen && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
