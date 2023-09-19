import React from 'react'
import styles from './PokeName.module.css'

const PokeName = ({nome}) => {
  return (
    <div className={styles.name__container}>
      <h3>{nome}</h3> 
    </div>
  )
}

export default PokeName