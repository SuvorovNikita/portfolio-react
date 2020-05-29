import React from "react";
import styles from "./Skills.module.css";
import CardItem from "./CardItem/CardItem";
import Title from "../../common/Title/title";

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