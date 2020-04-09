import React from "react";
import styles from "./Skills.module.css";
import CardItem from "../CardItem/CardItem";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.title}>Мои скилы</h2>
                <card className={styles.card}>
                  <CardItem/>
                  <CardItem/>
                  <CardItem/>
                </card>
            </div>
        </div>
    )
};

export default Skills;