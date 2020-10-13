import React, { Component } from "react";

const LIGHT_BLUE = "lightblue";

class CellArray extends Component {
  /**
   * Returns all the classes needed for
   * each individual cell in the array.
   *
   * @returns classes - string of all classes
   * @memberof CellArray
   */
  getCellClasses() {
    let classes =
      "array-cell text-center border border-dark\
      text-white font-weight-bold flex-grow-1";
    return classes;
  }

  /**
   * Returns all the classes
   * needed for the array container.
   *
   * @returns classes - string of all classes
   * @memberof CellArray
   */
  getArrayContainerClasses() {
    let classes =
      "d-flex flex-row justify-content-center \
      align-items-end fixed-bottom mb-4 w-75 mx-auto";
    return classes;
  }

  /**
   * Takes in a number for a cell's value, and
   * sets an new appropriate value to the 'height'
   * key. This key represents the CSS height property.
   * This function will be called to set the height of
   * each cell in the array.
   *
   * @param {number} value - given value of the cell
   * @returns cellHeight- object containing the height
   *          property for the cell
   * @memberof CellArray
   */
  getCellStyles(value) {
    let size = value * 6;
    let cellHeight = {
      height: size,
      backgroundColor: LIGHT_BLUE,
    };
    return cellHeight;
  }

  render() {
    return (
      <div className={this.getArrayContainerClasses()}>
        {this.props.array.map((value, index) => (
          <div
            style={this.getCellStyles(value)}
            className={this.getCellClasses()}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    );
  }
}

export default CellArray;
