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
const Tabs = require('./src/components/tabs')

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index) {
    if (index == 0) {
      return null
    }
    return(
      <TouchableHighlight onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      }}>
        <Text style={{marginTop: 10, marginLeft: 20, color: '#007AFF'}}> Back </Text>
      </TouchableHighlight>
    )
  },
  RightButton: function (route, navigator, index) {
    return null;
  },
  Title: function (route, navigator, index) {
    if (route.name == 'Login') {
      return null
    }
    return(
      <Text style={{marginTop:10, color: '#007AFF'}}>
        {route.name}
      </Text>
    )
  }
}

export default class AwesomeProject extends Component {

  renderScene(route, navigator) {
      switch (route.name) {
        case 'Login':
          return (
            <Login {...route.props} navigator={navigator} route={route} />
          )
        case 'Dashboard':
          return (
            <Tabs {...route.props} navigator={navigator} route={route} />
          )
      }
  }

  render() {
    return (
      <Navigator style={{backgroundColor: '#fff'}}
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouteMapper} />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
