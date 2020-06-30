import { addItemQuantity, removeItem, minusItem } from "./cart.util";
import cartActionTypes from "./cart.types";

const initialState = {
  cartDropdownHidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

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

    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case "MINUS_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: minusItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
