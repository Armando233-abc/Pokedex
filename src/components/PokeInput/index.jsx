import React from 'react'

const PokeInput = ({setNomePokemon}) => {
  return (
    <div>
      <input type="text" onChange={(e)=>{setNomePokemon(e.target.value)}}/>
    </div>
  )
}

export default PokeInput;