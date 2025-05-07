import React from 'react';
import translations from '../locale/fi.json';
import './Privacypolicy.css';

function Privacypolicy() {
    return (
        <div className="privacypolicy-container">
            <h1>{translations.privacypolicy.title}</h1>
            <p className="date">{translations.privacypolicy.date}</p>
            
            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.controller.title}</h2>
                <p>{translations.privacypolicy.controller.company}</p>
                <p>{translations.privacypolicy.controller.business_id}</p>
                <p>{translations.privacypolicy.controller.address}</p>
                <p>{translations.privacypolicy.controller.email}</p>
                <p>{translations.privacypolicy.controller.phone}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.register.title}</h2>
                <p>{translations.privacypolicy.register.name}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.purpose.title}</h2>
                <p>{translations.privacypolicy.purpose.description}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.data.title}</h2>
                <ul>
                    {translations.privacypolicy.data.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.source.title}</h2>
                <p>{translations.privacypolicy.source.description}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.retention.title}</h2>
                <p>{translations.privacypolicy.retention.description}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.transfer.title}</h2>
                <p>{translations.privacypolicy.transfer.description}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.rights.title}</h2>
                <p>{translations.privacypolicy.rights.description}</p>
                <ul>
                    {translations.privacypolicy.rights.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{translations.privacypolicy.rights.contact}</p>
            </div>

            <div className="privacypolicy-section">
                <h2>{translations.privacypolicy.security.title}</h2>
                <p>{translations.privacypolicy.security.description}</p>
            </div>
        </div>
    );
}

export default Privacypolicy;
