import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import Modal from "react-responsive-modal";
import {Link} from 'react-router-dom';

import { createLoginRequest } from "../../../actions/web/authAction";
import { setPublicIP } from "../../../helpers/authHelper";
import $$ from 'jquery';

class SignIn extends Component {

    constructor(props) {
        super(props);
       // setPublicIP();
        this.state = {
          user_name         : '',
            login_password  : '',
            remember_me     : 'checked'
        }
        setPublicIP();
        this.onSubmit       = this.onSubmit.bind(this);
        this.handleChange   = this.handleChange.bind(this);
        this.handleRemember = this.handleRemember.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        this.props.createLoginRequest(this.state);
    }
    
    UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
        if(nextProps.currentUserDetails.status == true){
          if(nextProps.currentUserDetails.user.status == 1){
            ToastsStore.success(nextProps.currentUserDetails.message);
            this.props.history.push(`/dashboard`);
          }else{
            this.setState({
              user_name   : '',
              password    : '',
            });
            ToastsStore.error('Your Account is not verified');
            this.props.updateuserNotverified();
          }
        }else{
            
            ToastsStore.error(nextProps.currentUserDetails.message);
        }
    }
    
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    handleRemember(){
      this.setState({
        remember_me : this.state.remember_me == 'checked' ? '' : 'checked'
      })
    }

    render() {
        return (
            <div className="form-container sign-in-container">
              {/*   <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground /> */}
                <form onSubmit={this.onSubmit}>
                    <h1>Sign in</h1>
                    <div className="frm-wrapper text-left">
                        <label>User ID</label>
                        <input type="text" name="user_name" id="user_name" onChange={this.handleChange} required  placeholder="Enter registered mobile no." />
                        <Link to="/forget-userid" className="forg">Forgot User ID?</Link>
                        
                        <label>Password</label>
                        <input type="password" name="login_password" id="login_password" onChange={this.handleChange} required  placeholder="Enter valid password " />
                        <label className="container-check float-left"><span>Remember me</span>
                            <input type="checkbox" checked={this.state.remember_me} onChange={this.handleRemember} name="remember_me" value="remember_me"/>
                            <span className="checkmark"></span>
                        </label>
                        
                        <Link to="/forget-password" className="float-right forg">Forgot password?</Link>
                        <button type="submit">LOGIN</button>
                        <div className="help-center">
                            <p>
                              {/*   <a href="">Login Help </a> */}
                                <Link to="/contact-us" className="float-right">Contact Us</Link>{/* <a href="" className="float-right">Contact Us</a> */}
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
  const mapStateToProps = state => {
    return {
      currentUserDetails  : state.login,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      createLoginRequest  : bindActionCreators(createLoginRequest , dispatch),
    }
  }
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn));