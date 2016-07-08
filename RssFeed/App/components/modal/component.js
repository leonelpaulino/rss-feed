'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import ModalBox from 'react-native-modalbox';

class Modal extends Component {

	static propTypes: {
		height: React.ProTypes.number,
		width: React.ProTypes.number,
		isOpen: React.ProTypes.bool,
		onClose: React.ProTypes.func,
		onOpen: React.ProTypes.func,
		onClosingState: React.ProTypes.func,
		swipeToClose: React.ProTypes.bool,
		component: React.ProTypes.element
	}

	static defaultProps = {
		swipeToClose: false,
		height: 350,
		width: 300
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
			  style={{height:this.props.height, width: this.props.width}} 
			  ref={"modal1"} 
			  swipeToClose={this.props.swipeToClose} 
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
