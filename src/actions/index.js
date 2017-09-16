import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

export const signInUser = (values, callback) => async dispatch => {
	try {
		// submit email and password to the server
		const res = await axios.post(`${ROOT_URL}/signin`, values);
		// If request is good...
		// Update state to indicate user is authenticated
		dispatch({ type: AUTH_USER, payload: res.data });
		// Save the JWT token
		localStorage.setItem('token', res.data.token);
		// redirect to the route /feature
		await callback();
	} catch (err) {
		//If request is bad..
		// Show an error to the user
		dispatch(authError('Email or Password Incorrect'));
	}
};

export const authError = error => {
	return {
		type: AUTH_ERROR,
		payload: error
	};
};
