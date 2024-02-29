import React, { useState } from 'react';

const ReproductorMusica = () => {
    const [cancionActual, setCancionActual] = useState(null);
    const [reproduciendo, setReproduciendo] = useState(false);

    const reproducirCancion = (cancion) => {
        setCancionActual(cancion);
        setReproduciendo(true);
        // Lógica para reproducir la canción
      let selectorCancion = document.getElementById('selectorCancion');
        selectorCancion.src = cancion.url;
        selectorCancion.play();


    };

    const pausarCancion = () => {
        setReproduciendo(false);
        // Lógica para pausar la canción
        let selectorCancion = document.getElementById('selectorCancion');
        selectorCancion.pause();


    };

    const siguienteCancion = () => {
        // Lógica para reproducir la siguiente canción
        let siguiente
        
    };

    const anteriorCancion = () => {
        // Lógica para reproducir la canción anterior
    };

    return (
        <div>
            {/* Mostrar la canción actual, controles de reproducción, etc. */}
        </div>
    );
};

export default ReproductorMusica;
