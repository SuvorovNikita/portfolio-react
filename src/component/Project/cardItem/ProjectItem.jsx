import React from "react";
import styles from "./ProjectItem.module.scss";
import Button from "../../../common/ui/button/button";

const ProjectItem = (props) => {
    let {title, subText} = props;
    return (
        <div className={styles.cardItem}>
            <div className={styles.img} style={props.style}>
             <Button linkName='LOOK'/>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectText}>{subText}</p>
            </div>
        </div>
    )
};

export default ProjectItem;