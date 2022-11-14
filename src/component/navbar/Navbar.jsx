import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
            <div className="container">
        <header className='navbar'>
                <img src="images/colored_metabnb.jpg" alt="logo" />
                <nav>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Place to stay</Link></li>
                        <li><Link to="">NFTs</Link></li>
                        <li><Link to="">Community</Link></li>
                    </ul>
                </nav>
                    <button className='connect_wallet'>Connect wallet</button>
            </header>
            </div>
    );
}
