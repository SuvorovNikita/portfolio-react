import React, {useState} from "react";
import {Link} from "react-scroll";
import iconMenu from "../../../assets/img/open-menu.svg"


import styles from "./Mobilemenu.module.scss";


const Mobilemenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)


    const onMobileMenuClick = () => {
        setMenuIsOpen(
            !menuIsOpen
        )
    }
    return (
        <nav className={styles.mobileWrapper}>
            <div className={menuIsOpen ? `${styles.mobileWrapperItem} ${styles.show}` : styles.mobileWrapperItem}>
                <Link className={styles.navlink} smooth={true} offset={1} to="main">Main</Link>
                <Link className={styles.navlink} smooth={true} offset={1} to="skills">Skills</Link>
                <Link className={styles.navlink} smooth={true} offset={1} to="work">Project</Link>
                <Link className={styles.navlink} smooth={true} offset={1} to="contact">Contacts</Link>
            </div>
            <div  onClick={onMobileMenuClick} className={styles.mobileBtn}><img src={iconMenu} alt="Ошибка"/></div>
        </nav>
    )
};

export default Mobilemenu;