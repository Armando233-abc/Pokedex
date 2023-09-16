import React from 'react'
import styles from './PokeInfo.module.css'

const PokeInfo = ({data}) => {
      console.log(data);
      return (
            <div className={styles.pokeInfo__container}>sono PokeInfo</div>
      )
}

export default PokeInfo