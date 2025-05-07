import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import translations from '../locale/fi.json';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      setVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? 'show' : 'hide'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {translations.navbar.title}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {translations.navbar.home}
            </Link>
          </li>
            <li className="nav-item">
                <Link to="/palvelut" className="nav-link">
                {translations.navbar.service}
                </Link>
          </li>
          <li className="nav-item">
            <Link to="/hinnasto" className="nav-link">
              {translations.navbar.pricing}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/yhteystiedot" className="nav-link">
              {translations.navbar.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
