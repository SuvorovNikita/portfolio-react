import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGit, faHtml5, faJs, faReact,} from "@fortawesome/free-brands-svg-icons";


import CardItem from "./cardItem/CardItem";
import Title from "../../common/title/title";

import styles from "./Skills.module.scss";

const Skills = () => {

    return (
        <div className={styles.skills} id='skills'>
            <div className={styles.container}>
                <Title text='Skills'/>
                    <div className={styles.skillsCard}>
                        <CardItem name='React'
                                  FontAwesomeIcon={<FontAwesomeIcon className={styles.skillsCard__reactIcon}
                                                                    icon={faReact}/>}/>
                        <CardItem name='HTML5'
                                  FontAwesomeIcon={<FontAwesomeIcon className={styles.skillsCard__reactIcon}
                                                                    icon={faHtml5}/>}/>
                        <CardItem name='Redux'
                                  FontAwesomeIcon={<FontAwesomeIcon className={styles.skillsCard__reactIcon}
                                                                    icon={faReact}/>}/>
                        <CardItem name='TypeScript'
                                  FontAwesomeIcon={<FontAwesomeIcon className={styles.skillsCard__reactIcon} icon={faJs}/>}/>
                        <CardItem name='Git'
                                  FontAwesomeIcon={<FontAwesomeIcon className={styles.skillsCard__reactIcon} icon={faGit}/>}/>
                    </div>
            </div>
        </div>
    )
};

export default Skills;