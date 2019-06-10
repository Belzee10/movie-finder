import { FETCH_MOVIES } from "./types";

export const fetchMovies = filter => dispatch => {
  const query = filter ? `?gender=${filter}` : "";
  fetch(`http://localhost:3200/movies${query}`)
    .then(resp => resp.json())
    .then(res => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res
      });
    })
    .catch(err => console.log(err));
};
