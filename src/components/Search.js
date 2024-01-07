import React, {useState} from "react";

function Search( {onSearch} ) {
  const [query, setQuery] = useState('')
  //(e) => setQuery(e.target.value)
  
  function handleSearch (e) {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
