import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefautPage from "./pages/DefaultPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { FavoritosProvider } from "./context/FavoritoContext";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <FavoritosProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<DefautPage />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:category/:id"
                  element={<ProductDetails />}
                />
                <Route
                  path="/products/:category/:subcategory"
                  element={<Products />}
                />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </FavoritosProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
