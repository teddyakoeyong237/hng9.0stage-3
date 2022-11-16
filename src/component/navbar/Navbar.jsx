import React, { useState, useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

export default function Navbar() {

    const navRef = useRef();

    const showNavbar  = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const [openModal, setOpenModal] = useState(false);

    if(openModal) {
        document.body.classList.add('active_modal')
    } else {
        document.body.classList.remove('active_modal')
    }

    return (

        <header className='navbar'>
                <img src="images/colored_metabnb.jpg" alt="logo" />
                <nav ref={navRef}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/placetostay">Place to stay</Link></li>
                        <li><Link to="/nfts">NFTs</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li>
                            <button
                            onClick={() => {setOpenModal(true)}} 
                            className='connect_wallet'
                            >
                                Connect wallet
                            </button>
                        </li>
                        <li>
                            <button className='nav-btn nav-close-btn' onClick={showNavbar} >
                                <FaTimes />
                            </button>
                        </li>
                    </ul>
                </nav>
                    <button className='nav-btn' onClick={showNavbar} >
                        <FaBars />
                    </button>
                    <Modal openState={openModal} onClose={() => {setOpenModal(false)}}/>
            </header>

    );
}
