import React from "react";
import styles from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={styles.footer} id='footer'>
            <div className={styles.container}>
                <h2 className={styles.title}>Nikita</h2>
                <div className={styles.social}>
                    <a target='_blank' href='https://vk.com/mr_p0'> <FontAwesomeIcon className={styles.reactIcon} icon={faVk}/></a>
                    <a target='_blank' href='https://www.instagram.com/suvorov_ns/'> <FontAwesomeIcon className={styles.reactIcon} icon={faInstagram}/></a>
                    <a target='_blank' href='https://t.me/SuvorovNA'><FontAwesomeIcon className={styles.reactIcon} icon={faTelegramPlane}/></a>
                    <a target='_blank' href='https://github.com/SuvorovNikita'> <FontAwesomeIcon className={styles.reactIcon} icon={faGithub}/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/nikita-suvorov-4a95b51a2/'> <FontAwesomeIcon className={styles.reactIcon} icon={faLinkedin}/></a>
                </div>
                <div className={styles.copyring}>All rights reserved</div>
            </div>
        </div>
    )


};

export default Footer;