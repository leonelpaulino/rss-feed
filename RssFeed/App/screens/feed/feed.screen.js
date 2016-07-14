/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//COMPONENTS
import FeedRow from '../../components/feedRow/component';
import styles from './style';

class Feed extends Component {
  
  constructor(props) {
    super(props)
     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
     if (props.feed) {
      this.dataSource = ds.cloneWithRows(props.feed)
    } else {
      this.dataSource = ds.cloneWithRows([]);
    }
  }

  _renderSeparator() {
    return <Separator/>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feed){
      this.dataSource = this.dataSource.cloneWithRows(nextProps.feed);     
    }
  }

  _renderRow(data) {
    return <FeedRow data={data} onClick={(data) => console.log(data)}/>;
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
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feeds.feed
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Feed);