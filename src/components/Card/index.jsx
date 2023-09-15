import React from 'react'
import styles from './Card.module.css'
import Title from '../Title'

const Card = () => {
      return (
            <div className={styles.body}>
                  <div className={styles.card__container}>
                        <Title></Title>
                  </div>
            </div>
      )
}


export default Card;