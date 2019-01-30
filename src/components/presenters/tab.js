import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  button: {
    backgroundColor: "rgb(245, 245,  245)",
    border: "0px solid black",
    color: "black",
    textAlign: "center",
    fontSize: "20px",
    width: "100%"
  }
};

class Tab extends Component {
  handleClick = () => {
    this.props.onClick(this.props.title);
  };

  render() {
    return (
      <button className={this.props.classes.button} onClick={this.handleClick}>
        {this.props.title}
      </button>
    );
  }
}

export default withStyles(styles)(Tab);
