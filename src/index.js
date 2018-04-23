// Dependencies
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';


// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

// Redux store
import configureStore from './lib/configureStore';

// Reducers
import rootReducer from './reducers';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { history} from './lib/configureStore';



// Bluebird configuration
//sirve para sobrescribir el objeto promise y lo reemplaza por el de bluebird
window.Promise = Bluebird;

Bluebird.config({ warnings: false });


window.addEventListener('unhandledrejection', error => {
  error.preventDefault();

  if (process.env.NODE_ENV !== 'production') {
    console.warn('Unhandled promise rejection warning.', error.detail);
  }
});

// Configuring redux store
const store = configureStore({
  initialState: window.initialState
}, rootReducer);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <AppRoutes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
