import { DO_FILTER } from "../actions/types";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case DO_FILTER:
      let newState = { ...state };
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};
