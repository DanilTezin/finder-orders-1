import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>

      <h2>Finder Orders</h2>  

      <nav className={styles.nav}>
        <Link to='/'>
          Orders
        </Link>
        
      </nav>

    </div>
  )
}

export default Header