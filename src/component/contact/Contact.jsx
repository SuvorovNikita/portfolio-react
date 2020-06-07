import React from "react";

import Title from "../../common/title/title";
import Input from "../../common/ui/input/input";
import Textarea from "../../common/ui/textarea/textarea";

import styles from "./Contact.module.scss";
import Button from "../../common/ui/button/button";

const Contact = () => {
    return (
        <div className={styles.contact} id='contact'>
            <div className={styles.container}>
                <Title text='Contacts'/>
                <form className={styles.form}>
                    <Input placeholder='Name'/>
                    <Input placeholder='Surname'/>
                    <Textarea placeholder='Enter your message'/>
                    <Button  linkName='Submit'/>
                </form>
            </div>
        </div>
    )
};

export default Contact;