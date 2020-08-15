import React from 'react';
import ReactDOM from 'react-dom';

import './bootstrap.css'
import './index.css';
import './normalize.css'
import './animation.css'
import './App.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

// redux store configrations import
import { Provider } from 'react-redux';
import storeConfiguration from './redux/configStore';

ReactDOM.render(
  <Provider store={storeConfiguration}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
