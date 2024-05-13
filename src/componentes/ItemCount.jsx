import React, { useState } from 'react';
import { useRacketContext } from './RacketContext';

function ItemCount({ raquetaNombre, stock, price, image }) {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useRacketContext();

  const handleAddToCart = () => {
    const raqueta = { name: raquetaNombre, quantity: cantidad, price: String(price), image };
    addToCart(raqueta);
  };

  return (
    <div className="flex items-center"><input type="number" value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} min="1" max={stock} className="w-16 px-3 py-1 text-center border border-gray-300 rounded mr-2" />
      <button 
        onClick={handleAddToCart} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"> Agregar al carrito </button>
    </div>
  );
}

export default ItemCount;

