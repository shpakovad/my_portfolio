import React from 'react';
import s from './Main.module.css';

function Photo() {
    return (
        <div className={s.photo}>
            <div className={s.image}></div>
        </div>
    );
}

export default Photo;
