import React, {useState} from "react";
import {Link} from "react-scroll";


import styles from "./Nav.module.scss";

const Nav = () => {

    let [mobile, setMobile] = useState(
        {isActive: false}
    );

    let mobileMenuActive = mobile.isActive ? styles.navlink : styles.menuMobile;

    function activeMobile() {
        setMobile({isActive: !mobile.isActive})
    }

    return (
            <nav className={styles.nav}>
                <a onClick={activeMobile} className={styles.navBtn}>Menu</a>
                <div className={mobileMenuActive}>
                    <Link className={styles.navlink} smooth={true} to="skills">Skills</Link>
                    <Link className={styles.navlink} smooth={true} to="work">Project</Link>
                    <Link className={styles.navlink} smooth={true} to="contact">Contacts</Link>
                </div>
            </nav>
    )
};

export default Nav;