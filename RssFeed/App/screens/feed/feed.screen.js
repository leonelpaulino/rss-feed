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
import Separator from '../../components/separator/component';
//ACTION
import { fetchFeed, refreshFeed } from '../../actions/feed.action';
import { filterChannels } from '../../actions/channel.action';

class Feed extends Component {
  
  constructor(props) {
    super(props);
    if (this.props.currentChannels.length > 0 ) {
      this.props.load(this.props.currentChannels[0]);
    }
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.dataSource = ds.cloneWithRows([]);
  }

  componentWillMount() {
  }

  _renderSeparator() {
    return <Separator/>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feed) {
      this.dataSource = this.dataSource.cloneWithRows(nextProps.feed);     
    } 
  }

  _renderRow(data,s,i) {
    return <FeedRow key={'feedRow'+i} data={ data } onClick={ () => console.log('row click!') }/>
  }

  render () {
    if (this.props.isLoading) {
      return (
        <View style= {{marginTop:30}}>
          <Text> IS LOADING </Text>
        </View>
      );
    }
    return (
      <View style={ styles.container }>
        <ListView
          enableEmptySections={ true }
          renderRow={ this._renderRow.bind(this) }
          dataSource={ this.dataSource }
          onEndReached={ this.props.loadMore }
          renderSeparator={ this._renderSeparator }
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feeds.feed,
    channels: state.channels.channels,
    tag: state.tags.currentTag,
    feedPage: state.feeds.feedPage,
    currentChannels: state.channels.currentChannels,
    isLoading: state.channels.isLoading
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load: (channel) => {
      dispatch(fetchFeed(channel));
    }
  };
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Feed);