import React, { useState, useEffect } from 'react';
import Day from '../components/Day';
import Night from '../components/Night';
import DayRain from '../components/Day_rain';
import NightRain from '../components/Night_rain';
import NightRainLight from '../components/Night_rain_light';
import DayRainLight from '../components/Day_rain_light';

const WeatherComponent = () => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('https://api.weatherapi.com/v1/current.json?key=6ebfc6023f694554991191357242507&q=28.6070583,%2077.2511437&aqi=no');
                const data = await response.json();
                const is_day = data.current.is_day;
                const rain = data.current.condition.text;
                const localtime = data.location.localtime;
                const hours = new Date(localtime).getHours();
                // Torrential rain shower
                // Moderate or heavy rain shower
                // Light rain shower
                if (rain === 'Heavy rain' || rain === 'Moderate or heavy rain shower' || rain === 'Heavy rain at times') {
                    if (hours > 18 || hours < 5) {
                        setComponent(<NightRain />);

                    } else {
                        setComponent(<DayRain />);

                    }
                }
                else if (rain === 'Light rain shower' || rain === 'Torrential rain shower' || rain === 'Patchy rain nearby' || rain === 'Patchy light drizzle' || rain === 'Patchy light rain') {
                    if (hours > 18 || hours < 5) {
                        setComponent(<NightRainLight />);

                    } else {
                        setComponent(<DayRainLight />);

                    }

                }
                else {
                    setComponent(is_day ? <Day /> : <Night />);

                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, []);

    if (component === null) {
        return <div>Loading...</div>;
    }

    return component;
};

export default WeatherComponent;