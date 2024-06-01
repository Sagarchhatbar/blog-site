import React, { useEffect, useState } from "react";
import styles from "../../styles/Works.module.css";
import WorksData from "../../Data/WorksData.json";
import { Works } from "../../interface/WorksDataTypes";
import { useRouter } from "next/router";

const WorksModule = () => {
  const [Data, setData] = useState<Works[]>([]);
  const router = useRouter();

  const handleResize = () => {
    
    if(router.pathname === "/works"){
      setData(WorksData);
    }
    else if (window.innerWidth > 768) {
      setData(WorksData);
    }
    else {
      setData([WorksData[0]]);
    }
  };

  useEffect(() => {
    // Set initial data based on the initial window size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleWorksDetail = () => {
console.log('clciked')
    router.push(`/worksDetail`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Featured works</span>
      </div>
      {Data?.map((work: Works) => (
        <div className={styles.card} key={work.id} onClick={handleWorksDetail}>
          <div className={styles.image}>
            <img src={work.image} alt={work.title} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{work.title}</h2>
            </div>
            <div className={styles.details}>
              <div className={styles.year}>{work.year}</div>
              <div className={styles.type}>{work.type}</div>
            </div>
            <div className={styles.description}>
              <p>{work.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksModule;
