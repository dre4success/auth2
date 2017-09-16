import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import renderField from './renderField';

class SignUp extends Component {

	handleFormSubmit(values) {
		// console.log(values)
	}

	render() {
			const { handleSubmit } = this.props
		return (
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
					<Field type="email" name="email" label="Email:" component={renderField} />
					<Field type="password" name="password" label="Password:" component={renderField} />
					<Field type="password" name="pword" label="Confirm Password:" component={renderField} />
					<button type="submit" className="btn btn-primary">Sign Up</button>
				</form>
			)
	}
}

export default connect(null, actions)(reduxForm({
	form: 'signup'
})(SignUp))

