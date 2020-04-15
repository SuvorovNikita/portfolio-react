import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = () => {
    return (
        <div className={styles.cardItem}>
            <img src="" alt=""/>Картинка
            <a href="#."><h3 className={styles.name}>Смотреть</h3></a>
            <div className={styles.description}> Название проектов</div>
            <div className={styles.description}> Кратокое описание</div>
        </div>
    )
};

export default ProjectItem;