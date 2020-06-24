import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceforstripe = price * 100;
  const publishableKey =
    "pk_test_51GxcTzCPeRR80pMWv5n1RqXLFyY0X5LmfX97TIp08OFRSK65HJb3tuS4nSGBgY8z81EnZNixjPgE7wAOpgqEPQwM00lS1GUIz3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Annie N Avocado Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceforstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
