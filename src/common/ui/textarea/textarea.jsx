import React from "react";
import styles from "./textarea.module.scss";

const Textarea = (props) => {
    return (
            <textarea className={styles.textarea}>{props.placeholder}</textarea>
    )
}

export default Textarea;