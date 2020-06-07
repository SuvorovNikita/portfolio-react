import React, {useState} from "react";
import {Link} from "react-scroll";
import {faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from "./Nav.module.scss";

const Nav = () => {

    let [mobile, setMobile] = useState(
        {isActive: false}
    );

    let mobileMenuActive = mobile.isActive ? styles.link : styles.menuMobile;

    function activeMobile() {
        setMobile({isActive: !mobile.isActive})
    }

    return (
            <nav className={styles.nav}>
                <a onClick={activeMobile} className={styles.btnMenu}>Menu</a>
                <div className={mobileMenuActive}>
                    <Link className={styles.link} smooth={true} to="skills">Skills</Link>
                    <Link className={styles.link} smooth={true} to="work">Project</Link>
                    <Link className={styles.link} smooth={true} to="contact">Contacts</Link>
                </div>
            </nav>
    )
};

export default Nav;