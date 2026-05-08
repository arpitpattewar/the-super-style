import { useState } from "react";
import { ShoppingBag, Check, Truck, Sparkles, ShieldCheck } from "lucide-react";
import { fabrics, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  products: Product[];
  highlights: string[];
  sizeChart: { size: string; dims: string }[];
  measurementGuide?: string;
  material: string;
};

export function CollectionPage(props: Props) {
  const { add } = useCart();
  const [active, setActive] = useState<Product>(props.products[0]);
  const [size, setSize] = useState<string>(active.sizes[0]);
  const [fabric, setFabric] = useState<string>(active.fabricIds[0]);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const setProduct = (p: Product) => {
    setActive(p);
    setSize(p.sizes[0]);
    setFabric(p.fabricIds[0]);
  };

  const addToCart = () => {
    add({ id: `${active.id}-${size}-${fabric}`, name: active.name, price: active.price, image: active.image, size, fabric, qty });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const fabricObj = fabrics.find((f) => f.id === fabric);

  return (
    <div>
      {/* Hero strip */}
      <section className="relative">
        <div className="absolute inset-0 bg-warm-gradient opacity-60" />
        <div className="container-tsc relative py-14 md:py-20">
          <span className="eyebrow">{props.eyebrow}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 max-w-3xl leading-tight">{props.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{props.intro}</p>
        </div>
      </section>

      {/* Product showcase */}
      <section className="container-tsc py-14 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-secondary aspect-[4/5]">
            <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {props.products.slice(0, 4).map((p) => (
              <button
                key={p.id}
                onClick={() => setProduct(p)}
                className={`rounded-xl overflow-hidden bg-secondary aspect-square ring-2 transition ${
                  p.id === active.id ? "ring-foreground" : "ring-transparent hover:ring-border"
                }`}
              >
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{active.name}</h2>
            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-display text-3xl font-semibold">₹{active.price}</span>
              {active.compareAt && <span className="text-muted-foreground line-through">₹{active.compareAt}</span>}
              <span className="text-xs uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-accent text-accent-foreground">In stock</span>
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">{active.description}</p>
          </div>

          {/* Fabric */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-display font-semibold">Fabric — <span className="text-muted-foreground font-normal">{fabricObj?.name}</span></h4>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.fabricIds.map((fid) => {
                const f = fabrics.find((x) => x.id === fid)!;
                return (
                  <button
                    key={fid}
                    onClick={() => setFabric(fid)}
                    className={`h-14 w-14 rounded-2xl overflow-hidden ring-2 transition ${fabric === fid ? "ring-foreground" : "ring-transparent hover:ring-border"}`}
                    aria-label={f.name}
                  >
                    <img src={f.image} alt={f.name} className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size */}
          <div>
            <h4 className="font-display font-semibold mb-3">Size</h4>
            <div className="flex flex-wrap gap-2">
              {active.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-11 min-w-11 px-4 rounded-full border text-sm font-medium transition ${
                    size === s ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="inline-flex items-center rounded-full border border-border bg-card">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-11 w-11 grid place-items-center text-lg" aria-label="Decrease">−</button>
              <span className="w-8 text-center font-medium">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="h-11 w-11 grid place-items-center text-lg" aria-label="Increase">+</button>
            </div>
            <button
              onClick={addToCart}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              {justAdded ? <><Check className="h-4 w-4" /> Added</> : <><ShoppingBag className="h-4 w-4" /> Add to cart</>}
            </button>
            <a
              href="/checkout"
              onClick={(e) => { e.preventDefault(); addToCart(); window.location.href = "/checkout"; }}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-coral-gradient text-white font-medium shadow-glow"
            >
              Buy now
            </a>
          </div>

          {/* Trust */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
            {[
              { Icon: ShieldCheck, t: "Designed by physio" },
              { Icon: Sparkles, t: "Washable fabric" },
              { Icon: Truck, t: "Pan-India shipping" },
            ].map(({ Icon, t }) => (
              <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-4 w-4" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile buy bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-background/95 backdrop-blur border-t border-border">
        <div className="container-tsc py-3 flex items-center gap-3">
          <div>
            <div className="text-xs text-muted-foreground">{active.name}</div>
            <div className="font-display font-semibold">₹{active.price}</div>
          </div>
          <button onClick={addToCart} className="ml-auto inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>

      {/* Highlights */}
      <section className="bg-card py-16">
        <div className="container-tsc grid md:grid-cols-3 gap-6">
          {props.highlights.map((h) => (
            <div key={h} className="rounded-3xl bg-background p-6 shadow-soft flex gap-3">
              <Check className="h-5 w-5 mt-0.5" style={{ color: "var(--coral)" }} />
              <p className="text-foreground/80">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Material + size chart */}
      <section className="container-tsc py-20 grid md:grid-cols-2 gap-10">
        <div>
          <span className="eyebrow">Material</span>
          <h3 className="font-display text-3xl font-bold mt-2">{props.material.split(".")[0]}.</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{props.material}</p>
          {props.measurementGuide && (
            <div className="mt-6 rounded-2xl bg-warm-gradient p-5">
              <div className="text-xs uppercase font-semibold tracking-wider text-foreground/70">Measurement guide</div>
              <p className="mt-1 font-display text-lg">{props.measurementGuide}</p>
            </div>
          )}
        </div>
        <div className="rounded-3xl bg-card shadow-soft p-2">
          <div className="rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-5 py-3 text-sm font-semibold">Size</th>
                  <th className="px-5 py-3 text-sm font-semibold">Dimensions</th>
                </tr>
              </thead>
              <tbody>
                {props.sizeChart.map((row, i) => (
                  <tr key={row.size} className={i % 2 ? "bg-background" : "bg-secondary/40"}>
                    <td className="px-5 py-3 font-display font-medium">{row.size}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.dims}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fabric gallery */}
      <section className="container-tsc pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Fabric & design gallery</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Pick a print that feels like you.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {fabrics.map((f) => (
            <div key={f.id} className="rounded-2xl overflow-hidden bg-secondary">
              <div className="img-zoom aspect-square">
                <img src={f.image} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="px-3 py-2 text-xs font-medium text-center">{f.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* More products */}
      <section className="container-tsc pb-24">
        <h3 className="font-display text-2xl font-bold mb-6">More from this collection</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  );
}
