import React from "react";

const Filters = () => {
  return (
    <div className="row mb-4">
      <div className="col-md-3 d-flex align-items-end">
        <span className="font-weight-bold">All films</span>
      </div>
      <div className="col">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Find whatever you want"
            />
          </div>
          <div className="col-md-4">
            <select className="form-control">
              <option selected>All genders</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
