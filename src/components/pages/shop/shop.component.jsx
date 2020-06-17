import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../collection-preview/collection-preview.component";
class ShopPage extends Component {
  state = {
    collection: SHOP_DATA,
  };
  render() {
    return (
      <div className="shop-page">
        {this.state.collection.map(({ id, ...others }) => (
          <CollectionPreview key={id} {...others} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
