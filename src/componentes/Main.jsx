import React from 'react';
import { Link } from 'react-router-dom';
import raquetasData from './raquetas.json';
import UserCard from './UserCard';

function Main({ addToCart }) {
  return (
    <main className='p-4 grow'>
      <h1 className="text-5xl font-bold italic text-pink-500 text-center font-serif shadow-lg">LPA Tienda</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 usuarios">
        {Object.keys(raquetasData).map((raqueta) => (
          <UserCard key={raqueta} name={raqueta} addToCart={addToCart} />
        ))}
      </section>
    </main>
  );
}

export default Main;