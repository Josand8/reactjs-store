import React from "react";
import './modal.css'

const Modal = ({children, estado, cambiarEstado, titulo = 'titulo'}) => {
    return (
        <>
            {estado && 
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-title">
                        <h2>{titulo}</h2>
                        <button className='closeButton' onClick={() => cambiarEstado(false)}>X</button>
                    </div>
                    {children}
                </div>
            </div>
            }
        </>
    );
}

export default Modal;