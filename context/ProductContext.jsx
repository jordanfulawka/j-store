'use client';

import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddProduct(product) {
    setCart((cart) => [...cart, product]);
  }

  function handleDeleteProduct() {}

  const value = {
    cart,
    handleAddProduct,
    handleDeleteProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
export default ProductContext;

export const useProducts = () => useContext(ProductContext);
