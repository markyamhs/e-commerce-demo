const initialState = {
  cartDropdownHidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return {
        cartDropdownHidden: !state.cartDropdownHidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
