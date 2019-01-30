import React, { Component } from "react";
import NumberButton from "../presenters/number_button";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  root: {
    width: "50%",
    margin: "0 auto"
  },
  dialerButton: {
    backgroundColor: "white",
    border: "1px solid black",
    color: "black",
    textAlign: "center",
    fontSize: "20px",
    width: "100%"
  }
};

class NumberPad extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        {[...Array(3).keys()].map((_, i) => {
          return (
            <Grid
              key={i}
              container
              direction="row"
              spacing={8}
              alignContent="stretch"
            >
              {[...Array(3).keys()].map((_, j) => {
                const numLabel = i * 3 + j + 1;

                return (
                  <Grid item key={numLabel} xs={4}>
                    <NumberButton
                      className={this.props.classes.dialerButton}
                      key={numLabel}
                      label={numLabel}
                      onClick={this.props.onClick}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
        <Grid container direction="row" spacing={8} alignContent="center">
          <Grid item xs={4}>
            <NumberButton
              label={"*"}
              onClick={this.props.onClick}
              className={this.props.classes.dialerButton}
            />
          </Grid>
          <Grid item xs={4}>
            <NumberButton
              label={"0"}
              onClick={this.props.onClick}
              className={this.props.classes.dialerButton}
            />
          </Grid>
          <Grid item xs={4}>
            <NumberButton
              label={"#"}
              onClick={this.props.onClick}
              className={this.props.classes.dialerButton}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={8} alignContent="center">
          <Grid item xs={6}>
            <button className={this.props.classes.dialerButton}>Dial</button>
          </Grid>
          <Grid item xs={6}>
            <button
              className={this.props.classes.dialerButton}
              onClick={this.props.clearNumber}
            >
              Clear
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NumberPad);
