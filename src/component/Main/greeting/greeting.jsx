import React from "react";
import styles from "../greeting/greeting.module.scss";

const Greeting = () => {
    return (
        <div className={styles.greeting}>
            <span className={styles}>Привет</span>
            <span className={styles}>Меня зовут Пётр Петров</span>
            <span className={styles}>Я front-end разработчик</span>
        </div>
    )
}

export default Greeting;