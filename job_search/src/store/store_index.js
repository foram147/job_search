import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favoriteReducer from "../reducers/favoriteReducer";
import getJobsReducer from "../reducers/getJobsReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  jobs: {
    favorites: [],
  },
  data: {
    stock: [],
  },
};

const bigReducer = combineReducers({
  jobs: favoriteReducer,
  data: getJobsReducer,
});
const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);
export default configureStore;
