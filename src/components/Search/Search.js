import React from 'react';
import './search.css';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="" onChange={this.handleChnage} placeholder="Search for products, brands and more ..."  className="search_input" />
      </div>
    )
  }
}

export default Search;