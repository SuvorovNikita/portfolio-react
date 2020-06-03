import React from "react";

import Title from "../../common/title/title";
import Input from "../../common/ui/input/input";
import Textarea from "../../common/ui/textarea/textarea";

import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <Title text='Контакты'/>
                <div className={styles.form}>
                    <Input name='First Name'/>
                    <Input lastName='Last Name'/>
                    <Textarea placeholder='Message'/>
                </div>
            </div>
        </div>
    )
};

export default Contact;