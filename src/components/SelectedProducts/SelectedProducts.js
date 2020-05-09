import React from 'react';
import './SelectedProducts.css';

class SelectedProducts extends React.Component {
  render() {
    const { selectedData, handleRemove } = this.props;
    return (
      <div className="selectedProduct_Container">
        Items Selected: {selectedData.length}
        <div>
          {selectedData && selectedData.length > 0 && selectedData.map(product => (
            <div className="selectedCart_container" key={product.id}>
              <div>
                <img src={product.img_url} height="150" width="150" />
                <div>Price: Rs.{product.price}</div>
              </div>
              <div className="selectedCart_btn_container">
                <button className="remove_btn" onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SelectedProducts;