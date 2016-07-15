/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
	View,
	Platform, 
	TouchableHighlight, 
	TouchableNativeFeedback, 
	Image, 
	Text 
} from 'react-native';
import styles from './style'

class feedRow extends Component {

	static propTypes: {
		data: React.PropTypes.object.isRequired,
		onClick: React.ProTypes.func
	}

  constructor( props) {
    super(props);
    let image = '';
    if (props.data.mediaGroups.length > 0){
    	image = props.data.mediaGroups[0].contents[0].url;
    }
    this.data = {
    	description: props.data.contentSnippet,
			title: props.data.contentSnippet,
			image: image
    }

  }

  _getImage () {
  	return <Image source={{uri: this.data.image}} style={styles.image}/>
  }

  _getDescription () {
  	return (
  		<View style={styles.descriptionContainer}>
  		<Text style={styles.text}>{this.data.description}</Text>
  		</View>
  	);
  }	

  render () {
  	if (Platform.OS === 'ios'){
	    return (
	    	<TouchableHighlight onPress={ this.props.onClick } underlayColor='transparent'>
		    	<View style={styles.container}>
		    		{ this._getImage() }
		    		{ this._getDescription() }
		    	</View>
	    	</TouchableHighlight>
	  	);
  	} else {
  		return (
  			<TouchableNativeFeedback onPress={ this.props.onClick }>
		    	<View style={styles.container}>
		    		{ this._getImage() }
		    		{ this._getDescription() }
		    	</View>
	    	</TouchableNativeFeedback>
			);
  	}
  }
}

module.exports = feedRow;