import React from 'react'
import styles from './PokeName.module.css'
import PropTypes from "prop-types";

const PokeName = ({nome}) => {
  return (
    <div className={styles.name__container}>
      <h3>{nome}</h3> 
    </div>
  )
}

export default PokeName

PokeName.propTypes = {
  nome: PropTypes.string
};