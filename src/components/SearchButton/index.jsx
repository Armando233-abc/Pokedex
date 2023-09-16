import React from 'react'

const SearchButton = ({ search }) => {
  return (
    <div>
      <button onClick={() => { search()}}>cerca</button>
    </div>
  )
}

export default SearchButton;