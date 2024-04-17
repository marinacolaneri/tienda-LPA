import React from 'react';
import raquetasData from './raquetas.json';
import { Link } from 'react-router-dom';

function UserCard({ name, addToCart }) {
  const raquetaData = raquetasData[name];

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className='user-card flex flex-col items-center pt-6'>
      <Link to={`/raqueta/${name}`}>
        <img src={raquetaData.image} alt={name} className="h-60 w-40 object-cover" />
        <h2 className="text-center">{name}</h2>
        <p>Peso: {raquetaData.Peso}</p>
        <p>Grip: {raquetaData.Grip}</p>
      </Link>
      <button className="mt-2 bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default UserCard;
