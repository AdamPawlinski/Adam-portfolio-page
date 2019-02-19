import React from 'react';
import FocusTrap from 'focus-trap-react';
import {ReactComponent as Close} from '../resources/times-circle-regular.svg';

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    handleSubmit = () => {
        this.setState({submitted: true});        
    }

    onSubmitForm = () => {
        if (this.state.submitted === true) 
        window.location.href(window.location.hostname)
    }

    render() {        
        return (
            <FocusTrap>
                <aside 
                    className="modal" 
                    role="dialog"
                    tag="aside"
                    tabIndex="-1"
                    aria-modal="true"                
                    onClick={this.props.onClickOutside}
                    onKeyDown={this.props.onKeyDown}
                >
                    <div className="modal-content" ref={this.props.modalRef}>
                        <button className="close-modal" onClick={this.props.closeModal}>
                            <Close />
                        </button>
                        <iframe onLoad={this.onSubmitForm} id="no-target" name="no-target" style={{display: 'none'}}></iframe>
                        <form className="form" target="no-target" onSubmit={this.handleSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLSeSXrrAu2yTNYflq2Ib8l4GC-FFAkkmFy5Ze1eNhRLR7d9a5w/formResponse" method="POST">
                            <label className="input-field" htmlFor="name">name:
                                <input type="text" placeholder="name" name="entry.2005620554" id="name"/>
                            </label>
                            <label className="input-field" htmlFor="email" required>email:
                                <input type="email" placeholder="email" name="emailAddress" id="email"/>
                            </label>
                            <label className="input-field text" htmlFor="message">message:
                                <textarea placeholder="your message" name="entry.1065046570" id="message"></textarea>
                            </label>
                            <input type="submit" value="Send"/>                        
                        </form>
                    </div>
                </aside>
            </FocusTrap>
        )
    }   
}

export default Modal;
