import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";

import iconPath from "../../../helpers/iconHelper";

import './Header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
     };
  }
  componentDidMount(){
    
  }

 
  render() {
    
    
    return (
      <header className="sp-header">
				<div className="sp-logo-wrap pull-left">
					<a href="index.html">
						<img className="brand-img mr-10" src={iconPath.LOGOWHITE} alt="brand"/>
						<span className="brand-text"><img  height="50px" width="120px" src={iconPath.LOGOWHITE} alt="brand"/></span>
					</a>
				</div>
				<div className="form-group mb-0 pull-right">
					<span className="inline-block pr-10 header-text">Don't have an account?</span>
					<a className="inline-block btn btn-danger btn-rounded " href="signup.html">Sign Up</a>
				</div>
				<div className="clearfix"></div>
			</header>
			
    );
  };
}
const mapStateToProps = state => {
  return {
            
        }
}
const mapDispatchToProps = dispatch => {
  return {
   

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));