import React from "react";
import "./category.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CategoryPage = ({ collection }) => {
  return (
    <div className="category-page">
      <h2 className="title">{collection.title.toUpperCase()}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  //here selectCollection is not a selector directly. selectCollection(paramsURL) is a selector instead.
  // Currying is applied
  collection: selectCollection(props.match.params.categoryID)(state),
});

export default connect(mapStateToProps)(CategoryPage);
