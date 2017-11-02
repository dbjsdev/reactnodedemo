import React, { Component} from 'react';
import { connect } from 'react-redux'
import Login from '../presentation/Login';
import Register from '../presentation/Register';
import { logoutUser } from '../../actions/authActions';

class Authentication extends Component {

	constructor(){
		super();

		this.state = {
			toggleReg: false
		};
	}

	componentDidMount(){
		
	}

	showLogin(){
		this.setState({
			toggleReg: false   
		});		
	}	

	showReg(){
		this.setState({
			toggleReg: true   
		});
	}	

	logout(){
		this.props.dispatch(logoutUser());
	}	

	render(){

		const userNotLoggedIn = (
			<div>
				<button onClick={this.showLogin.bind(this)}>Login</button><button onClick={this.showReg.bind(this)}>Register</button>
				{ this.state.toggleReg ? <Register /> : <Login /> }
			</div>
		);
		const userLoggedIn = (<div>Logged in as: {this.props.username} <button onClick={this.logout.bind(this)}>Logout</button></div>);

		return (
			<div>
				{this.props.loggedIn ? userLoggedIn : userNotLoggedIn}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
    	loggedIn: state.auth.loggedIn,
    	username: state.auth.username
	}
}

export default connect(mapStateToProps)(Authentication)