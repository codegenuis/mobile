import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Register  from '../../screens/Register/containers'

export default class Layout extends React.Component {
  render() {
    return (
      <View style= {styles.container}>
       <Register />
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
});
