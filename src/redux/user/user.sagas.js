import userActionTypes from "../user/user.types";
import { takeLatest, all, call, put, takeEvery } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  creatUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  SignInSuccess,
  SignInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.action";

function* onGoogleSignInAsync() {
  try {
    const userAuth = yield auth.signInWithPopup(googleProvider);
    // alternative of yield useUserAuthtoSignIn(userAuth);
    yield call(useUserAuthtoSignIn, userAuth.user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* useUserAuthtoSignIn(userAuth, additionalData) {
  try {
    const userRef = yield call(
      creatUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* watchGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignInAsync);
}

function* onEmailSignInAsync({ payload: { email, password } }) {
  try {
    const userAuth = yield auth.signInWithEmailAndPassword(email, password);

    // alternative of yield call(useUserAuthtoSignIn, userAuth);
    yield call(useUserAuthtoSignIn, userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* watchEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, onEmailSignInAsync);
}

function* watchCheckSession() {
  yield takeEvery(userActionTypes.CHECK_SESSION_START, onCheckSession);
}

function* onSignOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* watchSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, onSignOutStart);
}

function* onCheckSession() {
  const userAuth = yield getCurrentUser();
  yield call(useUserAuthtoSignIn, userAuth);
}

function* watchSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, onSignUpStart);
}

function* onSignUpStart({
  payload: { displayName, email, password, confirmPassword },
}) {
  if (password !== confirmPassword) {
    alert("Password does not match with confirmed password!");
    yield put(signUpFailure(null));
  }
  yield call(handleSignUp, displayName, email, password);
}

function* handleSignUp(signUpDisplayName, signUpEmail, signUpPassword) {
  try {
    const userAuth = yield auth.createUserWithEmailAndPassword(
      signUpEmail,
      signUpPassword
    );
    //the below 3 lines are to add username to database. Even without the below 3 lines,
    //the user item will still be added to the database due to change in AuthState by the above 3 lines
    //which triggers the listner onAuthStateChanged in App.js to fire--->call creatUserProfileDocument
    yield call(useUserAuthtoSignIn, userAuth.user, {
      username: signUpDisplayName,
    });
    yield put(signUpSuccess());
  } catch (error) {
    alert(error.message);
    yield put(signUpFailure(error));
  }
}

export default function* userSaga() {
  yield all([
    call(watchGoogleSignInStart),
    call(watchEmailSignInStart),
    call(watchCheckSession),
    call(watchSignOutStart),
    call(watchSignUpStart),
  ]);
}
