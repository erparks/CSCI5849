import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";

const styles = {
  root: {
    margin: "0 auto",
    width: "60%"
  },
  input: {
    width: "100%",
    marginBottom: "20px",
    fontSize: "15px",
    border: "1px solid black"
  },
  label: {
    fontSize: "20px"
  },
  button: {
    backgroundColor: "white",
    border: "1px solid black",
    color: "black",
    fontSize: "20px",
    width: "100%"
  }
};

class AddContact extends Component {
  state = {
    name: "",
    phoneNumber: "",
    email: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearForm = () => this.setState({ name: "", phoneNumber: "", email: "" });

  render() {
    return (
      <div className={this.props.classes.root}>
        <label className={this.props.classes.label}>
          Name
          <br />
          <input
            className={this.props.classes.input}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label className={this.props.classes.label}>
          Number
          <br />
          <input
            className={this.props.classes.input}
            name="phoneNumber"
            type="tel"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label className={this.props.classes.label}>
          Email Address
          <br />
          <input
            className={this.props.classes.input}
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <Grid container direction="row" alignContent="center" spacing={8}>
          <Grid item xs={6}>
            <button
              className={this.props.classes.button}
              onClick={() =>
                this.props.handleSubmit({
                  name: this.state.name,
                  phone: this.state.phoneNumber
                })
              }
            >
              Add Contact
            </button>
          </Grid>
          <Grid item xs={6}>
            <button
              className={this.props.classes.button}
              onClick={this.clearForm}
            >
              Clear
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AddContact);
