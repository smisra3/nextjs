import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = (state = { username: "" }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(rootReducer, composeWithDevTools());
export default store;
