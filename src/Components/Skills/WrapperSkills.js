import React from 'react';
import s from './Skills.module.css';
import Skill from './Skill';
import html from '../../assets/img/html.svg';
import reactIcon from '../../assets/img/reactIcon.svg';
import javascript from '../../assets/img/javascript.svg';
import redux from '../../assets/img/redux.svg';
import unit from '../../assets/img/unit.svg';
import css from '../../assets/img/css.svg';
import axios from '../../assets/img/axios.svg';
import typescript from '../../assets/img/typescript.svg';
import bootstrap from '../../assets/img/bootstrap.svg';

const WrapperSkills = (props) => {
    let jsImage = javascript;
    let htmlImage = html;
    let reactImage = reactIcon;
    let reduxImage = redux;
    let unitImage = unit;
    let cssImage = css;
    let typescriptImage = typescript;
    let axiosImage = axios;
    let bootstrapImage = bootstrap;

    let skill = [
        {
            titleSkill: 'JavaScript',
            description: '',
            icon: jsImage,
            id: 1
        },
        {
            titleSkill: 'React',
            description: '',
            icon: reactImage,
            id: 2
        },

        {
            titleSkill: 'Redux',
            description: '',
            icon: reduxImage,
            id: 3
        },
        {
            titleSkill: 'HTML',
            description: '',
            icon: htmlImage,
            id: 4
        },
        {
            titleSkill: 'CSS',
            description: '',
            icon: cssImage,
            id: 5
        },

        {
            titleSkill: 'REST API',
            description: '',
            icon: axiosImage,
            id: 6
        },

        {
            titleSkill: 'Bootstrap',
            description: '',
            icon: bootstrapImage,
            id: 7
        },
        {
            titleSkill: 'TypeScript',
            description: '',
            icon: typescriptImage,
            id: 8
        },
        {
            titleSkill: 'Unit testing',
            description: '',
            icon: unitImage,
            id: 9
        },
    ];

    let skillsDates = skill.map((item) => {
        return <Skill key={item.id} titleSkill={item.titleSkill} description={item.description} icon={item.icon}/>
    });

    return (
        <div className={s.wrapperSkills}>
            {skillsDates}
        </div>
    );
};

export default WrapperSkills;

