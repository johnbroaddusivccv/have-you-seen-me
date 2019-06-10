import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    this.getPersons();
  }

  getPersons = _ => {
    fetch("http://localhost:4000/persons")
      .then(response => response.json())
      .then(response => this.setState({ persons: response.data }))
      .catch(err => console.error(err));
  };
  // This is redndering the picture link to every Missing person in the Namus Database
  renderPerson = ({ person_id, image }) => <div key={person_id}>{image}</div>;

  render() {
    const { persons } = this.state;
    return <div className="App">{persons.map(this.renderPerson)}</div>;
  }
}

export default App;
