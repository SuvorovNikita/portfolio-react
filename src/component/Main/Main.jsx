import React from "react";
import styles from "./Main.module.scss";
import Greeting from "./greeting/greeting";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <Greeting/>
                </div>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Main;