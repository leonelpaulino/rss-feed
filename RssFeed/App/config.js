import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './screens/app/app';
import configureStore from './store/configureStore'

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

module.exports = Config