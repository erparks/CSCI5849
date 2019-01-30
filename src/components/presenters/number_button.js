import React, { Component } from "react";

export default class NumberButton extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={() => this.props.onClick(this.props.label)}
      >
        {this.props.label}
      </button>
    );
  }
}
