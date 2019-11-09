import * as React from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import Deck from './flashcards';
import styles from './Style';
import decks from './flashcards';

export default class Home extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.title}>
              Add New Card to {decks[this.props.state.currentDeck].name}
            </Text>
          </View>
          <Text>
            Front:
          </Text>
            <TextInput
              style={styles.textInput}
              type="text"
              onChangeText={value => this.props.handleChange({ tempFront: value })}
            />
          <Text>
            Back:
            </Text>
            <TextInput
              style={styles.textInput}
              type="text"
              onChangeText={value => this.props.handleChange({ tempBack: value })}
            />
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                title="Ok"
                color="green"
                onPress={() => {
                  decks[this.props.state.currentDeck].cards.push({
                    front: this.props.state.tempFront,
                    back: this.props.state.tempBack,
                  });
                  this.props.handleChange({ view: 'deck' });
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="orange"
                onPress={() => this.props.handleChange({ view: 'deck' })}
              />
            </View>
          </View>
        </View>
      );
  }
}