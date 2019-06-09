import { FETCH_MOVIES } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      let newState = [...state];
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};
