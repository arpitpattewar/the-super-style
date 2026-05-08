import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { CheckCircle2, CreditCard, Wallet, Smartphone, Building2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [{ title: "Checkout — TheSuperCover" }, { name: "description", content: "Securely complete your TheSuperCover order." }],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, total, clear } = useCart();
  const [done, setDone] = useState(false);
  const [method, setMethod] = useState<"upi" | "card" | "netbanking" | "wallet">("upi");

  if (done) {
    return (
      <section className="container-tsc py-24 text-center max-w-md mx-auto">
        <CheckCircle2 className="h-14 w-14 mx-auto" style={{ color: "var(--coral)" }} />
        <h1 className="font-display text-4xl font-bold mt-4">Order placed!</h1>
        <p className="mt-2 text-muted-foreground">Thank you for choosing TheSuperCover. A confirmation has been sent to your email.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium">Back to home</Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container-tsc py-24 text-center max-w-md mx-auto">
        <h1 className="font-display text-3xl font-bold">Your bag is empty</h1>
        <Link to="/arm-sling" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium">Shop now</Link>
      </section>
    );
  }

  const methods = [
    { id: "upi" as const, label: "UPI", Icon: Smartphone },
    { id: "card" as const, label: "Card", Icon: CreditCard },
    { id: "netbanking" as const, label: "Net Banking", Icon: Building2 },
    { id: "wallet" as const, label: "Wallet", Icon: Wallet },
  ];

  return (
    <section className="container-tsc py-14 grid lg:grid-cols-3 gap-10">
      <form
        className="lg:col-span-2 space-y-6"
        onSubmit={(e) => { e.preventDefault(); clear(); setDone(true); window.scrollTo(0, 0); }}
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold">Checkout</h1>

        <div className="rounded-3xl bg-card p-7 shadow-soft space-y-4">
          <h3 className="font-display text-lg font-bold">Contact</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input required placeholder="Full name" className="h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
            <input required type="email" placeholder="Email" className="h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
            <input required placeholder="Phone" className="h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none sm:col-span-2" />
          </div>
        </div>

        <div className="rounded-3xl bg-card p-7 shadow-soft space-y-4">
          <h3 className="font-display text-lg font-bold">Shipping address</h3>
          <input required placeholder="Address line" className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
          <div className="grid sm:grid-cols-3 gap-3">
            <input required placeholder="City" className="h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
            <input required placeholder="State" className="h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
            <input required placeholder="PIN code" className="h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
          </div>
        </div>

        <div className="rounded-3xl bg-card p-7 shadow-soft">
          <h3 className="font-display text-lg font-bold mb-4">Payment method</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {methods.map(({ id, label, Icon }) => (
              <button
                type="button"
                key={id}
                onClick={() => setMethod(id)}
                className={`p-4 rounded-2xl border text-left transition ${method === id ? "border-foreground bg-secondary" : "border-border hover:border-foreground"}`}
              >
                <Icon className="h-5 w-5" />
                <div className="mt-2 font-medium text-sm">{label}</div>
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Powered by Razorpay. UPI, cards, net banking and popular wallets supported.</p>
        </div>

        <button className="w-full h-13 py-4 rounded-full bg-coral-gradient text-white font-medium shadow-glow">
          Pay ₹{total} securely
        </button>
      </form>

      <aside className="rounded-3xl bg-card p-7 shadow-soft h-fit space-y-4 sticky top-24">
        <h3 className="font-display text-xl font-bold">Order summary</h3>
        <div className="space-y-3">
          {items.map((i) => (
            <div key={i.id + i.size + i.fabric} className="flex gap-3 items-center">
              <img src={i.image} className="h-14 w-14 rounded-xl object-cover" alt={i.name} />
              <div className="flex-1 text-sm">
                <div className="font-medium">{i.name}</div>
                <div className="text-xs text-muted-foreground">{i.size} · {i.fabric} · ×{i.qty}</div>
              </div>
              <div className="text-sm font-semibold">₹{i.price * i.qty}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{total}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>Free</span></div>
          <div className="flex justify-between font-display text-lg font-bold pt-2"><span>Total</span><span>₹{total}</span></div>
        </div>
      </aside>
    </section>
  );
}
