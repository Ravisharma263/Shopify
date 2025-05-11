import { Product } from "@/types/product";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Badge } from "@/components/ui/Badge";
import AspectRatio from "@/components/ui/AspectRatio";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card group relative rounded-lg overflow-hidden border bg-white hover:shadow-md transition-shadow">
      <Link to={`/products/${product.id}`} className="block">
        <AspectRatio ratio={1} className="relative">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button
              className={`p-2 rounded-full ${inWishlist ? 'bg-white/80' : 'bg-white/60 hover:bg-white/80'}`}
              onClick={handleWishlistClick}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart 
                className={`h-5 w-5 ${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} 
                fill={inWishlist ? "currentColor" : "none"}
              />
            </button>
            
            {product.inStock && (
              <button
                className="p-2 rounded-full bg-white/60 hover:bg-white/80"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-5 w-5 text-gray-500" />
              </button>
            )}
          </div>
        </AspectRatio>
        <div className="p-4">
          <h3 className="font-medium text-sm truncate">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold">{formatPrice(product.price)}</p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
          {!product.inStock && (
            <Badge variant="outline" className="mt-2">Out of Stock</Badge>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
