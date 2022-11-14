import React from 'react';
import './section3.css';

function Section3() {
    return (
        <section className='nft_info'>
            <div className="nft_content">
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets
                    amazing gift cards which are traded as NFTs.
                    These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button className='nft_button'>Learn more</button>
            </div>
            <div className="nft_images">
                <img src="images/nft-group-image.jpg" alt="" />
            </div>
        </section>
    );
}

export default Section3;
