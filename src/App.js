import React, { Component } from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";

class App extends Component() {
  constructor() {
    super();

    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <input type="text" onChange={this.handleCHANGE} />
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
