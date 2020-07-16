import React, { Component } from "react";

class Cell extends Component {
  state = {
    value: this.getCellValue(),
  };

  getCellValue() {
    return Math.floor(Math.random() * 10);
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Cell;
