import React from 'react';
import './product.css';

class Product extends React.Component {
  render() {
    const { product, addProductToBag, addProductToWishlist } = this.props;
    return (
      <div key={product.id}>
        <div>
          <img src={product.img_url} width="250" height="250" />
        </div>
        <div className="brandType">Brand: {product.brand}</div>
        <div className="price">Price: Rs.{product.price} </div>
        <button className="addToBag" onClick={addProductToBag}>Add To Bag</button>
        <button className="wishlist_btn" onClick={addProductToWishlist}>Wishlist</button>
      </div>
    )
  }
}

export default Product;