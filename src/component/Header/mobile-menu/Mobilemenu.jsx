import React from "react";
import {Link} from "react-scroll";


import styles from "./Mobilemenu.module.scss";

const Mobilemenu = () => {

    return (
            <nav className={styles.menuMobile}>
                <div className={mobileMenuActive}>
                    <Link className={styles.navlink} smooth={true} offset={1} to="skills">Skills</Link>
                    <Link className={styles.navlink} smooth={true} offset={1} to="work">Project</Link>
                    <Link className={styles.navlink} smooth={true} offset={1} to="contact">Contacts</Link>
                </div>
            </nav>
    )
};

export default Mobilemenu;