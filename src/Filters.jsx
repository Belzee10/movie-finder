import React from "react";

const Filters = props => {
  const { filterSelected, onChange } = props;
  return (
    <div className="row mb-4">
      <div className="col-md-3 d-flex align-items-end">
        <span className="badge badge-dark text-capitalize font-weight-bold">
          {filterSelected ? filterSelected : `All movies`}
        </span>
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
            <select
              className="form-control"
              value={filterSelected}
              onChange={onChange}
            >
              <option value="">All</option>
              <option value="action">Action</option>
              <option value="fiction">Fiction</option>
              <option value="drama">Drama</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
