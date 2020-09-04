import React from "react";
import {Link} from "react-scroll";


import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navWrapper}>
                <Link className={styles.navlink} smooth={true} to="main">Main</Link>
                <Link className={styles.navlink} offset={-80} smooth={true} to="skills">Skills</Link>
                <Link className={styles.navlink} offset={-80} smooth={true} to="work">Project</Link>
                <Link className={styles.navlink} smooth={true} to="contact">Contacts</Link>
            </div>
        </nav>
    )
};

export default Nav;