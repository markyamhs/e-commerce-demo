import React, { Component } from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ items, title }) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((ele, idx) => idx < 4)
          .map(({ id, ...others }) => (
            <CollectionItem key={id} {...others} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;