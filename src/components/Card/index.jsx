import React, { useState, useEffect } from 'react'
import styles from './Card.module.css'
import { Title, PokeInput, SearchButton, PokeInfo } from '../index'

const Card = () => {
      const [nomePokemon, setNomePokemon] = useState("dragonite");
      const [searchCount, setSearchCount] = useState(0);
      const [error, setError] = useState(0);
      const [data, setData] = useState({
            name: "",
            sprites: "",
            species: { url: "" },
            types: []
      })

      useEffect(() => {
            const cerca = async () => {
                  if (nomePokemon != "") {
                        setError(0)
                        await fetch("https://pokeapi.co/api/v2/pokemon/" + nomePokemon)
                              .then(response => response.json())
                              .then(data => setData(data))
                              .catch(() => setError(1))
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
                              <div className={styles.form}>
                                    <PokeInput setNomePokemon={setNomePokemon}></PokeInput>
                                    <SearchButton increase={increase}></SearchButton>
                              </div>
                        </div>
                        <div className={styles.size}>
                              <PokeInfo data={data} isError={error} searchCount={searchCount}></PokeInfo>
                        </div>
                  </div>
            </div>
      )
}


export default Card;