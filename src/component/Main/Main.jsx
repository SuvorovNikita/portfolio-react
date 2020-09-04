import React from "react";
import styles from "./Main.module.scss";
import Greeting from "./greeting/greeting";
import Tilt from 'react-tilt'


const Main = () => {
    return (
        <div className={styles.main} id='main' >
            <div className={styles.container}>
                <div className={styles.mainGreeting}>
                    <Greeting/>
                </div>
                <div className={styles.wrapper}>
                <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img  className={styles.mainPhoto}  src="https://pm1.narvii.com/6435/f17b8adac6d03abaf188a7e3be5f7bce10b53971_hq.jpg" alt=""/>

                </Tilt>
                </div>
            </div>
        </div>
    )
};

export default Main;