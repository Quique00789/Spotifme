import React from 'react';

const ListaCanciones = ({ canciones, seleccionarCancion }) => {
    return (
        <div>
            <h2>Lista de Canciones</h2>
            <ul>
                {canciones.map((cancion, index) => (
                    <li key={index} onClick={() => seleccionarCancion(cancion)}>
                        {cancion.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaCanciones;
