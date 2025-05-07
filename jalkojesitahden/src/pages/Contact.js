import React from 'react';
import translations from '../locale/fi.json';
import './Contact.css';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaPhone, FaClock, FaEnvelopeOpenText, FaMap } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact-container">
            <h1>{translations.contact.title}</h1>
            <p>{translations.contact.description}</p>
            
            <div className="contact-content">
                <div className="contact-form-container">
                    <h2><FaEnvelope className="icon" /> {translations.contact.contactform}</h2>
                    <div className="contact-form">
                        <label htmlFor="name">{translations.contact.nametitle}</label>
                        <input type="text" placeholder={translations.contact.name} />
                        <label htmlFor="email">{translations.contact.inputemailtitle}</label>
                        <input type="email" placeholder={translations.contact.inputemail} />
                        <label htmlFor="message">{translations.contact.messagetitle}</label>
                        <textarea placeholder={translations.contact.placeholder}></textarea>

                        <label htmlFor="contactPreference">{translations.contact.contactpreference}</label>
                        <div className="contact-preference">
                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    id="byPhone" 
                                    name="contactPreference" 
                                    value="phone" 
                                />
                                <label htmlFor="byPhone">{translations.contact.byphone}</label>
                            </div>
                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    id="byEmail" 
                                    name="contactPreference" 
                                    value="email" 
                                />
                                <label htmlFor="byEmail">{translations.contact.byemail}</label>
                            </div>
                        </div>

                        <button type="submit">{translations.contact.send}</button>
                    </div>
                </div>

                <div className="map-container">
                    <h2><FaMapMarkerAlt className="icon" /> {translations.contact.location}</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.2685763850868!2d29.1820878!3d65.9612728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44295ab6ea375fdb%3A0x296c463b4928525b!2sJalkojesi%20T%C3%A4hden%20(%20T%3Ami%20Kati%20S%C3%A4kkinen)!5e0!3m2!1sfi!2sfi!4v1746551659182!5m2!1sfi!2sfi"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className="info-cards">
                <div className="info-card">
                    <h3><FaMapMarkerAlt className="icon" /> {translations.contact.address}</h3>
                    <p>{translations.footer.street}</p>
                    <p>{translations.footer.city}</p>
                    <a 
                        href="https://www.google.com/maps/place/Jalkojesi+T%C3%A4hden+(+T:mi+Kati+S%C3%A4kkinen)/@65.9612728,29.1820878,17z/data=!3m1!4b1!4m6!3m5!1s0x44295ab6ea375fdb:0x296c463b4928525b!8m2!3d65.9612728!4d29.1820878!16s%2Fg%2F11f4048z24?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="map-link"
                    >
                        {translations.contact.showmap}
                    </a>
                </div>
                <div className="info-card">
                    <h3><FaPhone className="icon" /> {translations.contact.contactus}</h3>
                    <p>{translations.contact.phone}</p>
                    <p>{translations.contact.email}</p>
                    <a 
                        href="https://wa.me/358413198096" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                    >
                        <FaWhatsapp className="icon" /> {translations.contact.whatsapp}
                    </a>
                </div>
                <div className="info-card">
                    <h3><FaClock className="icon" /> {translations.contact.openinghours}</h3>
                    <p>{translations.contact.openinghoursweek}</p>
                    <p>{translations.contact.openinghoursweekend1}</p>
                    <p>{translations.contact.openinghoursweekend2}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
