import React from 'react';
import s from './NavMenu.module.css';

function NavMenu() {

    return (
        <div className={s.navMenu}>
            <div className={s.wrapperLink} >  <a href='' > Main</a> </div>
            <div className={s.wrapperLink} > <a href='#skills'  > Skills </a></div>
                <div className={s.wrapperLink}> <a href='#projects' > Projects</a></div>
                    <div className={s.wrapperLink}> <a href='#contacts' > Contacts</a></div>
        </div>
    );
}

export default NavMenu;
