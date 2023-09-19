import React, { useState, useEffect } from 'react'
import styles from './PokeInfo.module.css'
import PokeImg from './PokeImg'
import PokeName from './PokeName'
import PokeDescription from './PokeDescription'

const PokeInfo = ({ data }) => {
      const [description, setDescription] = useState("")

      useEffect(() => {
            const descrizione = async () => {
                  if (data.species.url != "") {
                        await fetch(data.species.url)
                              .then(response => response.json())
                              .then(json => (json.flavor_text_entries.map((id) => {
                                    if (id.language.name === "it") {
                                          setDescription(id.flavor_text)
                                    }
                              })))
                  }
            }
            descrizione()
      })
      return (
            <div className={styles.pokeInfo__container}>
                  <div className={styles.card__container}>
                        <PokeImg imgSrc={data.sprites.front_default}></PokeImg>
                        <PokeName nome={data.name}></PokeName>
                        <PokeDescription description={description}></PokeDescription>
                  </div>
            </div>
      )
}

export default PokeInfo