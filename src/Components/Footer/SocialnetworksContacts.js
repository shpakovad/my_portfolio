import React from 'react';
import s from './Footer.module.css';
import telegram from '../../assets/img/telegram.svg';
import viber from '../../assets/img/viber.svg';
import linkedin from '../../assets/img/linkedin.svg';
import skype from '../../assets/img/skype.svg';
import githubcontact from '../../assets/img/githubcontact.svg'
import Contact from "./Contact";

const SocialnetworksContacts = (props) => {

    let telegramIcon = telegram;
    let viberIcon = viber;
    let skypeIcon = skype;
    let linkedinIcon = linkedin;
    let gitHubIcon = githubcontact;

    let contacts = [
        {id: 1, icon: telegramIcon, httpAdress: 'https://t.me/Dasha_Shpakova'},
        {id: 2, icon: viberIcon, httpAdress: 'viber://chat?number=+375291332819'},
        {id: 3, icon: skypeIcon, httpAdress: 'skype:shpakylia_dasha?chat'},
        {id: 4, icon: linkedinIcon, httpAdress: 'https://www.linkedin.com/in/dasha-shpakova-aa3b75198/'},
        {id: 5, icon: gitHubIcon, httpAdress: 'https://github.com/shpakovad?tab=repositories'},
    ];

    let contactsItems = contacts.map((item) => {
        return <Contact key={item.id} icon={item.icon} httpAdress={item.httpAdress}/>
    });
    return (
        <div className={s.social}>
            {contactsItems}
        </div>
    );
};

export default SocialnetworksContacts;
