import React, { useState } from 'react';

function Contacto ()  {
const [valores, setValores] = useState ({
  nombre: '',
  email:'',
  telefono:'',
})

  const handleSubmint = (e) => {
    e.preventDefault();
    console.log('enviado', valores); 
  }

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div className='max-w-md mx-auto p-8'>
      <h1 className='text-5xl font-bold italic mb-4'>Contacto</h1>
      <form onSubmit={handleSubmint}>
        <input className='w-full px-4 py-2 mb-4 border rounded-lg'
          type="text" 
          placeholder='Ingresa tu nombre'
          value={valores.nombre}
          onChange={handleValores} 
          name='nombre'
        />

        <input className='w-full px-4 py-2 mb-4 border rounded-lg'
          type="email" 
          placeholder='Ingresa tu e-mail'
          value={valores.email}
          onChange={handleValores}
          name='email' 
        />
        <input className='w-full px-4 py-2 mb-4 border rounded-lg'
          type="phone" 
          placeholder='Ingresa tu telefono'
          value={valores.telefono}
          onChange={handleValores}
          name='telefono' 
        />

        <button className='w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded' type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
