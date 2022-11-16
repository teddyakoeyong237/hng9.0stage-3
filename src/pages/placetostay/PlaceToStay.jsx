import React from 'react';
import Card from '../../component/card/Card';
import './placetostay.css';

function PlaceToStay() {
    return (
        <div className='placetostay'>
            <div className="categories">
                <ul>
                    <li className='category1'>Restaurant</li>
                    <li className='category2'>Cottage</li>
                    <li className='category3'>Castle</li>
                    <li className='category4'>fantast city</li>
                    <li className='category5'>beach</li>
                    <li className='category6'>Carbins</li>
                    <li className='category7'>Off-grid</li>
                    <li className='category8'>Farm</li>
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
