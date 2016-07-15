'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ListView, Platform, TouchableNativeFeedback} from 'react-native';
import styles from './style';
import Modal from 'react-native-modalbox';
import TextField from 'react-native-md-textinput';
import {
  MKCheckbox,
} from 'react-native-material-kit';

class ChannelModal extends Component {

	static propTypes: {
		submit: React.ProTypes.func,
		isEdit: React.PropTypes.bool,
		tags: React.ProTypes.array,
		channel: React.PropTypes.object
	}

	static defaultProps = {
		isOpen: false,
		isEdit: false,
		tags: [],
		channel: {
			name: '',
			url: '',
			tags: [],
			id: ''
		} 
	}

  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1.id !== r2.id});
    this.tags = props.tags.map((item)=>{
    	return {
    		tag: item,
    		checked: props.isEdit && props.channel.tag.indexOf(item) !== -1 ? true : false
    	};
    });
    this.channel = props.isEdit ? props.channel : { name: '', url: '', tag: [] };
    this.dataSource = this.dataSource.cloneWithRows(this.tags);
  }

	_submit () {
		let tags = this.tags.filter((item) => item.checked === true);
		let channel = {
			tag: tags.map((data) => data.tag),
			url: this.refs['Channel Url'].state.text,
			name: this.refs['Channel Name'].state.text,
			id: this.props.channel.id
		}
		if (this.props.submit){
			this.props.submit(channel);
		}
	}
	
	_onCheckboxClick (data, rowId) {
		this.tags[rowId].checked = !data.checked;
		this.dataSource.cloneWithRows(this.tags);
	}

	_getButton () {
		let text = this.props.isEdit ? 'EDIT' : 'ADD';
		let content = (
			<View style = {styles.buttonContainer}>
  			<Text style = {styles.buttonText}>{text}</Text>
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

	_renderRow (data, sectionId, rowId) {
		return (
			<View style = {styles.rowContainer}> 
				<Text style = {styles.rowText}>{data.tag}</Text>
				<MKCheckbox checked = {data.checked} onCheckedChange = {() => this._onCheckboxClick(data,rowId)}/>
			</View>
		);
	}

	_renderListView () {
		return (
			<View style = {styles.listContainer}>
	  		<ListView
	  		enableEmptySections={ true }
	  		style = {styles.list}
	  		dataSource = {this.dataSource}
	  		renderRow = {this._renderRow.bind(this)}
	  		/>
  		</View>
		);
	}

	_renderInput (label, value) {
		return (
	    <TextField 
	    	label = {label}
	    	highlightColor = '#00BCD4'
	    	value = {value}
	    	ref = {label}
	    	dense= {true}
	  	/>
		);
	}

  render () {
    return (
	  	<View style = {styles.container}>
	  		<Text style= {styles.textTitle}>New Channel</Text>
	  		{this._renderInput('Channel Url', this.channel.url)}
		    {this._renderInput('Channel Name',this.channel.name)}
		    {this._renderListView()}
	    	{this._getButton()}
  		</View>
    );
  }
}

module.exports = ChannelModal;
