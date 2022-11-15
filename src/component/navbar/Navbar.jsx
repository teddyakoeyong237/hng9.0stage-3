import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

export default function Navbar() {

    const [openModal, setOpenModal] = useState(false);

    return (
            <div className="container">
        <header className='navbar'>
                <img src="images/colored_metabnb.jpg" alt="logo" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/placetostay">Place to stay</Link></li>
                        <li><Link to="/nfts">NFTs</Link></li>
                        <li><Link to="/community">Community</Link></li>
                    </ul>
                </nav>
                    <button
                    onClick={() => {setOpenModal(true)}} 
                    className='connect_wallet'
                    >
                        Connect wallet
                    </button>
                    <Modal openState={openModal} onClose={() => {setOpenModal(false)}}/>
            </header>
            </div>
    );
}
