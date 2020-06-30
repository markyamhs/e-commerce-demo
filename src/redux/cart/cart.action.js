import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemtoCart = (item) => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const minusItemFromCart = (item) => ({
  type: cartActionTypes.MINUS_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
