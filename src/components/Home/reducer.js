// Utils
import { getNewState } from '../../lib/utils/frontend';
// Actions
import * as actions from './actions';

const initialState = {
	data: [],
	all: []
}

export default function reducerTest(state = initialState, action){
	const dataUsers = Object.assign([], state.users);

	switch(action.type){

		case "SAVE_DATA_SUCCESS":{
			const { payload: { response = [] }} = action;
		    return getNewState(state, {
		    	data: action.payload
		    });
		}

		case "GET_DATA_SUCCESS":{
			const { payload: { response = [] }} = action;
		    return getNewState(state, {
		    	all: action.payload
		    });
		}

    	default:
      		return state;	
		}
}
