
import React from 'react'

const SearchBar = ({searchTerm,setSearchTerm}) => {
  return (
    <div>
        <input type="text"
        placeholder='Search users...'
        value= {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search' />
    </div>
  )
}

export default SearchBar