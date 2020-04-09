import React from "react";
import styles from "./CardItem.module.css";

const CardItem = () => {
    return (
        <div className={styles.cardItem}>
            <icon className={styles.icon}>Icon
                <img src="" alt=""/></icon>
            <h3 className={styles.name}>React</h3>
            <div className={styles.description}> Подробное описание</div>
        </div>
    )
};

export default CardItem;