import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
import userSaga from "./user/user.sagas";
import cartSaga from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga), call(cartSaga)]);
}
