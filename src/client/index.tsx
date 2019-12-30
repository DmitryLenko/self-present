import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { App } from '../components/app'
import { rootReducer, RootState } from '../store/rootReducer'

declare global {
  interface Window {
    __PRELOADED_STATE__?: RootState;
  }
}

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState)

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
