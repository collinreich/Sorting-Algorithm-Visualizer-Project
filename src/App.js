import React, { Component } from "react";
import NavBar from "./components/navbar";
import CellArray from "./components/cellArray";
import "./App.css";

class App extends Component {
  state = {};

  handleGenNewArray = () => {
    console.log("handleGenNewArray() called.");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onGenNewArray={this.handleGenNewArray} />
        <main className="container">
          <CellArray />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
