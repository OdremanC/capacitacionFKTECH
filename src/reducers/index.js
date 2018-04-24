// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers:
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducerTest from '../components/Home/reducer';



const rootReducer = combineReducers({
	reducerTest,
  	router: routerReducer
});

export default rootReducer;
