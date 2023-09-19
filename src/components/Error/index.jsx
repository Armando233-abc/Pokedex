import React from 'react'
import styles from './Error.module.css'

const Error = ({ isError }) => {
      return (
            <div className={isError ? styles.errorContainer : styles.hidden} >
                  <h3>Pokemon non trovato</h3>
            </div>
      )
}

export default Error