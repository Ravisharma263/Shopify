import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Desk Lamp",
    description: "A sleek and modern desk lamp perfect for focused lighting while working or studying.",
    price: 347,
    images: ["https://plus.unsplash.com/premium_photo-1681412205381-c0e9681bcbb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    category: "Home",
    rating: 4.2,
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Premium Dinning Table",
    description: "A stylish wooden dining table that adds elegance to any dining space..",
    price: 678,
    images: ["https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmluZyUyMHRhYmxlfGVufDB8fDB8fHww"],
    category: "Home",
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: "3",
    name: "Air Condition",
    description: "A high-performance wall-mounted air conditioner for efficient cooling..",
    price: 1859,
    images: ["https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwY29uZGl0aW9ufGVufDB8fDB8fHww"],
    category: "Electronics",
    rating: 4.6,
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Men's Blazer",
    description: " A sharp and classy black blazer designed for formal and party wear.",
    price: 3449,
    images: ["https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhemVyfGVufDB8fDB8fHww"],
    category: "Clothing",
    rating: 4.3,
    inStock: true
  },
  {
    id: "5",
    name: "Knife Set",
    description: "A professional-grade kitchen knife set with ergonomic wooden handles.",
    price: 224,
    images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a25pZmUlMjBzZXR8ZW58MHx8MHx8fDA%3D"],
    category: "Kitchen",
    rating: 4.7,
    inStock: true
  },
  {
    id: "6",
    name: "Smart Watch",
    description:  "A feature-rich smartwatch with fitness tracking and app connectivity (currently out of stock).",
    price: 999,
    images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"],
    category: "Electronics",
    rating: 4.4,
    inStock: false
  },
  {
    id: "7",
    name: "Curtains",
    description: "Elegant and richly textured curtains to enhance your home décor.",
    price: 1299,
    images: ["https://images.unsplash.com/photo-1628428988931-14bc33099075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1cnRhaW5zfGVufDB8fDB8fHww"],
    category: "Home",
    rating: 4.5,
    inStock: true
  },
  {
    id: "8",
    name: "Shoe Rack",
    description: "A compact and stylish shoe rack to organize your footwear neatly.",
    price: 459,
    images: ["https://plus.unsplash.com/premium_photo-1672883552313-17a6f34ff1a0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    category: "Accessories",
    rating: 4.3,
    inStock: true
  },
  {
    id: "9",
    name: "A durable and eco-friendly water bottle for everyday hydration.",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 499,
    images: ["https://plus.unsplash.com/premium_photo-1681154819686-43fcc4dc4df3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    category: "Outdoor",
    rating: 4.7,
    inStock: true
  },
  {
    id: "10",
    name: "Laptop Bag",
    description: " A premium leather laptop bag offering style and protection on the go.",
    price: 899,
    images: ["https://images.unsplash.com/photo-1554412664-6e7b242f969d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwYmFnfGVufDB8fDB8fHww"],
    category: "Accessories",
    rating: 4.3,
    inStock: true
  },
  {
    id: "11",
    name: "Women's Perfume",
    description: " A luxurious and long-lasting perfume with a soft floral fragrance.",
    price: 1424,
    images: ["https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"],
    category: "Wellness",
    rating: 4.6,
    inStock: true
  },
  {
    id: "12",
    name: "Alexa",
    description: "A smart voice assistant device for hands-free control of your smart home.",
    price: 2399,
    images: ["https://images.unsplash.com/photo-1583505093722-15596e9ada6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWxleGF8ZW58MHx8MHx8fDA%3D"],
    category: "Electronics",
    rating: 4.2,
    inStock: true
  }
];

export const getProducts = () => products;

export const getProduct = (id: string) => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getCategories = () => {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories);
};
