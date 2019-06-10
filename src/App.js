import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "./actions/movieActions";
import { doFilter } from "./actions/filterActions";

import Filters from "./Filters";
import List from "./List";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter)
      this.props.fetchMovies(this.props.filter);
  }

  handleOnChange = e => {
    this.props.doFilter(e.target.value);
  };

  render() {
    const { movies, filter } = this.props;
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col">
              <Filters filterSelected={filter} onChange={this.handleOnChange} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {movies.length ? (
                <List movies={movies} />
              ) : (
                <span>loading...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  filter: state.filter
});

const actionCreators = {
  fetchMovies,
  doFilter
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
