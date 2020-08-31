import React from "react";
import {Link} from "react-scroll";


import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navWrapper}>
                <Link className={styles.navlink} smooth={true} offset={1} to="skills">Skills</Link>
                <Link className={styles.navlink} smooth={true} offset={1} to="work">Project</Link>
                <Link className={styles.navlink} smooth={true} offset={1} to="contact">Contacts</Link>
            </div>
        </nav>
    )
};

export default Nav;