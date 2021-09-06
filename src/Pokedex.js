import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor () {
        super();

        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ inputValue: event.target.value })
    }

    render() {
        console.log(this.state);
        return (
            <div className="pokedex">
                <input type="text" onChange={this.handleCHANGE} />
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;