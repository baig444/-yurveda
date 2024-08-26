/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removefromCart = (product) =>{
    setCart(cart.filter((item)=> item.id !== product.id))
  }
  const total = cart.reduce((acc, item) => acc + item.originalPrice, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, activeCart, setActiveCart, removefromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};