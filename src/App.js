import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Guilherme.",
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state.searchField);
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Monsters rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
