import React from 'react';
import s from './Skills.module.css';

function HeaderTitle() {
    return (
        <div className={s.headerTitle}>
            <h2 className={s.headerTitle}>My Skills</h2>
            <div className={s.line}></div>
        </div>
    );
}

export default HeaderTitle;
