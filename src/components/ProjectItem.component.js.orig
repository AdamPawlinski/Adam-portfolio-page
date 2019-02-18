import React from 'react';
import image from '../resources/adam.jpg';
import ProjectItemStyles from '../style/ProjectItem.css';

const projects = [
    {
        "id": 1,
        "img": image,
        "name": "Finance company site",
        "description": "Commercial project - lending company portal. Techonolgies: React.js.",
        "technologies": "Technologies: React.js.",
        "target": "http://bit.ly/finmonneo"
    },
    {
        "id": 2,
        "img": image,
        "name": "Christmas app",
        "description": "Application randomly choosing the people to give the Christmas presents to. Techonolgies: JavaScript.",
        "technologies": "Technologies: JavaScript.",
        "target": "http://bit.ly/christmasappproject"
    },
    {
        "id": 3,
        "img": image,
        "name": "Songs search engine",
        "description": "Searching songs app from last.fm data base.",
        "technologies": "Technologies: jQuery, AJAX.",
        "target": "http://bit.ly/trakcsterproject"
    },
    {
        "id": 4,
        "img": image,
        "name": "Paper, rock, scissors game",
        "description": "Simple game, you against computer in 10 rounds. Techonolgies: JavaScript.",
        "technologies": "Technologies: JavaScript.",
        "target": "http://bit.ly/paperrockscissorsproject"
    },
    {
        "id": 5,
        "img": image,
        "name": "Chat application.",
        "description": "Chat app, you log in and write messages to all participtans. Techonolgies: React.js.",
        "technologies": "Technologies: React.js.",
        "target": "http://bit.ly/chatappproject"
    },
    {
        "id": 6,
        "img": image,
        "name": "Countries search engine",
        "description": "With this app you search country and its main data from external API. Techonolgies: jQuery, AJAX.",
        "technologies": "Technologies: jQuery, AJAX.",
        "target": "http://bit.ly/cuntrieslistproject"
    }    
]

const ProjectItem = () => {
    // let baseRegex = new RegExp( `${ window.location.hostname}` );

    // targetLink = (event) => {
    //     if ( window.matchMedia( '(display-mode: standalone)' ).matches ) {
    //     window.addEventListener( 'click', function() {
    //         if (
    //             event.target.tagName === 'A' &&
    //             ! baseRegex.test( event.target.href )
    //         ){
    //             window.open( event.target.href );
    //             event.preventDefault();
    //         } 
    //     } );
    // }
    return (
        <div className="item-wrapper">
            {
                projects.map(
                    (item) => {                        
                        return (
                            <a  className={`item-${item.id}`} key={item.id} href={item.target} target="_blank">  
                                <div className="item">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </a>
                        )
                    }
                )
            }            
        </div>
    )
}

export default ProjectItem;

