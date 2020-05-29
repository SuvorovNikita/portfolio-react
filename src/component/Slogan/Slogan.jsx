import React from "react";
import styles from "./Slogan.module.scss";

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <h2 className={styles.title}>Рассматриваю варианты удаленной работы</h2>
                <a href="#." className={styles.btn}>Найти меня</a>
            </div>
        </div>
    )
};

export default Slogan;