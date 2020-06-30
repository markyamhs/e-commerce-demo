import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
};
export const selectShoplist = createSelector([selectShop], (selectedShop) =>
  Object.values(selectedShop.collections)
);

export const selectCollection = (paramsURL) =>
  createSelector(
    selectShop,
    (selectedShop) => selectedShop.collections[paramsURL]
  );

export const selectIsItemsLoaded = createSelector(
  selectShop,
  (selectedShop) => !!selectedShop.collections
);
