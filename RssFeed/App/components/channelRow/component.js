/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import { View, Image, Text, TouchableHighlight, Platform, TouchableNativeFeedback } from 'react-native';
import styles from './style'

class ChannelRow extends Component {

	static propTypes: {
    data: React.ProTypes.object,
    editClick: React.PropTypes.func,
    deleteClick: React.PropTypes.func
	}

  constructor(props) {
    super(props);
  }

  _getEditButton () {
  	let content  = <Image source = {require('./images/ic_create_black.png')} style = {styles.editImage}/>;
  	if (Platform.OS === 'ios') {
  		return (
  			<TouchableHighlight onPress = {() => this.props.editClick(this.props.data)}>
  				{content}
  			</TouchableHighlight>
			);
  	} else {
  		return (
  			<TouchableNativeFeedback>
  				{content}
  			</TouchableNativeFeedback>
			);
  	}
  }

  _getDeleteButton () {
  	let content  = <Image source = {require('./images/ic_delete.png')} style = {styles.deleteImage}/>;
  	if (Platform.OS === 'ios') {
  		return (
  			<TouchableHighlight onPress = {() => this.props.editClick(this.props.data)}>
  				{content}
  			</TouchableHighlight>
			);
  	} else {
  		return (
  			<TouchableNativeFeedback onPress = {() => this.props.editClick(this.props.data)}>
  				{content}
  			</TouchableNativeFeedback>
			);
  	}
  }

  render () {
    return (
  		<View style = {styles.container}>
  			<Text style = {styles.text}>{this.props.data.name}</Text>
  			{this._getEditButton()}
  			{this._getDeleteButton()}
  		</View>

  	);
  }
}

module.exports = ChannelRow;
