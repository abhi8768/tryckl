import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import './HeaderStatic.css';
import iconPath from "../../../helpers/iconHelper";
import $$ from 'jquery';


class HeaderStatic extends Component {
  constructor(props) {
    super(props);
    this.state = {
	 
	};
	this.changeurl = this.changeurl.bind(this);
  }
	componentDidMount(){
		
	}

  	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    
	}
	changeurl(url){
		window.location.href=url;
	}
	
  render() {
    
    return (
		<header className="topnavbar-wrapper"> 
        
		<nav className="navbar topnavbar"> 
   
		  <div className="navbar-header"><a className="navbar-brand" href="/">
			<div className="brand-logo"><img className="img-fluid" src="assets/img/logo2.png" alt="App Logo" /></div>
			<div className="brand-logo-collapsed"><img className="img-fluid" src="assets/img/logo-single.png" alt="App Logo" /></div>
			</a></div>
	   
		  <ul className="navbar-nav mr-auto flex-row position-custom">
			
		   
			<li className={((window.location.href).includes('about-us') == true) ? "nav-item d-none d-md-block dropdown active" : "nav-item d-none d-md-block dropdown"}> 
				 <a className="nav-link hyperlink" onClick={()=>this.changeurl('/about-us')} id="user-block-toggle" href={void(0)} data-toggle="collapse"><span>About Us</span></a>  
				{/* <Link to="/about-us" className="nav-link" id="user-block-toggle" href="#user-block" data-toggle="collapse"><span>About Us</span></Link>  */}
			</li>
		  
			<li className={((window.location.href).includes('payment-policy') == true) ? "nav-item d-none d-md-block dropdown active" : "nav-item d-none d-md-block dropdown"}>
				<a className="nav-link hyperlink" onClick={()=>this.changeurl('/payment-policy')} href={void(0)} title="Lock screen"><span>Payment Policy</span></a> 
				{/* <Link to="/payment-policy" className="nav-link" title="Lock screen"><span>Payment Policy</span></Link>  */}
			</li>
		  
			<li className={((window.location.href).includes('terms-n-condition') == true) ? "nav-item d-none d-md-block dropdown active" : "nav-item d-none d-md-block dropdown"}> 
				 <a className="nav-link hyperlink" onClick={()=>this.changeurl('/terms-n-condition')} href={void(0)} title="Lock screen"><span>Terms and Conditions</span></a> 
				{/* <Link to="/terms-n-condition" className="nav-link" title="Lock screen"><span>Terms and Conditions</span></Link>  */}
			</li>
			<li className={((window.location.href).includes('privacy-policy') == true) ? "nav-item d-none d-md-block dropdown active" : "nav-item d-none d-md-block dropdown"}>
				 <a className="nav-link hyperlink"  onClick={()=>this.changeurl('/privacy-policy')} href={void(0)} data-search-open="" title="Lock screen"><span>Privacy Policy</span></a> 
				{/* <Link to="/privacy-policy" className="nav-link" title="Lock screen"><span>Privacy Policy</span></Link>  */}
				
			</li>
		  </ul>
	
	
{/* 		   <ul className="navbar-nav flex-row custom-nav">
			<li className="nav-item hyperlink">
			  <a href="/login" title="" data-toggle="collapse">
				<div> <em className="icon-power"></em><span data-localize="sidebar.nav.DASHBOARD">Login</span></div>
				</a>
			</li>
	
		  </ul> */}
		 
		  <form className="navbar-form" role="search" action="http://themicon.co/theme/angle/v4.7.5/static-html/app/search.html">
			<div className="form-group">
			  <input className="form-control" type="text" placeholder="Type and hit enter ..." />
			  <div className="fas fa-times navbar-form-close" data-search-dismiss=""></div>
			</div>
			<button className="d-none" type="submit">Submit</button>
		  </form>
		 
		</nav>
	   
	  </header>
	 
	)
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderStatic));