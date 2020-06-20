import React, { Component } from "react";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  firestore,
  creatUserProfileDocument,
} from "./firebase/firebase.utils";
class App extends Component {
  state = { currentUser: null };
  unsubscribe = null;

  componentDidMount() {
    //the below line is hard to understand. By simply attaching a listener (i.e. onAuthStateChanged) to auth to variable this.unsubscribe
    //the listener is in effect and will run whenever there is a change in Auth state
    //Also,  auth.onAuthStateChanged() return a function which when run, will stop (i.e. unsubscribe) the listener
    //Hence the this.unsubscribe(); in componentWillUnmount()
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot((doc) => {
          this.setState({ currentUser: { id: doc.id, ...doc.data() } }, () => {
            console.log(this.state.currentUser);
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
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
