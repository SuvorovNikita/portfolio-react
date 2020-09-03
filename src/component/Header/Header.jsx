import React from "react";
import styles from "./Header.module.scss";
import Nav from "./nav/Nav";
import Mobilemenu from "./mobile-menu/Mobilemenu";

const Header = () => {
    return (
        <div className={styles.header}  >
            <div className={styles.container}>
                <Nav/>
                <Mobilemenu/>
            </div>
        </div>
    )
};

export default Header;