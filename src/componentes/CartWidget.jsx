import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react'

export const CartWidget = () => {
  const cartCount = 2;
  return (
    <div className="flex flex-col items-center">
      <ShoppingCart />
      <span className="mt-2">{cartCount}</span>
    </div>
  );
};
export default CartWidget; 