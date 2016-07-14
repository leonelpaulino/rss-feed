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
import TagRow from '../../components/tagRow/component';
import TagModal from '../../components/tagModal/component'
import Modal from '../../components/modal/component'
import Separator from '../../components/separator/component';
import styles from './style';
import { addTag } from '../../actions/tag.action';
import { toggleModal } from '../../actions/modal.action';

class Tags extends Component {

    constructor(props) {
      super(props)
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
       if (props.tags) {
        this.dataSource = ds.cloneWithRows(props.tags)
      } else {
        this.dataSource = ds.cloneWithRows([]);
      }
    }

  _onRowClick(data) {
    Actions['feedTag']();
  }

  _renderRow(data) {
    return <TagRow data={data} onClick={this._onRowClick}/>;
  }

  _renderSeparator() {
    return <Separator/>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tags){
      this.dataSource = this.dataSource.cloneWithRows(nextProps.tags);     
    }
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
          submit={ this._submitTag }
          isOpen={ this.props.isModalOpen }
          onClose={ this.props.onCloseModal }
          height={ 200 }
          swipeToClose={ true }
          component={ <TagModal submit={this.props.onSubmit}/>}
        />
      </View>
    );
  }
}

function mapStateToProps(objState) {
  return {
    tags: objState.tags.tags,
    isModalOpen: objState.modal.isModalOpen
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (data) => {
      dispatch(addTag(data));
      dispatch(toggleModal(false));
    },
    onCloseModal: () => {
      dispatch(toggleModal(false));
    }
  };
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Tags);
