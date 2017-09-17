import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderList() {
		if (this.props.auth) {
			return (
				<li className="nav-item">
					<Link to="/signout" className="nav-link">
						Sign Out
					</Link>
				</li>
			);
		}
		return [
			<li className="nav-item" key="1">
				<Link to="/signin" className="nav-link">
					Sign In
				</Link>
			</li>,
			<li className="nav-item" key="2">
				<Link to="/signup" className="nav-link">
					Sign Up
				</Link>
			</li>
		];
	}

	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<Link to="/" className="navbar-brand">
						<span
							className="glyphicon glyphicon-picture"
							aria-hidden="true"
						/>{' '}
						IMGS
					</Link>
					<ul className="nav navbar-nav navbar-right">{this.renderList()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
