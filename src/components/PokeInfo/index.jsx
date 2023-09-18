import React from 'react'
import styles from './PokeInfo.module.css'
import PokeImg from './PokeImg'
import PokeName from './PokeName'

const PokeInfo = ({data}) => {
      console.log(data);
      return (
            <div className={styles.pokeInfo__container}>
                  <PokeImg imgSrc={data.sprites}></PokeImg>
                  <PokeName nome={data.name}></PokeName>
            </div>
      )
}

export default PokeInfo