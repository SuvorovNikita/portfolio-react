import React from 'react';
import styles from './Main.module.scss';
import Greeting from './greeting/greeting';
import Tilt from 'react-tilt';
import photo from '../../assets/img/photo.jpg';

const Main = () => {
  return (
    <div className={styles.main} id="main">
      <div className={styles.container}>
        <div className={styles.mainGreeting}>
          <Greeting />
        </div>
        <div className={styles.wrapper}>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <img className={styles.mainPhoto} src={photo} alt="" />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Main;
