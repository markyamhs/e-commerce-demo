import React, { Component } from "react";
// import "./custom-button.styles.scss";
import CustomButtonContainer from "./custom-button.styles";

const CustomButton = ({ children, ...othersProps }) => (
  <CustomButtonContainer
    // className={`${inverted ? "inverted" : ""} ${
    //   isGoogleSignIn ? "google-sign-in" : ""
    // } custom-button`}
    {...othersProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
