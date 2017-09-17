 import {FETCH_MESSAGE} from '../actions/types';

 export default function(state = {}, action) {
 	 		// console.log(action)
 	switch(action.type) {

 		case FETCH_MESSAGE:
 			return {...state, message: action.payload}

 		default:
 			return state;
 	}
 }