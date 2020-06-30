import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (email, password) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const SignInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkSessionStart = () => ({
  type: userActionTypes.CHECK_SESSION_START,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredential) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredential,
});

export const signUpSuccess = () => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
