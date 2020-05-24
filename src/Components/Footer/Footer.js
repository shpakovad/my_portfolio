import React from 'react';
import s from './Footer.module.css';
import SocialnetworksContacts from "./SocialnetworksContacts";

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div>
                    <span className={s.titleMain}> Dasha Shpakova </span>
                    <div className={s.line}></div>
                </div>
                <SocialnetworksContacts/>
                <span className={s.rights}> © 2019 All rights reserved </span>
            </div>
        </div>
    );
}

export default Footer;
