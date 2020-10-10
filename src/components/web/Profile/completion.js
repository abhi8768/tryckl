import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { dashboardRequest } from "../../../actions/web/dashboardAction";
import { setPublicIP } from "../../../helpers/authHelper";


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
	let profile = this.state.profilesec || {};
	let notificationlist = this.state.notification || [];
	let list = this.state.listing || [];

	let rating = 3;
	let blank_rating = (5 - 3); 
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
                                    <h2 className="mid-heading">Change Image</h2>
                                    <div className="item user-block user-part no-pad">
                                        <div className="user-block-picture custom-user-block-picture2">
                                            <div className="user-block-status">
                                            <img className="img-thumbnail rounded-circle" src="img/user/02.jpg" alt="Avatar" />
                                            <div className="pic-edit">
                                                <label for="up">
                                                    <img className="" src="img/edit-image.png" alt="Avatar" />
                                                </label>
                                            </div>
                                            <input type="file" id="up"style="display: none" />
                                    
                                        
                                    </div>

                                </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                            <div className="content-part-wrapper">
                            <h2 className="mid-heading">PROFILE</h2>
                            <div className="content-part-wrapper profile-content-part-wrapper">
                            <div className="form-container2">
                            <div className="frm-wrapper text-left frm-wrapper-profile">
                        <label>FIRST NAME</label>
                        <input type="text" placeholder="Damon" />
                        
                        <label>LAST NAME</label>
                        <input type="text" placeholder="Luke" />
                        
                        <label>MOBILE NO. (USER ID)</label>
                        <input type="text" placeholder="945938475983 34589" />
                        
                        <label>Email</label>
                        <input type="text" placeholder="Damon@gmail.com" />

                        <label>real estate license #</label>
                        <input type="text" placeholder="#123446" />

                        <label>real estate lic issuing state</label>
                        <select name="" className="custom-select2">
                        <option value="">UT</option>
                            <option value="">fsdfsdf</option>
                            <option value="">fsdfsdf</option>
                        
                        </select>

                        <h4 className="profile-frm-mid-heading">BROKERAGE DETAILS</h4>
                        <label>BROKERAGE</label>
                        <select name="" className="custom-select2">
                        <option value="">Keller Williams</option>
                            <option value="">fsdfsdf</option>
                            <option value="">fsdfsdf</option>
                        
                        </select>
                        <label>Street</label>
                        <input type="text" placeholder="Kolkata" />
                        <label>City</label>
                        <input type="text" placeholder="Kolkata" />
                        <div className="row">
                            <div className="col-lg-6">
                                <label>BROKERAGE</label>
                        <select name="" className="custom-select2">
                        <option value="">Keller Williams</option>
                            <option value="">fsdfsdf</option>
                            <option value="">fsdfsdf</option>
                        
                        </select>
                            </div>
                            <div className="col-lg-6">
                                <label>LAST NAME</label>
                        <input type="text" placeholder="Luke" />
                            </div>
                        </div>
                        
                <button>SAVE</button>     
                    
                    
                    
                    </div>
                            </div>
                            </div>
                        
                            </div>
                        </div>
                  
                            <div className="col-lg-3">

                        


                    </div>
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

