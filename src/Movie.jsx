import React from "react";
import Rating from "front10-rating";

const Movie = ({ id, image, title, gender, rating }) => {
  return (
    <div className="card">
      {image ? (
        <img className="card-img-top" src={image} alt={title} />
      ) : (
        <div className="no-image" />
      )}
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h5>{title}</h5>
          <Rating value={rating} />
        </div>
        <div className="gender">
          <span className="text-muted text-capitalize">{gender}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
