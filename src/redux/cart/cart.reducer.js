import { addItemQuantity } from "./cart.util";

const initialState = {
  cartDropdownHidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        cartDropdownHidden: !state.cartDropdownHidden,
      };

    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: addItemQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
