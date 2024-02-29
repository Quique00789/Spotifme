import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopTracks from './Pages/TopTracks';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import TarjetaCancion from './components/TarjetaCancion';
import Mensaje from './components/Mensaje';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de login con Spotify    
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    // Lógica de logout  
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/top-tracks" /> : <Navigate to="/login" />}
        />
        
        <Route path="/top-tracks" element={<ProtectedRoute />}/>
      </Routes>
      <Footer />
    </Router>
  );

  function ProtectedRoute() {
    return isLoggedIn ? <TopTracks /> : <Navigate to="/login" />;
  }
}

export default App;
