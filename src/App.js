import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "./actions/movieActions";

import Filters from "./Filters";
import List from "./List";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col">
              <Filters />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

const actionCreators = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
