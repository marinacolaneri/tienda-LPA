import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Main from './componentes/Main';
import Ofertas from './componentes/pages/Ofertas';
import Contacto from './componentes/pages/Contacto';
import Carrito from './componentes/pages/Carrito';
import RacketDetails from './componentes/RacketDetails';



function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Main addToCart={addToCart} />} />
        <Route path="/raqueta/:name" element={<RacketDetails />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/mi-carrito" element={<Carrito />} />
      </Routes>
      <Footer greeting="Muchas Gracias por su compra" />
    </BrowserRouter>
  );
}

export default App;