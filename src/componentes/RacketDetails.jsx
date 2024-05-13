import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRacketContext } from './RacketContext';
import ItemCount from './ItemCount';
import { app } from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function RacketDetails() {
  const { name } = useParams();
  const { addToCart } = useRacketContext();
  const [raquetaData, setRaquetaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRaquetaData = async () => {
      const db = getFirestore(app);
      const productosCollection = collection(db, "productos");
      const querySnapshot = await getDocs(productosCollection);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.name === name) {
          setRaquetaData(data);
          setLoading(false);
        }
      });
    };

    fetchRaquetaData();
  }, [name]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!raquetaData) {
    return <p>No se encontró la raqueta.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm font-bold">Atrás</span>
      </Link>
      <h2 className='text-2xl font-bold mb-4'>{raquetaData.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={raquetaData.image} alt={raquetaData.name} className="h-auto max-w-full mb-4" />
          {raquetaData.Peso && <p><span className="font-semibold">Peso:</span> {raquetaData.Peso}</p>}
          {raquetaData.Grip && <p><span className="font-semibold">Grip:</span> {raquetaData.Grip}</p>}
          {raquetaData.Descripcion && <p><span className="font-semibold">Descripción:</span> {raquetaData.Descripcion}</p>}
          {raquetaData.Precio && <p><span className="font-semibold">Precio:</span> {raquetaData.Precio}</p>}
          {raquetaData.Stock && <p><span className="font-semibold">Stock:</span> {raquetaData.Stock}</p>}
        </div>
        <div>
          <ItemCount raquetaNombre={raquetaData.name} stock={raquetaData.Stock} price={raquetaData.Precio} image={raquetaData.image} />
        </div>
      </div>
    </div>
  );
}

export default RacketDetails;
