import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import Header from '../Header';
import { createLoginRequest } from "../../../actions/web/authAction";
import { setPublicIP } from "../../../helpers/authHelper";
import SignUp from './SignUp';
import SignIn from './SignIn';
import Overlay from './Overlay';


class Auth extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		user_id     : '',
		password    : '',
		rightPanelActive: false,
	}
   	setPublicIP();
   	this.onSubmit  = this.onSubmit.bind(this);
   	this.handleChange = this.handleChange.bind(this);
  }
 
  onSubmit(e){
	e.preventDefault();
	this.props.createLoginRequest(this.state);
  }

  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
	if(nextProps.currentUserDetails){
		this.props.history.push(`/dashboard`);
	}
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

const mapStateToProps = state => {
	return {
	  currentUserDetails  : state.login.user,
	 
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
	  createLoginRequest       : bindActionCreators(createLoginRequest , dispatch),
	  
	}
  }

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));

