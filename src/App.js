import React, { Component } from "react";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  firestore,
  creatUserProfileDocument,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./components/pages/checkout/checkout.component";
class App extends Component {
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
          this.props.setCurrentUsera({ id: doc.id, ...doc.data() });
          // equivalent to
          // this.setState({ currentUser: { id: doc.id, ...doc.data() } }, () => {
          //   console.log(this.state.currentUser);
          // });
        });
      } else {
        this.props.setCurrentUsera(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
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
});

//(state) => ({ currentUsera: state.user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  //props_you_wanna_add: dispatch(the_action_function_in_redux_folder)
  //setCurrentUser is imported from unser.action.js
  setCurrentUsera: (user) => dispatch(setCurrentUser(user)),
});
//with above lines, now App.js has a prop called 'setCurrentUsera' which update the store with user argument

export default connect(mapStateToProps, mapDispatchToProps)(App);
