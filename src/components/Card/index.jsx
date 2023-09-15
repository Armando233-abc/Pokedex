import React from 'react'
import styles from './Card.module.css'
import { Title, PokeInput, SearchButton, PokeInfo } from '../index'

const Card = () => {
      return (
            <div className={styles.body}>
                  <div className={styles.card__container}>
                        <div>
                              <Title></Title>
                              <PokeInput></PokeInput>
                              <SearchButton></SearchButton>
                        </div>
                        <div>
                              <PokeInfo></PokeInfo>
                        </div>
                  </div>
            </div>
      )
}


export default Card;