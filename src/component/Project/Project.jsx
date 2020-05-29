import React from "react";
import ProjectItem from "./CardItem/ProjectItem";
import Title from "../../common/Title/title";
import obito from './../../assets/img/obito.png';


import styles from "./Project.module.css";

const Project = () => {
    const social = {
        backgroundImage: `url(${obito})`
    };
    return (
        <div className={styles.project}>
            <div className={styles.container}>
                <Title text='Мои работы'/>
                <div className={styles.wrapper}>
                    <ProjectItem
                        style={social}
                        title='Counter'
                        subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                '/>
                    <ProjectItem
                        style={social}
                        title='Todo list'
                        subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit '/>
                </div>
            </div>
        </div>
    )
};

export default Project;