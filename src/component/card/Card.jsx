import React from 'react';
import './card.css';

function Card() {
    return (
        <div className='card'>
            <div className="card_image">
                <img src="images/image1.jpg" alt="Place pic" />
            </div>
            <div className="card_content">
                <div className="content content1">
                    <p>Desert king</p>
                    <p><b>1MBT per night</b></p>
                </div>
                <div className="content content2">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                </div>
            </div>
            <div className="stars">
                <img src="images/star.jpg" alt="" />
                <img src="images/star.jpg" alt="" />
                <img src="images/star.jpg" alt="" />
                <img src="images/star.jpg" alt="" />
                <img src="images/star.jpg" alt="" />
            </div>
        </div>
    );
}

export default Card;
