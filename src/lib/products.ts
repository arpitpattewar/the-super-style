import slingImg from "@/assets/product-arm-sling.jpg";
import armCastImg from "@/assets/product-arm-cast.jpg";
import legCastImg from "@/assets/product-leg-cast.jpg";
import fabricCartoon from "@/assets/fabric-cartoon.jpg";
import fabricFloral from "@/assets/fabric-floral.jpg";
import fabricSuper from "@/assets/fabric-superhero.jpg";
import fabricZebra from "@/assets/fabric-zebra.jpg";
import fabricMono from "@/assets/fabric-mono.jpg";
import fabricAnimals from "@/assets/fabric-animals.jpg";

export type Fabric = { id: string; name: string; image: string };

export const fabrics: Fabric[] = [
  { id: "floral", name: "Bloom Floral", image: fabricFloral },
  { id: "cartoon", name: "Happy Cartoons", image: fabricCartoon },
  { id: "superhero", name: "Superhero", image: fabricSuper },
  { id: "animals", name: "Little Animals", image: fabricAnimals },
  { id: "zebra", name: "Zebra", image: fabricZebra },
  { id: "mono", name: "Mono Dots", image: fabricMono },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "arm-sling" | "arm-cast" | "leg-cast" | "tshirt";
  price: number;
  compareAt?: number;
  image: string;
  tag?: string;
  description: string;
  fabricIds: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "sling-bloom",
    slug: "arm-sling-bloom",
    name: "Bloom Arm Sling",
    category: "arm-sling",
    price: 799,
    compareAt: 999,
    image: slingImg,
    tag: "Bestseller",
    description:
      "Breathable cotton-blend arm sling in a hand-illustrated floral print. Designed for comfort and a confident, fashion-forward recovery.",
    fabricIds: ["floral", "animals", "mono"],
    sizes: ["T", "XS", "S", "S+", "M", "L", "XL"],
  },
  {
    id: "sling-hero",
    slug: "arm-sling-superhero",
    name: "Superhero Kids Sling",
    category: "arm-sling",
    price: 749,
    image: slingImg,
    tag: "Kids favourite",
    description:
      "Bright superhero print to lift little spirits. Soft, breathable, and made to make recovery feel like an adventure.",
    fabricIds: ["superhero", "cartoon", "animals"],
    sizes: ["T", "XS", "S", "S+", "M"],
  },
  {
    id: "sling-mono",
    slug: "arm-sling-mono",
    name: "Mono Minimal Sling",
    category: "arm-sling",
    price: 849,
    image: slingImg,
    description:
      "Minimal monochrome design for adults who love a clean, fashion-first look while they heal.",
    fabricIds: ["mono", "zebra", "floral"],
    sizes: ["S", "S+", "M", "L", "XL"],
  },
  {
    id: "armcast-short",
    slug: "arm-cast-cover-short",
    name: "Short Arm Cast Cover",
    category: "arm-cast",
    price: 599,
    image: armCastImg,
    description:
      "Stretchable lycra cover for short arm casts. Soft on skin, washable, and styled like a real fashion piece.",
    fabricIds: ["mono", "floral", "animals"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "armcast-long",
    slug: "arm-cast-cover-long",
    name: "Long Arm Cast Cover",
    category: "arm-cast",
    price: 699,
    image: armCastImg,
    tag: "New",
    description:
      "Full-length lycra cover that flexes with you. Bold patterns turn your cast into a statement.",
    fabricIds: ["mono", "zebra", "superhero"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "legcast-bloom",
    slug: "leg-cast-cover-bloom",
    name: "Bloom Leg Cast Cover",
    category: "leg-cast",
    price: 799,
    image: legCastImg,
    tag: "Bestseller",
    description:
      "Stretchable, breathable lycra leg cover in a vibrant bloom print. Daily-wear friendly.",
    fabricIds: ["floral", "animals", "mono"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "legcast-mono",
    slug: "leg-cast-cover-mono",
    name: "Mono Leg Cast Cover",
    category: "leg-cast",
    price: 749,
    image: legCastImg,
    description:
      "Clean monochrome leg cover that pairs effortlessly with everything in your wardrobe.",
    fabricIds: ["mono", "zebra"],
    sizes: ["S", "M", "L"],
  },
];

export const armSlingSizeChart = [
  { size: "Tiny (T / XXS)", dims: '8" × 5.5"' },
  { size: "XS", dims: '10.5" × 6"' },
  { size: "S", dims: '12.5" × 6"' },
  { size: "S+", dims: '14" × 8"' },
  { size: "M", dims: '16" × 9"' },
  { size: "L", dims: '17" × 9"' },
  { size: "XL", dims: '18" × 9"' },
];

export function byCategory(c: Product["category"]) {
  return products.filter((p) => p.category === c);
}
export function bySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
