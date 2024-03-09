import React, { useState, useEffect } from 'react';
import './TopTracks.css';

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    const fetchTopTracks = async () => {
      const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      const data = await response.json();
      
      // Modelar los datos para incluir solo la información necesaria
      const tracks = data.items.map(item => ({
        id: item.id,
        name: item.name,
        artist: item.artists.map(artist => artist.name).join(', '),
        image: item.album.images[0].url,
        preview_url: item.preview_url
      }));

      setTopTracks(tracks);
    };

    if (token) {
      fetchTopTracks();
    }
  }, []);

  return (
    <div>
      <h2>Mis canciones favoritas</h2>
      <ul>
        {topTracks.length > 0 ? (
          topTracks.map(track => (
            <li key={track.id}>
              <img src={track.image} alt={track.name} style={{ height: '64px', width: '64px' }} />
              {` ${track.name} by ${track.artist}`}
              {track.preview_url && <button onClick={() => window.open(track.preview_url)}>Reproducir</button>}
            </li>
          ))
        ) : (
          <li>No hay canciones para mostrar</li>
        )}
      </ul>
    </div>
  );
};

export default TopTracks;
