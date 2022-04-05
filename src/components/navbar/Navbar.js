import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav styles={styles.nav}>
        <h3>TechSpotLabs</h3>
        <ul className={styles.flex}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="blog">Blog</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar