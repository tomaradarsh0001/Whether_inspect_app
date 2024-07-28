// src/components/SkyScene.js
import React from 'react';
import '../App.css';
import '../components/sky.css';
import Light from '../assets/images/street_light_day.png'
import Car from '../assets/images/car.gif'
import Car2 from '../assets/images/car3.gif'
import Bus from '../assets/images/bus.gif'
import Truck from '../assets/images/truck.gif'
import Truck2 from '../assets/images/truck2.gif'
import Truck3 from '../assets/images/truck3.gif'
import Cloud1 from '../assets/images/day_cloud.png'
import Cloud2 from '../assets/images/cloud2.png'
import Bird from '../assets/images/birds.gif'

const Day = () => {
    return (
        <div className="sky-scene">
            <div className="sky_day">
                <div className="sun"></div>
                <div className="bird"><img src={Bird} className='birds' alt='Not found' />
                </div>
                <div className="">
                    <img src={Cloud1} className="cloud cloud1" alt='Not found' />
                    <img src={Cloud2} className="cloud cloud2" alt='Not found' />
                    <img src={Cloud1} className="cloud cloud3" alt='Not found' />
                </div>
            </div>
            <div class="mountains">
                <div class="mountain mountain1">
                </div>
                <div class="mountain mountain2">
                </div>
                <div class="mountain mountain3">
                </div>
                <div class="mountain mountain4">
                </div>
            </div>
            <div className="road_container">
                <img src={Car} alt='car not found' className="car" />
                <img src={Car2} alt='car not found' className="car2" />
                <img src={Bus} alt='car not found' className="bus" />
                <img src={Truck2} alt='car not found' className="truck2" />
                <img src={Truck3} alt='car not found' className="truck3" />
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

export default Day;
