export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToFavoritesAction = (jobToAdd) => ({
  type: ADD_TO_FAVORITES,
  payload: jobToAdd,
});

export const removeFromFavoritesAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: indexToRemove,
});
