import React from "react";
import {Link} from "react-scroll";


import styles from "./Mobilemenu.module.scss";

const Mobilemenu = () => {
    return (
        <nav className={styles.mobileWrapper}>
            <Link className={styles.navlink} smooth={true} offset={1} to="skills">Skills</Link>
            <Link className={styles.navlink} smooth={true} offset={1} to="work">Project</Link>
            <Link className={styles.navlink} smooth={true} offset={1} to="contact">Contacts</Link>
        </nav>
    )
};

export default Mobilemenu;