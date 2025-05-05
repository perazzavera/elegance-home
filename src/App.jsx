import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefautPage from "./pages/DefaultPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { FavoritosProvider } from "./context/FavoritoContext";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetails from "./pages/ProductDetails";
import Carrinho from "./pages/Carrinho";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";

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
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produtos/:category" element={<Produtos />} />
                <Route
                  path="/produtos/:category/:subcategory"
                  element={<Produtos />}
                />
                <Route
                  path="/produtos/:category/:subcategoy/:id"
                  element={<ProductDetails />}
                />
                <Route path="/contato" element={<Contato />} />
                <Route path="/carrinho" element={<Carrinho />} />
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
