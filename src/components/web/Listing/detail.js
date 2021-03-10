import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import {ToastsStore} from 'react-toasts';
import moment from 'moment';
import { withScriptjs, withGoogleMap,GoogleMap, Marker  } from 'react-google-maps';

import { encrypt , decrypt , getParams } from "../../../helpers/CryptoJs";
import { requestDetaillisting, listinginLocalStorage } from "../../../actions/web/listingAction";
import $$ from 'jquery';
import  MyCardPreview  from "./mycardpreview";



class ListingDetail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      listingid   : (this.props.match.params != undefined) ? decrypt(this.props.match.params.id) : null,
      detail      : {}
    }
    this.validURL     = this.validURL.bind(this);
    this.gotoProfile  = this.gotoProfile.bind(this);
   
  }
 
  componentDidMount(){ 
    this.props.requestDetaillisting({listing_id:this.state.listingid});
  }


	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){ 
     if(nextProps.detail){
       this.setState({
          detail : nextProps.detail
       })
     }

    if((nextProps.nowchangeview.includes('detaillisting') == true) && (nextProps.nowchangeview != this.props.nowchangeview)){
      let id = (nextProps.nowchangeview.substr(14, nextProps.nowchangeview.length - 14));
      this.setState({
        listingid : id 
      }, function(){
        this.props.requestDetaillisting({listing_id:this.state.listingid});
      }) 
    }
  }
  
  
  validURL(str) {
    if(str.includes("http://") || str.includes("https://")){
      return str;
    }else {
      return `https://${str}`;
    }
  }
  gotoProfile(brokers_id){
    this.props.history.push(`/profile/${encrypt(brokers_id)}`);
  }

  render() {
   
    let detail   = this.state.detail || {};
    let mls      = detail.mls_details || [];
    let keyword  = this.state.detail.keyword || [];
    console.log('A',detail.accepted_by_name);
    let letterImage = ((detail.accepted_by_name != "") &&  (detail.accepted_by_name !== undefined)) ? detail.accepted_by_name.charAt(0) : "";
    let MapWithAMarker;
   
    if(detail.property_latitude !== undefined){
     MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: Number(detail.property_latitude), lng: Number(detail.property_longitude) }}
      >
        <Marker
          position={{ lat: Number(detail.property_latitude), lng: Number(detail.property_longitude) }}
        />
      </GoogleMap>
    ));
    }
    
    return (
        <div className="row">
             <MyCardPreview />
             <div className="col-lg-6">
                <div className="content-part-wrapper profile-content-part-wrapper">
                  <div className="content-part-wrapper">
                    <h2 className="mid-heading">LISTing</h2>
                    <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Type</p>
              <p className="ohters-color2">{detail.type}</p>
             
            </div>
            {
              (keyword.length > 0) ?  
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Keyword</p>
              
                    { (keyword).map((sinsle_keyword,index) => {
                          return (
                              <Chip key={`chip${index}`} label={sinsle_keyword} className="chips" onDelete={this.handleDelete} key={index}/>
                          )
                      })
                                    
                    } 
                
                </div> 
              : null
            }
              
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Property Address</p>
              <p className="ohters-color2">{detail.property_address}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative custom-height">
              <p className="ohters-color">Map VIEW</p>
             
              {/* <img src="img/map.png" className="img-fluid position-absulute mt-3" /> */}
                {
                  (detail.property_latitude !== undefined) ? 
                  <MapWithAMarker 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                  : null
                }
                
            </div>

              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">MLS</p>
               { (mls).map((sinsle_mls,index) => {
                    let rs = this.validURL(sinsle_mls.mls_link);
                      return (
                        <p key={`mls${index}`} className="ohters-color2 mt-3">{sinsle_mls.mls_name} 
                        <span className="float-right"> <a target="_blank" href={rs}><img src="/assets/img/www-img.png" /></a></span></p>
                       
                      )
                  })
                                
                } 
             
             
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Date</p>
            <p className="ohters-color2">{detail.listing_date}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Time</p>
              <p className="ohters-color2">{detail.listing_time}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Access Type</p>
              <p className="ohters-color2">{detail.access_type}</p>
             
            </div>
            {
              (detail.agent_instruction != "") ? 
              <div className="content-part-wrapper dark-part position-relative">
                <p className="ohters-color">Instruction for Agent</p>
                <p className="ohters-color2">{detail.agent_instruction}</p>
              </div> : null
            }

            {
              (detail.client_name != "") ? 
              <div className="content-part-wrapper dark-part position-relative">
                <p className="ohters-color">Client Name</p>
                <p className="ohters-color2">{detail.client_name}</p>
              
              </div> : null
            }
            {
              (detail.client_number != "") ? 
              <div className="content-part-wrapper dark-part position-relative">
                <p className="ohters-color">Client Number</p>
                <p className="ohters-color2">{detail.client_number}</p>
              
              </div> : null
            }
              
              
              
            <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Offer Amount</p>
              <p className="ohters-color2">$ {detail.offer_amount}</p>
             
            </div>
            {
              ((detail.listing_status == "ACCEPTED") && (detail.listing_status == "COMPLETED")) ? 
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Accepted by</p>
                  <div className="item user-block  d-flex align-items-center">
                                  
                    <div className="">
                        <div className="user-block-status">
                            {    (detail.accepted_by_profile_photo != '') ?
                                    <img className="rounded-circle" src={detail.accepted_by_profile_photo} alt="Avatar" style={{width : '40px', height : "40px"}} />
                                :   <div className="small-profile-alpha text-center">{letterImage}</div>
                            }
                        </div>
                    </div>
                    <div className="profile2-list-txt ohters-color2">
                        <p className="ohters-color2" onClick={()=>this.gotoProfile(detail.card_owner_id)}>{detail.accepted_by_name}</p>
                    </div>
                  </div>
                </div>
                : null
            }
         
              </div>
                      </div>   
                      </div>  
                    </div>
                 <div className="col-lg-3">
                </div>
            </div>
        
      
	 );
  }
}

const mapStateToProps = state => {
  return {
        changeview          : state.profileactiveview.activeview,
        currentUserDetails  : state.login.user,
        detail              : state.listingdetail.detaillisting,
        nowchangeview       : state.listingactiveview.activelistingview,
       
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
        requestDetaillisting  : bindActionCreators(requestDetaillisting , dispatch),
        listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch),
	}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail));

