import { Product } from "@/types/product";
import headphonesImg from "@/assets/product-headphones.jpg";
import watchImg from "@/assets/product-watch.jpg";
import phoneImg from "@/assets/product-phone.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import earbudsImg from "@/assets/product-earbuds.jpg";
import tabletImg from "@/assets/product-tablet.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-fidelity audio with active noise cancellation",
    price: 24999,
    image: headphonesImg,
    category: "Audio",
    rating: 4.8,
    reviews: 234,
    inStock: true,
  },
  {
    id: "2",
    name: "Elegant Leather Watch",
    description: "Timeless design with premium leather band",
    price: 37499,
    image: watchImg,
    category: "Accessories",
    rating: 4.9,
    reviews: 187,
    inStock: true,
  },
  {
    id: "3",
    name: "Modern Smartphone",
    description: "Latest technology in a sleek design",
    price: 74999,
    image: phoneImg,
    category: "Electronics",
    rating: 4.7,
    reviews: 521,
    inStock: true,
  },
  {
    id: "4",
    name: "Premium Laptop",
    description: "Powerful performance in an ultralight body",
    price: 133499,
    image: laptopImg,
    category: "Electronics",
    rating: 4.9,
    reviews: 342,
    inStock: true,
  },
  {
    id: "5",
    name: "Wireless Earbuds Pro",
    description: "True wireless audio with premium sound",
    price: 14999,
    image: earbudsImg,
    category: "Audio",
    rating: 4.6,
    reviews: 412,
    inStock: true,
  },
  {
    id: "6",
    name: "Sleek Tablet",
    description: "Versatile tablet for work and play",
    price: 58299,
    image: tabletImg,
    category: "Electronics",
    rating: 4.8,
    reviews: 298,
    inStock: true,
  },
];
