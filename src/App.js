import React, {Component} from 'react';
import CharacterCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import characters from './characters.json';
import './App.css';

class App extends Component {
  // set this.state.characters to characters array
  state = {
    characters
  };

  removeChar = id => {
    // filter characters array
    const characters = this.state.characters.filter(character => character.id !== id);
    // set this.state.characters equal to new characters array
    this.setState({characters});
  };

  // map this.state.characters then render a CharacterCard for each character object
  render() {
    return (
      <Wrapper>
        <Title>Characters List</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            removeChar={this.removeChar}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;