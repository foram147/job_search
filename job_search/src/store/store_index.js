import { createStore } from "redux";
import mainReducer from "../reducers/reducers_index";

export const initialState = {
  favorites: {
    content: [],
  },
};
const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default configureStore;
