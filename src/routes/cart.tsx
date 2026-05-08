import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart, cartKey } from "@/lib/cart";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [{ title: "Cart — TheSuperCover" }, { name: "description", content: "Review your TheSuperCover bag." }],
  }),
  component: Cart,
});

function Cart() {
  const { items, setQty, remove, total } = useCart();

  if (items.length === 0) {
    return (
      <section className="container-tsc py-24 text-center max-w-md mx-auto">
        <div className="h-16 w-16 mx-auto rounded-2xl bg-secondary grid place-items-center"><ShoppingBag className="h-7 w-7" /></div>
        <h1 className="font-display text-3xl font-bold mt-5">Your bag is empty</h1>
        <p className="mt-2 text-muted-foreground">Find something that lifts your day.</p>
        <Link to="/arm-sling" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium">
          Shop arm slings <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    );
  }

  return (
    <section className="container-tsc py-14 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Your bag</h1>
        {items.map((i) => {
          const k = cartKey(i);
          return (
            <div key={k} className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft">
              <img src={i.image} alt={i.name} className="h-24 w-24 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-semibold">{i.name}</h3>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {i.fabric && <>Fabric: {i.fabric}</>} {i.size && <> · Size: {i.size}</>}
                    </div>
                  </div>
                  <button onClick={() => remove(k)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(k, i.qty - 1)} className="h-9 w-9 grid place-items-center">−</button>
                    <span className="w-8 text-center text-sm font-medium">{i.qty}</span>
                    <button onClick={() => setQty(k, i.qty + 1)} className="h-9 w-9 grid place-items-center">+</button>
                  </div>
                  <div className="font-display font-semibold">₹{i.price * i.qty}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <aside className="rounded-3xl bg-card p-7 shadow-soft h-fit space-y-4 sticky top-24">
        <h3 className="font-display text-xl font-bold">Order summary</h3>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>₹{total}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span>Calculated at checkout</span></div>
        <div className="border-t border-border pt-4 flex justify-between font-display text-lg font-bold"><span>Total</span><span>₹{total}</span></div>
        <Link to="/checkout" className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-coral-gradient text-white font-medium shadow-glow">
          Proceed to checkout <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/arm-sling" className="block text-center text-sm text-muted-foreground hover:text-foreground">Continue shopping</Link>
      </aside>
    </section>
  );
}
