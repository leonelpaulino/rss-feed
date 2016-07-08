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
import ChannelModal from '../../components/channelModal/component';
import Modal from '../../components/modal/component';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		}
	}
  render () {
    return (
      <View style = {{flex: 1}}> 
        <Modal isOpen = {this.state.isOpen} component = {<ChannelModal/>}/>
      </View>
    );
  }
}

module.exports = Feed;
