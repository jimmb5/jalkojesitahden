import React from 'react';
import './Home.css';
import translations from '../locale/fi.json';
function Home() {
    return (
        <div className="home-container">
            <h1>{translations.home.title}</h1>
            <p>{translations.home.description}</p>
        </div>
    );
}

export default Home;
