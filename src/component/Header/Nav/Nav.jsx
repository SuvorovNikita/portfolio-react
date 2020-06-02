import React, {useState} from "react";
import styles from "./Nav.module.scss";

const Nav = () => {

    let [mobile, setMobile] = useState(
        {isActive: false}
    );

    let mobileMenuActive = mobile.isActive ? styles.link : styles.menuMobile

    function activeMobile() {
        setMobile({isActive: !mobile.isActive})
    }

    return (
        <div>
            <nav className={styles.nav}>
                <a onClick={activeMobile} className={styles.btnMenu}>Menu</a>
                <div className={mobileMenuActive}>
                    <a className={styles.link} href=".#">Скиллы</a>
                    <a className={styles.link} href=".#">Проекты</a>
                    <a className={styles.link} href=".#">Контакты</a>
                </div>

            </nav>
        </div>
    )
};

export default Nav;