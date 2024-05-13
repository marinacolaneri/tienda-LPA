import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer({ greeting = 'saludo' }) {
  return (
    <footer className="bg-pink-100 p-4">
      <div className="text-center">
        <p className="text-xl font-bold">{greeting}</p>
        <ul className="flex justify-center mt-4">
          <li className="mx-2"><a href="/privacy-policy">Política de privacidad</a></li>
          <li className="mx-2"><a href="/terms-of-service">Términos de servicio</a></li>
          <li className="mx-2"><a href="/faq">Preguntas frecuentes</a></li>
        </ul>
        <div className="flex items-center justify-center mt-4">
          <p className="mr-2">Contáctenos: info.LPAtienda@example.com |</p>
          <a href="https://wa.me/5493480000333" title="Chatea con nosotros" className="mr-2">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
          </a>
          <p>+549-348-0000333</p>
        </div>
        <form className="mt-4">
          <input type="email" placeholder="Suscríbete para recibir noticias" className="p-2 border border-gray-300" />
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 ml-2">Suscribirse</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
