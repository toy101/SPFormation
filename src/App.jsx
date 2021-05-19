import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DenseTable from './components/Table';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>SPFormation</h2>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={ DenseTable } />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;