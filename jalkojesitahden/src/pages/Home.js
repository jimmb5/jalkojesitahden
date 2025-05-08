import React from 'react';
import './Home.css';
import translations from '../locale/fi.json';
import { FaArrowRight } from 'react-icons/fa';

function Home() {
    return (
        <div className="home-container">
            <div className="blog-section">
                <div className="blog-content">
                    <div className="blog-text">
                        <h2>{translations.home.blog_title1}</h2>
                        <p>{translations.home.blog_text1}</p>
                    </div>
                    <div className="blog-image">
                        <img src="/blog1.png" alt="Jalkojesi Tähden palvelut" />
                    </div>
                </div>
            </div>

            <div className="blog-section">
                <div className="blog-content reverse">
                    <div className="blog-text">
                        <h2>{translations.home.blog_title2}</h2>
                        <p>{translations.home.blog_text2}</p>
                    </div>
                    <div className="blog-image">
                        <img src="/blog2.png" alt="Jalkojesi Tähden palvelut" />
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <h2>{translations.home.cta_title}</h2>
                <p>{translations.home.cta_text}</p>
                <a href="/yhteystiedot" className="cta-button">
                    {translations.home.cta_button} <FaArrowRight className="icon" />
                </a>
            </div>
        </div>
    );
}

export default Home;
