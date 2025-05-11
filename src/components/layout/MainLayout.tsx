import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-shop-primary">
              Shopify
            </Link>
            
            <div className="flex items-center space-x-2">
              <nav className="hidden md:flex items-center space-x-8 mr-8">
                <Link to="/" className="text-base font-medium hover:text-shop-primary transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-base font-medium hover:text-shop-primary transition-colors">
                  Products
                </Link>
              </nav>
              
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-6 w-6" />
                </Button>
              </Link>
              
              <Link to="/wishlist" className="relative">
                <Button variant="ghost" size="icon">
                  <Heart className="h-6 w-6" />
                  {wishlist.length > 0 && (
                    <span className={cn(
                      "absolute -top-1 -right-1 rounded-full bg-shop-primary text-white text-xs w-5 h-5 flex items-center justify-center",
                      wishlist.length > 9 ? "text-[10px]" : ""
                    )}>
                      {wishlist.length > 99 ? '99+' : wishlist.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 w-full border-t bg-background z-50">
        <div className="flex justify-around items-center py-3">
          <Link to="/" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </Link>
          <Link to="/products" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Products</span>
          </Link>
          <Link to="/wishlist" className="flex flex-col items-center text-xs relative">
            <Heart className="h-6 w-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 right-0 rounded-full bg-shop-primary text-white text-xs w-4 h-4 flex items-center justify-center">
                {wishlist.length > 9 ? '9+' : wishlist.length}
              </span>
            )}
            <span>Wishlist</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-xs">
            <ShoppingCart className="h-6 w-6" />
            <span>Cart</span>
          </Link>
        </div>
      </div>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t mt-12 py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Shopify</h3>
              <p className="text-sm text-gray-600">
                Your one-stop shop for all your favorite products. Save items to your wishlist and come back to them later!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-shop-primary transition-colors">Home</Link></li>
                <li><Link to="/products" className="text-gray-600 hover:text-shop-primary transition-colors">Products</Link></li>
                <li><Link to="/wishlist" className="text-gray-600 hover:text-shop-primary transition-colors">Wishlist</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
