import React, { Component } from "react";
import CollectionOverview from "../../collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CategoryPage from "../../category/category.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      {/* either one of the below page will fire, no need <switch>*/}
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      {/* the : before categoryID makes categoryID a props of component={Category} => props.match.params.categoryID*/}
      <Route path={`${match.path}/:categoryID`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
