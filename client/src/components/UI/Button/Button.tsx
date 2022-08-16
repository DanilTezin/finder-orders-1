import React, { FC } from 'react'
import styles from './Button.module.css'

interface ButtonI{
    children: string,
    onClick?: () => void
}

const Button:FC<ButtonI> = ({children, onClick}) => {
  return <button
            className={styles.container}
            onClick={onClick}
        >
            {children}
        </button>
}

export default Button