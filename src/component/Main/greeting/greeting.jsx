import React from "react";
import styles from "../greeting/greeting.module.scss";
import ReactTypingEffect from 'react-typing-effect';
import Fade from "react-reveal";

const Greeting = () => {
    return (
        <Fade left>
            <div className={styles.greeting}>
                <span className={styles}>Hi!</span>
                <span className={styles}>My name is Nikita</span>
                <ReactTypingEffect className={styles}
                    text="I'm a front-end developer."
                />
            </div>
        </Fade>
    )
}

export default Greeting;