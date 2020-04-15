import React from "react";
import styles from "./Project.module.css";
import ProjectItem from "./CardItem/ProjectItem";

const Project = () => {
    return(
        <div className={styles.project}>
            <div className={styles.container}>
           <h2 className={styles.title}>Мои Работы</h2>
              <div className={styles.wrapper}>
                  <ProjectItem/>
                  <ProjectItem/>
              </div>
            </div>

        </div>
    )
};

export default Project;