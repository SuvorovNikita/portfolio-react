import React from "react";
import styles from "./Slogan.module.scss";
import Title from "../../common/title/title";
import Button from "../../common/ui/button/button";

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <Title text='Now I consider variants of distant work.'/>
                <Button linkName='Find me' href='https://t.me/SuvorovNA'/>
            </div>
        </div>
    )
};

export default Slogan;