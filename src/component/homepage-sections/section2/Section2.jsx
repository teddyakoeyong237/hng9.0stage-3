import React from 'react';
import Card from '../../card/Card';
import './section2.css';

function Section2() {
    return (
        <section className='hp_places'>
            <h2>Inspiration for your next adventure</h2>
            <div className="all_cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Section2;
