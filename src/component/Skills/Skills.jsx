import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5, faReact} from "@fortawesome/free-brands-svg-icons";

import CardItem from "./cardItem/CardItem";
import Title from "../../common/title/title";

import styles from "./Skills.module.scss";


const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title text='Skills'/>
                <div className={styles.card}>
                    <CardItem name='React'
                              FontAwesomeIcon={<FontAwesomeIcon className={styles.reactIcon} icon={faReact}/>}/>
                    <CardItem name='HTML5'
                              FontAwesomeIcon={<FontAwesomeIcon className={styles.reactIcon} icon={faHtml5}/>}/>
                    <CardItem name='Redux'
                              FontAwesomeIcon={<FontAwesomeIcon className={styles.reactIcon} icon={faReact}/>}/>
                </div>
            </div>
        </div>
    )
};

export default Skills;