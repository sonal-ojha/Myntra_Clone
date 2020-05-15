import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import categories from './assets/categories.png';
import topbrands from './assets/topbrands.png';
import AllProducts from './components/AllProducts/AllProducts';
import SelectedProducts from './components/SelectedProducts/SelectedProducts';

import { boysData } from './data';

// Import Actions here
import { getAllBoysProducts } from './actions/getAllBoysProducts';
import { addItemToBag, removeItemFromBag } from './actions/updateBagItems';

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
    wishlistItems: [],
  };

  componentDidMount() {
    const { fetchAllBoysData } = this.props;
    fetchAllBoysData();
  }

  handleAddProductToBag = (product) => {
    // using Redux
    const { addItemToCart } = this.props;
    addItemToCart(product);
  }

  handleAddProductToWishlist = (product) => {
    const { wishlistItems } = this.state;
    const wishlistItemsCopy = [...wishlistItems];
    wishlistItemsCopy.push(product);
    this.setState({
      wishlistItems: wishlistItemsCopy,
    });
  }

  handleRemoveFromBag = (productID) => {
    // using redux
    const { removeItemFromCart } = this.props;
    removeItemFromCart(productID);
  }

  handleRemoveWishlist = (wishListProductID) => {
    // Remove from Wishlist
    const { wishlistItems } = this.state;
    // copy of wishlist item
    const copyOfWishlistItems = [...wishlistItems];
    // Find index to remove item from the Wishlist array
    const removeIndexFromWishlist = wishlistItems.findIndex(item => item.id === wishListProductID);
    copyOfWishlistItems.splice(removeIndexFromWishlist, 1);
    this.setState({
      wishlistItems: copyOfWishlistItems,
    });
  }

  render() {
    const { wishlistItems } = this.state;
    const { allCartItems } = this.props;
    return (
      <div className="App">
        <Header cartCount={allCartItems.length} wishlistCount={wishlistItems.length} />
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
              <Route exact path="/girls" component={() => <AllProducts allProducts={boysData} />} />
              <Route
                exact
                path="/ItemsInbaggage"
                component={() => <SelectedProducts selectedData={allCartItems} handleRemove={this.handleRemoveFromBag} />}
              />
              <Route
                exact
                path="/wishlistItems"
                component={() => <SelectedProducts selectedData={wishlistItems} handleRemove={this.handleRemoveWishlist} />}
              />
              <Route path="/" component={LandingPage} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  allCartItems: store.cartData.bagProducts,
});

const mapDispatchToProps = dispatch => ({
  fetchAllBoysData: () => dispatch(getAllBoysProducts()),
  addItemToCart: (product) => dispatch(addItemToBag(product)),
  removeItemFromCart: (productID) => dispatch(removeItemFromBag(productID)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(App);
