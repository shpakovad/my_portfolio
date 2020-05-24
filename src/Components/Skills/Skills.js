import React from 'react';
import s from './Skills.module.css';
import HeaderTitle from './HeaderTitle';
import WrapperSkills from './WrapperSkills';
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div id={'skills'} className={s.skills}>
            <Fade bottom>
                <div className={s.container}>
                    <HeaderTitle/>
                    <WrapperSkills/>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
