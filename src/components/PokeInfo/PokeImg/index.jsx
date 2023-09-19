import React from 'react'
import styles from './PokeImg.module.css'

const PokeImg = ({ imgSrc }) => {
      
  return (
        <div className={styles.pokeImg__container}>
              <img src={imgSrc} alt="" />
      </div>
  )
}

export default PokeImg