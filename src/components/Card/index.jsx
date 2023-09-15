import React from 'react'
import styles from './Card.module.css'
import { Title, PokeInput, SearchButton } from '../index'

const Card = () => {
      return (
            <div className={styles.body}>
                  <div className={styles.card__container}>
                        <div>
                              <Title></Title>
                              <PokeInput></PokeInput>
                              <SearchButton></SearchButton>
                        </div>
                  </div>
            </div>
      )
}


export default Card;