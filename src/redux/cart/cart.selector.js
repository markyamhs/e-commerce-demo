import { createSelector } from "reselect";

//input selector
const selectCart = (state) => {
  return state.cart;
};

//memorized selector
export const selectCartItems = createSelector([selectCart], (selectedCart) => {
  return selectedCart.cartItems;
});

export const selectCartHidden = createSelector([selectCart], (selectedCart) => {
  return selectedCart.cartDropdownHidden;
});

export const selectCartItemsCount = createSelector(
  [selectCart],
  (selectedCart) => {
    return selectedCart.cartItems.reduce((acc, ele) => acc + ele.quantity, 0);
  }
);
