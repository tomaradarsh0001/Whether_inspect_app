// src/components/Home.js
import React from 'react';

const Home = () => {
    const homeStyle = {
        backgroundColor: 'silver',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        color: 'black',
    };

    return (
        <div style={homeStyle}>
            <h1>Welcome to the Home Page</h1>
        </div>
    );
};

export default Home;
