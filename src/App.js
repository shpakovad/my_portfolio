import React from 'react';
import './App.module.css';
import {Route} from "react-router-dom";
import MainContainer from "./Components/MainContainer/MainContainer";
import SentMessagePage from "./Components/SentMessagePage/SentMessagePage";

const particlesOpt = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 900
            }
        }
    }
}

function App() {

    return (
        <div className="App">
            <Route exact path="/" render={() => <MainContainer particlesOpt={particlesOpt}/>}/>
            <Route path="/sentMessage" render={() => <SentMessagePage/>}/>
        </div>
    );
}

export default App;
