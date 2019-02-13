import React from 'react';
import FocusTrap from 'focus-trap-react';
import {ReactComponent as Close} from '../resources/times-circle-regular.svg';

const Modal = (props) => {
    return (
        <FocusTrap>
            <aside 
                className="modal" 
                role="dialog"
                tag="aside"
                tabIndex="-1"
                aria-modal="true"                
                onClick={props.onClickOutside}
                onKeyDown={props.onKeyDown}
            >
                <div className="modal-content" ref={props.modalRef}>
                    <button className="close-modal" onClick={props.closeModal}>
                        <Close />
                    </button>
                    <form className="form" action="https://formspree.io/adam.pawlinski@gmail.com" method="POST" encType="text/plain">
                        <label className="input-field" htmlFor="name">name:
                            <input type="text" placeholder="name" name="name"/>
                        </label>
                        <label className="input-field" htmlFor="email">email:
                            <input type="email" placeholder="email" name="email"/>
                        </label>
                        <label className="input-field text" htmlFor="message">message:
                            <textarea placeholder="your message" name="message"></textarea>
                        </label>
                        <input type="text" name="_gotcha" className="hidden-field"/>
                        <input type="submit" value="Send" formTarget="_blank"/>
                    </form>
                </div>
            </aside>
        </FocusTrap>
    )
}

export default Modal;