import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer } from "./reducers/index";

// tslint:disable:no-string-literal
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk))
);
