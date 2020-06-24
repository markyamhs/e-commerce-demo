import React, { Component } from "react";
import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartPriceTotal,
} from "../../../redux/cart/cart.selector";
import { connect } from "react-redux";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

const CheckoutPage = ({ totalPrice, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((ele) => (
        <CheckoutItem key={ele.id} cartItem={ele} />
      ))}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartPriceTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
