import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
// import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
