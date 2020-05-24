import React, {useState} from 'react';
import s from './Contacts.module.css';
import axios from "axios";
import {Redirect} from "react-router-dom";

function WrapperContacts() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [sentMessage, setSentMessage]=useState(false)

    const onSentMessage=(e)=>{
        e.preventDefault()
       console.log(name,email,message)
        axios.post("http://localhost:3010/sendMessage",
            {
                name:name,
                email:email,
                message:message
            })
            .then(()=>{
                console.log("Message Sent")
                setSentMessage(true)
            })
    }

    return (<>
        <form className={s.wrapperContacts}>
            <input className={s.form} placeholder="Name" type='text' value={name} onChange={(e)=>{setName(e.currentTarget.value)}}/>
            <input className={s.form} placeholder="e-mail" type='email' value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
            <textarea className={s.message} placeholder='Message' value={message} onChange={(e)=>{setMessage(e.currentTarget.value)}}/>
            <button className={s.btnSubmit} type='submit' onClick={onSentMessage}> Send message</button>
        </form>
    {sentMessage && <Redirect to="/sentMessage" />}
    </>
    );
}

export default WrapperContacts;
