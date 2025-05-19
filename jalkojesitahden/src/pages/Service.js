import React from 'react';
import translations from '../locale/fi.json';
import './Service.css';
import { FaHands, FaHome, FaStar, FaArrowRight } from 'react-icons/fa';

function Service() {
    return (
        <div className="service-container">
            <h1>{translations.service.title}</h1>
            <p>{translations.service.description}</p>
            
            <div className="service-cards">
                <div className="service-card">
                    <div className="service-card-header">
                        <h3><FaHands className="icon" /> {translations.service.basics}</h3>
                    </div>
                    <div className="service-card-content">
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_basic1}</h4>
                            <p className="service-item-description">{translations.service.description_basic1}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_basic2}</h4>
                            <p className="service-item-description">{translations.service.description_basic2}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_basic3}</h4>
                            <p className="service-item-description">{translations.service.description_basic3}</p>
                        </div>
                    </div>
                </div>
                
                <div className="service-card">
                    <div className="service-card-header">
                        <h3><FaHome className="icon" /> {translations.service.homevisits}</h3>
                    </div>
                    <div className="service-card-content">
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_home1}</h4>
                            <p className="service-item-description">{translations.service.description_home1}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_home2}</h4>
                            <p className="service-item-description">{translations.service.description_home2}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_home3}</h4>
                            <p className="service-item-description">{translations.service.description_home3}</p>
                        </div>
                        <p className="note">{translations.service.home_note}</p>
                    </div>
                </div>
                
                <div className="service-card">
                    <div className="service-card-header">
                        <h3><FaStar className="icon" /> {translations.service.special}</h3>
                    </div>
                    <div className="service-card-content">
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_special1}</h4>
                            <p className="service-item-description">{translations.service.description_special1}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_special2}</h4>
                            <p className="service-item-description">{translations.service.description_special2}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_special3}</h4>
                            <p className="service-item-description">{translations.service.description_special3}</p>
                        </div>
                        <div className="service-item">
                            <h4 className="service-item-name">{translations.service.service_special4}</h4>
                            <p className="service-item-description">{translations.service.description_special4}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="contact-section">
                <p className="special-note">{translations.service.special_note}</p>
                <div className="contact-button-container">
                    <a href="/yhteystiedot" className="cta-button">
                        {translations.service.contact_us_button} <FaArrowRight className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Service;
