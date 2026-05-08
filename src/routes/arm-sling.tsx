import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { byCategory, armSlingSizeChart } from "@/lib/products";

export const Route = createFileRoute("/arm-sling")({
  head: () => ({
    meta: [
      { title: "Arm Sling Collection — TheSuperCover" },
      { name: "description", content: "Breathable cotton-blend arm slings in vibrant prints. Designed by a physiotherapist with seven precision sizes from Tiny to XL." },
      { property: "og:title", content: "Arm Sling Collection — TheSuperCover" },
      { property: "og:description", content: "Breathable cotton-blend arm slings, fashion-forward and physiotherapist-designed." },
    ],
  }),
  component: () => (
    <CollectionPage
      eyebrow="Arm Sling Collection"
      title="The arm sling that feels like a fashion piece."
      intro="Vibrant fabric designs, breathable cotton-blend, and a spacious pouch that doubles as everyday storage. Made for kids, teens and adults."
      hero=""
      products={byCategory("arm-sling")}
      material="Breathable cotton-blend fabric, machine washable, soft-on-skin lining and adjustable shoulder strap. Designed for comfort and psychological positivity."
      measurementGuide={'Measure from elbow to base of little finger with arm at a 90° angle.'}
      sizeChart={armSlingSizeChart}
      highlights={[
        "Multiple vibrant prints — cartoon, floral, superhero, animal, zebra and minimal mono.",
        "Spacious inner pouch doubles as storage for phone, keys and everyday essentials.",
        "Seven precision sizes from Tiny (8\" × 5.5\") to XL (18\" × 9\").",
      ]}
    />
  ),
});
