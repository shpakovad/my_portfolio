import React from 'react';
import Particles from "react-particles-js";
import s from "../../App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Slogan from "../Slogan/Slogan";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function MainContainer(props) {

    return (
        <div>
            <Particles className={s.particles} params={props.particlesOpt}/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>

    );
}

export default MainContainer;
