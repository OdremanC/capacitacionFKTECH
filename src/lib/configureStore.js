// Dependencies
import isomorphicFetch from 'isomorphic-fetch';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
export const history = createHistory();


export default function configureStore(options, rootReducer) {
  const { initialState = {} } = options;


  const middleware = [

    reduxImmutableStateInvariant(),
    
    createLogger(),
    routerMiddleware(history)
    
  ];

  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
