import React, { Component } from "react";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./components/pages/checkout/checkout.component";
import { checkSessionStart } from "./redux/user/user.action";
class App extends Component {
  unsubscribe = null;

  componentDidMount() {
    this.props.checkSessionStart();
    //the below one-line code is to add the SHOP_DATA (processed by selector 'selectShoplist',hence a list)
    //to firestore in batch
    //it is used once only to upload the data programmatically
    // addCollectionsObjects("collections", this.props.collections);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUsera ? <Redirect to="/" /> : <SignInUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUsera: selectCurrentUser,
  // collections: selectShoplist,
});

const mapDispatchToProps = (dispatch) => ({
  checkSessionStart: () => dispatch(checkSessionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
