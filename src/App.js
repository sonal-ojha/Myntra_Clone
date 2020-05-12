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
import { addItemToBag } from './actions/updateBagItems';

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
    cartItems: [],
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

    // const { cartItems } = this.state;
    // const cartCopyItems = [...cartItems];
    // cartCopyItems.push(product);
    // this.setState({
    //   cartItems: cartCopyItems,
    // });
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
    // Remove specific Item from The Cart
    const { cartItems } = this.state;
    // Do not mutate your state directly
    const cartCopyItems = [...cartItems];
    const findRemoveItemIDIndex = cartItems.findIndex(item => item.id === productID);
    // delete the item from specific index
    cartCopyItems.splice(findRemoveItemIDIndex, 1);
    this.setState({
      cartItems: cartCopyItems
    });
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
    const { cartItems, wishlistItems } = this.state;
    const { allCartItems } = this.props;
    console.log('allCartItems = ', allCartItems);
    return (
      <div className="App">
        <Header cartCount={cartItems.length} wishlistCount={wishlistItems.length} />
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
});

export default connect(mapStoreToProps, mapDispatchToProps)(App);
