import React from "react";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles}>Привет</span>
                    <span className={styles}>Меня зовут Пётр Петров</span>
                    <span className={styles}>Я front-end разработчик</span>
                </div>
                <div className={styles.photo}>
                    <img  src="" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Main;