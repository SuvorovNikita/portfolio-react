import React from "react";
import styles from "./Main.module.scss";
import Greeting from "./greeting/greeting";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.mainGreeting}>
                    <Greeting/>
                </div>
                <div className={styles.mainPhoto}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Main;