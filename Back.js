import * as React from 'react';
import {View, Button, Text} from 'react-native';
import Deck from './flashcards';
import styles from './Style';

import UpperMenu from './UpperMenu';

export default class Home extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <UpperMenu 
            handleChange= {this.props.handleChange.bind(this)}
            rearrangeCards = {this.props.rearrangeCards.bind(this)} 
          />
          <Text style={styles.paragraph}>
            {this.props.decks[this.props.state.currentDeck].cards[0].back}
          </Text>
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                title="Right"
                onPress={() => {
                  this.props.rightWrong(true);
                  this.props.nextCard();
                }}
                color="green"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Wrong"
                onPress={() => {
                  this.props.rightWrong(false);
                  this.props.nextCard();
                }}
                color="orange"
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Button
              title="Delete"
              onPress={() => this.props.nextCard()}
              color="red"
            />
          </View>
        </View>
      );
  }
}