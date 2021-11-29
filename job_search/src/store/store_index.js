import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favoriteReducer from "../reducers/favoriteReducer";
import getJobsReducer from "../reducers/getJobsReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
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
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
};
const bigReducer = combineReducers({
  jobs: favoriteReducer,
  data: getJobsReducer,
});

const persistedReducers = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedReducers,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
export default configureStore;
