import React from 'react';
import { Link } from 'react-router-dom';
import { app } from './firebase';

function UserCard({ raqueta, addToCart }) {
  return (
    <div className='user-card flex flex-col items-center pt-6'>
      <Link to={`/raqueta/${raqueta.name}`}>
        <img src={raqueta.image} alt={raqueta.name} className="h-60 w-40 object-cover" />
        <h2 className="text-center">{raqueta.name}</h2>
        <p>Peso: {raqueta.Peso}</p>
        <p>Grip: {raqueta.Grip}</p>
      </Link>
    </div>
  );
}

export default UserCard;
