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
          <span className="text-muted">{gender}</span>
        </div>
        {/* <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
      </div>
    </div>
  );
};

export default Movie;
