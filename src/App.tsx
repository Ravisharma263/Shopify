
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CartProvider } from "./contexts/CartContext";

import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" />
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
