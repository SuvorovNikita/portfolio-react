import React, {useState} from "react";
import styles from "./Nav.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {

    let [mobile, setMobile] = useState(
        {isActive: false}
    );

    let mobileMenuActive = mobile.isActive ? styles.link : styles.menuMobile;

    function activeMobile() {
        setMobile({isActive: !mobile.isActive})
    }

    return (
        <div>
            <nav className={styles.nav}>
                <a onClick={activeMobile} className={styles.btnMenu}>Menu</a>
                <div className={mobileMenuActive}>
                    <a className={styles.link} href=".#">Skills</a>
                    <a className={styles.link} href=".#">Project</a>
                    <a className={styles.link} href=".#">Contacts</a>
                    <a className={styles.link} target='_blank' href='https://t.me/SuvorovNA'>
                        <FontAwesomeIcon className={styles.reactIcon} icon={faTelegramPlane}/>
                    </a>
                    <a className={styles.link} target='_blank' href='https://vk.com/mr_p0'>
                        <FontAwesomeIcon className={styles.reactIcon} icon={faVk}/>
                    </a>

                </div>

            </nav>
        </div>
    )
};

export default Nav;