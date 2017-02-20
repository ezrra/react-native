'use strict';
import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native';

class login extends Component {
  render() {
    return(
      <Image source={{uri: 'https://images.unsplash.com/photo-1476438840531-7a48c8fd1259?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop='}} style={styles.container}>
        <View>
          <Text style={styles.title}>SuperHero</Text>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.button}>
            <Text style={styles.textButton}> Login </Text>
          </TouchableHighlight>
        </View>
      </Image>
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
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    });
  }

  cancel() {
    console.log('Cancel')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 30
  },
  button: {
    width: 300,
    height: 30,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textButton: {
    color: 'white'
  },
  title: {
    marginTop: 50,
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

module.exports =  login;
