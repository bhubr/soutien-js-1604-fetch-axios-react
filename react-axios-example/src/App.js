import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    pokemon: null,
    search: 'pikachu',
    error: null
  }
  /*http://pokeapi.co/api/v2/pokemon/pikachu*/

  requestPokemon = () => {
    const { search } = this.state;
    axios.get(`http://pokeapi.co/api/v2/pokemon/${search}`)
      .then(response => response.data)
      .then(data => this.setState({ pokemon: data }))
      .catch(error => this.setState({ error: error.message }))
  }

  handleChange = (e) => {
    // e.target.value pour récupérer la nouvelle valeur de l'input
    const newSearch = e.target.value;
    this.setState({
      search: newSearch
    });
  }

  render() {

    // this.requestPokemon();
    const { pokemon, search, error } = this.state

    return (
      <div className="App">
        {
          error
            ? <p style={{ backgroundColor: 'red', color: 'white' }}>{error}</p>
            : ''
        }
        <input id="searchPokemon" name="search" type="text" value={search} onChange={this.handleChange} />
        <button onClick={this.requestPokemon}>Pikachu !</button>
        {
          pokemon
            ? <img src={pokemon.sprites.front_shiny} alt='pikachu' />
            : <p>No data yet. Please click the button!!</p>
        }


      </div>
    );
  }

}

export default App;
