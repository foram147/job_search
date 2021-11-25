import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../action/action_index";
import { initialState } from "../store/store_index";

const favoriteReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    }
    case REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites.filter((el, i) => i !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
