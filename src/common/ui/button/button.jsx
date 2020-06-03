import React from "react";
import styles from "./button.module.scss";


const Button = (props) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>
                <a href='https://wallpaperscraft.com/wallpaper/cat_wall_peeking_150278' target='_blank'
                   className={styles.name}>{props.linkName}</a>
            </button>
        </div>
    )
}
export default Button;