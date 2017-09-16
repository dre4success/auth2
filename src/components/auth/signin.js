import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import renderField from './renderField'; 
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit(values) {
		// console.log(values)
		this.props.signInUser(values, () => {
			this.props.history.push('/feature')
		})
	}

	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>OOps!</strong> {this.props.errorMessage}
				</div>
			)
		}
	}

	render() {
		const {handleSubmit} = this.props
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field name="email" label="Email:" component={renderField} type="email" />
				<Field name="password" label="Password:" component={renderField} type="password" />
				{this.renderAlert()}
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error}
}

export default connect(mapStateToProps, actions)(reduxForm({
	form: 'signin'
})(Signin))

