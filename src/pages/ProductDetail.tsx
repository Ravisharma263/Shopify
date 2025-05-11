import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "@/lib/products";
import MainLayout from "@/components/layout/MainLayout";
import { ShoppingCart, Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProduct(id) : null;
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  const inWishlist = isInWishlist(product.id);
  
  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square overflow-hidden rounded-lg border bg-white">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="mb-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              
              <div className="flex items-center mt-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{product.rating} ({Math.floor(product.rating * 10)} reviews)</span>
                </div>
              </div>
              
              <p className="text-2xl font-semibold mb-6">{formatPrice(product.price)}</p>
              
              <div className="prose max-w-none mb-8">
                <p>{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium mb-2">Availability</h3>
                <Badge variant={product.inStock ? "default" : "destructive"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                disabled={!product.inStock}
                variant="primary" 
                fullWidth
                leftIcon={<ShoppingCart className="h-5 w-5" />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              
              <Button 
                variant={inWishlist ? "secondary" : "outline"} 
                fullWidth
                leftIcon={<Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />}
                onClick={handleWishlistClick}
              >
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
