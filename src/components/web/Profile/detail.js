import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import { getprofileDetails } from "../../../actions/web/brokerAction";


class ProfileDetail extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		details            : {},
		myGrouplist        : [],
		joinedGrouplist	   : []
	}

  }
 
    componentDidMount(){
         
		this.props.getprofileDetails();
	}

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
		this.setState({
			details         : nextProps.profiledetail,
			myGrouplist	    : nextProps.profiledetail.my_group_list,
			joinedGrouplist	: nextProps.profiledetail.joined_group_list,
		})
	}
  
 

   render() {
        
    return (
		
        <div className="col-lg-6">
            <div className="content-part-wrapper">
                <h2 className="mid-heading">{this.state.details.first_name} {this.state.details.last_name}</h2>
                <div className="content-part-wrapper profile-content-part-wrapper">
                    <div className="user-address custom-profile2-address">
                        <p>Keller Williams</p>
                        <p>Keller Williams Westfield</p>
                        <p>841 North 900 West</p>
                        <p>Orem, UT 84057</p>
                        <p><a href="">801-555-3300</a></p>
                        <p><a href="">email@bestrealtor.com</a></p>
                        <p>UT Lic. #1234567</p>
                    </div>
                </div>
        
            </div>
            <h4 className="white-mid-heading">Groups</h4>
                <div className="content-part-wrapper">
                    <h2 className="mid-heading-other">Joined</h2>
                    <div className="add-part">
                        <a href=""><img src="assets/img/color-plus.png" /> New Invitation</a>
                    </div>
                    <ul className="profile2-list">
            <li>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-10">
                    <div className="item user-block  d-flex align-items-center">
                
                <div className="user-block-picture">
                    <div className="user-block-status">
                        <div className="small-profile-alpha">B</div>
                    </div>
                </div>
                <div className="profile2-list-txt">Ashley Jensen & Assoc.</div>
                
                </div>
                    </div>
                    <div className="col-lg-2 text-right">
                    <div className="profile2-list-txt-del"><a href=""><em className="fa-2x mr-2 far fa-trash-alt"></em></a></div>
                    </div>

</div>
                </li>
            <li>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-10">
                    <div className="item user-block  d-flex align-items-center">
                
                <div className="user-block-picture">
                    <div className="user-block-status">
                        <img className="rounded-circle" src="img/user/02.jpg" alt="Avatar" width="60" height="60" />
                        
                    </div>
                </div>
                <div className="profile2-list-txt">Ashley Jensen & Assoc.</div>
                
                </div>
                    </div>
                    <div className="col-lg-2 text-right">
                    <div className="profile2-list-txt-del"><a href=""><em className="fa-2x mr-2 far fa-trash-alt"></em></a></div>
                    </div>

</div>
                </li>
            </ul>
                </div>
            <div className="content-part-wrapper">
                <h2 className="mid-heading-other">My Group</h2>
                <div className="add-part">
                    <a href=""><img src="assets/img/white-plus.png" /> New Invitation</a>
                </div>
                    <ul className="profile2-list">
                        <li>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-10">
                                    <div className="item user-block  d-flex align-items-center">
                                
                                        <div className="user-block-picture">
                                            <div className="user-block-status">
                                                <img className="rounded-circle" src="assets/img/user/02.jpg" alt="Avatar" width="60" height="60" />
                                                
                                            </div>
                                        </div>
                                        <div className="profile2-list-txt">Ashley Jensen & Assoc.</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-right">
                                    <div className="profile2-list-txt-del"><a href=""><em className="fa-2x mr-2 far fa-trash-alt"></em></a></div>
                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-10">
                                <div className="item user-block  d-flex align-items-center">
                            
                            <div className="user-block-picture">
                                <div className="user-block-status">
                                    <img className="rounded-circle" src="assets/img/user/02.jpg" alt="Avatar" width="60" height="60" />
                                    
                                </div>
                            </div>
                            <div className="profile2-list-txt">Ashley Jensen & Assoc.</div>
                            
                            </div>
                                </div>
                                <div className="col-lg-2 text-right">
                                <div className="profile2-list-txt-del"><a href=""><em className="fa-2x mr-2 far fa-trash-alt"></em></a></div>
                                </div>

            </div>
                            </li>
                    </ul>
        
        
            </div>
        </div>
    
	 );
  }
}

const mapStateToProps = state => {
    console.log(state);
	return {
      profiledetail  : state.brokerdetail.profiledetail,
	 
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		getprofileDetails : bindActionCreators(getprofileDetails , dispatch),
	  
	}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail);

