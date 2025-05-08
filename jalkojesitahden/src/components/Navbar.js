import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import translations from '../locale/fi.json';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      // Näytä navbar kun skrollataan ylös tai ollaan sivun alussa
      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${visible ? 'show' : 'hide'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/LogoNavbar.png" alt="Jalkojesitahden logo" className="navbar-logo-img" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              {translations.navbar.home}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/palvelut" className="nav-link" onClick={closeMenu}>
              {translations.navbar.service}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hinnasto" className="nav-link" onClick={closeMenu}>
              {translations.navbar.pricing}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/yhteystiedot" className="nav-link" onClick={closeMenu}>
              {translations.navbar.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
