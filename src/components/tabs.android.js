'use strict';

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
// import { TabBarIOS } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const Dashboard = require('./dashboard');
const Heroes = require('./heroes');

class Tabs extends Component {
  constructor(props) {
      super(props)
      this.state = {
        selectedTab: 'dashboard'
      }
  }

  render() {
    return (
      <ScrollableTabView>
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      </ScrollableTabView>
    )
  }
}
