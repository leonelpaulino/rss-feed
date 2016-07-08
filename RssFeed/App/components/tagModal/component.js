'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles'
import Modal from 'react-native-modalbox';
import TextField from 'react-native-md-textinput';

class tagModal extends Component {
	
	static propTypes: {
		submit: React.PropTypes.func,		
	}

  constructor(props) {
    super(props);
  }

  render () {
    return (<View/>);
  }
}

module.exports = tagModal;
