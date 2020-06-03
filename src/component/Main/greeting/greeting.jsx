import React from "react";
import styles from "../greeting/greeting.module.scss";

const Greeting = () => {
    return (
        <div className={styles.greeting}>
            <span className={styles}>Hi!</span>
            <span className={styles}>My name is Nikita</span>
            <span className={styles}>I'm a front-end developer.</span>
        </div>
    )
}

export default Greeting;