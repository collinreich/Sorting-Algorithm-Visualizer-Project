import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Sorting Algorithm Visualizer</span>
      <button
        className="btn btn-dark btn-sm nav-item mr-auto"
        onClick={props.onGenNewArray}
      >
        Generate new array
      </button>
    </nav>
  );
};

export default NavBar;
