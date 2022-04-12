import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";

const store = createStore(rootReducer, applyMiddleware(logger));
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept(rootReducer, () => store.replaceReducer(rootReducer));
}

export default store;
