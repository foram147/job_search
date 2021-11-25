import { Next } from "react-bootstrap/esm/PageItem";

export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavoritesAction = (jobToAdd) => ({
  type: ADD_TO_FAVORITES,
  payload: jobToAdd,
});

export const removeFromFavoritesAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: indexToRemove,
});

export const getJobsAction = () => {
  return async (dispatch, action) => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company="
      );
      if (response.ok) {
        const jobs = await response.json();
        console.log(jobs.data);
        dispatch({
          type: GET_JOBS,
          payload: jobs.data,
        });
      } else {
        throw new Error("Got Error");
      }
    } catch (err) {
      throw err;
    }
  };
};
