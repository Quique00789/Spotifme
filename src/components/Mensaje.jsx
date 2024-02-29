import React from 'react';
import './Mensaje.css';
function Mensaje({ tipo }) {
  return (
    <div className={`mensaje ${tipo}`}>
      {tipo === 'exito' ? '¡Éxito! Tu lista de reproducción se ha creado correctamente.' : 'Error al cargar la lista de reproducción.'}
    </div>
  );
}

export default Mensaje;
