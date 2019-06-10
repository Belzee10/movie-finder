import { DO_FILTER } from "./types";

export const doFilter = value => dispatch => {
  dispatch({
    type: DO_FILTER,
    payload: value
  });
};
