import React, {Component} from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Overlay from './Overlay';
import Otp from './Otp';


class Auth extends Component {
  constructor(props) {
	super(props);
	this.state = {
		rightPanelActive: false,
		otpActive 		: false,
		otpData 		: {},
		brokers_id 		: '',
	}
	this.openOtpBox        		= this.openOtpBox.bind(this);
	//this.backToCreateAccount    = this.backToCreateAccount.bind(this);
  }
 


	forgetPassword() {
		//console.log( this.props.history);
		this.props.history.push(`/forget-password`);
	}

  	handleClickSignUpButton(obj){
		console.log('==>> ', obj.brokers_id);
		if(obj.brokers_id==='' || obj.brokers_id === undefined || obj.brokers_id === null){
			this.setState({
				rightPanelActive: true,
				otpActive : false,
				brokers_id : ''
			});
		}else{
			this.setState({
				rightPanelActive: true,
				otpActive : false,
				brokers_id : obj.brokers_id
			});
		}
		
	}

	openOtpBox(obj){
		console.log('OTP Data : ',obj);
		this.setState({
			otpActive		: true,
			otpData			: obj
		});
	} 

	handleClickSignInButton (){
		this.setState({
			rightPanelActive: false,
		  });
	}
	render() {
		
		const { rightPanelActive } = this.state;
		const otpActive = this.state.otpActive;
		return (
			<div className="wrapper">
				<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground />
				<div className="text-center marigin-needed"><a href="#"><img className="block-center rounded" src="assets/img/login-logo.png" alt="Image" /></a>
					<p>WELCOME to TRYCKL</p>
				</div>
				{
					(otpActive===true)?
						<div className="container">
							<Otp 
								otpData 	= {this.state.otpData} 
								handleClickSignUpButton={this.handleClickSignUpButton.bind(this)}
							/>
						</div>
					:
						<div
							className={`container2 ${rightPanelActive ? `right-panel-active` : ``}`} 
							id="container"
						>
							<SignUp openOtpBox = {this.openOtpBox} 
									brokers_id = {this.state.brokers_id} />
							<SignIn />
							<Overlay
								handleClickSignInButton={this.handleClickSignInButton.bind(this)}
								handleClickSignUpButton={this.handleClickSignUpButton.bind(this)}
							/>
						</div>
				}
				
				
			</div>
		);
	}
}


export default Auth;


