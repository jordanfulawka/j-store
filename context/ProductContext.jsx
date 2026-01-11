'use client';

import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cart, setCart] = useState({});

  function handleIncrementProduct(price_id, num, data) {
    const newCart = {
      ...cart,
    };
    if (price_id in cart) {
      // newCart[price_id] = newCart[price_id] + num;
      newCart[price_id] = {
        ...data,
        quantity: newCart[price_id]?.quantity + num,
      };
    } else {
      newCart[price_id] = {
        ...data,
        quantity: num,
      };
    }
    if (newCart[price_id].quantity === 0) {
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
