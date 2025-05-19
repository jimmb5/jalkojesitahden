import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Service from './pages/Service';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Privacypolicy from './pages/Privacypolicy';
import NotFound from './pages/NotFound';

// ScrollToTop-komponentti, joka skrollaa sivun alkuun kun navigoidaan
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yhteystiedot" element={<Contact />} />
        <Route path="/palvelut" element={<Service />} />  
        <Route path="/hinnasto" element={<Pricing />} />
        <Route path="/tietosuoja" element={<Privacypolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

