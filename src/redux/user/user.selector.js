import { createSelector } from "reselect";

//input selector
const selectUser = (state) => {
  return state.user;
};

//memorized selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (selectedUser) => {
    return selectedUser.currentUser;
  }
);
