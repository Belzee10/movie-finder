import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  movies: moviesReducer,
  filter: filterReducer
});
