import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  const href =
    p.category === "arm-sling"
      ? "/arm-sling"
      : p.category === "arm-cast"
      ? "/arm-cast"
      : p.category === "leg-cast"
      ? "/leg-cast"
      : "/tshirts";
  return (
    <Link to={href} className="product-card group block">
      <div className="img-zoom aspect-[4/5] bg-secondary">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display font-semibold text-base">{p.name}</h3>
          {p.tag && (
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-accent text-accent-foreground">
              {p.tag}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-display text-lg font-semibold">₹{p.price}</span>
          {p.compareAt && (
            <span className="text-sm text-muted-foreground line-through">₹{p.compareAt}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
