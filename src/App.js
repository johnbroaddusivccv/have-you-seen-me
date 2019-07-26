import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import { link } from "fs";
import Grid from "./components/Grid";
// import { connect } from react-redux;

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
  renderPerson = ({ image, link, ...stuff }) => (
    <div className="container-fluid">
      <div className="card" key={link}>
        <img className="card-img" src={image} alt="missingperson" />
        <div className="card-img-overlay text-black position-relative">
          {/* <div className="card-footer">
          {stuff["First Name"]}
          {stuff["Last Name"]}
          {stuff["City Of Last Contact"]}
        </div> */}
        </div>
      </div>
    </div>
  );

  render() {
    const { persons } = this.state;
    console.log(persons);
    return (
      <div className="App">
        <Grid>{persons.map(this.renderPerson)}</Grid>
      </div>
    );
  }
}
export default App;
