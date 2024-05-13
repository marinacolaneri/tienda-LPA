import React, { createContext, useState, useContext } from 'react';

const RacketContext = createContext();

export const RacketProvider = ({ children, setCartCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setLocalCartCount] = useState(0);

  const addToCart = (raqueta) => {
    setCartItems([...cartItems, raqueta]);
    setLocalCartCount(cartCount + raqueta.quantity);
    setCartCount(cartCount + raqueta.quantity);
  };

  const removeFromCart = (index) => {
    const removedItem = cartItems[index];
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    setLocalCartCount(cartCount - removedItem.quantity);
    setCartCount(cartCount - removedItem.quantity);
  };

  const vaciarCarrito = () => {
    setCartItems([]);
    setLocalCartCount(0);
    setCartCount(0);
  };

  const calcularPrecioTotalCompra = () => {
    return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '').replace(',', '')), 0);
  };

  return (
    <RacketContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        vaciarCarrito,
        calcularPrecioTotalCompra
      }}
    >
      {children}
    </RacketContext.Provider>
  );
};

export const useRacketContext = () => useContext(RacketContext);
