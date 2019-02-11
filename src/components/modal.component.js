import React from 'react';
import FocusTrap from 'focus-trap-react';

const Modal = () => {
    return (
        <FocusTrap>
            <div className="modal">
                <div className="modal-content">
                    <button className="close-modal"></button>
                    <form className="form" action="https://formspree.io/adam.pawlinski@gmail.com" method="POST" encType="text/plain">
                        <label className="input-field" htmlFor="name">name:
                            <input type="text" placeholder="name" name="name"/>
                        </label>
                        <label className="input-field" htmlFor="email">email:
                            <input type="email" placeholder="email" name="email"/>
                        </label>
                        <label className="input-field text" htmlFor="message">message:
                            <textarea placeholder="your message" name="message" cols="40" rows="10"></textarea>
                        </label>
                        <input type="text" name="_gotcha" className="hidden-field"/>
                        <input type="submit" value="Send" formTarget="_blank"/>
                    </form>
                </div>
            </div>
        </FocusTrap>
    )
}

export default Modal;