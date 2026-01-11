'use client';

import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cart, setCart] = useState({});

  function handleIncrementProduct(price_id, num) {
    const newCart = {
      ...cart,
    };
    if (price_id in cart) {
      newCart[price_id] = newCart[price_id] + num;
    } else {
      newCart[price_id] = num;
    }
    if (newCart[price_id] === 0) {
      delete newCart[price_id];
    }
    setCart(newCart);
  }

  const value = {
    cart,
    handleIncrementProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
export default ProductContext;

export const useProducts = () => useContext(ProductContext);
