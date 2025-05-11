export interface Product {
  id: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Basic Tee",
    href: "/products/1",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: "Black",
    description: "The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit."
  },
  {
    id: "2",
    name: "Basic Tee",
    href: "/products/2",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in off-white.",
    price: 35,
    color: "Off-white",
    description: "The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit."
  },
  {
    id: "3",
    name: "Basic Tee",
    href: "/products/3",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in navy.",
    price: 35,
    color: "Navy",
    description: "The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit."
  },
  {
    id: "4",
    name: "Basic Tee",
    href: "/products/4",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: "Aspen White",
    description: "The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit."
  }
];

export const getProducts = async () => {
  return products;
};

export const getProduct = async (id: string) => {
  return products.find(p => p.id === id);
};