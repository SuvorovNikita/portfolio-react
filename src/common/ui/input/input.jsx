import React from "react";
import styles from "./input.module.scss"

const Input = (props) => {
    return (
        <div>
            <input  className={styles.input} type="text"/>
        </div>
    )
}

export default Input;