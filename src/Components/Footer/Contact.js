import React from 'react';
import s from './Footer.module.css';

const Contact = (props) => {

    return (
        <div key={props.id} className={s.socialIcon}>
            <a target="_blank" rel="noopener noreferrer" href={props.httpAdress}>
                <img src={props.icon} alt=''/>
            </a>
        </div>
    );
};

export default Contact;
