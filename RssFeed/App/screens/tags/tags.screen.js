/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Tags extends Component {
  render () {
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <Text> This is the tags screen</Text>
      </View>
    );
  }
}

module.exports = Tags;
