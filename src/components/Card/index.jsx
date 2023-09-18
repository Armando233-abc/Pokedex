import React, { useState, useEffect } from 'react'
import styles from './Card.module.css'
import { Title, PokeInput, SearchButton, PokeInfo } from '../index'

const Card = () => {
      const [nomePokemon, setNomePokemon] = useState("");
      const [searchCount, setSearchCount] = useState(0);
      const [data, setData] = useState({ 
            name : "",
            sprites : ""
      })

      useEffect(() => {
            const cerca = async () => {
                  if (nomePokemon != "") {
                        await fetch("https://pokeapi.co/api/v2/pokemon/" + nomePokemon)
                              .then(response => response.json())
                              .then(data => setData(data))
                  }
            }

            cerca()
      }, [searchCount])

      const increase = () => {
            setSearchCount(() => searchCount + 1)
      }

      return (
            <div className={styles.body}>
                  <div className={styles.card__container}>
                        <div>
                              <Title></Title>
                              <PokeInput setNomePokemon={setNomePokemon}></PokeInput>
                              <SearchButton increase={increase}></SearchButton>
                        </div>
                        <div>
                              <PokeInfo data={data}></PokeInfo>
                        </div>
                  </div>
            </div>
      )
}


export default Card;