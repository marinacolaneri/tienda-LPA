import React from 'react'
import { Menu, ShoppingCart } from 'lucide-react'
import logo1 from "../img/logo1.png"
import { CartWidget } from './CartWidget'

function Navbar() {
  return (
   
    <div className='flex justify-between p-4 shadow-md bg-rose-100'>

<nav className='md:flex md:items-center md:justify-between md:gap-4 w-full'>
    <img src={logo1} alt="logo1" className="w-40 h-auto mr-auto" /> 
    <div className="flex justify-end items-center gap-4 flex-grow">
        <div className="flex items-center gap-4 ml-auto">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
        </div>
        <CartWidget/>
    </div>
</nav>


   </div>
  )
}

export default Navbar