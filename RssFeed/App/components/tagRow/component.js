/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, Platform, TouchableNativeFeedback } from 'react-native';
import styles from './style'

class TagRow extends Component {

	static propTypes: {
		data: React.PropTypes.string,
    onClick: React.PropTypes.func
	}

  constructor(props) {
    super(props);
  }

  render () {
    let content = (
      <View style = {styles.container}>
        <Text style = {styles.text}>{this.props.data}</Text>
        <Image source = {require('./images/ic_keyboard_arrow_right_.png')}/>
      </View>
    );
    if (Platform.OS === 'ios') {
      return (
        <TouchableHighlight onPress = {()=> this.props.onClick} underlayColor = 'transparent'>
          {content}
        </TouchableHighlight>
    	);
    } else {
      return (
        <TouchableNativeFeedback onPress = {()=> this.props.onClick}>
          {content}
        </TouchableNativeFeedback>
      );
    }
  }
}

module.exports = TagRow;
