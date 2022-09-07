import React from 'react';
import ProjectItem from './cardItem/ProjectItem';
import Title from '../../common/title/title';
import cat from './../../assets/img/cat.jpg';
import books from './../../assets/img/books.jpg';
import socialNet from './../../assets/img/cat3.jpg';

import styles from './Project.module.scss';

import Fade from 'react-reveal';

const Project = () => {
  const social = {
    backgroundImage: `url(${cat})`,
  };
  const book = {
    backgroundImage: `url(${books})`,
  };
  const socialNetwork = {
    backgroundImage: `url(${socialNet})`,
  };
  return (
    <div className={styles.project} id="work">
      <div className={styles.container}>
        <Title text="My works" />
        <Fade left>
          <div className={styles.projectWrapper}>
            <ProjectItem
              href="https://suvorovnikita.github.io/counter/"
              style={social}
              title="Counter"
              /* subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                  .*/
            />

            <ProjectItem
              href="https://suvorovnikita.github.io/todo/"
              style={book}
              title="Todo list"
              /*subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit '*/
            />
            <ProjectItem
              href="https://suvorovnikita.github.io/polar/"
              style={socialNetwork}
              title="Polar"
              subText="In developing"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Project;
