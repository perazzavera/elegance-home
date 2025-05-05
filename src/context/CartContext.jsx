import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

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

  // Limpa o carrinho
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calcula o subtotal do carrinho (garante que price seja número)
  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + (Number(item.price) || 0) * item.quantity,
      0
    );
  };

  const totalItens = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
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

  const metodosEnvio = [
    {
      id: 1,
      label: "Envio Padrão",
      dias: "3-5 dias úteis",
      valor: 15.9,
    },
    {
      id: 2,
      label: "Envio Expresso",
      dias: "1-2 dias úteis",
      valor: 25.9,
    },
  ];

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    cidade: "",
    estado: "",
    envio: "",
  });

  const formatPrice = (price) => {
    return `R$${price.toFixed(2).replace(".", ",")}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
        totalItens,
        metodosEnvio,
        formData,
        setFormData,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
