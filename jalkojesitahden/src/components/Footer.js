import React from 'react';
import { Link } from 'react-router-dom';
import translations from '../locale/fi.json';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content"> 
                <div className="footer-logo">
                    <img src="/logo512.png" alt="Jalkojesi Tähden" className="footer-logo-img" />
                </div>
                <div className="footer-info">
                    <h3>{translations.footer.title}</h3>
                    <div className="footer-address">
                        <p>{translations.footer.street}</p>
                        <p>{translations.footer.city}</p>
                        <p>{translations.footer.phone}</p>
                        <p>{translations.footer.email}</p>
                        <p>{translations.footer.ytunnus}</p>
                    </div>
                </div>
                
                <div className="footer-navigation">
                    <h3>{translations.footer.navigaatio}</h3>
                    <div className="footer-links">
                        <Link to="/">{translations.footer.home}</Link>
                        <Link to="/palvelut">{translations.footer.service}</Link>
                        <Link to="/yhteystiedot">{translations.footer.contact}</Link>
                        <Link to="/tietosuoja">{translations.footer.privacy}</Link>
                    </div>
                </div>
                
                <div className="footer-hours">
                    <h3>{translations.footer.openinghoursTitle}</h3>
                    <p>{translations.footer.openinghoursWeek}</p>
                    <p>{translations.footer.openinghoursWeekend1}</p>
                    <p>{translations.footer.openinghoursWeekend2}</p>
                </div>

                <div className="footer-social">
                    <h3>{translations.footer.followus}</h3>
                    <a href="https://www.facebook.com/p/Jalkojesi-T%C3%A4hden-100083000333580/" target="_blank" rel="noopener noreferrer">{translations.footer.facebook}</a>
                </div>
            </div>
            
            <div className="footer-copyright">
                <p>{translations.footer.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;

