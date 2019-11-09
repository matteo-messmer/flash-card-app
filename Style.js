import * as React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  head: {
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    margin: 0,
    right: 0,
    left: 0,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  footer: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 0,
    right: 0,
    left: 0,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
  },
  textInput: {
    width: 'auto',
    borderWidth: 1,
    borderColor: '#50a0d0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
});
