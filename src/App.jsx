import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopTracks from './Pages/TopTracks';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/top-tracks" element={<TopTracks />} />
        <Route path="*" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;