import React from 'react';
import './modal.css';

function Modal({openState, onClose}) {

    if(!openState){
        return null;
    }

  return (
    <div onClick={onClose} className="modal_overlay">
        
        {/* Creating modal component */}
        <div 
        onClick={(e) => {e.stopPropagation()}}
        className='modal'>
            
            {/* Creating the header of the modal component */}
            <div className="modal_header">
                <h3>Connect Wallet</h3>
                <span onClick={onClose} >
                    <img src="images/modalclose.jpg" alt="Close modal" />
                </span>
            </div>

            {/* Creating the body of the modal component  */}
            <div className="modal_body">
                <p>Choose your preferred wallet:</p>

                {/* Creating the links in the modal  */}
                <div className="modal_links">
                    <div className="modal_link_img">
                        <img src="images/modalgrp1.jpg" alt="" />
                    </div>
                    <span className="modal_arrow">
                        <img src="images/modalarrow.svg" alt="" />
                    </span>
                </div>
                <div className="modal_links">
                    <div className="modal_link_img">
                        <img src="images/modalgrp2.jpg" alt="" />
                    </div>
                    <span className="modal_arrow">
                        <img src="images/modalarrow.svg" alt="" />
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Modal