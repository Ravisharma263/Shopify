import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { useWishlist } from "@/contexts/WishlistContext";
import { Heart, ShoppingCart, Trash, X } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const handleAddToCart = (productId: string, productName: string) => {
    const product = wishlist.find(item => item.id === productId);
    if (product) {
      addToCart(product);
      toast.success(`${productName} added to cart!`);
    }
  };

  if (wishlist.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-md mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-gray-500 mb-8">
              Save items you love to your wishlist. Review them anytime and easily move them to the cart.
            </p>
            <Link to="/products">
              <Button variant="primary">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">My Wishlist ({wishlist.length})</h1>
          <div className="flex gap-2">
            <Link to="/products">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
            <Button 
              variant="destructive"
              leftIcon={<Trash className="h-4 w-4" />}
              onClick={clearWishlist}
            >
              Clear Wishlist
            </Button>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {wishlist.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded border">
                          <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="ml-4">
                          <Link to={`/products/${product.id}`} className="font-medium text-gray-900 hover:underline">
                            {product.name}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {formatPrice(product.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={product.inStock ? "default" : "destructive"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          disabled={!product.inStock}
                          leftIcon={<ShoppingCart className="h-4 w-4" />}
                          onClick={() => handleAddToCart(product.id, product.name)}
                        >
                          Add to Cart
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          leftIcon={<X className="h-4 w-4" />}
                          onClick={() => removeFromWishlist(product.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wishlist;
