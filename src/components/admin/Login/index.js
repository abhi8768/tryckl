import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

/* import Header from '../Header'; */
import { createLoginRequest } from "../../../actions/web/authAction";
import { setPublicIP } from "../../../helpers/authHelper";


class Login extends Component {
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
		this.props.history.push(`admin/dashboard`);
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

  render() {
    return (
      <div className="wrapper  pa-0">
						
			{/*  <Header /> */}
			<div className="page-wrapper pa-0 ma-0 auth-page">
				<div className="container">
				
					<div className="table-struct full-width full-height">
						<div className="table-cell vertical-align-middle auth-form-wrap">
							<div className="auth-form  ml-auto mr-auto no-float card-view pt-30 pb-30">
								<div className="row">
									<div className="col-sm-12 col-xs-12">
										<div className="mb-30">
											<h3 className="text-center txt-dark mb-10">Sign in to Tryckl Admin</h3>
											<h6 className="text-center nonecase-font txt-grey">Enter your details below</h6>
										</div>	
										<div className="form-wrap">
											<form action="#" onSubmit={this.onSubmit}>
												<div className="form-group">
													<label className="control-label mb-10" htmlFor="exampleInputEmail_2">Mobile Number</label>
													<input  type="text" name="user_id" id="user_id" className="form-control" onChange={this.handleChange} required placeholder="Enter Mobile Number" />
												</div>
												<div className="form-group">
													<label className="pull-left control-label mb-10" htmlFor="exampleInputpwd_2">Password</label>
													<input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} required placeholder="Enter Password" />
												</div>
												
												<div className="form-group text-center">
													<button type="submit" className="btn btn-danger btn-rounded">sign in</button>
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
)(Login));

