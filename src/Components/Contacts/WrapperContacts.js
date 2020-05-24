import React from 'react';
import s from './Contacts.module.css';

function WrapperContacts() {

    return (
        <form className={s.wrapperContacts} action="https://formspree.io/mzbeqown" method="POST">
            <input className={s.form} placeholder="Name" type='text'
                   name='name'/>
            <input className={s.form} placeholder="e-mail" type='email'
                   name='email'/>
            <textarea className={s.message} placeholder='Message'
                      name='body'></textarea>
            <input name='next' type='hidden' value='https://shpakovad.github.io/portfolio/'/>
            <button className={s.btnSubmit} type='submit'> Send message</button>
        </form>

    );
}

export default WrapperContacts;
