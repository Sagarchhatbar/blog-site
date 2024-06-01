import React from "react";
import styles from '../../styles/IntroductionPage.module.css';

const IntroductionPage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className={styles.button}>
            Download Resume
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src="man.png" width={243} />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
