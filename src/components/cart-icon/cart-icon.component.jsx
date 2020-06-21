import { ReactComponent as ShoppingIcon } from "../../../src/assets/shopping-bag.svg";
import React, { Component } from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import toggleCartHidden from "../../redux/cart/cart.action";

const CartIcon = ({ toggle }) => {
  return (
    <div className="cart-icon" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    toggle: () => dispatch(toggleCartHidden()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
