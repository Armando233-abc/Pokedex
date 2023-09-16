import React from 'react'

const SearchButton = ({ increase}) => {
  return (
    <div>
      <button onClick={() => { increase()}}>cerca</button>
    </div>
  )
}

export default SearchButton;