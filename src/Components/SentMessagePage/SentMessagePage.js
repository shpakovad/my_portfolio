import React, {useState} from 'react';
import s from "./SentMessagePage.module.css"
import {Redirect} from "react-router-dom";

function SentMessagePage() {

    const [backToMainPage,setBackToMainPage] = useState(false)

   const bakOnMain=()=>{
       setBackToMainPage(true)
    }

    return (<>
        <div className={s.wrapper}>
            <div>Thanks for you message! </div>
                <div>  I'll contact you as soon as possible!</div>
            <button onClick={bakOnMain}>Back to main Page</button>
        </div>
    {backToMainPage && <Redirect to="/" />}
    </>
    );
}

export default SentMessagePage;
