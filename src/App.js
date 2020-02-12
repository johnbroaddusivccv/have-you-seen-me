import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
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

  // This is rendering the picture link to every Missing person in the Namus Database
  renderPerson = ({ image, link, ...stuff }) => (
    <div className="container-fluid">
      <div key={link}>
        <div>
          <div>
            <img className="img" src={image} alt="missingperson" />
            <p>
              {stuff["First Name"]}&nbsp;
              {stuff["Last Name"]}
            </p>
            <p>{stuff["City Of Last Contact"]}</p>
          </div>
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
