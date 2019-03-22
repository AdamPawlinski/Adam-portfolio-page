import React from 'react';
import avatar from '../resources/adam.jpg';
import '../style/Jumbotron.css';
import {ReactComponent as Arrow} from '../resources/angle-down-solid.svg';

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationLeft: '',
            animationRight: ''
        };
    }

    onMouseEnterHandler = () => {        
        this.setState({           
            animationLeft: 'animation-left',
            animationRight: 'animation-right'
        });
    }

    onMouseLeaveHandler = () => {
        this.setState({
            animationLeft: '',
            animationRight: ''            
        });
        
    }

    render() {
        return (
            <div className="jumbotron">            
                {/* <label htmlFor="eng">ENG </label>
                    <input type="checkbox" name="lang" value="eng" checked>eng</input>
                <label htmlFor="pl">PL </label>
                    <input type="checkbox" name="lang" value="pl">pl</input>             */}
                <div className="center"> 
                    <h1>
                        Adam Pawliński
                    </h1>
                    <h2>
                        Front-end developer
                    </h2>
                    <img src={avatar} className="avatar" alt="Adam Pawliński photo" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}/> 
                    <Arrow className="arrow"/>
                </div>
                <p className={"left " + this.state.animationLeft}>
                    I'm the front-end developer with above 6-months experience in projects based on JavaScript, React.js technologies.
                    After finishing 6-month intensive bootcamp, during which I learned much about developers tools (like Webpack, GIT, NPM) 
                    I have been working on my own projects and started my first commercial project for financial company. 
                    Please have a look at my projects and CV. I would be pleased to have opportunity to work with you, 
                    just don't hesitate to contact me. I'm interested in freelance projects and any type of constant contracts.
                </p>
                <div className={"right " + this.state.animationRight}>
                    <h3>Techonologies:</h3>
                    <ul>
                        <li>JavaScript, ES6</li>
                        <li>React</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Jumbotron;