import React from 'react';
import s from './Projects.module.css';
import WrapperProjects from './WrapperProjects';
import Fade from 'react-reveal/Fade';

const Projects = (props) => {
    return (
        <div id={'projects'} className={s.projects}>
            <Fade bottom>
                <div className={s.container}>
                    <span className={s.titleMain}> My Projects </span>
                    <div className={s.line}></div>
                    <WrapperProjects/>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
