import { ReactComponent as ShoppingIcon } from "../../../src/assets/shopping-bag.svg";
import React, { Component } from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
const CartIcon = ({ toggle, cartItemsSubtotal }) => {
  return (
    <div className="cart-icon" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsSubtotal}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemsSubtotal: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    toggle: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
