import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    width: "50%",
    margin: "0 auto"
  },
  input: {
    width: "100%",
    fontSize: "20px",
    border: "1px solid black"
  }
};

class NumberField extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <input
          className={this.props.classes.input}
          type="tel"
          placeholder="Enter a Phone Number..."
          value={this.props.enteredNumber}
          readOnly
        />
      </div>
    );
  }
}

export default withStyles(styles)(NumberField);
