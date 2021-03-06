import React, { useState } from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import range from 'lodash/range';

import { addProductToCart } from './helpers/api';
import {
  CartContainer, CartButton, DropDown, DropDownContainer,
} from './styles/AddToCart.style';

const AddToCart = ({ currentStyle }) => {
  const [currentSize, setCurrentSize] = useState('Size');
  const [currentQuantity, setCurrentQuantity] = useState('Quantity');
  const [currentSku, setCurrentSku] = useState(null);
  const [quantityForSelectedSize, setQuantityForSelectedSize] = useState(null);
  const [cartIsDisabled, setCartIsDisabled] = useState(true);
  const [quantityIsDisabled, setQuantityIsDisabled] = useState(true);

  const handleSizeChange = (event) => {
    const { size, sku, quantity } = JSON.parse(event.target.value);

    setCurrentSize(size);
    setCurrentSku(sku);
    setQuantityForSelectedSize(quantity);
    setQuantityIsDisabled(false);
  };

  const handleQtyChange = (event) => {
    const { value } = event.target;

    setCurrentQuantity(value);
    setCartIsDisabled(false);
  };

  const handleCartButton = () => {
    const skuId = {
      sku_id: currentSku,
    };

    addProductToCart(skuId);
  };

  return (
    <CartContainer
      data-testid="cart-container"
      className="cart-container"
    >
      <DropDownContainer>
        <DropDown
          data-testid="size"
          className="size"
          name="size"
          onChange={handleSizeChange}
        >
          <option
            selected="selected"
          >
            {currentSize}

          </option>
          {map(currentStyle.skus, (sku) => (
            <>
              <option
                value={JSON.stringify(sku)}
              >

                {sku.size}
              </option>
            </>
          ))}
        </DropDown>
        <DropDown
          data-testid="quantity"
          className="quantity"
          name="quantity"
          onChange={handleQtyChange}
          disabled={quantityIsDisabled}
        >
          <option
            selected="selected"
          >
            {currentQuantity}

          </option>

          {
            (currentSku)
            && range(1, quantityForSelectedSize > 12
              ? 13 : quantityForSelectedSize + 1).map((num) => (
                <option
                  value={`${num}`}
                >
                  {num}
                </option>
            ))
          }

        </DropDown>
      </DropDownContainer>

      <CartButton
        data-testid="add-to-cart-button"
        className="add-to-cart-button"
        type="submit"
        onClick={handleCartButton}
        disabled={cartIsDisabled}
      >
        Add To Cart
      </CartButton>
    </CartContainer>
  );
};

export default AddToCart;

AddToCart.propTypes = {
  currentStyle: PropTypes.objectOf(PropTypes.any).isRequired,
};
