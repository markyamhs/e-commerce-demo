import React from "react";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import {
  HeaderContainer,
  LogoContainer,
  // OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";

const Header = ({ currentUsera, cartHidden, signout }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/shop">CONTACT</OptionLink>

        {currentUsera ? (
          <OptionLink as="div" onClick={signout}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUsera: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signOutStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
