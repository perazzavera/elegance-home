import { createContext, useState, useEffect, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [shippingMethod, setShippingMethod] = useState("free");

  // Métodos de envio disponíveis
  const shippingMethods = {
    standard: 15, // Frete padrão
    express: 25, // Frete expresso
    free: 0, // Frete grátis
  };

  // Calcula o subtotal do carrinho (garante que price seja número)
  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + (Number(item.price) || 0) * item.quantity,
        0
      ),
    [cart]
  );

  // Frete grátis se subtotal >= 150, senão usa o método selecionado (com fallback para 0)
  const shipping = useMemo(
    () => (subtotal >= 150 ? 0 : shippingMethods[shippingMethod] || 0),
    [subtotal, shippingMethod]
  );

  // Atualiza o localStorage quando o carrinho muda
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  // Adiciona item ao carrinho (com cor e quantidade)
  const addToCart = (product, quantity = 1, color = "") => {
    const productExists = cart.find(
      (item) => item.id === product.id && item.color === color
    );
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity, color }]);
    }
  };

  // Remove item do carrinho
  const removeFromCart = (id, color) => {
    setCart(cart.filter((item) => item.id !== id || item.color !== color));
  };

  // Atualiza quantidade de um item
  const updateQuantity = (id, color, newQuantity) => {
    if (newQuantity > 0) {
      setCart(
        cart.map((item) =>
          item.id === id && item.color === color
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Limpa o carrinho
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calcula o total (subtotal + frete)
  const getTotal = () => subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        shippingMethod,
        setShippingMethod,
        shipping,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
