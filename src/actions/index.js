import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export const signInUser = (values, callback) => async dispatch => {
	try {
		// submit email and password to the server
		const res = await axios.post(`${ROOT_URL}/signin`, values);
		// If request is good...
		// Update state to indicate user is authenticated
		dispatch({ type: AUTH_USER});
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

export const signupUser = (values, callback) => async dispatch => {
	try {
		var res = await axios.post(`${ROOT_URL}/signup`, values);
		dispatch({type: AUTH_USER});
		localStorage.setItem('token', res.data.token);
		await callback();
	} catch (err) {
		dispatch(authError('Email already Exist'))
		// console.log(res)
	}
}

export const authError = error => {
	return {
		type: AUTH_ERROR,
		payload: error
	};
};

export const signOutUser = () => {
	localStorage.removeItem('token')
	return {
		type: UNAUTH_USER
	}
}

export const fetchMessage = () => async dispatch => {
	const res = await axios.get(ROOT_URL, {headers: {authorization: localStorage.getItem('token')}})
	dispatch({type: FETCH_MESSAGE, payload: res.data.message})
}