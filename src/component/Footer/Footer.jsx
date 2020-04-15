import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Никита</h2>
                <div className={styles.social}>
                    <a href="#." className={styles.link}>Вконтакте</a>
                    <a href="#." className={styles.link}>Инстаграм</a>
                    <a href="#." className={styles.link}>ЛицоБук</a>
                    <a href="#." className={styles.link}>Свитер</a>
                    <a href="#." className={styles.link}>Гитхаб</a>
                </div>
                <div className={styles.copyring}>Все права защищены</div>
            </div>
        </div>
    )
};

export default Footer;