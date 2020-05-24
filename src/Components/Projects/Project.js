import React from 'react';
import s from './Projects.module.css';

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectIcon}>
                <div className={s.wrapperImg}>
                    <img className={s.image} src={props.src} alt=''/>
                    <a className={s.btn} target="_blank" rel="noopener noreferrer" href={props.httpAdress}> See </a>
                </div>
            </div>
            <span className={s.titleProject}> {props.titleProject} </span>
        </div>
    );
}

export default Project;

