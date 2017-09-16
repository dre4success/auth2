import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {

	authButton() {
		if(this.props.auth) {
			return <Link to="/" className="nav-link">Sign Out</Link>
		}
		return <Link to="/signin" className="nav-link">Sign In</Link>
		return <Link to="/signup" className="nav-link">Sign Up</Link>
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<Link to="/" className="navbar-brand">Redux Auth</Link>
				<ul className="nav navbar-nav">
					<li className="nav-item">{this.authButton()}</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth.authenticated}
}

export default connect(mapStateToProps)(Header);
