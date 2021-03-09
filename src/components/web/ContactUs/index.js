import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import { contactusRequest } from "../../../actions/web/contactusAction";



class ContactUs extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		email     : '',
		name	  : '',
		message	  : ''
		
	}
   
   	this.onSubmit  = this.onSubmit.bind(this);
   	this.handleChange = this.handleChange.bind(this);
  }
 
  onSubmit(e){
	e.preventDefault();
	console.log(this.state);
	this.props.contactusRequest(this.state);
  }

  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
	if(nextProps.contact.status == true){
		// 
		ToastsStore.success(nextProps.contact.message);
		this.setState({
			email     : '',
			name	  : '',
			message	  : ''
		});
		
	 }else{
		ToastsStore.error(nextProps.contact.message);
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
					<a href="/">
						<img className="block-center rounded" src="assets/img/login-logo.png" alt="Image" />
					</a>
					<p>WELCOME to TRYCKL</p>
				</div>
		
				<div className="container">
					<div className="row">
						<div className="col-lg-6 justify-content-lg-center m-auto">
							<div className="veri-wrapper">
								<h1>Contact US</h1>
									<form onSubmit={this.onSubmit}>
                                        <div className="contact-frm">
                                           {/*  <label>YOUR USER ID</label>
                                            <input type="text" name="id" placeholder="Enter your User ID" />
                                             */}<label>YOUR NAME</label>
                                            <input type="text" name="name" placeholder="Enter your full name" value={this.state.name} onChange={this.handleChange} required/>
                                            <label>YOUR Email</label>
                                            <input type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} required/>
                                            <label>MESSAGE</label>
                                            <textarea placeholder="Enter your message" name="message" value={this.state.message} onChange={this.handleChange} required></textarea>
                                        </div>

                                        <div className="ver-frm-wrapper">
                                           <button>SEND</button>
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
	  contact	: state.contactus
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		contactusRequest       : bindActionCreators(contactusRequest , dispatch),
	  
	}
  }

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUs));

