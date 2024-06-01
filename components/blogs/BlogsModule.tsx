import React from "react";
import styles from "../../styles/Blogs.module.css";
import BlogsData from "../../Data/BlogsData.json";
import { Blogs } from "../../interface/BlogsDataTypes";

const BlogsModule = () => {

  return (
    <div className={styles.container}>
      {BlogsData?.map((blog: Blogs) => (
        <div className={styles.card} key={blog.id}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{blog.title}</h2>
            </div>
            <div className={styles.details}>
              <div>{blog.Date}</div> 
              <div> | </div>
              <div className={styles.type}>{blog.type}</div>
            </div>
            <div className={styles.description}>
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsModule;
