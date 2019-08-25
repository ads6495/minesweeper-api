import React, { Component } from 'react';


class Cell extends Component {
  render() {
    return (
      < td onClick={this.props.onClick} > {this.props.display}</td >
    )
  }
}

export default Cell;