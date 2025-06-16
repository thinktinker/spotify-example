import React from 'react'
import "./SearchBar.css"

function SearchBar({onSearch, runSearch}) {

  function handleSearchChange(event){
    onSearch(event.target.value);
  }



  return (

    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" 
      onChange={handleSearchChange} />
      <button className="SearchButton"
      onClick={runSearch}
      >SEARCH</button>
    </div>
  )
}

export default SearchBar