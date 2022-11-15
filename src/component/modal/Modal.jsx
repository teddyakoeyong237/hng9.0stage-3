import React from 'react';
import './modal.css';

function Modal({openState, onClose}) {

    if(!openState){
        return null;
    }

  return (
    <div onClick={onClose} className="modal_overlay">
        <div className='modal'>
            <div className="modal_header">
                <h3>Connect Wallet</h3>
                <span>
                    <img src="images/modalclose.jpg" alt="" />
                </span>
            </div>
        </div>
    </div>
  );
}

export default Modal