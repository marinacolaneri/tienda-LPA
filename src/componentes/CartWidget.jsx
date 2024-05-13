  import React from 'react';
  import { ShoppingCart } from 'lucide-react';


  export const CartWidget = ({ cartCount }) => {
    return (
      <div className="flex flex-col items-center">
        <ShoppingCart />
        <span className="mt-2">{cartCount}</span>
      </div>
    );
  };
  

  export default CartWidget;