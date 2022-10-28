import React, { useState, useEffect } from 'react';
import './style.css';
import Carro from './Vehiculos/Carro.js';

export default function App() {
  const modelosDesdeAPI = [
    {
      nombre: 'nissan Gtr hakosuka',
      modelo: 'Nissan C10 Skyline',
      imagen:
        'https://w7.pngwing.com/pngs/179/447/png-transparent-nissan-skyline-gt-r-nissan-gt-r-nissan-z-car-nissan-skyline-car-vehicle-nissan-thumbnail.png',
      descripcion:
        'La tercera generación del C10 Skyline, fue apodado «Hakosuka» (pronunciado Hak-OH-skaa y que los anglosajones denominan Boxy Skyline). ',
      sonido: 'Ruuuuuuuuuuttuuuuuu',
      anio: '2000',
    },
    {
      nombre: 'harley davidson sportster 48 ',
      modelo: 'sportster 48',
      imagen:
        'https://e7.pngegg.com/pngimages/54/360/png-clipart-harley-davidson-sportster-motorcycle-suspension-harley-davidson-evolution-engine-harley-motorcycle-custom-motorcycle.png',
      descripcion:
        'Harley-Davidson Forty-Eight es la que monta el propulsor de mayor cilindrada dentro de la gama Sportster. En esta ocasión, el motor V-Twin Air-Cooled Evolution ™ es de 1.202cc y se caracteriza por tener una gran par motor en bajas revoluciones: el par motor máximo que alcanza es de 96Nm a 3.500rpm.',
      sonido: 'prum prum prum',
      anio: '2022',
    },
  ];
  const [modelos, setModelos] = useState([]);
  useEffect(() => {
    setModelos(modelosDesdeAPI);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {modelos.map((modelos) => (
        <Carro
          nombre={modelos.nombre}
          modelo={modelos.modelo}
          imagen={modelos.imagen}
          descripcion={modelos.descripcion}
          sonido={modelos.sonido}
          anio={modelos.anio}
        />
      ))}
    </div>
  );
}
