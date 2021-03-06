import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShoplist } from "../../redux/shop/shop.selector";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  collections: selectShoplist(state),
});
export default connect(mapStateToProps)(CollectionOverview);
