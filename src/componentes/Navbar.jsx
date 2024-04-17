import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../img/logo1.png";
import { CartWidget } from './CartWidget';

function Navbar({ cartCount }) {
  return (
    <div className='flex justify-between p-4 shadow-md bg-rose-100'>
      <nav className='md:flex md:items-center md:justify-between w-full'>
        <Link to="/">
          <img src={logo1} alt="logo1" className="w-40 h-auto mr-auto" />
        </Link>
        <div className="flex justify-end items-center gap-4 flex-grow">
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/">Inicio</Link>
            <Link to="/ofertas">Ofertas</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/mi-carrito">Carrito</Link>
          </div>
          <CartWidget cartCount={cartCount} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
