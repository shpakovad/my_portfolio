import React from 'react';
import s from './Projects.module.css';
import Project from './Project';
import wrapperGame from '../../assets/img/wrapperGame.png';
import wrapperSocialNetwork from '../../assets/img/wrapperSocialNetwork.PNG';
import wrapperCounter from '../../assets/img/wrapperCounter.PNG';
import wrapperTodolist from '../../assets/img/wrapperTodolist.PNG'

const WrapperProjects = (props) => {

    let project = [
        {
            id: 1,
            titleProject: 'Game',
            src: wrapperGame,
            httpAdress: 'https://shpakovad.github.io/simpleGameReact-Redux/'
        },
        {
            id: 2,
            titleProject: 'Social Network',
            src: wrapperSocialNetwork,
            httpAdress: 'https://shpakovad.github.io/SocialnetworkReact-Redux/'
        },
        {
            id: 3,
            titleProject: 'Counter',
            src: wrapperCounter,
            httpAdress: 'https://shpakovad.github.io/counter_Redux/'
        },
        {
            id: 4,
            titleProject: 'ToDo List',
            src: wrapperTodolist,
            httpAdress: 'https://shpakovad.github.io/_ToDoList_/'
        }
    ];

    let projectDates = project.map((item) => {

        return <Project key={item.id} titleProject={item.titleProject} src={item.src}
                        httpAdress={item.httpAdress}/>
    })

    return (
        <div className={s.wrapperProjects}>
            {projectDates}
        </div>
    );
}

export default WrapperProjects;
