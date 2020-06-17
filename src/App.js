import React from "react";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
