import { GET_JOBS } from "../action/action_index";
import { initialState } from "../store/store_index";

const getJobsReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case GET_JOBS: {
      return {
        ...state,
        stock: action.payload,
      };
    }
    default:
      return state;
  }
};

export default getJobsReducer;
