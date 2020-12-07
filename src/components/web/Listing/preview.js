import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import {ToastsStore} from 'react-toasts';
import moment from 'moment';
import GoogleMapReact from 'google-map-react';
import Modal from "react-responsive-modal";

import { saveMylisting, listinginLocalStorage } from "../../../actions/web/listingAction";
import $$ from 'jquery';
import  MyCardPreview  from "./mycardpreview";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ListingPreview extends Component {
  
  constructor(props) {
    super(props);

    let storage_createlisting = JSON.parse(sessionStorage.getItem('createlisting'));
   
    this.state = {
      keyword        : storage_createlisting.keyword,
      mls            : storage_createlisting.mls,
      mlsdetail      : storage_createlisting.mlsdetail,
      type           : storage_createlisting.type, 
      access_type    : storage_createlisting.access_type,
      instruction    : storage_createlisting.instruction,
      client_name    : storage_createlisting.client_name,
      client_number  : storage_createlisting.client_number,
      offer_amount   : storage_createlisting.offer_amount,
      full_address   : storage_createlisting.full_address,
      lat            : storage_createlisting.lat,
      lng            : storage_createlisting.lng,
      city           : storage_createlisting.city,
      zipcode        : storage_createlisting.zipcode,
      date_backend   : storage_createlisting.date_backend,
      date_display   : storage_createlisting.date_display,
      time_backend   : storage_createlisting.time_backend,
      time_display   : storage_createlisting.time_display,
      zoom           : 11,
      center         : {
        lat          :  50.00,
        lng          :  70.00
      },
      open           : false
    }
    this.createlisting = this.createlisting.bind(this);
    this.backtocreate  = this.backtocreate.bind(this);
    this.onOpenModal   = this.onOpenModal.bind(this);
    this.onCloseModal  = this.onCloseModal.bind(this);
   
  }
 
  componentDidMount(){ 
    
  }


	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){ 
     if(nextProps.newlist){
        sessionStorage.removeItem("createlisting");
       // this.onOpenModal();
       /*  ToastsStore.success('Listing created successfully');
        this.props.listinginLocalStorage('mylisting');
        this.props.history.push(`my-listing`); */
     }
  }
  
  createlisting(){
    this.props.saveMylisting(this.state);
  }
  backtocreate(){
    this.props.listinginLocalStorage('createlisting');
  }
  onOpenModal() {
    this.setState({open: true});
  };

  onCloseModal() {
    
    this.setState({ open         : false});
  };

  render() {
    
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
              <p className="ohters-color2">{this.state.type}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Keyword</p>
            {/*   <p className="ohters-color2">Showing</p> */}
                { (this.state.keyword).map((sinsle_keyword,index) => {
                      return (
                          <Chip key={`chip${index}`} label={sinsle_keyword} className="chips" onDelete={this.handleDelete} key={index}/>
                      )
                  })
                                
                }
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Property Address</p>
              <p className="ohters-color2">{this.state.full_address}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative custom-height">
              <p className="ohters-color">Map VIEW</p>
             
              {/* <img src="img/map.png" className="img-fluid position-absulute mt-3" /> */}
                {
                  (this.state.lat != '') ? 
                  <div style={{ height: '100%', width: '100%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to' }}
                      defaultCenter={this.state.center}
                      defaultZoom={this.state.zoom}
                    >
                      <AnyReactComponent
                        lat={this.state.lat}
                        lng={this.state.lng}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                  : null
                }
                
            </div>

              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">MLS</p>
               { (this.state.mlsdetail).map((sinsle_mls,index) => {
                      return (
                        <p key={`mls${index}`} className="ohters-color2 mt-3">{sinsle_mls.mls_text} 
                        <span className="float-right"> <a target="_blank" href={sinsle_mls.mls_link}><img src="/assets/img/www-img.png" /></a></span></p>
                       
                      )
                  })
                                
                }
             
              {/* <p className="ohters-color2 mt-3">Sample MLS 2 <span className="float-right"> <img src="img/www-img.png" /></span></p>
               <div className="clearfix"></div>
              <p className="ohters-color2  mt-3">Sample MLS 3 <span className="float-right"> <img src="img/www-img.png" /></span></p> */}
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Date</p>
            <p className="ohters-color2">{moment(this.state.date_backend).format("dddd / MMMM Do YYYY")}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Time</p>
              <p className="ohters-color2">{moment(this.state.time_backend, "HH:mm").format("h:mm a")}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Access Type</p>
              <p className="ohters-color2">{this.state.access_type}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Instruction for Agent</p>
              <p className="ohters-color2">{this.state.instruction}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Client Name</p>
              <p className="ohters-color2">{this.state.client_name}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Client Number</p>
              <p className="ohters-color2">{this.state.client_number}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Offer Amount</p>
              <p className="ohters-color2">$ {this.state.offer_amount}</p>
             
            </div>
            <button className="sv-btn" onClick={this.createlisting}>SUBMIT</button>
            <button className="sv-btn" onClick={this.backtocreate}>BACK</button>
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
    newlist             : state.listingcreate.savelisting
       
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
    saveMylisting         : bindActionCreators(saveMylisting , dispatch),
    listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch),
	}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPreview));

