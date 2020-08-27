import React from "react";
import styles from "./button.module.scss";


const Button = ({href, linkName}) => {
    return (
        <div className={styles.wrapper}>
                <a href={href}
                   target='_blank'
                   className={styles.btn}>{linkName}</a>
        </div>
    )
}
export default Button;