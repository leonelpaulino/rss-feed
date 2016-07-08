'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';
import ModalBox from 'react-native-modalbox';

class Modal extends Component {

	static propTypes: {
		isOpen: React.ProTypes.bool,
		onClose: React.ProTypes.func,
		onOpen: React.ProTypes.func,
		onClosingState: React.ProTypes.func,
		component: React.ProTypes.element
	}

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  	if (this.props.isOpen){
  		this.refs.modal1.open();
  	}
  }

  componentWillReceiveProps(nextProps) {
  	if (nextProps.isOpen) {
  		this.refs.modal1.open();
  	} else {
  		this.refs.modal1.close();
  	}
  }

	onClose () {
		if (this.props.onClose){
			this.props.onClose();
		}
	}

	onOpen () {
		if (this.props.onOpen){
			this.props.onOpen();
		}
	}

	onClosingState () {
		if (this.props.onClosingState){
			this.props.onClosingState();
		}
	}

  render () {
    return (
		  <ModalBox 
			  style={styles.modal1} 
			  ref={"modal1"} 
			  swipeToClose={false} 
			  onClosed={this.onClose.bind(this)} 
			  onOpened={this.onOpen.bind(this)} 
			  onClosingState={this.onClosingState.bind(this)}
	  	>
			{this.props.component}
	  	</ModalBox>
		);
  }
}

module.exports = Modal;
