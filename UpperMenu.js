import * as React from 'react';
import {View, Button, Text} from 'react-native';
import Deck from './flashcards';
import styles from './Style';
import decks from './flashcards';

export default class UpperMenu extends React.Component {
  render() {
    return (
      <View style={styles.head}>
        <View style={styles.row}>
          <View style={styles.button}>
            <Button
              title="Exit"
              onPress={() => {
                this.props.rearrangeCards();
                this.props.handleChange({ view: 'deck' });
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Restart"
              onPress={() => {
                this.props.rearrangeCards();
                this.props.handleChange({ view: 'front', time: Date.now() });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}