import React, { Component } from "react";
import NavBar from "./components/navbar";
import CellArray from "./components/cellArray";
import "./App.css";

class App extends Component {
  state = {
    array: [],
    size: 20,
  };

  /**
   * Helper function - Generates a random
   * number between a given min and max.
   * (inclusive min, exclusive max)
   *
   * @param {number} min
   * @param {number} max
   * @returns random number between min and max
   * @memberof App
   */
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Builds an array of a given size using
   * random numbers from getRandomNumber().
   * Updates the array in the state to be equal
   * to the newly created array.
   *
   * @param {number} size given desired size of the array
   * @memberof App
   */
  buildNewArray(size) {
    let arr = [];
    for (var i = 0; i < size; i++) {
      arr[i] = this.getRandomNumber(4, 100);
    }
    this.setState({ array: arr });
  }

  /**
   * Calls buildNewArray() with desired
   * array size immediately after App
   * component has been mounted.
   *
   * @memberof App
   */
  componentDidMount() {
    this.buildNewArray(this.state.size);
  }

  /**
   * Calls buildNewArray() method everytime the
   * "Generate new array" button is clicked in the navbar.
   *
   * @memberof App
   */
  handleGenNewArray = () => {
    let size = this.state.size;
    if (size === "" || size > 75 || size < 1) {
      alert("Please choose a size between 1 and 75.");
    } else if (size % 1 !== 0) {
      alert("Please choose a whole number.");
    } else {
      this.buildNewArray(this.state.size);
    }
  };

  /**
   * Handles the onChange event for the size
   * textbox. Updates the state's size attribute
   * to be equal to the user input.
   *
   * @memberof App
   */
  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onGenNewArray={this.handleGenNewArray}
          onSizeChange={this.handleSizeChange}
        />
        <main className="container">
          <CellArray array={this.state.array} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
