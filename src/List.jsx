import React from "react";

const List = ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <div className="col-md-3">movie</div>
      ))}
    </div>
  );
};

export default List;
