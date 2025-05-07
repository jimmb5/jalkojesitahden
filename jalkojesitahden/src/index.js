import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Service from './pages/Service';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Privacypolicy from './pages/Privacypolicy';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yhteystiedot" element={<Contact />} />
        <Route path="/palvelut" element={<Service />} />  
        <Route path="/hinnasto" element={<Pricing />} />
        <Route path="/tietosuoja" element={<Privacypolicy />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

