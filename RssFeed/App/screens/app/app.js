'use strict';
//LIBS
import React, { Component } from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import { StyleSheet, View, Image, TouchableHighlight, Platform, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setTheme } from 'react-native-material-kit';
//SCREENS AND COMPONENTS
import Feed from '../feed/feed.screen.js';
import Channel from '../channels/channels.screen.js';
import Tags from '../tags/tags.screen.js';
import Drawer from '../../components/drawer/component';
//ACTIONS
import ToggleDrawer from '../../actions/drawer.action';
import { refreshFeed } from '../../actions/feed.action';
import { toggleModal } from '../../actions/modal.action';
import { toggleModalChannel } from '../../actions/channel.action';
//STYLE
import styles from './style';



setTheme({checkboxStyle: {
  fillColor: '#00BCD4',
  borderOnColor: '#00BCD4',
  borderOffColor: '#9E9E9E',
  rippleColor: 'rgba(0,188,212,.15)'
}});

class App extends Component {

  constructor(props) {
    super(props);
    this.addImage = require('../../images/ic_add.png');
    this.menuImage = require('../../images/ic_menu.png');
    this.refreshImage = require('../../images/ic_refresh.png');
  }

  renderLeftButton() {
    let content = (
      <View style={styles.menuButton}>
        <Image source={ this.menuImage }/>
      </View>
    );
    if (Platform.OS === 'ios'){
      return (
        <TouchableHighlight onPress = {this.props.leftButtonClick}>
          { content }
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableNativeFeedback onPress = {this.props.leftButtonClick}>
          { content }
        </TouchableNativeFeedback>
      );
    }
  }

  _renderImage (image) {
    return (
      <View style={styles.rightButton}>
        <Image source={ image }/>
      </View>
    );
  }

  renderRightButton(screen) {
    let image = screen === 'feed' ? this.refreshImage : this.addImage;
    if (Platform.OS === 'ios'){
      return (
        <TouchableHighlight onPress={() => this.props.rightButtonClick(screen)}>
          { this._renderImage(image) }
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableNativeFeedback onPress={() => this.props.rightButtonPress(screen)}>
          { this._renderImage(image) }
        </TouchableNativeFeedback>
      );
    }
  }

  render () {
    return (
      <Drawer>
        <Router>
          <Scene 
            key="root"
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navBarText}
            initial={true}
            hideNavBar={false}
          > 
            <Scene 
              key="feed" 
              component={Feed} 
              title="Feed" 
              type = {ActionConst.REPLACE}
              renderLeftButton={this.renderLeftButton.bind(this)}
              renderRightButton={() => this.renderRightButton('feed')}
            />
            <Scene 
              key="tag" 
              component={Tags} 
              title="Tags"
              type = {ActionConst.REPLACE}
              renderLeftButton={this.renderLeftButton.bind(this)}
              renderRightButton={() => this.renderRightButton('tag')}
            />
            <Scene 
              key="channel" 
              component={Channel} 
              title="Channel"
              type = {ActionConst.REPLACE}
              renderLeftButton={this.renderLeftButton.bind(this)}
              renderRightButton={() => this.renderRightButton('channel')}
            />
            <Scene 
              key="feedTag" 
              component={Feed} 
              title="Feed" 
              renderRightButton={() => this.renderRightButton('feed')}
            />
          </Scene>
        </Router>
      </Drawer>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    leftButtonClick: () => {
      dispatch(ToggleDrawer(true));
    },
    rightButtonClick: (screen) => {
      if (screen === 'feed') {
        dispatch(refreshFeed());
      } else if (screen === 'tag') {
        dispatch(toggleModal(true));
      } else {
        dispatch(toggleModalChannel(undefined,true));
      }
    }
  };
}

module.exports = connect(null, mapDispatchToProps)(App);
