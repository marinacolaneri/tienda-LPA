import React from 'react';
import raquetasData from './raquetas.json';
import { useParams } from 'react-router-dom';

function RacketDetails() {
  const { name } = useParams();
  const raquetaData = raquetasData[name];

  return (
    <div>
      <h2>{name}</h2>
      {raquetaData && ( 
        <div>
          <img src={raquetaData.image} alt={name} />
          <p>Peso: {raquetaData.Peso}</p>
          <p>Grip: {raquetaData.Grip}</p>
          {raquetaData.Description && <p>Descripción: {raquetaData.Description}</p>}
          {raquetaData.Precio && <p>Precio: {raquetaData.Precio}</p>}
        </div>
      )}
    </div>
  );
}

export default RacketDetails;

