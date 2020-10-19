import React, {Component} from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Overlay from './Overlay';


class Auth extends Component {
  constructor(props) {
	super(props);
	this.state = {
		rightPanelActive: false,
	}
  
  }
 


  forgetPassword() {
	//console.log( this.props.history);
	this.props.history.push(`/forget-password`);
  }
  handleClickSignUpButton(){
	 this.setState({
		rightPanelActive: true,
	  });
	}

	handleClickSignInButton (){
		this.setState({
			rightPanelActive: false,
		  });
	}
	render() {
		
		const { rightPanelActive } = this.state;
		return (
			<div className="wrapper">
				<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground />
				<div className="text-center marigin-needed"><a href="#"><img className="block-center rounded" src="assets/img/login-logo.png" alt="Image" /></a>
					<p>WELCOME to TRYCKL</p>
				</div>
				<div
					className={`container2 ${rightPanelActive ? `right-panel-active` : ``}`} 
					id="container"
				>
					<SignUp />
					<SignIn />
					<Overlay
						handleClickSignInButton={this.handleClickSignInButton.bind(this)}
						handleClickSignUpButton={this.handleClickSignUpButton.bind(this)}
					/>
				</div>
			</div>
		);
	}
}


export default Auth;


