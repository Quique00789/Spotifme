// Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Spotifme</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/top-tracks">Top Tracks</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
