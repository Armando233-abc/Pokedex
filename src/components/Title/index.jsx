import React from 'react'
import styles from './Title.module.css'

const Title = () => {
  return (
    <div className={styles.title__container}>
      <h1>Pokedex</h1>
      <p>cerca il tuo pokemon</p>
    </div>
  )
}

export default Title