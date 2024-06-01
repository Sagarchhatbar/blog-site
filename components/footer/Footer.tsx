import React from 'react'
import styles from '../../styles/Footer.module.css'
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.socialMedia}>
            <li><a href="https://www.facebook.com" target="_blank"><ImFacebook2/></a></li>
            <li><a href="https://www.instagram.com" target="_blank"><BsInstagram/></a></li>
            <li><a href="https://www.twitter.com" target="_blank"><RiTwitterXFill/></a></li>
            <li><a href="https://www.linkedin.com" target="_blank"><FaLinkedin/></a></li>
        </ul>
        <div className="copyright">
            Copyright ©2020 All rights reserved
        </div>
    </div>
  )
}

export default Footer