import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import featureReducer from './featureReducer';

const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	info: featureReducer 
})

export default rootReducer;