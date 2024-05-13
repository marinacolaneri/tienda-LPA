import React, { useState } from 'react';
import { useRacketContext } from './RacketContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from './firebase';

function Checkout() {
  const { cartItems, calcularPrecioTotalCompra, vaciarCarrito } = useRacketContext();
  const [valores, setValores] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [numeroCompra, setNumeroCompra] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();
    const numeroDeCompra = await comprar();
    setNumeroCompra(numeroDeCompra);
    setCompraExitosa(true);
    vaciarCarrito(); 
  };

  const comprar = async () => {
    const db = getFirestore(app);
    const pedidosRef = collection(db, "pedidos");
    const pedido = {
      cliente: valores,
      Productos: cartItems,
      total: calcularPrecioTotalCompra()
    };
    const docRef = await addDoc(pedidosRef, pedido);
    return docRef.id;
  };

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='max-w-md mx-auto p-8'>
      {!compraExitosa ? (
        <div>
          <h1 className='text-5xl font-bold italic mb-4'>Finalizar Compra</h1>
          <form onSubmit={handleSubmint}>
            <input
              className='w-full px-4 py-2 mb-4 border rounded-lg'
              type="text"
              placeholder='Ingresa tu nombre'
              value={valores.nombre}
              onChange={handleValores}
              name='nombre'
            />

            <input
              className='w-full px-4 py-2 mb-4 border rounded-lg'
              type="email"
              placeholder='Ingresa tu e-mail'
              value={valores.email}
              onChange={handleValores}
              name='email'
            />
            <input
              className='w-full px-4 py-2 mb-4 border rounded-lg'
              type="phone"
              placeholder='Ingresa tu telefono'
              value={valores.telefono}
              onChange={handleValores}
              name='telefono'
            />

            <button className='w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded' type='submit'>Comprar</button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">¡Compra Exitosa!</h2>
          <p className="text-xl">Tu número de compra es: {numeroCompra}</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
