import React from "react";
import './index.scss';

const SearchUser = () => {
    return (
        <div className="discussion search">
        <div className="searchbar">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
    )
}

export default SearchUser;