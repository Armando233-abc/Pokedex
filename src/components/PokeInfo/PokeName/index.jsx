import React from 'react'
import styles from './PokeName.module.css'

const PokeName = ({nome}) => {
  return (
    <div className={styles.name__container}>
      <h1>{nome}</h1> 
    </div>
  )
}

export default PokeName