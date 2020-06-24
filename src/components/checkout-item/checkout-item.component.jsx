import React, { Component } from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  addItemtoCart,
  removeItemFromCart,
  minusItemFromCart,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, addItem, removeItem, minusItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => minusItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <div className="price">{price}</div>
      <span className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (cartItem) => dispatch(addItemtoCart(cartItem)),
    removeItem: (cartItem) => dispatch(removeItemFromCart(cartItem)),
    minusItem: (cartItem) => dispatch(minusItemFromCart(cartItem)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
