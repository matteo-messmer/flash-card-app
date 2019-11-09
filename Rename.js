import * as React from 'react';
import {View, Button, Text,TextInput} from 'react-native';
import Deck from './flashcards';
import styles from './Style';
import decks from './flashcards';

export default class Home extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.title}>
              Rename "{decks[this.props.state.currentDeck].name}"
            </Text>
          </View>
          <Text>
            Name:
          </Text>
            <TextInput
              style={styles.textInput}
              type="text"
              onChangeText={value => this.props.handleChange({ tempDeckName: value })}
            />
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                title="Ok"
                color="green"
                onPress={() => {
                  if (this.props.state.tempDeckName != '') {
                    decks[
                      this.props.state.currentDeck
                    ].name = this.props.state.tempDeckName;
                  }
                  this.props.handleChange({ view: 'deck', tempDeckName: '' });
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="orange"
                onPress={() =>
                  this.props.handleChange({ view: 'deck', tempDeckName: '' })
                }
              />
            </View>
          </View>
        </View>
      );
  }
}