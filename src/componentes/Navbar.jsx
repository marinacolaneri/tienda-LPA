import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../img/logo1.png";
import { CartWidget } from './CartWidget';

function Navbar({ cartCount }) {
  return (
    <div className='flex justify-between p-4 shadow-md bg-pink-100'>
      <nav className='md:flex md:items-center md:justify-between w-full'>
        <Link to="/">
          <img src={logo1} alt="logo1" className="w-40 h-auto mr-auto" />
        </Link>
        <div className="flex justify-end items-center gap-4 flex-grow">
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/" className="text-black-600 font-bold hover:text-blue-700">Inicio</Link>
            <Link to="/ofertas" className="text-black-600 font-bold hover:text-blue-700">Ofertas</Link>
            <Link to="/contacto" className="text-black-600 font-bold hover:text-blue-700">Contacto</Link>
            <Link to="/mi-carrito" className="text-black-600 font-bold hover:text-blue-700">Carrito</Link>
          </div>
          <CartWidget cartCount={cartCount} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
