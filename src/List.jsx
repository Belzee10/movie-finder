import React from "react";

import Movie from "./Movie";

const List = props => {
  const { movies } = props;
  return (
    <div className="row">
      {movies.map(movie => (
        <div className="col-md-3" key={movie.id}>
          <Movie {...movie} />
        </div>
      ))}
    </div>
  );
};

export default List;
