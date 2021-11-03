import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const AddToCart = ({ styles }) => (
  <div data-testid="addToCart">
    {/*
      // Add To Cart Button
      // Size drop down
      // Quantity drop down
    */}
    <button type="submit">Add To Cart</button>
    <select name="sizes" id="sizes">
      {styles.results.map((style) => (
        map(style.skus, (sku) => (
          // renders all sizes for all styles of a product; refactor to limit to one style
          <option value={`${sku}`}>{sku.size}</option>
        ))
      ))}
    </select>
    <select name="quantity" id="quantity">
      {styles.results.map((style) => (
        map(style.skus, (sku) => (
          // renders all quantities for all styles of a product; refactor to limit to one style
          <option value={`${sku}`}>{sku.quantity}</option>
        ))
      ))}
    </select>
  </div>
);

export default AddToCart;

AddToCart.propTypes = PropTypes.shape({
  styles: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.any),
  }),
  id: PropTypes.objectOf(PropTypes.any),
});
