import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { byCategory } from "@/lib/products";

export const Route = createFileRoute("/arm-cast")({
  head: () => ({
    meta: [
      { title: "Arm Cast Cover Collection — TheSuperCover" },
      { name: "description", content: "Stretchable lycra arm cast covers in trendy designs. Short and long arm options. Soft on skin, washable and built to flex with you." },
      { property: "og:title", content: "Arm Cast Cover Collection — TheSuperCover" },
    ],
  }),
  component: () => (
    <CollectionPage
      eyebrow="Arm Cast Cover Collection"
      title="Casts deserve to be styled too."
      intro="Stretchable lycra fabric in trendy patterns. Soft on skin, washable, and available in short and long arm options."
      hero=""
      products={byCategory("arm-cast")}
      material="Premium stretchable Lycra fabric, soft-on-skin, machine washable and quick to dry. Engineered to flex without losing shape."
      sizeChart={[
        { size: "S", dims: "Forearm circumference 8–10\"" },
        { size: "M", dims: "Forearm circumference 10–12\"" },
        { size: "L", dims: "Forearm circumference 12–14\"" },
      ]}
      highlights={[
        "Available in short arm and long arm cover lengths.",
        "Stretchable Lycra moves with you — no slipping, no pinching.",
        "Trendy patterns make your cast feel like an accessory, not a limitation.",
      ]}
    />
  ),
});
