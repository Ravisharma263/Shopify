import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { ShoppingCart, Trash, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  const handleCheckout = () => {
    toast.success("Checkout functionality not implemented yet");
  };

  if (cart.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <div className="space-x-4">
              <Link to="/products">
                <Button variant="primary">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/wishlist">
                <Button variant="outline">
                  View Wishlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart ({cart.length})</h1>
          <div className="flex gap-2">
            <Link to="/products">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
            <Button 
              variant="destructive"
              leftIcon={<Trash className="h-4 w-4" />}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subtotal
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart.map((item) => (
                      <tr key={item.product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded border">
                              <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="ml-4">
                              <Link to={`/products/${item.product.id}`} className="font-medium text-gray-900 hover:underline">
                                {item.product.name}
                              </Link>
                              <p className="text-sm text-gray-500 mt-1">{item.product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {formatPrice(item.product.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center border rounded-md w-28">
                            <button 
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.product.id, Math.max(1, item.quantity - 1))}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="flex-1 text-center">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                          >
                            <Trash className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-3 font-semibold">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>{formatPrice(getCartTotal())}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
