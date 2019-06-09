import React, { Component } from "react";

import Filters from "./Filters";
import List from "./List";

class App extends Component {
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

export default App;
