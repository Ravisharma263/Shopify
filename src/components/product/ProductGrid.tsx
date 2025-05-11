
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

const ProductGrid = ({ products, emptyMessage = "No products found" }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-gray-500 text-center">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
