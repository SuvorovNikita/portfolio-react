import React from "react";
import styles from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={styles.footer} id='contact'>
            <div className={styles.container}>
                <h2 className={styles.title}>Nikita</h2>
                <div className={styles.social}>
                    <a target='_blank' href='https://vk.com/mr_p0'> <FontAwesomeIcon className={styles.socialReactIcon} icon={faVk}/></a>
                    <a target='_blank' href='https://www.instagram.com/suvorov_ns/'> <FontAwesomeIcon className={styles.socialReactIcon} icon={faInstagram}/></a>
                    <a target='_blank' href='https://t.me/SuvorovNA'><FontAwesomeIcon className={styles.socialReactIcon} icon={faTelegramPlane}/></a>
                    <a target='_blank' href='https://github.com/SuvorovNikita'> <FontAwesomeIcon className={styles.socialReactIcon} icon={faGithub}/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/NikitaSuvorov/'> <FontAwesomeIcon className={styles.socialReactIcon} icon={faLinkedin}/></a>
                </div>
                <div className={styles.footerCopyring}>All rights reserved</div>
            </div>
        </div>
    )
};

export default Footer;