import React from 'react';
import Card from '../../card/Card';
import './section2.css';

function Section2() {
    return (
        <section className='hp_places'>
            <h2>Inspiration for your next adventure</h2>
            <div className="all_cards">
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image2.jpg"}/>
                <Card image_url={"images/image3.jpg"}/>
                <Card image_url={"images/image4.jpg"}/>
                <Card image_url={"images/image5.jpg"}/>
                <Card image_url={"images/image6.jpg"}/>
                <Card image_url={"images/image7.jpg"}/>
                <Card image_url={"images/image8.jpg"}/>
            </div>
        </section>
    );
}

export default Section2;
