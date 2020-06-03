import React from "react";
import styles from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Никита</h2>
                <div className={styles.social}>
                    <a href='.#'> <FontAwesomeIcon className={styles.reactIcon} icon={faVk}/></a>
                    <a href='.#'> <FontAwesomeIcon className={styles.reactIcon} icon={faInstagram}/></a>
                    <a href='.#'> <FontAwesomeIcon className={styles.reactIcon} icon={faTelegramPlane}/></a>
                    <a href='.#'> <FontAwesomeIcon className={styles.reactIcon} icon={faGithub}/></a>
                </div>
                <div className={styles.copyring}>Все права защищены</div>
            </div>
        </div>
    )


};

export default Footer;