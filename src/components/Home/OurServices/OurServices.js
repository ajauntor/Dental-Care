import React from 'react';
import fluoride from '../../../images/flowride.png'
import cavity from '../../../images/cabity.png'
import Whitening from '../../../images/whitening.png'

const serviceData = [
    {
        name: "Fluoride Treatment",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        img: Whitening
    }
]

const OurServices = () => {
    return (
        <section className="service-container">
            <div className="text-center">
                <h5 style={{color:"#5FC7C7"}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
        </section>
    );
};

export default OurServices;