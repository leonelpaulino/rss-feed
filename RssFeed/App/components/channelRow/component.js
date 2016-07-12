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
  _getButtonText (text) {
    return <Text style={ styles.buttonText }>{ text }</Text>;
  }
  _getEditButton () {
    let content = (
      <View style={ [styles.buttonContainer,styles.editContainer] }>
        { this._getButtonText('Edit') }
      </View>
    );
  	if (Platform.OS === 'ios') {
  		return (
  			<TouchableHighlight onPress = {() => this.props.editClick(this.props.data)} underlayColor='transparent'>
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

  _getDeleteButton () {
    let content = (
      <View style={ [styles.buttonContainer,styles.deleteContainer] }>
        { this._getButtonText('Delete') }
      </View>
    );
  	if (Platform.OS === 'ios') {
  		return (
  			<TouchableHighlight onPress = {() => this.props.deleteClick(this.props.data)} underlayColor='transparent'>
  				{content}
  			</TouchableHighlight>
			);
  	} else {
  		return (
  			<TouchableNativeFeedback onPress = {() => this.props.deleteClick(this.props.data)}>
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
