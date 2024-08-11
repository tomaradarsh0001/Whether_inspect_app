import React, { useState, useEffect } from 'react';
import Day from '../components/Day';
import Night from '../components/Night';
import Eve from '../components/Eve';
import DayRain from '../components/Day_rain';
import EveRain from '../components/Eve_rain';
import NightRain from '../components/Night_rain';
import NightRainLight from '../components/Night_rain_light';
import DayRainLight from '../components/Day_rain_light';
import EveRainLight from '../components/Eve_rain_light';
import DayCloudy from '../components/Day_cloud';
import EveCloudy from '../components/Eve_cloud';
import NightCloudy from '../components/Night_cloud';

const WeatherComponent = () => {
    const [component, setComponent] = useState(null);
    const [error, setError] = useState(null);
    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        };

        const showPosition = (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeather(lat, lon);
        };

        const showError = (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setError("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    setError("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    setError("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    setError("An unknown error occurred.");
                    break;
                default:
                    setError("An unknown error occurred.");
            }
        };

        const fetchWeather = async (lat, lon) => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6ebfc6023f694554991191357242507&q=${lat},${lon}&aqi=no`);
                const data = await response.json();
                const rain = data.current.condition.text;
                console.log("API respone is " + rain);
                const localtime = data.location.localtime;
                const hours = new Date(localtime).getHours();
                setLocationName(data.location.name);

                if (rain === 'Heavy rain' || rain === 'Moderate or heavy rain shower' || rain === 'Heavy rain at times') {
                    if (hours => 19 || hours <= 4) {
                        setComponent(<NightRain />);
                    } else if (hours > 17 || hours < 19) {
                        setComponent(<EveRain />);
                    }
                    else {
                        setComponent(<DayRain />);
                    }
                } else if (rain === 'Light rain shower' ||
                    rain === 'Torrential rain shower' ||
                    rain === 'Patchy rain nearby' ||
                    rain === 'Patchy light drizzle' ||
                    rain === 'Patchy light rain') {

                    if (hours >= 19 || hours < 4) {
                        setComponent(<NightRainLight />);
                    } else if (hours >= 17 && hours < 19) {
                        setComponent(<EveRainLight />);
                    } else {
                        setComponent(<DayRainLight />);
                    }
                }
                else if (rain === 'Cloudy' || rain === 'Partly Cloudy') {
                    if (hours >= 19 || hours < 4) {
                        setComponent(<NightCloudy />);
                    } else if (hours >= 17 && hours < 19) {
                        setComponent(<EveCloudy />);
                    } else {
                        setComponent(<DayCloudy />);
                    }
                }
                else {
                    if (hours >= 19 || hours < 4) {
                        setComponent(<Day />);
                    } else if (hours >= 17 && hours < 21) {
                        setComponent(<Eve />);
                    } else {
                        setComponent(<Night />);
                    }
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setError("Failed to fetch weather data.");
            }
        };

        getLocation();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (component === null) {
        return <div>Loading...</div>;
    }
    console.log('Weather in ' + locationName);

    return component;
};

export default WeatherComponent;
