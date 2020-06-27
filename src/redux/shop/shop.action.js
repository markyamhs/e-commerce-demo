import shopActionTypes from "./shop.types.js";

export const getShopCollectionsItems = (CollectionsItemsObj) => ({
  type: shopActionTypes.GET_SHOP_COLLECTIONS_ITEMS,
  payloads: CollectionsItemsObj,
});
