import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { dashboardRequest } from "../../../actions/web/dashboardAction";
import  ProfileDetail  from "./detail";


class Profile extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		notification : [],
		profilesec   : {},
		listing	     : []
	}

  }
 
    componentDidMount(){
         
		this.props.dashboardRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
		this.setState({
			notification : nextProps.dasboarddetail.list,
			profilesec	 : nextProps.dasboarddetail.my_profile_details,
			listing		 : nextProps.dasboarddetail.my_list,
		})
	}
  
 

   render() {

    return (
		<div className="wrapper">
			<HeaderUser />
			<Menu />

            <section className="section-container">
       
                     <div className="content-wrapper">
          
                        <div className="container gapfrm-top">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="content-part-wrapper text-center">
                   
                                        <div className="item user-block user-part no-pad">
                                            
                                            <div className="user-block-picture custom-user-block-picture2">
                                                <div className="user-block-status d-flex align-items-center">
                                                        <div className="alpha">A</div>

                                                        <div className="pic-edit"><label htmlFor="up"><img className="" src="assets/img/edit-image.png" alt="Avatar" /></label></div>
                                                        <input type="file" id="up"style={{display : "none"}} />
                                                
                                                    
                                                </div>

                                            </div>
                                        </div>
                                    </div>
               
                                    <div className="content-part-wrapper text-center">
                                    <h2 className="mid-heading">RATING</h2>
                                        <p><img className="" src="assets/img/star-icon.png" /></p>
                                    </div>
                                </div>

                                 <ProfileDetail /> 
                            </div>
                        </div>
                    </div>
            </section>
        </div>
	 );
  }
}

const mapStateToProps = state => {
	return {
	  dasboarddetail  : state.dashboarddetail.dashboard,
	 
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		dashboardRequest : bindActionCreators(dashboardRequest , dispatch),
	  
	}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

