import React from 'react';
import Card from '../../component/card/Card';
import './placetostay.css';

function PlaceToStay() {
    return (
        <div className='placetostay'>
            <div className="categories">
                <ul>
                    <li>Restaurant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>fantast city</li>
                    <li>beach</li>
                    <li>Carbins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                    <li className='category_menu'>Location<span><img src="images/setting.jpg" alt="" /></span></li>
                </ul>
            </div>
            <div className="all_cards">
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
            </div>
        </div>
    );
}

export default PlaceToStay;
