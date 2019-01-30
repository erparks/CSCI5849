import React, { Component } from "react";
import TabGroup from "./tab_group";
import ContactList from "./contact_list";
import AddContact from "./add_contact";
import Dialer from "./dialer";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "rgb(245, 245,  245)",
    width: "80%",
    height: "100vh",
    margin: "0 auto"
  }
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "Dialer",
      contactsLoaded: false,
      contacts: [],
      currentNumber: ""
    };
  }

  removePhoneExtension = num => num.split(" ")[0];

  setNumber = num => {
    this.setState({ currentNumber: num });
  };

  updateNumber = num => {
    this.setState(prevState => ({
      currentNumber: prevState.currentNumber + num
    }));
  };

  clearNumber = () => {
    this.setState({ currentNumber: "" });
  };

  setActiveTab = name => {
    this.setState({ activeTab: name });
    console.log("set active tab");
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  showBody = activeTab => {
    console.log("show body");
    switch (activeTab) {
      case "Dialer":
        return (
          <Dialer
            updateNumber={this.updateNumber}
            clearNumber={this.clearNumber}
            currentNumber={this.state.currentNumber}
          />
        );
      case "Contact List":
        if (!this.state.contactsLoaded) {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
              this.setState(prevState => ({
                contacts: [...prevState.contacts, ...json],
                contactsLoaded: true
              }));
            });
          console.log("fetched");
        }

        return (
          <ContactList
            contacts={this.state.contacts}
            onClick={num => {
              this.setActiveTab("Dialer");
              this.setNumber(this.removePhoneExtension(num));
            }}
          />
        );
      default:
        return <AddContact handleSubmit={this.addContact} />;
    }
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={16}
        >
          <Grid item>
            <TabGroup
              titles={["Dialer", "Contact List", "Add Contact"]}
              onClick={this.setActiveTab}
            />
          </Grid>
          <Grid item>{this.showBody(this.state.activeTab)}</Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
