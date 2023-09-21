import React from 'react'
import styles from './Input.module.css'
import PropTypes from "prop-types";

const PokeInput = ({setNomePokemon}) => {
  return (
    <div className = {styles.PokeInput__container}>
      <input type="text" onChange={(e)=>{setNomePokemon(e.target.value)}}/>
    </div>
  )
}

export default PokeInput;

PokeInput.propTypes = {
  setNomePokemon: PropTypes.func
}