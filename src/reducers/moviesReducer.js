import { FETCH_MOVIES } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return [...state, action.payload];
    default:
      return state;
  }
};
