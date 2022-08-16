import React from 'react'
import OrderContainer from '../../components/BL/OrderContainer/OrderContainer'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
      <OrderContainer/>
    </div>
  )
}

export default Main