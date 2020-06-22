import React, { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

//this will give the component a 'history' props
import { withRouter } from "react-router";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((ele) => <CartItem key={ele.id} item={ele}></CartItem>)
        ) : (
          <span className="empty-message">No items in cart</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        CHECK OUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
