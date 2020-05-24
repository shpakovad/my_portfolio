import React from 'react';
import s from './Skills.module.css';

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}><img src={props.icon} alt=''/></div>
            <h3 className={s.titleSkill}> {props.titleSkill} </h3>
            <span className={s.description}>  {props.description}</span>
        </div>
    );
};

export default Skill;
