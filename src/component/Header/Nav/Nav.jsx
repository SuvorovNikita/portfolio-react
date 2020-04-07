import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href=".#" className={styles.link}>Главная</a>
            <a href=".#" className={styles.link}>Скиллы</a>
            <a href=".#" className={styles.link}>Проекты</a>
            <a href=".#" className={styles.link}>Контакты</a>
        </div>
    )
};

export default Nav;