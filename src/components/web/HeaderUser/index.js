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
	  user_image : '',
	  name		 : ''
     };
  }
  componentDidMount(){
   
    this.setState({
	  user_image : (this.props.currentUserDetails.profile_photo != null) ? this.props.currentUserDetails.profile_photo : '',
	  name		 : `${this.props.currentUserDetails.first_name} ${this.props.currentUserDetails.last_name}`
    })
  }

  render() {
    
    return (
      <header className="topnavbar-wrapper">
		   
		   <nav className="navbar topnavbar">
			 
			  <div className="navbar-header">
          <a className="navbar-brand" href="#/" >
            <div className="brand-logo"><img className="img-fluid" src="assets/img/logo.png" alt="App Logo" /></div>
            <div className="brand-logo-collapsed"><img className="img-fluid" src="assets/img/logo-single.png" alt="App Logo" /></div>
				  </a>
         </div>
		
			  <ul className="navbar-nav mr-auto flex-row position-custom">
				 <li className="nav-item no-border">
				   <a className="nav-link d-none d-md-block d-lg-block d-xl-block" href="#" data-trigger-resize="" data-toggle-state="aside-collapsed">
					   <em className=""><img className="img-fluid sand" src="assets/img/nav-nenu-ico.png" /></em></a>
  
					   <a className="nav-link sidebar-toggle d-md-none" href="#" data-toggle-state="aside-toggled" data-no-persist="true">
					   <em className=""><img className="img-fluid" src="assets/img/nav-nenu-ico.png" /></em></a></li>
				 <li className="nav-item d-none d-md-block dropdown active">
					
					<a className="nav-link" id="user-block-toggle" href="#user-block" data-toggle="collapse">
					   <em className="sp-home"></em>
					   
					</a>
					</li>
				 <li className="nav-item d-none d-md-block dropdown"><a className="nav-link" href="lock.html" title="Lock screen">
					<em className="sp-flag"></em>
  
					<span className="badge badge-danger custom-badge2">!</span></a></li>
				  <li className="nav-item d-none d-md-block dropdown">
					<a className="nav-link" href="lock.html" title="Lock screen">
					   <em className="sp-box"></em>
					   <span className="badge badge-danger custom-badge">22</span></a></li>
				   <li className="nav-item d-none d-md-block dropdown"><a className="nav-link" href="#" data-search-open="" title="Lock screen">
					<em className="sp-search"></em></a></li>
			  </ul>
			  <ul className="navbar-nav flex-row custom-nav">
				  <li className="nav-item"> 
					  <div className="top-p-pic-name">
					   <p className="top-name">{this.state.name}</p>
					   <p className="top-under">$ 19.75</p>
					  </div>
				  </li>
				
				 <li className="nav-item"> 
					<div className="item user-block">
							 
							 <div className="user-block-picture">
								<div className="user-block-status">
									{
										(this.state.user_image != '')	?	
										<img className="img-thumbnail rounded-circle" src={this.state.user_image} alt="Avatar" width="60" height="60"/>
										: <img className="img-thumbnail rounded-circle" src="assets/img/user/02.jpg" alt="Avatar" width="60" height="60"/>
									}
									
								   <div className="circle bg-success circle-lg custom-circle"></div>
								</div>
							 </div>
							
						  </div></li>
			  </ul>
			  <form className="navbar-form" role="search" action="http://themicon.co/theme/angle/v4.7.5/static-html/app/search.html">
				 <div className="form-group"><input className="form-control" type="text" placeholder="Type and hit enter ..." />
					<div className="fas fa-times navbar-form-close" data-search-dismiss=""></div>
				 </div><button className="d-none" type="submit">Submit</button>
			  </form>
		   </nav>
		</header>
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