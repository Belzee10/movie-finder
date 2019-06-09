import { FETCH_MOVIES } from "./types";

import getMovies from "../mock/movies";

export const fetchMovies = () => dispatch => {
  const movies = getMovies();
  dispatch({
    type: FETCH_MOVIES,
    payload: movies
  });
};
