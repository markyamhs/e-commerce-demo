import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//this is a higher-order componenet which takes another componenet and
//returns a new componenet
const WithSpinner = (WrappedComponent) => ({
  isItemsLoaded,
  ...otherProps
}) => {
  const Spinner = isItemsLoaded ? (
    <WrappedComponent {...otherProps} />
  ) : (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );

  return Spinner;
};

export default WithSpinner;
