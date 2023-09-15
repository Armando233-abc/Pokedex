import React from 'react'
import styles from './Card.module.css'
import Title from '../Title'

const Card = () => {
      return (
            <div className={styles.body}>
                  <div className={styles.card__container}>
                        <div>
                              <Title></Title>
                        </div>
                  </div>
            </div>
      )
}


export default Card;