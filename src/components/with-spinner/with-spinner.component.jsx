import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//this is a higher-order componenet which takes another componenet and
//returns a new componenet
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  const Spinner = isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );

  return Spinner;
};

export default WithSpinner;
