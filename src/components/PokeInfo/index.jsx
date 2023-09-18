import React from 'react'
import styles from './PokeInfo.module.css'
import PokeImg from './PokeImg'

const PokeInfo = ({data}) => {
      console.log(data);
      return (
            <div className={styles.pokeInfo__container}>
                  <PokeImg imgSrc={data.sprites}></PokeImg>
            </div>
      )
}

export default PokeInfo