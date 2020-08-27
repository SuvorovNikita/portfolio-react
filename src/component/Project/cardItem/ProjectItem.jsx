import React from "react";
import styles from "./ProjectItem.module.scss";
import Button from "../../../common/ui/button/button";

const ProjectItem = (props) => {
    let {title, subText, href} = props;
    return (
        <div className={styles.cardItem}>
            <div className={styles.cardItemImg} style={props.style}>
                <Button  linkName='LOOK' href={href}/>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectInfoProjectTitle}>{title}</h3>
                <p className={styles.projectInfoProjectText}>{subText}</p>
            </div>
        </div>
    )
};

export default ProjectItem;