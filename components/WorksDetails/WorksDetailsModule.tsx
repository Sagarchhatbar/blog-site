import React from "react";
import styles from "../../styles/WorksDetail.module.css";

const WorksDetailsModule = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>Designing Dashboards with usability in mind</h1>
            </div>
            <div className={styles.details}>
              <div className={styles.year}>2020</div>
              <div className={styles.type}>
                Dashboard, User Experience Design
              </div>
            </div>
            <div className={styles.description}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <img src="worksDetail1.png" alt="img1" />
        </div>
        <div>
          <h1>
            Heading 1
          </h1>
          <h2>
            Heading 2
          </h2>
        </div>
        <div className={styles.image}>
          <img src="worksDetail2.png" alt="img1" />
        </div>
        <div className={styles.image}>
          <img src="worksDetail3.png" alt="img1" />
        </div>
      </div>
    </>
  );
};

export default WorksDetailsModule;
