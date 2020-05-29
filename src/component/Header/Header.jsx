import React from "react";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
               <Nav/>
            </div>
        </div>
    )
};

export default Header;