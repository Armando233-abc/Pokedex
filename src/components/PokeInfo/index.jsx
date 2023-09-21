import React, { useState, useEffect } from 'react'
import styles from './PokeInfo.module.css'
import PokeImg from './PokeImg'
import PokeName from './PokeName'
import PokeDescription from './PokeDescription'
import InfoList from './InfoList'

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
                        <div className={styles.header__container}>
                              <div className={styles.imgTitle__container}>
                                    <PokeName nome={data.name}></PokeName>
                                    <PokeImg imgSrc={data.sprites.front_default}></PokeImg>
                              </div>
                              <div className={styles.Data__container}>
                                    <InfoList data={{
                                          "numero" : data.id,
                                          "nome": data.name,
                                          "tipo": data.types.map((as)=>{return as.type.name}),
                                          "esperienza_base": data.base_experience
                                    }}></InfoList>
                              </div>
                        </div>
                        <PokeDescription description={description}></PokeDescription>
                  </div>
            </div>
      )
}

export default PokeInfo