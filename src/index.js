import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import 'antd/dist/antd.css'
// @import '~antd/dist/antd.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
