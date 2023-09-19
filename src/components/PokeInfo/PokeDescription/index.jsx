import React from 'react'
import styles from './PokeDescription.module.css'

const PokeDescription = ({ description }) => {
      return (
            <div className={styles.PokeDescription__container}>
                  <p>
                        {description}
                  </p>
            </div>
      )
}

export default PokeDescription