import React, { Component } from "react";
import NumberPad from "./number_pad";
import NumberField from "../presenters/number_field";
import { Grid } from "@material-ui/core";

export default class Dialer extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={8}
      >
        <Grid item xs={12}>
          <NumberField enteredNumber={this.props.currentNumber} />
        </Grid>
        <Grid item>
          <NumberPad
            onClick={this.props.updateNumber}
            clearNumber={this.props.clearNumber}
          />
        </Grid>
      </Grid>
    );
  }
}
