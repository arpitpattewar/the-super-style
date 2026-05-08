import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  fabric?: string;
  qty: number;
};

type Ctx = {
  items: CartItem[];
  add: (i: CartItem) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
};

const CartCtx = createContext<Ctx | null>(null);
const STORAGE = "tsc-cart-v1";
const keyOf = (i: Pick<CartItem, "id" | "size" | "fabric">) =>
  `${i.id}|${i.size ?? ""}|${i.fabric ?? ""}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: Ctx["add"] = (i) =>
    setItems((curr) => {
      const k = keyOf(i);
      const found = curr.find((x) => keyOf(x) === k);
      if (found)
        return curr.map((x) => (keyOf(x) === k ? { ...x, qty: x.qty + i.qty } : x));
      return [...curr, i];
    });

  const remove: Ctx["remove"] = (key) =>
    setItems((curr) => curr.filter((x) => keyOf(x) !== key));

  const setQty: Ctx["setQty"] = (key, qty) =>
    setItems((curr) =>
      curr
        .map((x) => (keyOf(x) === key ? { ...x, qty: Math.max(1, qty) } : x))
        .filter((x) => x.qty > 0),
    );

  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartCtx.Provider value={{ items, add, remove, setQty, clear, total, count }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export const cartKey = keyOf;
