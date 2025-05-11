
import { getFeaturedProducts } from "@/lib/products";
import ProductGrid from "../product/ProductGrid";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <Link to="/products" className="text-shop-primary hover:underline">
            View all
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
