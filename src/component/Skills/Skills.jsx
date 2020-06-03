import React from "react";

import CardItem from "./CardItem/CardItem";
import Title from "../../common/Title/title";

import styles from "./Skills.module.scss";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
              <Title text='Скилуха'/>
                <div className={styles.card}>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                </div>
            </div>
        </div>
    )
};

export default Skills;