import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import renderField from './renderField';
import formField from './formField';

class SignUp extends Component {
	handleFormSubmit(values) {
		// console.log(values)
		this.props.signupUser(values, () => {
			this.props.history.push('/feature')
		})
	}

	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					{this.props.errorMessage}
				</div>
			)
		}
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field
					type="email"
					name="email"
					label="Email:"
					component={renderField}
				/>
				<Field
					type="password"
					name="password"
					label="Password:"
					component={renderField}
				/>
				<Field
					type="password"
					name="pword"
					label="Confirm Password:"
					component={renderField}
				/>
				{this.renderAlert()}
				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</form>
		);
	}
}

const validate = values => {
	const errors = {};

	/*	if (!values.email) {
		errors.email = 'Please enter an email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Please enter a valid email';
	}

	if (!values.password) {
		errors.password = 'Please enter a password';
	}

	if (!values.pword) {
		errors.pword = 'Please confirm password';
	}

	if (values.password !== values.pword) {
		errors.password = 'Password does not match';
	}*/

	formField.forEach(({name, value}) => {
		if (!values[name]) {
			errors[name] = value;
		}
	});
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Please enter a valid email';
	}

	if (values.password !== values.pword) {
		errors.password = 'Password does not match';
	}

	return errors;
};

function mapStateToProps(state) {
	return { errorMessage: state.auth.error }
}

export default connect(mapStateToProps, actions)(
	reduxForm({
		form: 'signup',
		validate
	})(SignUp)
);
