import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { TextInput } from './../components';

class AppContainer extends Component {
  static propTypes = {
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <TextInput/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
