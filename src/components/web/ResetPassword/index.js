import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import Tooltip from '@material-ui/core/Tooltip';

import { resetpasswordRequest } from "../../../actions/web/authAction";
import CustomizedTooltips from "./tootltip";


class ResetPassword extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.brokerId);
	this.state = {
		brokerId     	 : this.props.brokerId,
		password 	 	 : '',
		confirmpassword  : '' 
		
	}
   
   	this.onSubmit  = this.onSubmit.bind(this);
   	this.handleChange = this.handleChange.bind(this);
  }
 
  onSubmit(e){
	e.preventDefault();
	if(this.state.password == this.state.confirmpassword){
		this.props.resetpasswordRequest(this.state);
	}else{
		ToastsStore.error('Both fields are not matched');
	}
	
  }

  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
	if(nextProps.resetpass.status == true){
		// 
	    this.setState({
			password 	 	 : '',
			confirmpassword  : '' 	
		})
		ToastsStore.success(nextProps.resetpass.message);
		
	 }else{
		ToastsStore.error(nextProps.resetpass.message);
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
					<a href={void(0)}>
						<img className="block-center rounded" src="/assets/img/login-logo.png" alt="Image" />
					</a>
					<p>WELCOME to TRYCKL</p>
				</div>
		
				<div className="container">
					<div className="row">
						<div className="col-lg-6 justify-content-lg-center m-auto">
							<div className="veri-wrapper">
								<h1>RESET PASSWORD</h1>
									<form onSubmit={this.onSubmit}>
										<div className="contact-frm">
		
											<label>NEW PASSWORD</label>
											<input type="password" className="reset-input" placeholder="Please enter new password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" name="password" id="password" required onChange={this.handleChange} value={this.state.password}/>
											<CustomizedTooltips />

											<label>CONFIRM NEW PASSWORD</label>
											<input type="password" className="reset-input" placeholder="Please confirm new password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" name="confirmpassword" id="confirmpassword" required onChange={this.handleChange} value={this.state.confirmpassword}/>
											<CustomizedTooltips />

										</div>
										<div className="ver-frm-wrapper need-mar-top-ver">
											<button type="submit">RESET PASSWORD</button>
											<Link to="/agent-login" className="forg custom-back-link">Back to login</Link>
											
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
	  resetpass	      : state.resetpassword
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		resetpasswordRequest       : bindActionCreators(resetpasswordRequest , dispatch),
	  
	}
  }

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword));

