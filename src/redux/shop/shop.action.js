import shopActionTypes from "./shop.types.js";
// import {
//   firestore,
//   convertCollectionSnapshotToObject,
// } from "../../firebase/firebase.utils";

// export const getShopCollectionsItems = (CollectionsItemsObj) => ({
//   type: shopActionTypes.GET_SHOP_COLLECTIONS_ITEMS,
//   payloads: CollectionsItemsObj,
// });

export const fetchShopItemsStart = () => ({
  type: shopActionTypes.FETCH_SHOP_ITEMS_START,
});

export const fetchShopItemsSucceed = (colObj) => ({
  type: shopActionTypes.FETCH_SHOP_ITEMS_SUCCEED,
  payloads: colObj,
});

export const fetchShopItemsFailure = (error) => ({
  type: shopActionTypes.FETCH_SHOP_ITEMS_FAILURE,
  payloads: error.message,
});

// export const fetchShopItemsAsync = () => {
//   return (dispatch) => {
//     dispatch(fetchShopItemsStart());
//     firestore
//       .collection("collections")
//       .get()
//       .then((collectionsSnapshot) =>
//         convertCollectionSnapshotToObject(collectionsSnapshot)
//       )
//       .then((colObj) => dispatch(fetchShopItemsSucceed(colObj)))
//       .catch((error) => dispatch(fetchShopItemsFailure(error)));
//   };
// };
// unlike other actions which are function returning an action obj
// fetchShopItemsAsyn is a function returning a function
// when we call an action which returns an function instaed of an obj,
// redux-thunk will catch it and gives it access to "dispatch"
