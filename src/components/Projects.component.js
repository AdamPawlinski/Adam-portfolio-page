import React from 'react';
import ProjectItem from './ProjectItem.component';
import ProjectsStyles from '../style/Projects.css';
import {ReactComponent as Arrow} from '../resources/angle-down-solid.svg';

const Projects = () => {
    return (
        <div className="projects">
            <h3>Projects:</h3>            
            <div>
                <ProjectItem />
            </div>
            <Arrow className="arrow"/>
        </div>
    )
}

export default Projects;