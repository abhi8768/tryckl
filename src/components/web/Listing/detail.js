import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import {ToastsStore} from 'react-toasts';
import Modal from "react-responsive-modal";
import moment from 'moment';
import { withScriptjs, withGoogleMap,GoogleMap, Marker  } from 'react-google-maps';
import  Card  from "../Listing/AppCard";
/* import Stripe from 'stripe'; */


import { encrypt , decrypt , getParams } from "../../../helpers/CryptoJs";
import { requestDetaillisting, listinginLocalStorage, checkListingStatusForCancel, nopayCancellisting, withpayCancellisting, paymentmethodListing } from "../../../actions/web/listingAction";
import $$ from 'jquery';
import  MyCardPreview  from "./mycardpreview";

const customStyles = {
  width: '556px',
  position: 'relative'
};

const paymentIntentData = {
  // You might send a list of items the customer is purchasing so that you can compute
  // the price on the server.
  items: [{ id: "photo-subscription" }],
  currency: "usd"
};

class ListingDetail extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      listingid   : (this.props.match.params != undefined) ? decrypt(this.props.match.params.id) : null,
      detail      : {},
      modal       : false,
      saved_payment_method : '',
      saved_card_details   : {}
    }
    this.validURL      = this.validURL.bind(this);
    this.gotoProfile   = this.gotoProfile.bind(this);
    this.checkcancelStatus = this.checkcancelStatus.bind(this);
    this.onOpen        = this.onOpen.bind(this);
    this.onClose       = this.onClose.bind(this);
    this.paymentIntemt = this.paymentIntemt.bind(this);
    this.paymentforcancellation = this.paymentforcancellation.bind(this);
  }

  componentDidMount(){ 
    this.props.requestDetaillisting({listing_id:this.state.listingid});
    this.props.paymentmethodListing();
  }

  checkcancelStatus(){
    //this.onOpen();
    this.props.checkListingStatusForCancel({listing_id:this.state.listingid});
  }

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){ 
     //console.log('cancel',nextProps.nopaycancel,this.props.nopaycancel);
     //console.log('paymentmethod',nextProps.paymentmethod.list);
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
    }else if(nextProps.cancelStatus  != this.props.cancelStatus){

      let cancelRes    = nextProps.cancelStatus.response;
      let cancelMsg    = nextProps.cancelStatus.status_msg;
      let cancelStatus = nextProps.cancelStatus.status;

     
     if(cancelStatus == true){
       
        if(cancelRes.payment_status == 'No'){
          this.props.nopayCancellisting({listing_id:this.state.listingid});
        }else if(cancelRes.payment_status == 'Yes'){
          this.onOpen();
        }else{
          // do nothing
        }
      }else{
        ToastsStore.error(cancelMsg);
      }
      
    }else if(nextProps.nopaycancel   != this.props.nopaycancel){
      //console.log(420);
      this.props.history.push(`/my-listing`);
      ToastsStore.success('Cancel Card Successfully');
      //location.reload();
      setTimeout(function(){ location.reload(); }, 2000);
    }else if(nextProps.withpaycancel != this.props.withpaycancel){
      document.getElementById("paymentform").reset();
      this.onClose();
      document.getElementById("cancel-listing").style.visibility = "hidden";
      ToastsStore.success('Listing cancelled successfully');
    }else if(nextProps.paymentmethod != this.props.paymentmethod){
      if(nextProps.paymentmethod.list.length > 0){
        this.setState({
          saved_payment_method : nextProps.paymentmethod.list[0].id,
          saved_card_details   : nextProps.paymentmethod.list[0].card
        })
      } 
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

  onClose(){
    this.setState({
      modal    : false
    })
  }
  onOpen(){
    this.setState({
      modal    : true
    },function(){
      this.paymentIntemt();
    })
  }
  paymentforcancellation(cvvnumber,cardnumber,expirymonth,expiryyear){
    this.props.withpayCancellisting(
      { account        : this.state.detail.card_owner_payment_onboard_acc_id,
        payment_method : this.state.saved_payment_method,
        card_number    : cardnumber,
        exp_month      : expirymonth,
        exp_year       : expiryyear,
        cvv            : cvvnumber,
        listing_id     : this.state.listingid,
        amount         : this.state.detail.offer_amount,
      //stripe_res:stripeRes
     }
    );
  }

  paymentIntemt(){
      paymentIntentData.account    = this.state.detail.card_owner_payment_onboard_acc_id;//"acct_1I9op8Qfo3fkSpab" 
      paymentIntentData.listing_id = this.state.listingid;
      paymentIntentData.amount     = this.state.detail.offer_amount;
       
      /*http://localhost:3000/api/v1/*/
      fetch(`${apiURLPrefix}/payment/payment_intent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(paymentIntentData)
        }).then(function(result) {
         return result.json();
        }).then(function(data) {
          let paymentIntentClientSecret = data.clientSecret;
          localStorage.setItem('paymentIntentClientSecret',paymentIntentClientSecret);
          
        });

      
  }

  render() {
   
    let detail   = this.state.detail || {};
    let mls      = detail.mls_details || [];
    let keyword  = this.state.detail.keyword || [];
    //console.log('A',detail.accepted_by_name);
    let letterImage = ((detail.accepted_by_name != "") && (detail.accepted_by_name !== undefined) && (detail.accepted_by_name !== null)) ? detail.accepted_by_name.charAt(0) : "";
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
             <h2 className="mid-heading">LISTing Details</h2>
             <div className="content-part-wrapper profile-content-part-wrapper list-pre">
          <div className="content-part-wrapper dark-part position-relative">
            <p className="ohters-color">Card Number</p>
            <p className="ohters-color2">{detail.card_no}</p>
            
          </div>     
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
       ((detail.listing_status == "ACCEPTED") || (detail.listing_status == "COMPLETED")) ? 
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
      {
       (detail.listing_status == "ACCEPTED") ? 
        <button className="sv-btn" id="cancel-listing" onClick={this.checkcancelStatus}>Cancel Listing</button>
        : null
     }
       </div>
               </div>   
               </div>  
             </div>
          <div className="col-lg-3">
            
         </div>

          <Modal open={this.state.modal} onClose={this.onClose} showCloseIcon={true} center>
            
         
            <div className="modal-header2">
            </div>
            <div className="modal-body" style={customStyles}>
              <Card forCancellation = {this.paymentforcancellation} 
                    savedPaymentmethod = {this.state.saved_payment_method} 
                    savedCarddetails = {this.state.saved_card_details} 
              />
            </div>
           
          </Modal>
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
        cancelStatus        : state.listingcancelstatus.statuslistingcancel,
        nopaycancel         : state.cacellistingwithoutpay.nopaycancellisting,  
        withpaycancel       : state.cacellistingwithpay.withpaycancellisting,
        paymentmethod       : state.paymentmethodlist.paymentmethodlist
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
        requestDetaillisting  : bindActionCreators(requestDetaillisting , dispatch),
        listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch),
        checkListingStatusForCancel : bindActionCreators(checkListingStatusForCancel , dispatch),
        nopayCancellisting    : bindActionCreators(nopayCancellisting , dispatch),
        withpayCancellisting  : bindActionCreators(withpayCancellisting , dispatch),
        paymentmethodListing  : bindActionCreators(paymentmethodListing , dispatch)
  }       
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail));

