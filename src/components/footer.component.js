import React, {Link} from 'react';
import Modal from '../components/modal.component';
import {ReactComponent as Facebook} from '../resources/facebook-square-brands.svg';
import {ReactComponent as Linkedin} from '../resources/linkedin-brands.svg';
import {ReactComponent as Github} from '../resources/github-square-brands.svg';
import {ReactComponent as Mail} from '../resources/envelope-square-solid.svg';
import {ReactComponent as CV} from '../resources/file-solid.svg';
import FooterStyles from '../style/Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        };
    }

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    openModalHandler = () => {
        this.setState({
            isShown: true
        }, () => {
            this.toggleScrollLock();
        })
    }

    closeModal = () => {
        this.toggleScrollLock();
        document.querySelector('.open-modal-btn').focus();
    }

    onEscPress = (e) => {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    onClickOutside = (e) => {
        if (this.modal && this.modal.contains(e.target))
            {
                return 
            }
        this.closeModal();
    }

    render() {
        return (
            <div className="footer">
                <div className="social">
                    <div> 
                        <a href="mailto:adam.pawlinski@gmail.com?subject=Hey, I would like to work with you..."><Mail className="logo" /></a>
                    </div>                    
                    <div> 
                        <a href="https://www.facebook.com/adam.pawlinski.14" target="_blank"><Facebook className="logo" /></a>
                    </div>
                    <div> 
                        <a href="https://www.linkedin.com/in/adam-pawlinski/" target="_blank"><Linkedin className="logo"/></a>
                    </div>                    
                    <div> 
                        <a href="https://github.com/AdamPawlinski" target="_blank"><Github className="logo"/></a> 
                    </div>                      
                </div>                     
                <button className="open-modal-btn" onClick={this.openModalHandler}>Contact Me</button>
                <a href="../resources/cv-adam-pawlinski.pdf" target="_blank" className="logo cv"><CV/>CV</a>
                {/* {
                    this.state.isShown ? 
                    <Modal
                        closeModal={this.closeModal}
                        onKeyDown={this.onEscPress}
                        onClickOutside={this.onClickOutside}
                    /> 
                    : null
                }             */}
            </div>
        )
    }
}

export default Footer;