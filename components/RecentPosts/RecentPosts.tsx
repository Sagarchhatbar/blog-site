import React from "react";
import styles from "../../styles/RecentPosts.module.css";
import Link from "next/link";
import PostsData from "../../Data/PostsData.json";
import { postsData } from "../../interface/PostsDataTypes";

const RecentPosts = () => {
  return (
    <div className={styles.centered}>
      <div className={styles.container}>
        <div className={styles.headContent}>
          <div>
            <span>Recent posts</span>
          </div>
          <div className={styles.link}>
            <Link href={"#"}>View all</Link>
          </div>
        </div>
        <div className={styles.PostCardList}>
          {PostsData.map((item : postsData) => (
            <div className={styles.postContainer} key={item.id}>
              <div className={styles.PostCard}>
                <div className={styles.PostCardTitle}>
                  <h4>{item.title}</h4>
                </div>
                <div className={styles.PostCardSpan}>
                  <span>
                    {item.dates} | {item.pattern}
                  </span>
                </div>
                <div className={styles.PostCardDescription}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
