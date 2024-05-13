import React from 'react';
import { useRacketContext } from '../RacketContext';
import { Link } from 'react-router-dom';
  
function Carrito() {
  const { cartItems, removeFromCart, vaciarCarrito, calcularPrecioTotalCompra } = useRacketContext();

  if (!cartItems || cartItems.length === 0) {
    return <p>No hay elementos en el carrito.</p>;
  } 

  return (
    <div className="max-w-4xl mx-auto p-8 flex">
      <div className="w-1/2 pr-8">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.image} alt={item.name} className="h-16 w-16 mr-4" />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>Cantidad: <span className="font-bold">{item.quantity}</span></p>
              <p>Precio unitario: <span className="font-bold">{item.price}</span></p>
              <p>Precio total: <span className="font-bold">${(item.quantity * parseFloat(item.price.replace('$', '').replace(',', ''))).toFixed(2)}</span></p>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <div className="mt-4">
          <p className="font-bold">Precio total de la compra: <span className="text-2xl text-green-700">${calcularPrecioTotalCompra().toFixed(2)}</span></p>
          <div className="flex justify-between mt-6">
            <button onClick={vaciarCarrito} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">Vaciar carrito</button>
            <Link to="/Checkout" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Finalizar compra</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;

