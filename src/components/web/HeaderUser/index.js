import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";

import './HeaderUser.css';
import iconPath from "../../../helpers/iconHelper";


class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_image : null
     };
  }
  componentDidMount(){
   
    this.setState({
      user_image : (this.props.currentUserDetails.profile_photo != null) ? this.props.currentUserDetails.profile_photo : 'S'
    })
  }

  render() {
    
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="nav-wrap">
      <div className="mobile-only-brand pull-left">
        <div className="nav-header pull-left">
          <div className="logo-wrap">
            <a href="index.html">
              <img className="brand-img" src={iconPath.LOGOWHITE} alt="brand"/>
              <span className="brand-text"><img height="50px" width="120px" src={iconPath.LOGOWHITE} alt="brand"/></span>
            </a>
          </div>
        </div>	
        <a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i className="zmdi zmdi-menu"></i></a>
        <a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" className="mobile-only-view" href="javascript:void(0);"><i className="zmdi zmdi-search"></i></a>
        <a id="toggle_mobile_nav" className="mobile-only-view" href="javascript:void(0);"><i className="zmdi zmdi-more"></i></a>
        <form id="search_form" role="search" className="top-nav-search collapse pull-left">
          <div className="input-group">
            <input type="text" name="example-input1-group2" className="form-control" placeholder="Search" />
            <span className="input-group-btn">
            <button type="button" className="btn  btn-default"  data-target="#search_form" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i className="zmdi zmdi-search"></i></button>
            </span>
          </div>
        </form>
      </div>
      <div id="mobile_only_nav" className="mobile-only-nav pull-right">
        <ul className="nav navbar-right top-nav pull-right">
          
          
          <li className="dropdown alert-drp">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="zmdi zmdi-notifications top-nav-icon"></i><span className="top-nav-icon-badge"></span></a>
          </li>
          <li>
            <a id="open_right_sidebar" href="#"><i className="zmdi zmdi-settings  top-nav-icon"></i></a>
          </li>
          <li className="dropdown auth-drp">
            <a href="#" className="dropdown-toggle pr-0" data-toggle="dropdown"><img src={this.state.user_image} alt="user_auth" className="user-auth-img img-circle"/><span className="user-online-status"></span><span className="user-auth-name inline-block">micheal hogan <span className="ti-angle-down"></span></span></a>
            <ul className="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
              <li>
                <a href="profile.html"><i className="zmdi zmdi-account"></i><span>Profile</span></a>
              </li>
                         
              <li className="divider"></li>
              <li>
                <a href="#"><i className="zmdi zmdi-power"></i><span>Log Out</span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>	
      </div>
    </nav>
			
    );
  };
}
const mapStateToProps = state => {
  return {
             currentUserDetails  : state.login.user,
        }
}
const mapDispatchToProps = dispatch => {
  return {
   

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderUser));