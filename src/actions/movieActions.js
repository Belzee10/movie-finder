import { FETCH_MOVIES } from "./types";

export const fetchMovies = () => dispatch => {
  fetch("http://localhost:3200/movies")
    .then(resp => resp.json())
    .then(res => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res
      });
    })
    .catch(err => console.log(err));
};
