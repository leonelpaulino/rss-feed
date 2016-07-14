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
  
  constructor(props){
    super(props);
    this.channelImage = require('./resources/ic_note_add.png');
    this.tagImage = require('./resources/ic_label.png');
    this.feedImage = require('./resources/ic_rss_feed.png');
  }
  
  componentWillReceiveProps(nextProps) {
    this.toggleDrawer(nextProps);     
  }
  componentDidMount() {
    this.toggleDrawer(this.props);
  }

  _actionClick(action) {
    Actions[action]();
    this.props.toggleDrawer(false);
  }

  onDrawerClose() {
    if (this.props.isOpen){
      this.props.toggleDrawer(false);
    }
  }

  toggleDrawer(props) {
    if (props.isOpen) {
      this.refs.drawer.openDrawer();
    } else if (this.refs.drawer.state.drawerShown) {
      this.refs.drawer.closeDrawer();
    }
  }

  _renderNavigationIOS () {
    let underlayColor = 'rgba(0,0,0,0.08)';
    return (
      <View style = { styles.container }>
        <TouchableHighlight onPress = {() => this._actionClick('feed')} underlayColor = { underlayColor }>
          { this._renderButton(this.feedImage, 'Feed') }
        </TouchableHighlight>
        <TouchableHighlight onPress = {() => this._actionClick('tag')} underlayColor = { underlayColor }>
          { this._renderButton(this.tagImage, 'Tag') }
        </TouchableHighlight>
        <TouchableHighlight onPress = {() => this._actionClick('channel')} underlayColor = { underlayColor }>
          { this._renderButton(this.channelImage, 'Channel') }
        </TouchableHighlight>
      </View>
    );
  }

  _renderNavigationAndroid () {
    return (
      <View style = { styles.container }>
        <TouchableNativeFeedback onPress = {() => this._actionClick('feed')}>
          { this._renderButton(this.feedImage, 'Feed') }
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress = {() => this._actionClick('tag')}>
          { this._renderButton(this.tagImage, 'Tag') }
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress = {() => this._actionClick('channel')}>
          { this._renderButton(this.channelImage, 'Channel') }
        </TouchableNativeFeedback>
      </View>
    );
  }

  _renderButton(image, text){
    return (
      <View style={ styles.buttonContainer}>
        <Image style={ styles.image} source={ image }/>
        <Text style={ styles.text}>{ text }</Text> 
      </View>
    );
  }

  render () {
    let navView = Platform.OS === 'ios'? 
                  this._renderNavigationIOS.bind(this): 
                  this._renderNavigationAndroid.bind(this)
    return (
      <DrawerLayout
        ref = 'drawer'
        drawerWidth={ 300 }
        onDrawerClose={ this.onDrawerClose.bind(this) }
        renderNavigationView={ navView }>
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
