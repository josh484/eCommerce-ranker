import React, { useState } from 'react';
import Ranker from './Ranker'
const SearchBar = (prop) => {

  return (
    <> 
    <form className="mt-3 mb-3">
      <div className="row ">
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..."   onChange={prop.change} value={prop.search} />
            <button type="submit" className="btn btn-primary" onClick={prop.click} >Search</button>
          </div>
        </div>
      </div>
    </form>

    </>
  );
};

export default SearchBar;

