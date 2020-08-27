import React from "react";
import styles from "./title.module.scss";
import separator from "../../component/Project/separator.png";

const Title = (props) => {
    let {text} = props;
    return (
            <div className={styles.title}>
                <h2>{text}</h2>
                <img className={styles.titleSeparator} src={separator} alt=""/>
        </div>
    )
};

export default Title;