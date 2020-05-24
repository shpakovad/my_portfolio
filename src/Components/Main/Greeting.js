import React from 'react';
import s from './Main.module.css';

function Greeting() {
    return (
        <div className={s.greeting}>
            <span> Hi there,</span>
            <span> I'm Dasha<span>Shpakova </span> </span>
            <h1> A Front-end Developer </h1>
        </div>
    );
}

export default Greeting;
