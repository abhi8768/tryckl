import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menubar from "react-responsive-multi-level-menu";
import MenuItems from "../../../helpers/menuHelper";
import Menulist from "./menulist";
import $ from "jquery";

class Menu extends Component {
  constructor(props) {
    super(props);
   
	this.state = {
		
	}
   
   	
  }
 
  componentDidMount () { 
    
    
   

    const script = document.createElement("script");
    script.src = "assets/js/jquery.slimscroll.js";
    script.async = true;
    document.body.appendChild(script);  


    $( document ).ready(function() {
        $('.nicescroll-bar').slimscroll({height:'100%',color: '#878787', disableFadeOut : true,borderRadius:0,size:'4px',alwaysVisible:false});
    })
    /* const script2 = document.createElement("script");
    script2.src = "assets/js/init.js";
    script2.async = true;
    document.body.appendChild(script2);    */

   
 }

  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
	
  }

  

  render() {
    const animation=['slideIn' , 'slideOut']
    return (
        <div className="fixed-sidebar-left">
                <table>
                    <tr>
                        <td><Menulist /></td>
                        <td><Menulist /></td>
                    </tr>
                </table>
            
           
            {/* <Menubar data={MenuItems} animation={animation} backgroundColor="#FF5733" className="menubar">sdfsdfds</Menubar>
            <Menubar data={MenuItems} animation={animation} backgroundColor="#FF5733" className="menubar"></Menubar> */}
          {/*  <ul className="nav navbar-nav side-nav">
            
            <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div className="pull-left"><i className="ti-dashboard mr-20"></i><span className="right-nav-text">Dashboard</span></div><div className="pull-right"><i className="ti-angle-down"></i></div><div className="clearfix"></div></a>
                
            </li>
            <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#ecom_dr"><div className="pull-left"><i className="ti-shopping-cart  mr-20"></i><span className="right-nav-text">E-Commerce</span></div><div className="pull-right"><i className="ti-angle-down"></i></div><div className="clearfix"></div></a>
                <Menubar data={MenuItems} animation={animation} backgroundColor="#FF5733" className="menubar">sdfsdfds</Menubar>
            </li>
            <li>
                <a className="active" href="javascript:void(0);" data-toggle="collapse" data-target="#app_dr"><div className="pull-left"><i className="ti-image mr-20"></i><span className="right-nav-text">Apps </span></div><div className="pull-right"><i className="ti-angle-down"></i></div><div className="clearfix"></div></a>
                
            </li>
           
            <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#ui_dr"><div className="pull-left"><i className="ti-pencil-alt  mr-20"></i><span className="right-nav-text">UI Elements</span></div><div className="pull-right"><i className="ti-angle-down "></i></div><div className="clearfix"></div></a>
               
            </li>
           
           
          
        </ul>
            */}
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
	 
	}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

