'use strict';
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native';

class login extends Component {
  render() {
    return(
      <View>
        <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.button}>
          <Text style={styles.textButton}> Login </Text>
        </TouchableHighlight>
      </View>
    )
  }

  onLogin() {
    Alert.alert('Access', 'Logged', [
      {
        text: 'Ok',
        onPress: (this.ok.bind(this))
      },
      {
        text: 'Cencel',
        onPress: (this.cancel.bind(this))
      }
    ])
    // console.log("Login ...")
  }

  ok() {
    console.log('Login ok')
  }

  cancel() {
    console.log('Cancel')
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 30,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textButton: {
    color: 'white'
  }
})

module.exports =  login;
