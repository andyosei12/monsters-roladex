import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: "",
      isLoading: false,
    };
  }
  // info: using async await
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    this.setState({
      monsters: users,
      isLoading: false,
    });
  }
  // info using promises
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((users) => this.setState({ monsters: users }));
  // }

  searchInputHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Roladex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.searchInputHandler}
        />
        {!this.state.isLoading && filteredMonsters.length !== 0 && (
          <CardList monsters={filteredMonsters} />
        )}
        {filteredMonsters.length === 0 && !this.state.isLoading && (
          <p>No monster found</p>
        )}
        {this.state.isLoading && <p>Loading monsters...</p>}
      </div>
    );
  }
}

export default App;
