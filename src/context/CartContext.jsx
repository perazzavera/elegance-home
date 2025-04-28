import { createContext, useState, useEffect } from "react";

// Cria o contexto
export const CartContext = createContext();

// Cria o Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Atualiza o localStorage sempre que o carrinho mudar
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Função para adicionar um produto ao carrinho
  function addToCart(product, quantity = 1, color = "") {
    const productExists = cart.find(
      (item) => item.id === product.id && item.color === color
    ); // Verifica se o produto e a cor já estão no carrinho

    if (productExists) {
      // Se o produto e cor já existirem no carrinho, incrementa a quantidade
      const updateCart = cart.map((item) => {
        if (item.id === product.id && item.color === color) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(updateCart);
    } else {
      // Se o produto ou a cor não existirem no carrinho, adiciona com a quantidade e a cor fornecida
      setCart([...cart, { ...product, quantity, color }]);
    }
  }

  // Função para remover um produto do carrinho
  function removeFromCart(id, color) {
    const updateCart = cart.filter(
      (item) => item.id !== id || item.color !== color
    );
    setCart(updateCart);
  }

  // Função para atualizar a quantidade do item no carrinho
  function updateQuantity(id, color, newQuantity) {
    if (newQuantity > 0) {
      const updatedCart = cart.map((item) =>
        item.id === id && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCart(updatedCart);
    }
  }

  // Função para calcular o valor total do carrinho
  function getTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
