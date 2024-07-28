import React, { useState, useEffect } from 'react';
import Day from '../components/Day';
import Night from '../components/Night';
// import DayRain from '../components/Day_rain';
// import NightRain from '../components/Night_rain';

const WeatherComponent = () => {
    const [isDaytime, setIsDaytime] = useState(null);

    useEffect(() => {
        const checkTime = () => {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            // Determine if it's day or night (day: 6 AM to 6 PM, night: 6 PM to 6 AM)
            if (hours >= 6 && hours < 18) {
                setIsDaytime(true);
            } else {
                setIsDaytime(false);
            }
        };

        checkTime();
        // Optionally, you can set an interval to check the time periodically
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    if (isDaytime === null) {
        return <div>Loading...</div>;
    }

    return isDaytime ? <Day /> : <Night />;
};

export default WeatherComponent;