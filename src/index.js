import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/types';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// if we have a token, consider the user to be signed in
if(token) {
	// we need to update the application state
	store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.container')
);
registerServiceWorker();
