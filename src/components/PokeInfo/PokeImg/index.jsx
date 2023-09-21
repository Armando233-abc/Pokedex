import React from 'react'
import styles from './PokeImg.module.css'
import PropTypes from "prop-types";
const PokeImg = ({ imgSrc }) => {

  return (
    <div className={styles.pokeImg__container}>
      <img src={imgSrc} alt="" />
    </div>
  )
}

export default PokeImg

PokeImg.propTypes = {
  imgSrc: PropTypes.string
};
