import React, { Component } from "react";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";
class App extends Component {
  state = { currentUser: null };
  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
