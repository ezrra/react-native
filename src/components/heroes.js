'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class heroes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Heroes </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    padding: 30
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    justifyContent: 'center'
  }
})

module.exports = heroes;
