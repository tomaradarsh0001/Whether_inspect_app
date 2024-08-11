import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);

        const fetchLocation = async (lat, lon) => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6ebfc6023f694554991191357242507&q=${lat},${lon}&aqi=no`);
                if (!response.ok) {
                    throw new Error("Failed to fetch location data from the API.");
                }
                const data = await response.json();
                const locationName = data.location.name + ' ' + data.current.condition.text;
                setLocation(locationName);
                console.log("Location response is " + locationName);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching location:', error);
            }
        };

        const getCurrentPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        fetchLocation(lat, lon);
                    },
                    (error) => {
                        setError("Failed to retrieve geolocation.");
                        console.error('Geolocation error:', error);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        };

        getCurrentPosition();

        return () => clearInterval(timerID);
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className='time'>
                {time.toLocaleTimeString()} {location}
            </div>

        </div>
    );
};

export default Clock;
