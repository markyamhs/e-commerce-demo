import { put, takeEvery, all, call } from "redux-saga/effects";
import { clearCart } from "./cart.action";
import userActionTypes from "../user/user.types";

export function* onSignOutSuccess() {
  yield put(clearCart());
}

export function* watchSignOutSuccess() {
  yield takeEvery(userActionTypes.SIGN_OUT_SUCCESS, onSignOutSuccess);
}

export default function* cartSaga() {
  yield all([call(watchSignOutSuccess)]);
}
