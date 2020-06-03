import React from "react";
import styles from "./CardItem.module.scss";


const CardItem = (props) => {
    return (
        <div className={styles.cardItem}>
            <div className={styles.iconBox}>{props.FontAwesomeIcon}</div>
            <h3 className={styles.name}>{props.name}</h3>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    )
};

export default CardItem;