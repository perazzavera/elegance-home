import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Sumario from "./Sumario";
import CarrinhoVazio from "./CarrinhoVazio";
import ListaItens from "./ListaItens";

const formatPrice = (price) => {
  return `R$${price.toFixed(2).replace(".", ",")}`;
};

export default function Carrinho() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="pb-10 lg:px-20">
        <h2 className="font-dm text-3xl px-4 pt-4 text-gray-800">
          Carrinho de compras
        </h2>
        <div className="">
          {cart.length === 0 ? (
            <CarrinhoVazio />
          ) : (
            <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ListaItens
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                formatPrice={formatPrice}
                cart={cart}
              />
              <Sumario />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
