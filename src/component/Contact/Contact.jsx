import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.title}>Контакты</h2>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Имя"/>
                    <input type="text" placeholder="Фамилия"/>
                    <textarea placeholder="Сообщение" ></textarea>
                </form>
            </div>
        </div>
    )
};

export default Contact;