import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import {ToastsStore} from 'react-toasts';
import moment from 'moment';

import { fetchMasterData } from "../../../actions/web/masterAction";
import { currentActiveView, listinginLocalStorage } from "../../../actions/web/listingAction";
import $$ from 'jquery';
import MAP from './map_autocomplete';
import Datepicker from './datepicker';
import Timepicker from './timepicker';
import MyCardPreview from './mycardpreview';
import CustomizedSwitches from "./switch";


class ListingCreate extends Component {
  constructor(props) {
    super(props);
   
    if(sessionStorage.getItem('createlisting')){
      let storage_createlisting = JSON.parse(sessionStorage.getItem('createlisting'));
      this.state = {
        keyword              : storage_createlisting.keyword,
        mls                  : storage_createlisting.mls,
        mlsdetail            : storage_createlisting.mlsdetail,
        type                 : storage_createlisting.type, 
        access_type          : storage_createlisting.access_type,
        instruction          : storage_createlisting.instruction,
        client_name          : storage_createlisting.client_name,
        client_number        : storage_createlisting.client_number,
        offer_amount         : storage_createlisting.offer_amount,
        full_address         : storage_createlisting.full_address,
        lat                  : storage_createlisting.lat,
        lng                  : storage_createlisting.lng,
        city                 : storage_createlisting.city,
        zipcode              : storage_createlisting.zipcode,
        date_backend         : storage_createlisting.date_backend,
        date_display         : storage_createlisting.date_display,
        time_backend         : storage_createlisting.time_backend,
        time_display         : storage_createlisting.time_display,
        switch_is_hidden     : storage_createlisting.switch_is_hidden,
        readonly_offeramount : storage_createlisting.readonly_offeramount, 
        switch_value         : storage_createlisting.switch_value
      }
    }else{
     
      this.state = {
        keyword        : [],
        currentview    : 'mylisting',
        mls            : [],
        mlsdetail      : [{mls_id : '', mls_text : '', mls_link : ''}],
        type           : '', 
        access_type    : '',
        instruction    : '',
        client_name    : '',
        client_number  : '',
        offer_amount   : '',
        full_address   : '',
        lat            : '',
        lng            : '',
        city           : '',
        zipcode        : '',
        center         : null,
        date_backend   : moment(new Date()).format('MM/DD/YYYY'),
        date_display   : new Date(),
        time_backend         : moment(new Date().getTime()).format("HH:mm:ss"),
        time_display         : new Date().getTime(),
        switch_is_hidden     : true,
        readonly_offeramount : false,
        switch_value         : false 
      }
    }
    
    this.handleDelete  = this.handleDelete.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    this.handleEnter   = this.handleEnter.bind(this);
    this.addRow        = this.addRow.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.setDate       = this.setDate.bind(this);
    this.setTime       = this.setTime.bind(this);
    this.setAddress    = this.setAddress.bind(this);
    this.handleMls     = this.handleMls.bind(this);
    this.changeSwitch  = this.changeSwitch.bind(this);
  }
 
  componentDidMount(){ 
   
    let param = {
      type               : 'MLS',
      search_param       : null,
      logged_in_brokerid : this.props.currentUserDetails.brokers_id
    }
    this.props.fetchMasterData(param);
  }
  
  

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    this.setState({
      mls : nextProps.listmls
    })
  }
  
  handleDelete(index){
    let key = this.state.keyword;
      key.splice(index, 1);
      this.setState({
        keyword: key
      });
         
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if((e.target.name == 'type') && (e.target.value == 'Open House')){
      this.setState({
        switch_is_hidden: false,
        offer_amount    : 0,
        readonly_offeramount : true
      });
    }else if((e.target.name == 'type') && (e.target.value != 'Open House')){
      this.setState({
        switch_is_hidden: true,
        offer_amount    : '',
        readonly_offeramount : false
      });
    }
  }
  changeSwitch(curVal){
    if(curVal == true){
      this.setState({
        offer_amount    : '',
        readonly_offeramount : false,
        switch_value : true
      });
    }else{
      this.setState({
        offer_amount    : 0,
        readonly_offeramount : true,
        switch_value : false
      });
    }
  }
  setDate(value){
    this.setState({
      date_backend : moment(value).format('MM/DD/YYYY'),
      date_display : value
    })
  }
  setTime(value){
    var dt = moment(value, ["h:mm A"]).format("HH:mm:ss");
    //console.log(this.state.time_display,value);
    this.setState({
      time_backend : dt,
      time_display : value
    })
  }
  setAddress(value){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+value.label+"&key=AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          full_address : result.results[0].formatted_address,
         })
        this.setState({
          lat          : result.results[0].geometry.location.lat,
        })
        this.setState({
          lng          : result.results[0].geometry.location.lng,
         })
        this.setState({
           city         : result.results[0].address_components[3].long_name,
         })
        this.setState({
          zipcode      : result.results[0].address_components[7].long_name,
         
        })
        this.setState({
          center      : {
            lat       :  (Math.floor(result.results[0].geometry.location.lat)).toFixed(2),
            lng       :  (Math.floor(result.results[0].geometry.location.lng)).toFixed(2)
          }
         
        })
      },
      (error) => {
        console.log(error)
      }
    )
    
  }
  handleSubmit(e){
    e.preventDefault(); 
    
    if($$("#date-picker-inline-helper-text").html() != undefined){
      ToastsStore.error('Dateformat is not ok');
    }else if(this.state.type == ''){
      ToastsStore.error('Type is mandatory');
    }else if(this.state.mlsdetail[0].mls_id == ''){
      ToastsStore.error('MLS is mandatory');
    }else if(this.state.access_type == ''){
      ToastsStore.error('Access Type is mandatory');
    }else if(this.state.mlsdetail[0].mls_id == ''){
      ToastsStore.error('MLS is mandatory');
    }else if((this.state.offer_amount < 10 ) && (this.state.switch_is_hidden == true)){
      ToastsStore.error('Amount cannot be less than 10');
    }else if((this.state.offer_amount < 10 ) && (this.state.switch_is_hidden == false)  && (this.state.switch_value == true)){
      ToastsStore.error('Amount cannot be less than 10');
    }else{
       sessionStorage.setItem('createlisting', JSON.stringify(this.state));
       this.props.listinginLocalStorage('previewlisting');
       this.props.history.push(`preview-listing`);
    }
   
   
  }
  handleEnter(e){
      var keywords = this.state.keyword;
      if(e.key === "Enter"){
          e.preventDefault(); // Ensure it is only this code that runs
          
          if(e.target.value != ''){
              keywords.push(e.target.value);
              this.setState({
                  [e.target.name]: keywords,
              });
              $$("#keyword").val("");
          }
      }
  }
  addRow(){
   let rows = this.state.mlsdetail;
   if(this.state.mlsdetail.length < 5){
      rows.push({mls_id : '', mls_text : '', mls_link : ''});
      this.setState({
        mlsdetail : rows
      })
   }else{
     ToastsStore.error('Maximum option exit');
   }
     
  }
  handleMls(type,indexx){
    /* console.log(vall,indexx);
    console.log($$(`#selectmls_${indexx}`).val()); */
    let rows = this.state.mlsdetail;
    if(type == 'select'){
        let mlsid    = $$(`#selectmls_${indexx}`).val();
        let mlstext  = $$(`#selectmls_${indexx} option:selected`).text();
        rows[indexx] = {mls_id : mlsid, mls_text : mlstext, mls_link : rows[indexx].mls_link}
    }else{
        let mlslink = $$(`#linkmls_${indexx}`).val();
        rows[indexx] = {mls_id : rows[indexx].mls_id, mls_text : rows[indexx].mls_text, mls_link : mlslink}
    }
    this.setState({
      mlsdetail : rows
    });
  }

  render() {
     
    return (
        <div className="row">
            <MyCardPreview />
            <div className="col-lg-6">
                <div className="content-part-wrapper profile-content-part-wrapper">
                  <div className="content-part-wrapper">
                    <h2 className="mid-heading">Listing</h2>
                    <div className="content-part-wrapper profile-content-part-wrapper">
                     <div className="form-container2">
                       <div className="frm-wrapper text-left frm-wrapper-profile">
                         <form onSubmit={this.handleSubmit}>
                            <label>Type</label>
                            <select name="type" id="type" value={this.state.type} className="custom-select2" onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="Showing">Showing</option>
                                <option value="Open House">Open House</option>
                                <option value="Contractor Assistance">Contractor Assistance</option>
                                <option value="Appraisal/Inspection">Appraisal/Inspection</option>
                                <option value="Closing/Signing">Closing/Signing</option>
                                <option value="Other">Other</option>
                            </select>

                            <label>Keyword (optional)</label>
                            <input type="text" name="keyword" id="keyword" placeholder="e.g. Bristlecone Drive" onKeyDown={this.handleEnter}/>
                            <div className="sec-chip">
                                { (this.state.keyword).map((sinsle_keyword,index) => {
                                    return (
                                        <Chip label={sinsle_keyword} className="chips" onDelete={()=>this.handleDelete(index)} key={index}/>
                                    )
                                  })
                                }
                            </div>
                            <label>PROPERTY ADDRESS</label>
                            <div>
                              <MAP setAddress={this.setAddress} /> 
                            </div>
                            <label>Select MLS (If multiple in your state)</label>
                            {
                              (this.state.mlsdetail).map((mlssingle,indexx)=>{
                                return(
                                  <div className="row" key={indexx}>
                                    <div className="col-lg-6"> 
                                        <select name="mlsid" id={`selectmls_${indexx}`} className="custom-select2" onChange={()=>this.handleMls('select',indexx)} value={mlssingle.mls_id}>
                                            <option value="">Select</option>
                                            { 
                                              (this.state.mls).map((item,index) => {
                                                return(
                                                  <option value={item.id} key={index}>{item.name}</option>
                                                )
                                              })
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="mlslink" id={`linkmls_${indexx}`} placeholder="Enter MLS Link" onChange={()=>this.handleMls('link',indexx)} value={mlssingle.mls_link}/>
                                    </div>
                                  </div>
                                )

                              })
                            }
                            
                            <div className="add-mls"><a onClick={this.addRow}>MLS +</a></div>
                            <label>Date</label>
                            <Datepicker setDate={this.setDate}  defaultVal={moment().format('DD/MM/YYYY')}/>

                            <label>Time</label>
                            <Timepicker setTime={this.setTime}/>
                           {/*  <input type="text" placeholder="hr : min" /> */}

                            <label>Access type</label>
                            <select name="access_type" id="access_type" value={this.state.access_type} className="custom-select2" onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="Electronic">Electronic </option>
                                <option value="Mechanical">Mechanical </option>
                                <option value="Other">Other</option>
                            </select>

                            <label>Instructions for agent</label>
                            <input name="instruction" id="instruction" value={this.state.instruction} type="text" placeholder="Enter Instructions" onChange={this.handleChange}/>

                            <label>Client Name (optional)</label>
                            <input name="client_name" id="client_name" value={this.state.client_name} type="text" placeholder="Enter client name" onChange={this.handleChange}/>

                            <label>Client number (optional)</label>
                            <input name="client_number" id="client_number" pattern="^[0-9]*$" value={this.state.client_number} type="text" placeholder="Enter Client number"  onChange={this.handleChange}/>
                            
                            <label>Offer Amount</label>
                            {
                              (this.state.switch_is_hidden == false) ? 
                              <div style={{float:'right', height : '10px'}} className="switch-button"><CustomizedSwitches changeSwitch={this.changeSwitch} switch_value={this.state.switch_value}/></div> 
                              : null
                            }
                            
                            <input name="offer_amount" id="offer_amount"  pattern="[0-9]+"  maxlength= "8" value={this.state.offer_amount} type="text"  onInput={this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} placeholder="$  Enter amount" onChange={this.handleChange} readOnly={this.state.readonly_offeramount}/>
                            <button type="submit">PREVIEW</button> 
                            </form>    
                         </div>
                        </div>
                       </div>     
                    </div>
                </div>
                <div className="col-lg-3">
                </div>
            </div>
        </div>
      
	 );
  }
}

const mapStateToProps = state => {
 	return {
    changeview          : state.profileactiveview.activeview,
    currentUserDetails  : state.login.user,
    listmls             : state.mastermls.mastermls,
    storage             : state.listingstorage.listingstorage
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
    fetchMasterData       : bindActionCreators(fetchMasterData , dispatch),
    currentActiveView     : bindActionCreators(currentActiveView , dispatch),
    listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch),
	}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreate));

