import React, { useState } from 'react'
import styles from './Card.module.css'
import { Title, PokeInput, SearchButton, PokeInfo } from '../index'

const Card = () => {
      const [nomePokemon, setNomePokemon] = useState("");

      const search = () =>{
            console.log(nomePokemon);
      }
      
      return (
            <div className={styles.body}>
                  <div className={styles.card__container}>
                        <div>
                              <Title></Title>
                              <PokeInput setNomePokemon={setNomePokemon}></PokeInput>
                              <SearchButton search={search}></SearchButton>
                        </div>
                        <div>
                              <PokeInfo></PokeInfo>
                        </div>
                  </div>
            </div>
      )
}


export default Card;