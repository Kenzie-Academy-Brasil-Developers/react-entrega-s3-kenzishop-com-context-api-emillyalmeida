import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@ReaderStoreApi/cart")) || []
  );

  const addToCart = (item) => {
    const duplicate = cart.some((product) => product.id === item.id);

    if (!duplicate) {
      item.qtd = 1;
      localStorage.setItem(
        "@ReaderStoreApi/cart",
        JSON.stringify([...cart, item])
      );
      setCart([...cart, item]);
    } else {
      item.qtd = item.qtd + 1;
      localStorage.setItem("@ReaderStoreApi/cart", JSON.stringify([...cart]));
      setCart([...cart]);
    }
  };

  const removeCart = (id) => {
    const verificarDuplicacao = cart.find((produ) => produ.id === Number(id));

    if (verificarDuplicacao.qtd === 1) {
      const itens = cart.filter((produ) => produ.id !== Number(id));
      setCart(itens);
      localStorage.setItem("@ReaderStoreApi/cart", JSON.stringify(itens));
    } else {
      verificarDuplicacao.qtd = verificarDuplicacao.qtd - 1;
      setCart([...cart]);
      localStorage.setItem("@ReaderStoreApi/cart", JSON.stringify([...cart]));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
