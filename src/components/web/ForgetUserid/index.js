import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import { forgetuseridRequest } from "../../../actions/web/authAction";



class ForgetUserid extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		email     : '',
		
	}
   
   	this.onSubmit  = this.onSubmit.bind(this);
   	this.handleChange = this.handleChange.bind(this);
  }
 
  onSubmit(e){
	e.preventDefault();
	this.props.forgetuseridRequest(this.state);
  }

  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
	if(nextProps.forgetuserid.status == true){
		// 
		ToastsStore.success(nextProps.forgetuserid.message);
		
	 }else{
		ToastsStore.error(nextProps.forgetuserid.message);
	 }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 
  render() {
    return (
		<div className="wrapper">
				<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground />
				<div className="text-center marigin-needed">
					<a href="#">
						<img className="block-center rounded" src="assets/img/login-logo.png" alt="Image" />
					</a>
					<p>WELCOME to TRYCKL</p>
				</div>
		
				<div className="container">
					<div className="row">
						<div className="col-lg-6 justify-content-lg-center m-auto">
							<div className="veri-wrapper">
								<h1>forgot USER ID</h1>
									<form onSubmit={this.onSubmit}>
									<div className="contact-frm">
										<p className="frg-txt">
										If you forgot your User ID, please enter your <br/>
										registered email here. We will send your USER ID <br/>
										via email..
										</p>
										<label>EMAIL</label>
										<input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required placeholder="Please enter your registered Email" />
										
									</div>

									<div className="ver-frm-wrapper">
										<button type="submit">Email my user id</button>
										<Link to="/login" className="forg custom-back-link">Back to login</Link>
										
									</div>
									</form>

							</div>
						</div>

					</div>
				</div>
		</div>
		
		
		
    );
  }
}

const mapStateToProps = state => {
	return {
	  currentUserDetails  : state.login.user,
	  forgetuserid	      : state.forgetuserid
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		forgetuseridRequest       : bindActionCreators(forgetuseridRequest , dispatch),
	  
	}
  }

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetUserid));

