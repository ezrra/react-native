/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Bananas from './app/components/Bananas';
import LotsOfGreetings from './app/components/LotsOfGreetings';
import BlinkApp from './app/components/BlinkApp';
import LotsOfStyles from './app/components/LotsOfStyles';
import FixedDimensionsBasics from './app/components/FixedDimensionsBasics';
import FlexDimensionsBasics from './app/components/FlexDimensionsBasics';
import FlexDirectionBasics from './app/components/FlexDirectionBasics';
import PizzaTranslator from './app/components/PizzaTranslator';
import IScrolledDownAndWhatHappenedNextShockedMe from './app/components/IScrolledDownAndWhatHappenedNextShockedMe';
import ListViewBasics from './app/components/ListViewBasics';
import YoDawgApp from './app/components/Navigator/YoDawgApp';
import SimpleNavigationApp from './app/components/Navigator/SimpleNavigationApp';
import CountriesByPopulation from './app/components/CountriesByPopulation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
          index.android.js Edited
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => CountriesByPopulation);
