// import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.types";

const INITIAL_STATE = { collections: null };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.GET_SHOP_COLLECTIONS_ITEMS:
      return { ...state, collections: action.payloads };
    default:
      return state;
  }
};

export default shopReducer;
