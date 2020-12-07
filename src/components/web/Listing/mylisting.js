import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsStore} from 'react-toasts';

import {encrypt} from "../../../helpers/CryptoJs";
import { requestMylisting, listinginLocalStorage } from "../../../actions/web/listingAction";
import $$ from 'jquery';



class MyListing extends Component {
  constructor(props) {
    super(props);
      this.state = {
        myListing    : [],
        opendropdown : ""
      }
      this.openDropdown     = this.openDropdown.bind(this);
      this.requestmylisting = this.requestmylisting.bind(this);
      this.linktocreate     = this.linktocreate.bind(this);
      this.gotoDetail       = this.gotoDetail.bind(this);
      this.gotoProfile      = this.gotoProfile.bind(this);
    }
 
 
  componentDidMount(){ 
    this.requestmylisting("");
  }
  requestmylisting(type){
    this.props.requestMylisting({flag : type} );
  }
  linktocreate(){
    this.props.listinginLocalStorage('createlisting');
    this.props.history.push(`create-listing`);
  }
  
  UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    console.log(nextProps.mylisting.list);
    this.setState({
        myListing    : nextProps.mylisting.list,
        opendropdown : ""
    })
  }

  openDropdown(){
    this.setState({
        opendropdown : (this.state.opendropdown == "") ? "show" : ""
    })
  }
  gotoDetail(listing_id){
    this.props.listinginLocalStorage('detaillisting');
    this.props.history.push(`detail-listing/${encrypt(listing_id)}`);
  }
  gotoProfile(brokers_id){
    this.props.history.push(`profile/${encrypt(brokers_id)}`);
  }

  render() {
     
    return (
        <div className="row">
            <div className="col-lg-3">
                  <div className="content-part-wrapper text-center">
                        <div className="item user-block user-part no-pad">
                            <div className="user-block-picture custom-user-block-picture2">
                              <h2 className="mid-heading">Create New<br/>LISTING</h2>
                              <div className="user-block-status d-flex align-items-center other-color" onClick={this.linktocreate}>
                                <div className="alpha"><img className="" src="/assets/img/plush-icon.png" /></div>
                              </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className="col-lg-6">
                <div className="content-part-wrapper">
              
                    <h2 className="mid-heading">LISTing

                        <div className="dropdown show custom-drop">
                            <a className="btn btn-secondary dropdown-toggle" href={void(0)} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.openDropdown}>
                                <img className="" src="/assets/img/drop-icon.png" /> Open
                            </a>

                            <div className={`dropdown-menu ${this.state.opendropdown}`} aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href={void(0)} onClick={()=>this.requestmylisting("")}>Open</a>
                                <a className="dropdown-item" href={void(0)} onClick={()=>this.requestmylisting("Complete")}>Complete</a>
                                
                            </div>
                        </div>
                    </h2>
                </div>
                {
                    this.state.myListing.length > 0 ? 
                      (this.state.myListing).map((item,index) => {
                        let letterImage = item.accepted_by_name.charAt(0);
                        return(
                            <div className="content-part-wrapper profile-content-part-wrapper list-pre" key={`row${index}`} onClick={()=>this.gotoDetail(item.listing_id)}>
                            <div className="content-part-wrapper dark-part position-relative mylist-adjust">
        
                                <div className="row">
                                    <div className="col-sm-8">
                                        <p className="ohters-color">Type-<span className="ohters-color2"> {item.type}</span></p>
                            
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <h2 className="card-amount">$ {item.offer_amount}</h2>
                                        {
                                            (item.due_day != '') ?
                                            <p className="ohters-color3">Due in {item.due_day} days</p>
                                            : <p className="ohters-color3">Due day over</p>
                                        }
                                        
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-sm-8">
                                      <div className="item user-block  d-flex align-items-center">
                                  
                                   <div className="">
                                      <div className="user-block-status">
                                          <img className="rounded-circle" src="/assets/img/calender-icon.png" alt="Avatar" width="40" height="40" />
                                        
                                      </div>
                                   </div>
                                 <div className="profile2-list-txt ohters-color2">{item.date}</div>
                                  
                                </div>
                                    </div>
                                   
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-sm-8">
                                      <div className="item user-block  d-flex align-items-center">
                                   
                                   <div className="">
                                      <div className="user-block-status">
                                        
                                                <img className="rounded-circle" src="/assets/img/time-icon.png" alt="Avatar" style={{width : '40px', height : "40px"}}  />
                                               
                                      </div>
                                   </div>
                                 <div className="profile2-list-txt ohters-color2">{item.time}</div>
                                  
                                </div>
                                    </div>
                                   
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-sm-8">
                                        {
                                            (item.accepted_by != '') ?
                                            <div className="item user-block  d-flex align-items-center">
                                  
                                                <div className="">
                                                    <div className="user-block-status">
                                                        {    (item.accepted_by_profile_photo != '') ?
                                                                <img className="rounded-circle" src={item.accepted_by_profile_photo} alt="Avatar" style={{width : '40px', height : "40px"}} />
                                                            :   <div className="small-profile-alpha text-center">{letterImage}</div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="profile2-list-txt ohters-color2">Accepted by:<br/>
                                                    <p className="ohters-color4" onClick={()=>gotoProfile(item.accepted_by)}>{item.accepted_by_name}</p>
                                                </div>
                                            </div>
                                            : null
                                        }
                                        
                                       </div>
                                       {
                                            (item.listing_status == 'OVERDUE') ?
                                                <div className="col-sm-4 text-right">
                                                        <img src="/assets/img/error.png" className="text-right" />
                                                </div>
                                            : null
                                       }
                                </div>
        
                            </div>
                        </div>
             
                        )
                      })
                    : 
                    <div> No record Found </div> 
                }
                </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        mylisting   : state.mylisting.mylisting,
    }
}
 
const mapDispatchToProps = dispatch => {
   return {
    requestMylisting   : bindActionCreators(requestMylisting , dispatch),
    listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch)
   }
}

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(MyListing));
