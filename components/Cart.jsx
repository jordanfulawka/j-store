'use client';

import { useProducts } from '@/context/ProductContext';
import Link from 'next/link';

function Cart() {
  const { cart } = useProducts();
  const numProducts = Object.keys(cart).reduce((acc, cur, index) => {
    const numProduct = cart[cur].quantity;
    const sum = acc + numProduct;
    return sum;
  }, 0);
  return (
    <div>
      <Link href='/cart' className='unstyled-button'>
        <i className='fa-solid fa-bag-shopping'></i>
        {numProducts > 0 && (
          <div className='cart-num'>
            <p>{numProducts}</p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Cart;
