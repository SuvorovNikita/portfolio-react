import React from "react";
import styles from "./Slogan.module.scss";
import Title from "../../common/title/title";

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <Title text='Now I consider variants of distant work.'/>
                <a href='https://t.me/SuvorovNA' className={styles.btnAlt}>Find me</a>
            </div>
        </div>
    )
};

export default Slogan;