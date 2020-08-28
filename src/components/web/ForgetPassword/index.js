import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import Header from '../Header';
import { createLoginRequest } from "../../../actions/web/authAction";
import { setPublicIP } from "../../../helpers/authHelper";
import iconPath from "../../../helpers/iconHelper";


class ForgetPassword extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		user_id     : '',
		password    : '',
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

  render() {
    return (
      <div className="wrapper  pa-0">
						
			<div className="page-wrapper pa-0 ma-0 auth-page">
				<div className="container">
				
					<div className="table-struct full-width full-height">
						<div className="table-cell vertical-align-middle auth-form-wrap">
							<div className="auth-form  ml-auto mr-auto no-float card-view pt-30 pb-30">
								<div className="row">
									<div className="col-sm-12 col-xs-12">
                                        <div className="sp-logo-wrap text-center pa-0 mb-30">
                                            <a href="index.html">
                                                <img className="brand-img mr-10" width="120px" height="50px" src={iconPath.LOGOBLACK} alt="brand"/>
                                                <span className="brand-text"><img  width="120px" height="50px" src={iconPath.LOGOBLACK} alt="brand"/></span>
                                            </a>
                                        </div>
                                        <div className="mb-30">
											<h3 className="text-center txt-dark mb-10">Need help with your password?</h3>
											<h6 className="text-center txt-grey nonecase-font">Enter the email you use for Splasher, and we’ll help you create a new password.</h6>
										</div>	
										<div className="form-wrap">
											<form action="#">
												<div className="form-group">
													<label className="control-label mb-10" htmlFor="exampleInputEmail_2">Email address</label>
													<input type="email" className="form-control" required="" id="exampleInputEmail_2" placeholder="Enter email" />
												</div>
												
												<div className="form-group text-center">
													<button type="submit" className="btn btn-danger btn-rounded">Reset</button>
												</div>
											</form>
										
									    </div>	
                                    </div>
                                </div>
							</div>
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
)(ForgetPassword));

