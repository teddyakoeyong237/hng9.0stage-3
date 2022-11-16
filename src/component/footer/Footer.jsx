import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="top_footer">
                <div className="footer_menu">
                    <div className='footer_col socialmedia'>
                        <div className="footer_logo_img">
                            <img src="images/footer_logo.jpg" alt="" />
                        </div>
                        <div className="socialmedia_icons">
                            <img src="images/facebook_logo.jpg" alt="" />
                            <img src="images/instagram_logo.jpg" alt="" />
                            <img src="images/twitter_logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className='footer_col'>
                        <h5>Community</h5>
                        <ul>
                            <li>NFT</li>
                            <li>Tokens</li>
                            <li>Landlords</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                    <div className='footer_col'>
                        <h5>Places</h5>
                        <ul>
                            <li>Castle</li>
                            <li>Farms</li>
                            <li>Beach</li>
                            <li>Learn more</li>
                        </ul>
                    </div>
                    <div className='footer_col'>
                        <h5>About us</h5>
                        <ul>
                            <li>Road map</li>
                            <li>Creators</li>
                            <li>Career</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                &copy; <p> 2022 Metabnb</p>
            </div>
        </div>
    );
}

export default Footer;
