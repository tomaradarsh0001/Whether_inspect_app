// src/components/Home.js
import React from 'react';
import '../App.css';
import '../components/sky.css';
import Light from '../assets/images/street_light_night.png'
import Car from '../assets/images/car.gif'
import Car2 from '../assets/images/car3.gif'
import Bus from '../assets/images/bus.gif'
import Truck from '../assets/images/truck.gif'
import Cloud1 from '../assets/images/day_cloud.png'
import Cloud2 from '../assets/images/cloud2.png'

const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
});

const Night = () => {
    return (
        <div className="home">
            <div className="sky">
                <div className="stars">
                    {[...Array(100)].map((_, index) => (
                        <div
                            key={index}
                            className="star"
                            style={getRandomPosition()}
                        ></div>
                    ))}
                </div>
                <div className="moon"></div>
                <div className="rain">
                    {[...Array(100)].map((_, index) => (
                        <div key={index} className="raindrop" style={{ left: `${Math.random() * 100}vw`, animationDelay: `${Math.random() * 2}s` }}></div>
                    ))}
                </div>
                <div className="lightning-flash"></div>
                <div className="lightning-zigzag"></div>
                <div className="">
                    <img src={Cloud2} className="cloud_rain cloud2_rain" alt='Not found' />
                    <img src={Cloud1} className="cloud_rain cloud3_rain" alt='Not found' />
                    <img src={Cloud2} className="cloud_rain cloud4_rain" alt='Not found' />
                    <img src={Cloud1} className="cloud_rain cloud5_rain" alt='Not found' />
                    <img src={Cloud2} className="cloud_rain cloud6_rain" alt='Not found' />
                    <img src={Cloud1} className="cloud_rain cloud1_rain" alt='Not found' />
                </div>
            </div>
            <div class="mountains_night">
                <div class="mountain_night mountain1_night">
                </div>
                <div class="mountain_night mountain2_night">
                </div>
                <div class="mountain_night mountain3_night">
                </div>
                <div class="mountain_night mountain4_night">
                </div>
            </div>
            <div className="road_container">
                <img src={Car} alt='car not found' className="car" />
                <img src={Car2} alt='car not found' className="car2" />
                <img src={Bus} alt='car not found' className="bus" />
                <img src={Truck} alt='car not found' className="truck" />
                <div className="street_light">
                    {[...Array(11)].map((_, index) => (
                        <img key={index} src={Light} alt='Street Light' />
                    ))}
                </div>
                <div className="road"></div>
            </div>

        </div>
    );
};

export default Night;
