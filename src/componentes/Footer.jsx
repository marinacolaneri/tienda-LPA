  import React from 'react';

  function Footer({ greeting = 'saludo' }) {
    return (
      <div className="text-center bg-pink-100 p-4">
      <p className="text-xl font-bold">{greeting}</p>
    </div>
      )
  }
  export default Footer;