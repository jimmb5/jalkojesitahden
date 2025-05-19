import React from 'react';
import { Link } from 'react-router-dom';
import translations from '../locale/fi.json';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>{translations.notfound.title}</h1>
            <h2>{translations.notfound.description}</h2>
            <p>{translations.notfound.description}</p>
            <Link to="/" className="home-button">
                {translations.notfound.button}
            </Link>
        </div>
    );
}

export default NotFound; 