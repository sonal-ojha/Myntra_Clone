import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

import Search from '../Search/Search';

import './header.css';

class Header extends React.Component {
  render() {
    const { wishlistCount, cartCount } = this.props;
    return (
      <React.Fragment>
        <header>
          <div className="header_logo_container">
            <img src="https://i.redd.it/96uiu7226qh41.png" alt="myntra_logo" className="logo_image" />
          </div>
          <div className="header_contents">
            <div className="header_contents header_content_types">
              <div className="item_type">Men</div>
              <div className="item_type">Women</div>
              <Router>
                <Link to="/girls">
                  <div className="item_type">Girls</div>
                </Link>
                <Link to="/boys">
                  <div className="item_type">Boys</div>
                </Link>
              </Router>
            </div>
            <Search />
          </div>
          <div className="header_right_container">
            <div className="user_profile">
              Profile
          </div>
            <div className="wishlist">
              Wishlist({wishlistCount})
          </div>
            <div className="bag">
              Bag({cartCount})
          </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;