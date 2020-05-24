import React from 'react';
import s from './Main.module.css';
import Greeting from './Greeting';
import Photo from './Photo';

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <Greeting/>
                <Photo/>
            </div>
        </div>
    );
}

export default Main;
