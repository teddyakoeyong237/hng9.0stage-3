import React from 'react';
import './section1.css';

function Section1() {
    return (
        <>
            <section className='search_place'>
                <div className='sp_content'>
                    <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h2>
                    <p>we provide you access to luxury and affordable houses in the metaverse,
                        get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className='search_container'>
                        <input
                            className='search_input'
                            type="search" name="" id=""
                            placeholder='Search for location' />
                        <button className='search_button'>Search</button>
                    </div>
                </div>
                <div className='sp_images'>
                    <img src="images/sp-group-image.jpg" alt="Sample of places" />
                </div>
            </section>
            <div className='logo_banner'>
                <img src="images/mbtoken_logo.jpg" alt="Mbtoken Logo" />
                <img src="images/metamask_logo.jpg" alt="Metamask Logo" />
                <img src="images/opensea_logo.jpg" alt="Opensea Logo" />
            </div>
        </>
    );
}

export default Section1;
