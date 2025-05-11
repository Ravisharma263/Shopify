
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Shop your favorites</span>
              <span className="block text-shop-primary">Save for later</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
              Discover amazing products and save them to your wishlist. Come back whenever you're ready to make your purchase.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/wishlist">View Wishlist</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative lg:max-w-md mx-auto">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1721152531778-47bb07d618bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBjb2xsZWN0aW9ufGVufDB8fDB8fHww"
                alt="Shopping collection"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-shop-primary/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
