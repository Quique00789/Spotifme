// Login.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateRandomString } from '../components/util'; // Asumiendo que tienes una función para generar cadenas aleatorias

const client_id = 'd9fc62e09f374a90af2154e88b0b22fc';
const redirect_uri = 'http://localhost:3000/';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      setIsLoggedIn(true);
      // Redirigir a TopTracks después de la autenticación
      navigate('/top-tracks');
    }
  }, [navigate]);

  const handleLogin = () => {
    window.location.href = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: 'code',
      client_id,
      redirect_uri,
      state: generateRandomString(16)
    })}`;
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Logged in successfully!</p>
      ) : (
        <button onClick={handleLogin}>Login with Spotify</button>
      )}
    </div>
  );
}

export default Login;
