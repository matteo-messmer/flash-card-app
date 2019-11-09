import * as React from 'react';
import {View, Button, Text} from 'react-native';
import Deck from './flashcards';
import styles from './Style';
import decks from './flashcards';

import UpperMenu from './UpperMenu';

export default class Front extends React.Component {
  render() {
      if (decks[this.props.state.currentDeck].cards.length > 0) {
        return (
          <View style={styles.container}>  
            <UpperMenu 
              handleChange= {this.props.handleChange.bind(this)}
              rearrangeCards = {this.props.rearrangeCards.bind(this)} 
            />
            <Text style={styles.paragraph}>
              {decks[this.props.state.currentDeck].cards[0].front}
            </Text>
            <Button
              title="Check"
              onPress={() =>
                this.props.handleChange({
                  view: 'back',
                  time: Date.now() - this.props.state.time,
                })
              }
            />
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Text style={styles.paragraph}>This deck is empty</Text>
            <Button
              title="Exit"
              onPress={() => this.props.handleChange({ view: 'deck' })}
            />
          </View>
        );
      }
  }
}