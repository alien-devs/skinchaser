import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = (props) => {
    let closeOnOverlayClick = (e) => {
        if(e.target.classList.contains('modal-container')) {
            props.setState(false)
        }
    }

    return (
        <CSSTransition in={props.state} unmountOnExit timeout={200} classNames="modal">
            <div onClick={e => closeOnOverlayClick(e)} className="modal-container">
                {props.children}
            </div>
        </CSSTransition>
    )
}

export default Modal;
