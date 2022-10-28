import React, { useState, useEffect } from 'react';
import './Vehiculos.css';

export default function Carro(props) {
  const [beepear, setBeepear] = useState(false);

  const estiloDivCardConetenedor = {
    paading: '0 19px 19px',
  };
  const hecerBeep = (sonido) => {
    setBeepear(!beepear);
  };

  return (
    <div style={props.style}>
      {beepear && <div className="ruun ruun">{props.sonido}</div>}
      <div className="estiloDiv">
        <img
          className="ImgStyle"
          src={props.imagen}
          alt="Imagen del vehiculo"
        />
        <div style={estiloDivCardConetenedor}>
          <h2>{props.nombre}</h2>
          <p>{props.descripcion}</p>
          <em>{props.modelo}</em>

          <br />
          {props.anio < 2000 && (
            <img
              src="https://www.pngfind.com/pngs/m/199-1992291_nissan-gt-r-logo-psd-official-psds-nissan.png"
              width="38"
              alt="Logo NissaGtr"
            />
          )}

          <br />

          <button class="botonPer">Usar el claxon</button>
        </div>
      </div>
    </div>
  );
}
