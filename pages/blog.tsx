import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BlogsModule from '../components/blogs/BlogsModule'
import styles from '../styles/WorksPage.module.css'

const blog = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <BlogsModule/>
      <Footer/>
    </>
  )
}

export default blog