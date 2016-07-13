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
  toggleChannelModal 
} from '../../actions/channel.action';

class Channel extends Component {

    static defaultProps = {
      isModalOpen: false
    }

    constructor(props) {
      super(props)
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
       if (props.channels) {
        this.dataSource = ds.cloneWithRows(props.channels)
      } else {
        this.dataSource = ds.cloneWithRows([]);
      }
    }

  _onEditClick () {

  }

  _onDeleteClick() {

  }
  _renderRow(data) {
    return <ChannelRow 
	    data={data} 
	    editClick={this._onEditClick}
	    deleteClick={this._onDeleteClick}/>;
  }

  _renderSeparator() {
    return <Separator/>;
  }

  componentWillReceiveProps(nextProps) {
    this.dataSource = this.dataSource.cloneWithRows(nextProps.channels);     
  }


  render () {
    return (
      <View style={ styles.container }>
        <ListView
          enableEmptySectinos={ true }
          renderRow={ this._renderRow.bind(this) }
          dataSource={ this.dataSource }
          renderSeparator={ this._renderSeparator }
        />
        <Modal 
          isOpen={ this.props.isModalOpen }
          height={ 200 }
          swipeToClose={ true }
          component={ <ChannelModal data={ this.props.selectedChannel } submit={this.props.onSubmit}/>}
        />
      </View>
    );
  }
}

function mapStateToProps(objState) {
  return {
    tags: objState.channels.channels,
    isModalOpen: objState.channels.isModalOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => {
      dispatch(addChannel(data));
      dispatch(toggleChannelModal(false));
    }
  }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Channel);
