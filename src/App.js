import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import { link } from "fs";

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
  renderPerson = ({ person_id, image, link, ...stuff }) => (
    <div key={person_id}>
      {stuff["First Name"]}
      {stuff["Last Name"]}
      {stuff["Race / Ethnicity"]}
      {stuff["City Of Last Contact"]}

      {stuff["geo_point_2d"]}

      <img src={image} alt="missingperson" />
    </div>
  );

  render() {
    const { persons } = this.state;
    console.log(persons);
    return <div className="App">{persons.map(this.renderPerson)}</div>;
  }
}

export default App;
