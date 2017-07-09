/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class AwesomeProject extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Hurray !!!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         ConFusion
        </Text>
        <Button
          title="Start Game"
          onPress={this._handleButtonPress}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);