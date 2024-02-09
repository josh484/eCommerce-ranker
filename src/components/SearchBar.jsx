import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = event => {
    setSearch(event.target.value);

  };

  return (
    <form className="mt-3 mb-3">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." onChange={handleSearch} value={search}/>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
