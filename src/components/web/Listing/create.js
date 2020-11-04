import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import {ToastsStore} from 'react-toasts';

import { fetchMasterData } from "../../../actions/web/masterAction";
import { currentActiveView } from "../../../actions/web/listingAction";
import $$ from 'jquery';
import MAP from './map_autocomplete';
import Datepicker from './datepicker';
import Timepicker from './timepicker';
import MyCardPreview from './mycardpreview';


class ListingCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword        : [],
      currentview    : 'mylisting',
      mls            : [],
      mlsdetail      : [{mlsid : '', mlslink : ''}]
    }
    this.updatePicture = this.updatePicture.bind(this);
    this.handleDelete  = this.handleDelete.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    this.handleEnter   = this.handleEnter.bind(this);
    this.addRow        = this.addRow.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }
 
  componentDidMount(){ 
    $$("#menu_profile").addClass('active');
    let param = {
      type               : 'MLS',
      search_param       : null,
      logged_in_brokerid : this.props.currentUserDetails.brokers_id
    }
    this.props.fetchMasterData(param);
  }
  
  updatePicture(e){
   // this.props.updateprofilePicture({ image : e.target.files[0] });
  }

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    this.setState({
      mls : nextProps.listmls
    })
  }
  
  handleDelete(){

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e){
    e.preventDefault(); 
    this.props.currentActiveView('previewlisting');
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
      rows.push({mlsid : '', mlslink : ''});
      this.setState({
        mlsdetail : rows
      })
   }else{
     ToastsStore.error('Maximum option exit');
   }
     
  }

  render() {
     
    return (
        <div className="row">
            <MyCardPreview />
            <div className="col-lg-6">
                <div className="content-part-wrapper profile-content-part-wrapper">
                  <div className="content-part-wrapper">
                    <h2 className="mid-heading">LISTing</h2>
                    <div className="content-part-wrapper profile-content-part-wrapper">
                     <div className="form-container2">
                       <div className="frm-wrapper text-left frm-wrapper-profile">
                         <form onSubmit={this.handleSubmit}>
                            <label>Type</label>
                            <select name="" className="custom-select2">
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
                                            <Chip label={sinsle_keyword} className="chips" onDelete={this.handleDelete} key={index}/>
                                        )
                                   })
                                
                                }
                            </div>
                            <label>PROPERTY ADDRESS</label>
                            <div>
                              <MAP /> 
                            </div>
                            <label>Select MLS (If multiple in your state)</label>
                            {
                              (this.state.mlsdetail).map((mlssingle,indexx)=>{
                                return(
                                  <div className="row" key={indexx}>
                                    <div className="col-lg-6"> 
                                        <select name="" className="custom-select2">
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
                                        <input type="text" placeholder="Enter MLS Link" />
                                    </div>
                                  </div>
                                )

                              })
                            }
                            
                            <div className="add-mls"><a onClick={this.addRow}>MLS +</a></div>
                            <label>Date</label>
                            <Datepicker />

                            <label>Time</label>
                            <Timepicker />
                           {/*  <input type="text" placeholder="hr : min" /> */}

                            <label>Access type</label>
                            <select name="" className="custom-select2">
                                <option value="">Select</option>
                                <option value="Electronic">Electronic (See notes)</option>
                                <option value="Mechanical">Mechanical (See notes)</option>
                                <option value="Other">Other</option>
                            </select>

                            <label>Instructions for agent</label>
                            <input type="text" placeholder="Enter Instructions" />

                            <label>Client Name (optional)</label>
                            <input type="text" placeholder="Enter client name" />

                            <label>Client number (optional)</label>
                            <input type="password" placeholder="**********" />
                            
                            <label>Offer Amount</label>
                            <input type="text" placeholder="$  Enter amount" />
                            <button type="submit">SAVE</button> 
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
    listmls             : state.mastermls.mastermls
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
    fetchMasterData : bindActionCreators(fetchMasterData , dispatch),
    currentActiveView : bindActionCreators(currentActiveView , dispatch),
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreate);

