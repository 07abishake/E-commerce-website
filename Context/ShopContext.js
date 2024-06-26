import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'


const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {

    cart[index] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    
    if (cartItem[itemId] > 0) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const contextValue = { all_product, cartItem, addToCart, removeToCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
