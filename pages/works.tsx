import React from "react";
import WorksModule from "../components/works/WorksModule";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styles from '../styles/WorksPage.module.css'

const works = () => {
  return (
    <>
      <Navbar />
      <div className={styles.header}>
        <h1>Work</h1>
      </div>
      <WorksModule />
      <Footer/>
    </>
  );
};

export default works;
