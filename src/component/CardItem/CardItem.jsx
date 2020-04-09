import React from "react";
import styles from "./CardItem.module.css";

const CardItem = () => {
    return (
        <carditem className={styles.cardItem}>
            <icon className={styles.icon}>Icon
                <img src="" alt=""/></icon>
            <h3 className={styles.name}>React</h3>
            <description className={styles.description}> Подробное описание</description>
        </carditem>
    )
};

export default CardItem;