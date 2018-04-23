// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers:
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';



const rootReducer = combineReducers({

  router: routerReducer
});

export default rootReducer;
