import React from "react";
import styles from "./input.module.scss"

const Input = ({ placeholder}) => {
    return (
            <input placeholder={placeholder} className={styles.input} type="text"/>
    )
}

export default Input;