import React from 'react'
import styles from '../Home/Home.module.css'
import Cards from "../Cards/Cards"

const Home = () => {
  return (
    <div className={styles.div}>
        <h2>Welcome to the Recipe Sharing Platform</h2>
        <h4>Find and share the best recipes from around the world!</h4>
        <Cards/>
    </div>
  )
}

export default Home