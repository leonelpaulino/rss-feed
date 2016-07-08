'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';
import styles from './style'
import TextField from 'react-native-md-textinput';

class tagModal extends Component {

	static propTypes: {
		submit: React.PropTypes.func,
	}

  constructor(props) {
    super(props);
  }
	_submit () {
		let tag = this.refs['Tag Name'].state.text;
		if (this.props.submit){
			this.props.submit(tag);
		}
	}
	_getButton () {
		let content = (
			<View style = {styles.buttonContainer}>
  			<Text style = {styles.buttonText}>ADD</Text>
			</View>
		);
		if ( Platform.OS === 'ios' ){
			return (
		  	<TouchableHighlight onPress = {this._submit.bind(this)} underlayColor = 'transparent'>
	  			{content}
		  	</TouchableHighlight>
			);
		} else {
			return (
		  	<TouchableNativeFeedback onPress = {this._submit.bind(this)} >
	  			{content}
		  	</TouchableNativeFeedback>
			);
		}
	}

  render () {
    return (
    	<View>
    		<View style = {styles.container}>
	    		<Text style= {styles.textTitle}>New Tag</Text>
			    <TextField 
			    	label = {'Tag Name'}
			    	highlightColor = '#00BCD4'
			    	ref = {'Tag Name'}
			    	dense= {true}
			  	/>
		  	</View>
		  	{this._getButton()}
    	</View>
  	);
  }
}

module.exports = tagModal;
