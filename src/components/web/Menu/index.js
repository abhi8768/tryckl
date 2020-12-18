import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

import { logoutRequest } from "../../../actions/web/authAction";
import $ from "jquery";

class Menu extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
    }
    this.logoutReq = this.logoutReq.bind(this);
   	
  }
 
  componentDidMount () { 
   
   
  }

  logoutReq(){
   
    this.props.logoutRequest({user_id : this.props.currentUserDetails.brokers_id});
  }

  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
	
  }

  

  render() {
    
    return (
      <aside className="aside-container">
   
      <div className="aside-inner">
       <nav className="sidebar" data-sidebar-anyclick-close="">
      
        <ul className="sidebar-nav">
          
        
         
         <li className="" id="menu_profile">
          {/*  <a href="#dashboard" title="Dashboard"> */}
            <Link to="/profile"  title="Dashboard" >
                <em className="pro"></em><span data-localize="sidebar.nav.DASHBOARD">Profile</span>
            </Link>
         {/*  </a> */}
        </li>
         <li className="" ><a href="#dashboard" title="Dashboard" data-toggle="collapse">
           <em className="age"></em><span data-localize="sidebar.nav.DASHBOARD">Agents & Groups</span>
         </a>
        </li>
         <li className=""><a href="#dashboard" title="Dashboard" data-toggle="collapse">
           <em className="try"></em><span data-localize="sidebar.nav.DASHBOARD">Trycklitics</span>
         </a>
        </li>
        <li className=" "><a href="#dashboard" title="Dashboard" data-toggle="collapse">
           <em className="set"></em><span data-localize="sidebar.nav.DASHBOARD">Settings</span>
         </a>
        </li>
        <li className=" "><a href="#dashboard" title="Dashboard" data-toggle="collapse">
           <em className="cont"></em><span data-localize="sidebar.nav.DASHBOARD">Contact Us</span>
         </a>
        </li>
          <li className=" "><a href="#dashboard" title="Dashboard" data-toggle="collapse">
            <em className="com"></em><span data-localize="sidebar.nav.DASHBOARD">Company</span>
             <em className="icon-arrow-down not-show" style={{position: 'absolute', right: '10px', top: '18px'}}></em>
           
            </a>
            <ul className="sidebar-nav sidebar-subnav collapse" id="dashboard">
             <li className="sidebar-subnav-header">Dashboard</li>
             <li className=" "><a href="dashboard.html" title="Dashboard v1"><em className="ter"></em><span className="adj">Terms & Conditions</span></a></li>
             <li className=" "><a href="dashboard_v2.html" title="Dashboard v2"><em className="pol"></em><span className="adj">Privacy Policy</span></a></li>
             <li className=""><a href="dashboard_v3.html" title="Dashboard v3"><em className="pay"></em><span className="adj">Payment Policy</span></a></li>
             <li className=""><a href="dashboard_v3.html" title="Dashboard v3"><em className="abt"></em><span className="adj">About Us</span></a></li>
            </ul>
         </li>
         <li className="hide-shik">
            <a href={void(0)} title="Dashboard" onClick={this.logoutReq}>
           
                <em className="log"></em>
                <span data-localize="sidebar.nav.DASHBOARD">Log Out</span>  
            </a>
         </li>
 
 
 
          <li className="sick-hide">
            <a href={void(0)} title="Dashboard" onClick={this.logoutReq}>
              <div>
                <em className="icon-plus"></em>
                <span data-localize="sidebar.nav.DASHBOARD">Log Out</span>
              </div>
            </a>
          </li>
         
        </ul>
       </nav>
      </div>
   </aside>
    );
  }
}

  const mapStateToProps = state => {
    return {
      currentUserDetails  : state.login.user,
      logout              : state.logout.logoutuser
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      logoutRequest   : bindActionCreators(logoutRequest , dispatch),
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

