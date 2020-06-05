import React from "react";
import ProjectItem from "./cardItem/ProjectItem";
import Title from "../../common/title/title";
import cat from './../../assets/img/cat.jpg';
import books from './../../assets/img/books.jpg';


import styles from "./Project.module.scss";

const Project = () => {
    const social = {
        backgroundImage: `url(${cat})`
    };
    const book = {
        backgroundImage: `url(${books})`
    };
    return (
        <div className={styles.project}>
            <div className={styles.container}>
                <Title text='My works'/>
                <div className={styles.wrapper}>
                    <ProjectItem
                        href="https://images.wallpaperscraft.com/image/cat_wall_peeking_150278_1280x720.jpg"
                        style={social}
                        title='Counter'
                        subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                '/>

                    <ProjectItem
                        href='https://images.wallpaperscraft.com/image/books_shelf_reading_125442_1280x720.jpg'
                        style={book}
                        title='Todo list'
                        subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit '/>
                </div>
            </div>
        </div>
    )
};

export default Project;