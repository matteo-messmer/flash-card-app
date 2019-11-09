import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

import decks from './flashcards';

import Home from './Home';
import NewDeck from './NewDeck';
import Deck from './Deck';
import Rename from './Rename';
import NewCard from './NewCard';
import Front from './Front';
import Back from './Back';


// You can import from local files
import AssetExample from './components/AssetExample';
import styles from './Style';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    view: 'home',
    currentDeck: -1,
    tempDeckName: '',
    tempFront: '',
    tempBack: '',
    right: [],
    wrong: [],
    time: 0,
  };

  

  rearrangeCards() {
    //sort wrong/right cards by time
    this.state.wrong.sort(function(a, b) {
      return b.time - a.time;
    });
    this.state.right.sort(function(a, b) {
      return b.time - a.time;
    });

    //put the wrong cards and then the right cards and the remaining cards in the cards list
    decks[this.state.currentDeck].cards = this.state.wrong
      .concat(decks[this.state.currentDeck].cards)
      .concat(this.state.right);

    this.setState({ wrong: [], right: [] });
  }

  rightWrong(guess) {
    //put the card in the wrong or right list with the respective time
    let card = decks[this.state.currentDeck].cards[0];
    card.time = this.state.time;

    if (guess) {
      this.state.right.push(card);
    } else {
      this.state.wrong.push(card);
    }
  }

  nextCard() {
    decks[this.state.currentDeck].cards.shift();

    if (decks[this.state.currentDeck].cards.length === 0) {
      this.rearrangeCards();
    }

    this.setState({ view: 'front', time: Date.now() });
  }

  handleChange(data) {
    this.setState(data);
  }

  render() {


    if (this.state.view === 'home') {
      return (
        <Home
          decks={decks}
          state = {this.state}
          handleChange={this.handleChange.bind(this)} />
      );
    } else if (this.state.view === 'newDeck') {
      return (
        <NewDeck decks={decks} 
          state = {this.state}
          handleChange={this.handleChange.bind(this)} />
      );
    } else if (this.state.view === 'deck') {
      return (
        <Deck decks={decks} 
          state = {this.state}
          handleChange={this.handleChange.bind(this)} />
      );
    } else if (this.state.view === 'rename') {
      return (
        <Rename decks={decks} 
          state = {this.state}
          handleChange={this.handleChange.bind(this)} />
      );
    } else if (this.state.view === 'newCard') {
      return (
        <NewCard decks={decks} 
          state = {this.state}
          handleChange={this.handleChange.bind(this)} />
      );
    } else if (this.state.view === 'front') {
      return (
        <Front decks={decks}  
          state = {this.state}
          rearrangeCards = {this.rearrangeCards.bind(this)}
          handleChange={this.handleChange.bind(this)} />
      );
    } else if (this.state.view === 'back') {
      return (
        <Back
          decks={decks} 
          state = {this.state}
          rightWrong = {this.rightWrong.bind(this)}
          rearrangeCards = {this.rearrangeCards.bind(this)}
          nextCard = {this.nextCard.bind(this)}
          handleChange={this.handleChange.bind(this)} 
          />
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Error!</Text>
        </View>
      );
    }
  }
}

