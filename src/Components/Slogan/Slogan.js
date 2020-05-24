import React from 'react';
import '../../App.module.css';
import s from './Slogan.module.css';
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div className={s.slogan}>
            <Fade bottom>
                <div className={s.container}>
                    <span className={s.sloganText}> I'm Available For Freelancer </span>
                    <div className={s.line}></div>
                    <a className={s.btn} href='#contacts'> To hire me </a>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
