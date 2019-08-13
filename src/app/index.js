import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apiSetup } from '../config/api';
import { authSetup } from '../services/AuthService';

import AppNavigator from './components/AppNavigator';

class App extends Component {
  componentDidMount() {
    authSetup(this.props.dispatch);
    apiSetup(this.props.dispatch);
  }

  render() {
    return <AppNavigator />;
  }
}

export default connect()(App);
