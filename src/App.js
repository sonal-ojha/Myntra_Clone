import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import categories from './assets/categories.png';
import topbrands from './assets/topbrands.png';
import AllProducts from './components/AllProducts/AllProducts';

import { boysData } from './data';

const LandingPage = () => (
  <React.Fragment>
    <div className="category_img_container">
      <img src={categories} />
    </div>
    <div className="topbrands_img_container">
      <img src={topbrands} />
    </div>
  </React.Fragment>
);

class App extends React.Component {

  state = {
    cart: 0,
    wishlist: 0,
  };

  handleAddProductToBag = () => {
    const { cart } = this.state;
    this.setState({
      cart: cart + 1,
    });
  }

  handleAddProductToWishlist = () => {
    const { wishlist } = this.state;
    this.setState({
      wishlist: wishlist + 1,
    });
  }

  render() {
    const { cart, wishlist } = this.state;
    return (
      <div className="App">
        <Header cartCount={cart} wishlistCount={wishlist} />
        <main>
          <Router>
            <Switch>
              <Route
                exact
                path="/boys"
                component={() =>
                  <AllProducts
                    allProducts={boysData}
                    addProductToBag={this.handleAddProductToBag}
                    addProductToWishlist={this.handleAddProductToWishlist}
                  />
                }
              />
              {/* TODO - Add Girls Data */}
              <Route exact path="/girls" component={() => <AllProducts allProducts={boysData} />} />
              <Route path="/" component={LandingPage} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
