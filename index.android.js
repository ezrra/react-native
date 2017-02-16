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
import ListViewDemo from './app/components/ListViewDemo/ListViewDemo';

const Login = require('./src/components/login');
const Dashboard = require('./src/components/dashboard')

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
        <Login></Login>
        <Dashboard></Dashboard>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
