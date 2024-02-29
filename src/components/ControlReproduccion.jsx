import React from 'react';
import './ControlReproduccion.css';

const ControlReproduccion = ({ reproducir, pausar, siguiente, anterior }) => {
    return (
        <div>
            <button className="boton-reproduccion" onClick={reproducir}>Reproducir</button>
            <button className="boton-reproduccion" onClick={pausar}>Pausar</button>
            <button className="boton-reproduccion" onClick={anterior}>Anterior</button>
            <button className="boton-reproduccion" onClick={siguiente}>Siguiente</button>
        </div>
    );
};

export default ControlReproduccion;
