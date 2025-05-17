import React from 'react';
import translations from '../locale/fi.json';
import './Pricing.css';
import { FaEuroSign, FaHome, FaStar, FaArrowRight } from 'react-icons/fa';

function Pricing() {
    return (
        <div className="pricing-container">
            <h1>{translations.pricing.title}</h1>
            <p>{translations.pricing.description}</p>
            
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h3><FaEuroSign className="icon" /> {translations.pricing.basics}</h3>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_basic1}</span>
                        <span className="price">{translations.pricing.price_basic1}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_basic2}</span>
                        <span className="price">{translations.pricing.price_basic2}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_basic3}</span>
                        <span className="price">{translations.pricing.price_basic3}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_basic4}</span>
                        <span className="price">{translations.pricing.price_basic4}</span>
                    </div>
                </div>
                
                <div className="pricing-card">
                    <h3><FaHome className="icon" /> {translations.pricing.homevisits}</h3>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_home1}</span>
                        <span className="price">{translations.pricing.price_home1}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_home2}</span>
                        <span className="price">{translations.pricing.price_home2}</span>
                    </div>
                    <p className="note">{translations.pricing.home_note}</p>
                </div>
                
                <div className="pricing-card">
                    <h3><FaStar className="icon" /> {translations.pricing.special}</h3>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_special1}</span>
                        <span className="price">{translations.pricing.price_special1}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_special2}</span>
                        <span className="price">{translations.pricing.price_special2}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_special3}</span>
                        <span className="price">{translations.pricing.price_special3}</span>
                    </div>
                    <div className="price-item">
                        <span className="service-name">{translations.pricing.service_special4}</span>
                        <span className="price">{translations.pricing.price_special4}</span>
                    </div>
                </div>
            </div>
            
            <div className="contact-section">
                <p className="special-note" style={{ marginBottom: '1rem' }}>{translations.pricing.special_note}</p>
                <p className="special-note" style={{ marginBottom: '2rem' }}>{translations.pricing.special_note2}</p>
                <div className="contact-button-container">
                    <a href="/yhteystiedot" className="cta-button">
                        {translations.pricing.contact_us_button} <FaArrowRight className="icon" />
                    </a>
                </div>
            </div>
            
            <div className="pricing-info">
                <p>{translations.pricing.cancellation}</p>
                <p>{translations.pricing.payment}</p>
            </div>
        </div>
    );
}

export default Pricing;
