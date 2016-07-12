/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';

class Separator extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<View style={ styles.separator }/>);
  }
}

module.exports = Separator;
