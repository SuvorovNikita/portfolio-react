import React from "react";
import styles from "./ProjectItem.module.scss";

const ProjectItem = (props) => {
    let {title, subText} = props;
    return (
        <div className={styles.cardItem}>
            <div className={styles.img} style={props.style}>
                <a className={styles.btn} href="#."><h3 className={styles.name}>Смотреть</h3></a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectText}>{subText}</p>
            </div>
        </div>
    )
};

export default ProjectItem;