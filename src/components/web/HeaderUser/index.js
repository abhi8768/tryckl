import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import { listinginLocalStorage } from "../../../actions/web/listingAction";

import './HeaderUser.css';
import iconPath from "../../../helpers/iconHelper";
import $$ from 'jquery';


class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  user_image : '',
	  name		 : ''
	};
	this.menuCollanse    = this.menuCollanse.bind(this);
	this.linktomylisting = this.linktomylisting.bind(this);
  }
	componentDidMount(){
		let userDetails = JSON.parse(localStorage.getItem('userDetails'));
		this.setState({
			user_image : (this.props.currentUserDetails.profile_photo != null) ? this.props.currentUserDetails.profile_photo : '',
			name	   : `${userDetails.first_name} ${userDetails.last_name}`
		})
	}

  	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
        //console.log(nextProps.currentUserDetails);
		if(nextProps.profileimage != this.props.profileimage){
			this.setState({
				user_image : nextProps.profileimage.profile_photo
				
			})
		}
		/* if(nextProps.currentUserDetails != this.props.currentUserDetails){
			this.setState({
				name		: `${nextProps.currentUserDetails.first_name} ${nextProps.currentUserDetails.last_name}`
			})
		} */
		
	}
	menuCollanse(){
		if($$("body").hasClass( "aside-collapsed" )){
			$$('body').removeClass("aside-collapsed");
		}else{
			$$('body').addClass("aside-collapsed");
		}
	}
	linktomylisting(){
   
	
		  this.props.listinginLocalStorage('mylisting');
		  this.props.history.push(`/my-listing`);
		  location.reload();
		
	  }
	
  render() {
    let letterImage = this.state.name.charAt(0);
    return (
      <header className="topnavbar-wrapper">
		   	<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground />
		   <nav className="navbar topnavbar">
			 
			  <div className="navbar-header">
          		<Link className="navbar-brand" to="/dashboard">
					<div className="brand-logo">
						<img className="img-fluid" src="/assets/img/logo2.png" alt="App Logo2" />
					</div>
					<div className="brand-logo-collapsed">
						<img className="img-fluid" src="/assets/img/logo-single.png" alt="App Logo" />
					</div>
				</Link>
         	 </div>
		
			  <ul className="navbar-nav mr-auto flex-row position-custom">
				 <li className="nav-item no-border">
				   <a className="nav-link d-none d-md-block d-lg-block d-xl-block" href={void(0)} onClick={this.menuCollanse} data-trigger-resize="" data-toggle-state="aside-collapsed">
					   <em className="" ><img className="img-fluid sand" src="/assets/img/nav-nenu-ico.png" /></em></a>
  
					   <a className="nav-link sidebar-toggle d-md-none" href={void(0)} onClick={this.menuCollanse}  data-toggle-state="aside-toggled" data-no-persist="true">
					   <em className=""><img className="img-fluid" src="/assets/img/nav-nenu-ico.png" /></em>
					</a>
				 </li>
				 <li className="nav-item d-none d-md-block dropdown" id="home-header-icon">
					
					<Link to="/dashboard" className="nav-link" id="user-block-toggle" href="#user-block" data-toggle="collapse">
					   <em className="sp-home"></em>
					   
					</Link>
				</li>
				 <li className="nav-item d-none d-md-block dropdown" id="listing-header-icon">
				 	<a onClick={this.linktomylisting} className="nav-link" id="user-block-toggle" href={void(0)} data-toggle="collapse">
						 <em className="sp-flag"></em>
					</a>
  
					{/* <span className="badge badge-danger custom-badge2">!</span> */}
				  </li>
				  {/* <li className="nav-item d-none d-md-block dropdown">
					<a className="nav-link" href="lock.html" title="Lock screen">
					   <em className="sp-box"></em>
					   <span className="badge badge-danger custom-badge">22</span></a>
				  </li>
				  <li className="nav-item d-none d-md-block dropdown"><a className="nav-link" href="#" data-search-open="" title="Lock screen">
					<em className="sp-search"></em></a>
				  </li> */}
			  </ul>
			  <ul className="navbar-nav flex-row custom-nav">
				  <li className="nav-item headeruser-name"> 
					  <div className="top-p-pic-name">
					   <p className="top-name">{this.state.name}</p>
					   {/* <p className="top-under">$ 19.75</p> */}
					  </div>
				  </li>
				
				 <li className="nav-item"> 
					<div className="item user-block">
							 
							 <div className="user-block-picture">
								<div className="user-block-status">
									{
										(this.state.user_image != '')	?	
										<img className="img-thumbnail rounded-circle" src={this.state.user_image} alt="Avatar" style={{width:'40px', height : '40px'}}/>
										:  <div className="small-profile-alpha text-center">{letterImage}</div>  
									}
									
								   {/* <div className="circle bg-success circle-lg custom-circle"></div> */}
								</div>
							 </div>
							
						  </div></li>
			  </ul>
			 {/*  <form className="navbar-form" role="search" action="https://themicon.co/theme/angle/v4.7.5/static-html/app/search.html">
				 <div className="form-group"><input className="form-control" type="text" placeholder="Type and hit enter ..." />
					<div className="fas fa-times navbar-form-close" data-search-dismiss=""></div>
				 </div><button className="d-none" type="submit">Submit</button>
			  </form> */}
		   </nav>
		</header>
    );
  };
}
const mapStateToProps = state => {
  return {
			 currentUserDetails  : state.login.user,
			 profileimage        : state.profilepicture.profilepicture,
        }
}
const mapDispatchToProps = dispatch => {
  return {
    listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch),

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderUser));