import React from 'react';
import s from './Contacts.module.css';
import WrapperContacts from './WrapperContacts';
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <div id={'contacts'} className={s.contacts}>
            <Fade bottom>
                <div className={s.container}>
                    <span className={s.titleMain}> Contacts </span>
                    <div className={s.line}></div>
                    <WrapperContacts/>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;

