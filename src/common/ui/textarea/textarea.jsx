import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({placeholder}) => {
    return (
            <textarea placeholder={placeholder} className={styles.textarea}></textarea>
    )
}

export default Textarea;