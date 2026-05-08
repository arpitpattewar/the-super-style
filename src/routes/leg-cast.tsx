import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { byCategory } from "@/lib/products";

export const Route = createFileRoute("/leg-cast")({
  head: () => ({
    meta: [
      { title: "Leg Cast Cover Collection — TheSuperCover" },
      { name: "description", content: "Stretchable Lycra leg cast covers in fashionable prints. Comfortable, breathable, daily-wear friendly. Sizes S, M, L." },
      { property: "og:title", content: "Leg Cast Cover Collection — TheSuperCover" },
    ],
  }),
  component: () => (
    <CollectionPage
      eyebrow="Leg Cast Cover Collection"
      title="Walk in confidence. Wear in style."
      intro="Stretchable Lycra fabric in fashionable protective designs. Comfortable fitting and built for everyday wear."
      hero=""
      products={byCategory("leg-cast")}
      material="Stretchable Lycra fabric — breathable, soft on skin, washable. Comfortable enough for daily wear."
      sizeChart={[
        { size: "S", dims: "Calf circumference 10–12\"" },
        { size: "M", dims: "Calf circumference 12–15\"" },
        { size: "L", dims: "Calf circumference 15–18\"" },
      ]}
      highlights={[
        "Sizes S / M / L for the perfect calf fit.",
        "Stretchable Lycra fabric — daily-wear friendly.",
        "Fashionable protective designs that actually look good.",
      ]}
    />
  ),
});
