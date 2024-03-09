import React from 'react';
import { useNavigate } from 'react-router-dom';

const clientId = 'd9fc62e09f374a90af2154e88b0b22fc'; 
const redirectUri = `${window.location.origin}/top-tracks`; 

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email user-top-read';
    const responseType = 'token';

    const authUrl = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&show_dialog=true`;

    window.location.href = authUrl;
  };

  const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  return (
    <div>
      <h1>Iniciar sesión en Spotify</h1>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;
