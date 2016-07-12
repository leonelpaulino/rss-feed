/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, DrawerLayoutAndroid, Platform, TouchableNativeFeedback } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import styles from './style';

class Drawer extends Component {

  render () {
    const navigationView = (
      <View style={[{flex:1,paddingTop: 40}, {backgroundColor: '#fff'}]}>
        <Text>Hello there!</Text>
        <Text>Close drawer</Text>
      </View>
    );
    return (
      <DrawerLayout
        drawerWidth={300}
        renderNavigationView={() => navigationView}
      >
      </DrawerLayout>
    );
  }
}

module.exports = Drawer;
