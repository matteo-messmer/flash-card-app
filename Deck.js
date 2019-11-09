import * as React from 'react';
import {View, Button, Text} from 'react-native';
import Deck from './flashcards';
import styles from './Style';
import decks from './flashcards';

export default class Home extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.head}>
            <Button
              title="Back"
              onPress={() => this.props.handleChange({ view: 'home' })}
            />
            <Text style={styles.title}>
              {decks[this.props.state.currentDeck].name}
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                title="Rename"
                onPress={() => this.props.handleChange({ view: 'rename' })}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Add Card"
                onPress={() => this.props.handleChange({ view: 'newCard' })}
              />
            </View>
          </View>
          <Button
            title="Start"
            onPress={() => this.props.handleChange({ view: 'front', time: Date.now() })}
            color="green"
          />
          <View style={styles.footer}>
            <Button
              title="Delete"
              onPress={() => {
                decks.splice(this.props.state.currentDeck, 1);
                this.props.handleChange({ view: 'home' });
              }}
              color="red"
            />
          </View>
        </View>
      );
  }
} 