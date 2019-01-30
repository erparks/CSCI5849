import React, { Component } from "react";
import Tab from "../presenters/tab";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "white"
  }
};

class TabGroup extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={8}
        >
          {this.props.titles.map((title, i) => (
            <Grid item key={i}>
              <Tab title={title} onClick={this.props.onClick} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TabGroup);
