import React from "react";
import styles from "./textarea.module.scss";

const Textarea = (props) => {
    return (
        <div>
            <textarea className={styles.textarea}>{props.placeholder}</textarea>
        </div>
    )
}

export default Textarea;