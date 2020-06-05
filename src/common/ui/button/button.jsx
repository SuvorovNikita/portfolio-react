import React from "react";
import styles from "./button.module.scss";


const Button = ({href, linkName}) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>
                <a href={href}
                   target='_blank'
                   className={styles.name}>{linkName}</a>
            </button>
        </div>
    )
}
export default Button;