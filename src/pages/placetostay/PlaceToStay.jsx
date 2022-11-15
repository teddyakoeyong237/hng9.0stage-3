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
                <Card image_url={"images/image5.jpg"}/>
                <Card image_url={"images/image6.jpg"}/>
                <Card image_url={"images/image7.jpg"}/>
                <Card image_url={"images/image8.jpg"}/>
                <Card image_url={"images/image1.jpg"}/>
                <Card image_url={"images/image2.jpg"}/>
                <Card image_url={"images/image3.jpg"}/>
                <Card image_url={"images/image4.jpg"}/>
                <Card image_url={"images/placetostay9.jpg"}/>
                <Card image_url={"images/placetostay10.jpg"}/>
                <Card image_url={"images/placetostay11.jpg"}/>
                <Card image_url={"images/placetostay12.jpg"}/>
                <Card image_url={"images/placetostay13.jpg"}/>
                <Card image_url={"images/placetostay14.jpg"}/>
                <Card image_url={"images/placetostay15.jpg"}/>
                <Card image_url={"images/placetostay16.jpg"}/>
            </div>
        </div>
    );
}

export default PlaceToStay;
