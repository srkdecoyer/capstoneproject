import React, { useState, useEffect } from "react";
import { usePersistedState } from '../components/usePersistedState'

const CartContext = React.createContext();

//export const CartProvider = ({ children }) => {
const CartProvider = ({ children }) => {

    console.log('CartProvider : Begin');
  //Use persisted storage so that on refreshing the page, the cart doesn't get cleared.
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  const [cart, setCart] = usePersistedState('trbCart',[]);
  const [total, setTotal] = usePersistedState('trbTotal', 0);

  useEffect(() => {
    const total = [...cart].reduce((total, { amount, price }) => {
      return (total += amount * price);
    }, 0);
    setTotal(parseFloat(total.toFixed(2)));
  }, [cart]);

  const increaseAmount = (id) => {
    const updatedCart = [...cart].map((item) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : item;
    });
    setCart(updatedCart);
  };

  const decreaseAmount = (id, amount) => {
    let updatedCart = [];
    if (amount === 1) {
      updatedCart = [...cart].filter((item) => item.id !== id);
    } else {
      updatedCart = [...cart].map((item) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item;
      });
    }
    setCart(updatedCart);
  };

  const addToCart = (book) => {
    const { id, title, price, image } = book;
    const cartItem = [...cart].find((item) => item.id === id);
    if (cartItem) {
      increaseAmount(id);
    } else {
      const cartItems = [...cart, { id, title, image, price, amount: 1 }];
      setCart(cartItems);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, increaseAmount, decreaseAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
