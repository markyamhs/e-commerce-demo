// import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.types";

const INITIAL_STATE = { collections: null, errormessage: undefined };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.GET_SHOP_COLLECTIONS_ITEMS:
      return { ...state, collections: action.payloads };
    case shopActionTypes.FETCH_SHOP_ITEMS_START:
      return state;
    case shopActionTypes.FETCH_SHOP_ITEMS_SUCCEED:
      return { ...state, collections: action.payloads };
    case shopActionTypes.FETCH_SHOP_ITEMS_FAILURE:
      return { ...state, errormessage: action.payloads };
    default:
      return state;
  }
};

export default shopReducer;
