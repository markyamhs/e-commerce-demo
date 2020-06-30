import { takeEvery, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToObject,
} from "../../firebase/firebase.utils";
import { fetchShopItemsSucceed, fetchShopItemsFailure } from "./shop.action";

export function* fetchCollectionAsync() {
  try {
    const collectionSnapshot = yield firestore.collection("collections").get();
    const colObj = yield call(
      convertCollectionSnapshotToObject,
      collectionSnapshot
    );
    yield put(fetchShopItemsSucceed(colObj));
  } catch (error) {
    yield put(fetchShopItemsFailure(error));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(ShopActionTypes.FETCH_SHOP_ITEMS_START, fetchCollectionAsync);
}
