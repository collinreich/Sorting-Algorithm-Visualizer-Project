import React, { Component } from "react";
import NavBar from "./components/navbar";
import CellArray from "./components/cellArray";
import "./App.css";

class App extends Component {
  state = {
    array: [],
    size: 20,
    algorithm: "",
  };

  /**
   * Helper function for buildNewArray() -
   * Generates a random number between a given
   * min and max. (inclusive min, exclusive max).
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
   * @param {number} size - given desired size of the array
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
   * @param {event} event - onSizeChange event stemming from onChange in textbox
   * @memberof App
   */
  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  /**
   * Sets the current state of which algorithm will be used
   * based on user onClick selection from the dropdown button menu.
   *
   * @param {event} event - onAlgorithmSelect event stemming from onClick
   * @memberof App
   */
  handleAlgorithmSelect = (event) => {
    this.setState({ algorithm: event.target.id });
  };

  /**
   * Helper function that takes the string stored in the
   * algorithm attribute of the state, and modifies it to
   * be presented properly on the dropdown menu.
   *
   * @param {string} text - the current value of the algorithm state
   * @returns Updated version of the string to be displayed
   * @memberof App
   */
  updateDisplayedAlgorithm(text) {
    return text.charAt(0).toUpperCase() + text.slice(1) + " Sort";
  }

  /**
   * Handles what text will be displayed on the face
   * of the dropdown menu. Will display the name of
   * the currently selected algorithm.
   *
   * @memberof App
   */
  handleDisplayAlgorithm = () => {
    if (this.state.algorithm === "") {
      return "Algorithms";
    } else {
      return this.updateDisplayedAlgorithm(this.state.algorithm);
    }
  };

  /**
   * Takes in an array and returns the array
   * now sorted using the Insertion Sort algorithm.
   *
   * @param {array} arr
   * @returns arr - sorted array
   * @memberof App
   */
  insertionSort(arr) {
    let animationArray = document.getElementsByClassName("array-cell");
    for (let i = 1; i < arr.length; i++) {
      let temp = i - 1;
      let current = arr[i];
      /* -- Attempting to start animating
      setTimeout(() => {
        animationArray[temp].style.backgroundColor = "red";
      }, temp * 1000);
      */
      while (arr[temp] > current) {
        arr[temp + 1] = arr[temp];
        temp = temp - 1;
      }
      arr[temp + 1] = current;
    }
    return arr;
  }

  /**
   * Takes in an array and returns the array
   * now sorted using the Bubble Sort algorithm.
   *
   * @param {array} arr
   * @returns arr- sorted array
   * @memberof App
   */
  bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }

  /**
   * Helper function for quickSort() -
   * Sets the rightmost element to be the pivot, and
   * will place all elements greater than the pivot to
   * the right of the pivot; and all elements lesser than
   * the pivot to the left of the pivot.
   *
   * @param {array} arr - array to be partioned
   * @param {number} low - starting index
   * @param {number} high - ending index
   * @returns index of the pivot element
   * @memberof App
   */
  partition(arr, low, high) {
    let pivotVal = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivotVal) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }

  /**
   * Takes in an array, the starting and ending
   * index of that array. And returns the array
   * now sorted using the Quick Sort algorithm.
   *
   * @param {array} arr - array to be sorted
   * @param {low} low - starting index
   * @param {high} high - ending index
   * @returns
   * @memberof App
   */
  quickSort(arr, low, high) {
    if (low < high) {
      let pivot = this.partition(arr, low, high);
      this.quickSort(arr, low, pivot - 1);
      this.quickSort(arr, pivot + 1, high);
    }
    return arr;
  }

  /**
   * Handles which sorting algorithm is executed when the sort
   * button is clicked; based on the current "algorithm" state.
   *
   * @memberof App
   */
  handleSort = () => {
    let sortedArray;
    switch (this.state.algorithm) {
      case "insertion":
        sortedArray = this.insertionSort(this.state.array);
        this.setState({ array: sortedArray });
        sortedArray = undefined;
        break;
      case "bubble":
        sortedArray = this.bubbleSort(this.state.array);
        this.setState({ array: sortedArray });
        sortedArray = undefined;
        break;
      case "quick":
        sortedArray = this.quickSort(
          this.state.array,
          0,
          this.state.array.length - 1
        );
        this.setState({ array: sortedArray });
        sortedArray = undefined;
        break;
      default:
        alert("Please select an algorithm to sort with.");
    }
  };

  testColorChange() {
    let array = document.getElementsByClassName("array-cell");
    for (let i = 0; i <= array.length; i++) {
      setTimeout(() => {
        if (i < array.length) {
          array[i].style.backgroundColor = "magenta";
        }
      }, i * 10);
      setTimeout(() => {
        if (i - 1 !== -1) {
          array[i - 1].style.backgroundColor = "lightblue";
        }
      }, i * 10);
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          onGenNewArray={this.handleGenNewArray}
          onSizeChange={this.handleSizeChange}
          onAlgorithmSelect={this.handleAlgorithmSelect}
          onDisplayAlgorithm={this.handleDisplayAlgorithm()}
          onSort={this.handleSort}
          onColorTest={this.testColorChange}
        />
        <main className="container">
          <CellArray array={this.state.array} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
