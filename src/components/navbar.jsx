import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ zIndex: 1035 }} //very hacky and probably a better way to do this but it's a quick fix to make sure navbar and dropdown dont get covered
    >
      <span className="navbar-brand mb-0 h1">Sorting Algorithm Visualizer</span>
      <button
        className="btn btn-outline-info btn-sm nav-item mr-3"
        onClick={props.onGenNewArray}
      >
        Generate new array
      </button>
      <span className="nav-item text-white mr-2">Size of array: </span>
      <form className="form-inline mr-3">
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="1-75"
          onChange={props.onSizeChange}
        />
      </form>
      <div className="dropdown mr-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          {props.onDisplayAlgorithm}
        </button>
        <div className="dropdown-menu">
          {/*TODO: Convert initializing these buttons into a map function, or stateless functional component; redundant code.*/}
          <button
            className="dropdown-item"
            type="button"
            id="insertion"
            onClick={props.onAlgorithmSelect}
          >
            Insertion Sort
          </button>
          <button
            className="dropdown-item"
            type="button"
            id="bubble"
            onClick={props.onAlgorithmSelect}
          >
            Bubble Sort
          </button>
          <button
            className="dropdown-item"
            type="button"
            id="quick"
            onClick={props.onAlgorithmSelect}
          >
            Quick Sort
          </button>
        </div>
      </div>
      <button
        className="btn btn-outline-success btn-lg nav-item"
        onClick={props.onSort}
      >
        Sort!
      </button>
      <button
        className="btn btn-outline-primary btn-lg nav-item ml-2"
        onClick={props.onColorTest}
      >
        Color Test
      </button>
    </nav>
  );
};

export default NavBar;
