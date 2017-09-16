import React from 'react';

export default(props) => {
	// console.log(props)
	return (
	<div className="form-group">	
	<label>{props.label}</label>
	<input {...props.input} type={props.type} className="form-control"/>
	</div>
	)
}