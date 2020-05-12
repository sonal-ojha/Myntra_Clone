import React from 'react';
import './allProducts.css';

import { connect } from 'react-redux';

import Product from '../Product/Product';

class AllProducts extends React.Component {
  render() {
    const { addProductToBag, addProductToWishlist, allBoysData } = this.props;
    return (
      <div className="products_Container">
        {!!allBoysData && (
          <h4>
            Total Products available: {allBoysData.length}
          </h4>
        )}
        <div className="allProductsList_Container">
          {!!allBoysData && allBoysData.length > 0 && allBoysData.map(productItem => (
            <Product 
              product={productItem}
              addProductToBag={addProductToBag}
              addProductToWishlist={addProductToWishlist}
              key={productItem.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => ({
  allBoysData: store.boysProductDetails.allBoysProducts
});

export default connect(mapStoreToProps)(AllProducts);