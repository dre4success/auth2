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
			<nav className="navbar navbar-light">
				<Link to="/" className="navbar-brand">
					Redux Auth
				</Link>
				<ul className="nav navbar-nav">{this.renderList()}</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
