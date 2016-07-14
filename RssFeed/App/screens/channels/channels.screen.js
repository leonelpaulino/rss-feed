/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//COMPONENTS
import ChannelRow from '../../components/channelRow/component';
import ChannelModal from '../../components/channelModal/component'
import Modal from '../../components/modal/component'
import Separator from '../../components/separator/component';
import styles from './style';
import {   
	addChannel,
  deleteChannel,
  editChannel,
  toggleModalChannel
} from '../../actions/channel.action';

class Channel extends Component {

    constructor(props) {
      super(props)
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
       if (props.channels) {
        this.dataSource = ds.cloneWithRows(props.channels)
      } else {
        this.dataSource = ds.cloneWithRows([]);
      }
    }

  _renderRow(data) {
    return (
      <ChannelRow 
  	    data={data} 
  	    editClick={() => this.props.editChannel(data)}
  	    deleteClick={() => this.props.onDelete(data)}/>
    );
  }

  _renderSeparator() {
    return <Separator/>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channels){
      this.dataSource = this.dataSource.cloneWithRows(nextProps.channels);     
    }
  }

  _getChannelModal() {
    let isEdit = false;
    let submit = this.props.onSubmit;
    if ( this.props.channel ) {
      submit = this.props.onEdit;
      isEdit = true;
    }
    return (
      <ChannelModal 
        tags={ this.props.tags } 
        channel={ this.props.channel } 
        isEdit={ isEdit }
        submit={ submit }/>
    );
  }

  render () {
    return (
      <View style={ styles.container }>
        <ListView
          enableEmptySections={ true }
          renderRow={ this._renderRow.bind(this) }
          dataSource={ this.dataSource }
          renderSeparator={ this._renderSeparator }
        />
        <Modal 
          isOpen={ this.props.isModalOpen }
          height={ 350 }
          onClose = { this.props.onCloseModal }
          swipeToClose={ false }
          component={  this._getChannelModal() }
        />
      </View>
    );
  }
}

function mapStateToProps(objState) {
  return {
    channels: objState.channels.channels,
    tags: objState.tags.tags,
    isModalOpen: objState.channels.isModalOpen,
    channel: objState.channels.channel
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (data) => {
      dispatch(addChannel(data));
      dispatch(toggleModalChannel(undefined,false));
    },
    onCloseModal: () => {
      if (ownProps.isModalOpen) {
        dispatch(toggleModalChannel(undefined, false))
      }
    },
    onEdit: (data) => {
      dispatch(editChannel(data));
      dispatch(toggleModalChannel(undefined,false));
    },
    onDelete: (data) => {
      dispatch(deleteChannel(data));
    },
    editChannel: (channel) => {  
      dispatch(toggleModalChannel(channel, true))
    }
  }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Channel);
