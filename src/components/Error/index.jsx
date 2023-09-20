import React from 'react'
import styles from './Error.module.css'

const Error = ({ isError }) => {
      return (
            <div className={isError ? styles.errorContainer : styles.hidden} >
                  <p>Pokemon non trovato</p>
            </div>
      )
}

export default Error