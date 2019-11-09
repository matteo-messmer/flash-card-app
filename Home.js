import * as React from 'react';
import {View, Button, Text} from 'react-native';
import Deck from './flashcards';
import styles from './Style';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
      const renderedDeckButtons = this.props.decks.map((d, index) => { 
        return (
          <Button
            key={d.name}
            title={d.name}
            onPress={() => this.props.handleChange({ view: 'deck', currentDeck: index })}
          />
        );
      });

      return (
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.title}>Flashy Cards</Text>
          </View>
          {renderedDeckButtons}
          <View style={styles.footer}>
            <Button
              title="Add New Deck"
              onPress={() => this.props.handleChange({ view: 'newDeck' })}
              color="green"
            />
          </View>
        </View>
      );
  }
}