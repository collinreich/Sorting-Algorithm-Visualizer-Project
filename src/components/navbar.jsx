import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Sorting Algorithm Visualizer</span>
      <button
        className="btn btn-outline-info btn-sm nav-item mr-3"
        onClick={props.onGenNewArray}
      >
        Generate new array
      </button>
      <span className="nav-item text-white mr-2">Size of array: </span>
      <form className="form-inline">
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="1-75"
          onChange={props.onSizeChange}
        />
      </form>
    </nav>
  );
};

export default NavBar;
