import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import selectDirectorySection from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, linkUrl }) => (
        <MenuItem
          key={id}
          title={title.toUpperCase()}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectDirectorySection(state),
});

export default connect(mapStateToProps)(Directory);
