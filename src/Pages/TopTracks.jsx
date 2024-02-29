import React, { useState, useEffect } from 'react';

// Client ID y Client Secret de tu app de Spotify
const clientId = 'd9fc62e09f374a90af2154e88b0b22fc';
const clientSecret = 'b5f809bb7ef94bd5a2d10038c32bbf0d';

// Función para obtener el token
const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  return data.access_token;
};

// Obtener tracks del usuario
const getTracks = async () => {
  const token = localStorage.getItem('spotify_access_token');

  const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const data = await result.json();
  return data;
};

function TopTracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Función para obtener y mostrar las top tracks del usuario
    const fetchTopTracks = async () => {
      try {
        // Obtener el token de acceso
        const token = await getToken();
        // Guardar el token en el LocalStorage
        localStorage.setItem('spotify_access_token', token);
        // Obtener las top tracks del usuario
        const tracksData = await getTracks();
        setTracks(tracksData.items);
      } catch (error) {
        console.error('Error al obtener las top tracks:', error);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopTracks;
