import React from 'react'
import styles from './PokeImg.module.css'

const PokeImg = ({ imgSrc }) => {
      
  return (
        <div>
              <img src={imgSrc} alt="" />
      </div>
  )
}

export default PokeImg