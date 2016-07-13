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

class Feed extends Component {
  
	constructor(props) {
		super(props);
	}
  
  render () {
    return (
      <View style = {{marginTop:70}}> 
        <Text>this is the feed screen</Text>
      </View>
    );
  }
}

module.exports = Feed;
