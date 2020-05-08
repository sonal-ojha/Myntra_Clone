import React from 'react';
import './allProducts.css';

import Product from '../Product/Product';

class AllProducts extends React.Component {
  render() {
    const { allProducts, addProductToBag, addProductToWishlist } = this.props;
    return (
      <div className="products_Container">
        {!!allProducts && allProducts.count && (
          <h4>
            Total Products available: {allProducts.count}
          </h4>
        )}
        <div className="allProductsList_Container">
          {!!allProducts && allProducts.data.length > 0 && allProducts.data.map(productItem => (
            <Product 
              product={productItem}
              addProductToBag={addProductToBag}
              addProductToWishlist={addProductToWishlist}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default AllProducts;