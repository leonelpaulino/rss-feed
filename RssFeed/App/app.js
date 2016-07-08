/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Feed from './screens/feed/feed.screen.js';
import Channel from './screens/channels/channels.screen.js';
import Tags from './screens/tags/tags.screen.js';
import configureStore from './store/configureStore.js';
import { setTheme } from 'react-native-material-kit';
setTheme({checkboxStyle: {
  fillColor: '#00BCD4',
  borderOnColor: '#00BCD4',
  borderOffColor: '#9E9E9E',
  rippleColor: 'rgba(0,188,212,.15)'
}});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore()
    };
  }
  render () {
    return (
      <Provider store = {this.state.store}>
        <Router>
          <Scene key="root">
            <Scene key="feed" component={Feed} title="Feed"/>
            <Scene key="tag" component={Tags} title="Tags"/>
            <Scene key="channel" component={Channel} title="Channel"/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

module.exports = App;
