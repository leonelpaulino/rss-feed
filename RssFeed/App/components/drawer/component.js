/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, Platform, TouchableNativeFeedback } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import styles from './style';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ToggleDrawer from '../../actions/drawer.action';

class Drawer extends Component {
  
  _renderButton(image, text){
    return (
      <View style={ styles.buttonContainer}>
        <Image style={ styles.image} source={ image }/>
        <Text style={ styles.text}>{ text }</Text> 
      </View>
    );
  }
  
  componentWillReceiveProps(nextProps) {
    this.toggleDrawer(nextProps);     
  }
  componentDidMount() {
    this.toggleDrawer(this.props);
  }

  _actionClick(action) {
    Actions[action]();
    this.refs.drawer.closeDrawer();
  }

  toggleDrawer(props) {
    if (props.isOpen) {
      this.refs.drawer.openDrawer();
    } else {
      this.refs.drawer.closeDrawer();
    }
  }

  _renderNavigation () {
    let channelImage = require('./resources/ic_note_add.png');
    let tagImage = require('./resources/ic_label.png');
    let feedImage = require('./resources/ic_rss_feed.png');
    if (Platform.OS === 'ios') {
      let underlayColor = 'rgba(0,0,0,0.08)';
      return (
        <View style = { styles.container }>
          <TouchableHighlight onPress = {() => this._actionClick('feed')} underlayColor = { underlayColor }>
            { this._renderButton(feedImage, 'Feed') }
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => this._actionClick('tag')} underlayColor = { underlayColor }>
            { this._renderButton(tagImage, 'Tag') }
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => this._actionClick('channel')} underlayColor = { underlayColor }>
            { this._renderButton(channelImage, 'Channel') }
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style = { styles.container }>
          <TouchableNativeFeedback onPress = {() => this._actionClick('feed')}>
            { this._renderButton(feedImage, 'Feed') }
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress = {() => this._actionClick('tag')}>
            { this._renderButton(tagImage, 'Tag') }
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress = {() => this._actionClick('channel')}>
            { this._renderButton(channelImage, 'Channel') }
          </TouchableNativeFeedback>
        </View>
      );
    }
  }

  render () {
    return (
      <DrawerLayout
        ref = 'drawer'
        drawerWidth={ 300 }
        onDrawerClose={ () => this.props.toggleDrawer(false) }
        onDrawerOpen={ () => this.props.toggleDrawer(true) }
        renderNavigationView={this._renderNavigation.bind(this)}>
          { this.props.children }
      </DrawerLayout>
    );
  }
}

function mapsStateToProps(objState) {
  return { isOpen: objState.drawer.isOpen };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: (isOpen) => dispatch(ToggleDrawer(isOpen))
  }
}
  
module.exports = connect(mapsStateToProps, mapDispatchToProps)(Drawer);
