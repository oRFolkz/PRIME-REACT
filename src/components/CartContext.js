import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {

  const [ cartItems, setCartItems ] = useState([]);
  const [ openCart, setOpenCart ] = useState(false)
  const [ animationOnClick, setAnimationOnClick ] = useState(null)

  const addCart = (item, price) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, price }
    ])
  }

  const removeCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems]
      updatedCartItems.pop()
      return updatedCartItems
    });
  }

  const clickAnimation = (id) => {
    setAnimationOnClick(id);
    setTimeout(() => {
    setAnimationOnClick(null);
    }, 500);
  }

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      openCart, 
      animationOnClick,
      addCart, 
      setOpenCart,
      clickAnimation,
      removeCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
