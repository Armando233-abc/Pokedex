import React from 'react'
import styles from './SearchButton.module.css'
const SearchButton = ({ increase}) => {
  return (
    <div className={styles.button}>
      <button onClick={() => { increase()}}>🔍</button>
    </div>
  )
}

export default SearchButton;