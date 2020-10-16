import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import { getprofileDetails, changeView } from "../../../actions/web/brokerAction";


class ProfileDetail extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		details            : {},
		myGrouplist        : [],
		joinedGrouplist	   : []
    }
    this.gotoEdit = this.gotoEdit.bind(this);

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
    gotoEdit(){
        this.props.changeView('edit');
    }
  
 

   render() {
        
    return (
		
        <div className="col-lg-6">
            <div className="content-part-wrapper">
                <h2 className="mid-heading">{this.state.details.first_name} {this.state.details.last_name}
                <span className="edit-user">
                    <a href={void(0)} onClick={this.gotoEdit}><em className="fa-2x mr-2 fas fa-edit"></em> </a>
                </span>
                </h2>
                <div className="content-part-wrapper profile-content-part-wrapper">
                    <div className="user-address custom-profile2-address">
                        <p>{this.state.details.brokerage_name}</p>
                        <p>{this.state.details.brokerage_office_name}</p>
                        <p>{this.state.details.street_name}</p>
                        <p>{this.state.details.city}, {this.state.details.state_code} {this.state.details.zipcode}</p>
                        <p><a href="">{this.state.details.phone}</a></p>
                        <p><a href="">{this.state.details.email}</a></p>
                        <p>{this.state.details.state_code} {this.state.details.license_no}</p>
                    </div>
                </div>
        
            </div>
            <h4 className="white-mid-heading">Groups</h4>
                <div className="content-part-wrapper">
                    <h2 className="mid-heading-other">Joined</h2>
                   {/*  <div className="add-part">
                        <a href=""><img src="assets/img/color-plus.png" /> New Invitation</a>
                    </div> */}
                    <ul className="profile2-list">
                        {
                           (this.state.joinedGrouplist).map((joined,index) => {
                                let letterImage = joined.group_name.charAt(0);
                                return (
                                    <li key={`joined_${index}`}>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-10">
                                            <div className="item user-block  d-flex align-items-center">
                                        
                                        <div className="user-block-picture">
                                            <div className="user-block-status">
                                                
                                                {   (joined.group_photo != '') ?
                                                        <img className="rounded-circle" src={joined.group_photo} alt="Avatar" style={{width : '60px', height : "60px"}} />
                                                        : <div className="small-profile-alpha">{letterImage}</div>
                                                }
                                                
                                            </div>
                                        </div>
                                        <div className="profile2-list-txt">{joined.group_name}</div>
                                        
                                        </div>
                                            </div>
                                            <div className="col-lg-2 text-right">
                                           {/*  <div className="profile2-list-txt-del"><a href=""><em className="fa-2x mr-2 far fa-trash-alt"></em></a></div> */}
                                            </div>

                                        </div>
                                    </li>
                    
                                )
                            })
                        }
                    </ul>
                </div>
            <div className="content-part-wrapper">
                <h2 className="mid-heading-other">My Group</h2>
                {/* <div className="add-part">
                    <a href=""><img src="assets/img/white-plus.png" /> Create New Group</a>
                </div> */}
                    <ul className="profile2-list">
                        {
                            (this.state.myGrouplist).map((my,index) => {
                                let letterImage = my.group_name.charAt(0);
                                return (
                                        <li key={`joined_${index}`}>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-10">
                                            <div className="item user-block  d-flex align-items-center">
                                        
                                                <div className="user-block-picture">
                                                    <div className="user-block-status">
                                                        {   (my.group_photo != '') ?
                                                            <img className="rounded-circle" src={my.group_photo} alt="Avatar" style={{width : '60px', height : "60px"}} />
                                                            : <div className="small-profile-alpha">{letterImage}</div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="profile2-list-txt">{my.group_name} </div>
                                        
                                            </div>
                                            </div>
                                            <div className="col-lg-2 text-right">
                                      {/*       <div className="profile2-list-txt-del"><a href=""><em className="fa-2x mr-2 far fa-trash-alt"></em></a></div> */}
                                            </div>

                                            </div>
                                        </li>
                                )
                            })
                        }
                    </ul>
        
        
            </div>
        </div>
    
	 );
  }
}

const mapStateToProps = state => {
    return {
      profiledetail  : state.brokerdetail.profiledetail,
      changeview     : state.profileactiveview.activeview,
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
        getprofileDetails : bindActionCreators(getprofileDetails , dispatch),
        changeView        : bindActionCreators(changeView , dispatch),
	}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail);

