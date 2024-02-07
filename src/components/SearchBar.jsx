import React from 'react';

const SearchBar = () => {
  return (
    <form className="mt-3 mb-3">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search..." />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
