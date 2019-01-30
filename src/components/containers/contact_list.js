import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  contactButton: {
    backgroundColor: "white",
    border: "1px solid black",
    color: "black",
    textAlign: "center",
    fontSize: "20px",
    width: "100%"
  },
  container: {
    width: "80%",
    margin: "0 auto"
  }
};

class ContactList extends Component {
  render() {
    if (!this.props.contacts) {
      return <p>Loading..</p>;
    }

    return (
      <div className={this.props.classes.container}>
        <Grid container direction="column" spacing={8}>
          {this.props.contacts.map((contact, i) => (
            <Grid item key={i}>
              <button
                className={this.props.classes.contactButton}
                onClick={() => this.props.onClick(contact["phone"])}
              >
                {contact["name"]}
              </button>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactList);
