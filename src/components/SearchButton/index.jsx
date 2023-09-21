import React from 'react'
import styles from './SearchButton.module.css'
import PropTypes from "prop-types";

const SearchButton = ({ increase }) => {
  return (
    <div className={styles.button}>
      <button onClick={() => { increase() }}>🔍</button>
    </div>
  )
}

export default SearchButton;

SearchButton.propTypes = {
  increase: PropTypes.func
};